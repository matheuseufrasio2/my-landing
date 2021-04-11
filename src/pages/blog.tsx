import { GetStaticProps } from 'next';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Prismic from 'prismic-javascript';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { RiCalendarLine, RiUserLine } from 'react-icons/ri';
import SEO from '../components/SEO';
import { client } from '../lib/prismic';
import { Container, PostList, PostInfo } from '../../styles/pages/Blog';
import SideBar from '../components/SideBar';
import NavBar from '../components/Navbar';
import { HeaderContext } from '../contexts/HeaderContext';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string | null;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Blog({ postsPagination }: HomeProps) {
  const { isOpen, toggle } = useContext(HeaderContext);
  const [nextPage, setNextPage] = useState(postsPagination.next_page);
  const [posts, setPosts] = useState(() => {
    const postsWithDateFormatted: Post[] = postsPagination.results.map(post => {
      return {
        uid: post.uid,
        first_publication_date: format(
          new Date(post.first_publication_date),
          'dd MMM yyyy',
          {
            locale: ptBR,
          },
        ),
        data: post.data,
      };
    });

    return postsWithDateFormatted;
  });

  async function handleShowMorePosts(): Promise<void> {
    const response = await fetch(nextPage)
      .then(res => res.json())
      .then(result => {
        const newPosts: Post[] = result.results.map(post => {
          return {
            uid: post.uid,
            first_publication_date: format(
              new Date(post.first_publication_date),
              'dd MMM yyyy',
              {
                locale: ptBR,
              },
            ),
            data: {
              title: post.title.text,
            },
          };
        });
        const postsWithDateFormatted: Post[] = newPosts.map(post => {
          return {
            uid: post.uid,
            first_publication_date: post.first_publication_date.replace(
              'abr',
              'Abr',
            ),
            data: post.data,
          };
        });

        const { next_page } = result;

        const postPagination: PostPagination = {
          next_page,
          results: postsWithDateFormatted,
        };
        return postPagination;
      });

    if (response) {
      setPosts([...posts, ...response.results]);
      setNextPage(response.next_page);
    }
  }

  return (
    <Container>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <SEO title="Blog" description="Blog do meu site" />
      <PostList>
        {posts.map(post => (
          <Link key={post.uid} href={`/posts/${post.uid}`}>
            <a>
              <h1>{post.data.title}</h1>
              <p>{post.data.subtitle}</p>
              <PostInfo>
                <li>
                  <RiCalendarLine />
                  <p>{post.first_publication_date}</p>
                </li>
                <li>
                  <RiUserLine />
                  <p>{post.data.author}</p>
                </li>
              </PostInfo>
            </a>
          </Link>
        ))}
      </PostList>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await client().query(
    [Prismic.Predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.subtitle', 'post.author_name', 'post.slug'],
      pageSize: 2,
    },
  );

  const results = posts.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: post.first_publication_date,
      data: {
        title: post.data.title[0].text,
        subtitle: post.data.subtitle,
        author: post.data.author_name,
      },
    };
  });

  const { next_page } = posts;
  const postsPagination = {
    results,
    next_page,
  };

  return {
    props: {
      postsPagination,
    },
    revalidate: 1,
  };
};
