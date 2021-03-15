import React, { useContext } from 'react';
import NavBar from '../components/Navbar';
import SideBar from '../components/SideBar';
import { HeaderContext } from '../contexts/HeaderContext';

export default function Contact() {
  const { isOpen, toggle } = useContext(HeaderContext);

  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <h1>Contact</h1>
    </div>
  );
}
