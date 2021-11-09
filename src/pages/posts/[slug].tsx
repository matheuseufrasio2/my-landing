/* eslint-disable react/no-danger */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { RiCalendarLine, RiTimeLine, RiUserLine } from 'react-icons/ri';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Prismic from 'prismic-javascript';
import { useRouter } from 'next/dist/client/router';
import { RichText } from 'prismic-dom';
import { client } from '../../lib/prismic';
import SEO from '../../components/SEO';
import SideBar from '../../components/SideBar';
import NavBar from '../../components/Navbar';
import { HeaderContext } from '../../contexts/HeaderContext';
import {
  Container,
  PostContainer,
  PostTop,
  PostInfo,
  ArticlePost,
} from '../../styles/pages/Post';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const { isOpen, toggle } = useContext(HeaderContext);
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Carregando...</h1>;
  }

  const formattedDate = format(
    new Date(post.first_publication_date),
    'dd MMM yyyy',
    {
      locale: ptBR,
    },
  );

  const totalWords = post.data.content.reduce((total, contentItem) => {
    total += contentItem.heading.split(' ').length;
    const words = contentItem.body.map(item => item.text.split(' ').length);
    words.map(word => (total += word));
    return total;
  }, 0);

  const readTime = Math.ceil(totalWords / 200);

  return (
    <Container>
      <SEO title={post.data.title} description={post.data.title} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      {/* {JSON.stringify(post)} */}
      <img src={post.data.banner.url} alt="imagem" />
      <PostContainer>
        <PostTop>
          <h1>{post.data.title}</h1>
          <PostInfo>
            <li>
              <RiCalendarLine />
              <p>{formattedDate}</p>
            </li>

            <li>
              <RiUserLine />
              <p>{post.data.author}</p>
            </li>

            <li>
              <RiTimeLine />
              <p>{`${readTime} min`}</p>
            </li>
          </PostInfo>
        </PostTop>
        {post.data.content.map(content => (
          <ArticlePost key={content.heading}>
            <h2>{content.heading}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: RichText.asHtml(content.body),
              }}
            />
          </ArticlePost>
        ))}
      </PostContainer>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await client().query(
    Prismic.Predicates.at('document.type', 'post'),
  );

  const paths = posts.results.map(post => {
    return {
      params: {
        slug: post.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const response = await client().getByUID('post', String(slug), {});

  const post = {
    uid: response.uid,
    first_publication_date: response.first_publication_date,
    data: {
      title: response.data.title[0].text,
      subtitle: response.data.subtitle,
      banner: {
        url: response.data.banner.url,
      },
      author: response.data.author_name,
      content: response.data.content.map(content => {
        return {
          heading: content.heading,
          body: [...content.body1],
        };
      }),
    },
  };

  return {
    props: {
      post,
    },
  };
};
