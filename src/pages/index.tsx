/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext, useState } from 'react';
import Link from 'next/link';
import { Container, Title } from '../styles/pages/Home';
import SEO from '../components/SEO';
import Loader from '../components/Loader';
import NavBar from '../components/Navbar';
import SideBar from '../components/SideBar';
import { HeaderContext } from '../contexts/HeaderContext';

export default function Home() {
  const { isOpen, toggle } = useContext(HeaderContext);
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <SEO title="Home" description="Página Inicial" />
      <Title>Matheus Eufrásio | Web Developer</Title>
      <Link href="/blog">
        <a
          onClick={() => {
            setLoading(true);
          }}
        >
          {loading ? <Loader /> : 'Ir para Blog'}
        </a>
      </Link>

    </Container>
  );
}
