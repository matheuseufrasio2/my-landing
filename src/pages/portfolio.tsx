import React, { useContext } from 'react';
import NavBar from '../components/Navbar';
import SEO from '../components/SEO';
import SideBar from '../components/SideBar';
import { HeaderContext } from '../contexts/HeaderContext';

export default function Portfolio() {
  const { isOpen, toggle } = useContext(HeaderContext);

  return (
    <div>
      <SEO title="Portfólio" description="Página de Contato" />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <h1>Portfolio</h1>
    </div>
  );
}
