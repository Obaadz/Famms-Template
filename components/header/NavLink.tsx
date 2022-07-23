import { FC, ReactNode } from "react";
import Link from "next/link";
import { Nav } from "react-bootstrap";

type Props = {
  pagePath: string;
  children: ReactNode;
};

const NavLink: FC<Props> = ({ pagePath, children }) => {
  return (
    <Link href={pagePath}>
      <Nav.Link href={pagePath}>{children}</Nav.Link>
    </Link>
  );
};

export default NavLink;
