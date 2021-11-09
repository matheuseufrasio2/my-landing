import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavItem } from '../NavItem';
import {
  NavContainer,
  ContentNavBar,
  MobileIcon,
  NavMenu,
} from './styles';

interface NavBarProps {
  toggle: () => void;
}

export default function NavBar({ toggle }: NavBarProps) {
  const { asPath } = useRouter();
  console.log(asPath);

  return (
    <NavContainer>
      <ContentNavBar>
        <Link href="/">
          <a>matheus</a>
        </Link>

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavItem title="Página Inicial" path="/" />
          <NavItem title="Portifólio" path="/portfolio" />
          <NavItem title="Blog" path="/blog" />
          <NavItem title="Contato" path="/contato" />
        </NavMenu>
      </ContentNavBar>
    </NavContainer>
  );
}
