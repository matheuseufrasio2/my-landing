import Link from 'next/link';
import React from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarMenu,
  SideBarWrapper,
} from './styles';

interface SideBarProps {
  toggle: () => void;
  isOpen: boolean;
}

export default function SideBar({ toggle, isOpen }: SideBarProps) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <Link href="/portfolio" passHref>
            <a href="/portfolio" onClick={toggle}>
              Portfólio
            </a>
          </Link>
          <Link href="/blog" passHref>
            <a href="/blog" onClick={toggle}>
              Blog
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a href="/contact" onClick={toggle}>
              Contato
            </a>
          </Link>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
}
