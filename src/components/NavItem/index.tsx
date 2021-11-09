import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "./styles";

interface NavItemProps {
  title: string;
  path: string;
}

export function NavItem({ title, path }: NavItemProps) {
  const [isActiveLink, setIsActiveLink] = useState(false);

  const { asPath } = useRouter();

  useEffect(() => {
    if (asPath === path) setIsActiveLink(true)
  }, []);
  return (
    <Container $isActive={isActiveLink}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </Container>
  )
}
