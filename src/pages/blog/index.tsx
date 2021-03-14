import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';
import PrismicDOM from 'prismic-dom';
import { format, parseISO } from 'date-fns';
import ptBrasil from 'date-fns/locale/pt-BR';
import SEO from '../../components/SEO';
import { client } from '../../lib/prismic';
import { Container, ListOfPosts, Title } from '../../../styles/pages/Blog';

interface BlogProps {
  postList: Document[];
}

export default function Blog({ postList }: BlogProps) {
  return (
    <Container>
      <SEO title="Blog" description="Blog do meu site" />
      <Title>Blog | Matheus Eufrásio</Title>
      {/* <ListOfPosts>
        {posts.map(post => {
          return (
            <li key={post.id}>
              <h2>{PrismicDOM.RichText.asText(post.data.title)}</h2>
              <p>
                Tags:
                {post.tags.map(tag => {
                  return <span>{tag.toLowerCase()}</span>;
                })}
              </p>
              <p>
                Publicação:
                {format(
                  parseISO(post.first_publication_date),
                  " dd 'de' MMMM', às ' HH:mm'h'",
                  { locale: pt },
                )}
              </p>
            </li>
          );
        })}
      </ListOfPosts> */}
      <p>{JSON.stringify(postList)}</p>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await client().query([
    Prismic.Predicates.at('document.type', 'post'),
  ]);

  posts.results.map(post => {
    console.log(post.first_publication_date);
    const dateFormatted = format(
      parseISO(post.first_publication_date),
      "dd 'de' MMMM', às ' HH:mm'h'",
      { locale: ptBrasil },
    );

    console.log(dateFormatted);

    post.first_publication_date = dateFormatted;
    return post;
  });
  const postList = posts.results;
  return {
    props: {
      postList,
    },
    revalidate: 5,
  };
};

// export const getServerSideProps: GetServerSideProps<BlogProps> = async () => {
//   const posts = await client().query([
//     Prismic.Predicates.at('document.type', 'post'),
//   ]);

//   return {
//     props: {
//       posts: posts.results,
//     },
//   };
// };
