import React from 'react';
import Link from 'next/link';
import { Container, Title } from '../../styles/pages/Home';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <Container>
      <SEO title="Home" description="Página Inicial" />
      <Title>Matheus Eufrásio | Web Developer</Title>
      <Link href="/blog">
        <a>Ir para Blog</a>
      </Link>
    </Container>
  );
}
