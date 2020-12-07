import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';
import PrismicDOM from 'prismic-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { Title } from '../../styles/pages/Home';
import SEO from '../components/SEO';
import { client } from '../lib/prismic';
import { Container, ListOfPosts } from '../../styles/pages/Blog';

interface BlogProps {
  posts: Document[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <Container>
      <SEO title="Blog" description="Blog do meu site" />
      <Title>Blog do Matheus</Title>
      <ListOfPosts>
        {posts.map(post => {
          return (
            <li key={post.data.title}>
              <h2>{PrismicDOM.RichText.asText(post.data.title)}</h2>
              <p>
                Tags:
                {post.tags.map(tag => {
                  return <span>{tag.toLowerCase()}</span>;
                })}
              </p>
              <p>
                Data de Publicação:
                {format(
                  parseISO(post.first_publication_date),
                  "' Dia' dd 'de' MMMM', às ' HH:mm'h'",
                  { locale: pt },
                )}
              </p>
            </li>
          );
        })}
      </ListOfPosts>
      {/* <p>{JSON.stringify(posts)}</p> */}
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps<BlogProps> = async () => {
  const posts = await client().query([
    Prismic.Predicates.at('document.type', 'post'),
  ]);

  return {
    props: {
      posts: posts.results,
    },
  };
};
