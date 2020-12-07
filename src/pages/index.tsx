import React from 'react';
import Link from 'next/link';
import { Title } from '../../styles/pages/Home';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div>
      <SEO title="Home" description="Página Inicial" />
      <Title>Bem vindo ao meu site</Title>
      <Link href="/blog">
        <a>Ir para Blog</a>
      </Link>
    </div>
  );
}
