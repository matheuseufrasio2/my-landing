import Link from 'next/link';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  NavContainer,
  ContentNavBar,
  MobileIcon,
  NavMenu,
  NavItem,
} from './styles';

interface NavBarProps {
  toggle: () => void;
}

export default function NavBar({ toggle }: NavBarProps) {
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
          <NavItem>
            <Link href="/portfolio">
              <a>Portfólio</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/contact">
              <a>Contato</a>
            </Link>
          </NavItem>
        </NavMenu>
      </ContentNavBar>
    </NavContainer>
  );
}
