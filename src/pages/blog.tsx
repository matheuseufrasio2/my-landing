import Link from 'next/link';
import React from 'react';
import { Title } from '../../styles/pages/Home';
import SEO from '../components/SEO';

export default function Blog() {
  return (
    <div>
      <SEO title="Blog" description="Blog do meu site" />
      <Title>Blog do Matheus</Title>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </div>
  );
}
