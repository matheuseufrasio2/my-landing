/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { Container, Title } from '../../styles/pages/Home';
import SEO from '../components/SEO';
import Loader from '../components/Loader';

export default function Home() {
  const [loadind, setLoading] = useState(false);

  return (
    <Container>
      <SEO title="Home" description="Página Inicial" />
      <Title>Matheus Eufrásio | Web Developer</Title>
      <Link href="/blog">
        <a
          onClick={() => {
            setLoading(true);
          }}
        >
          {loadind ? <Loader /> : 'Ir para Blog'}
        </a>
      </Link>
    </Container>
  );
}
