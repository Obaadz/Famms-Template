import { FC, useEffect, useRef } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateHeight } from "../../redux/slice/headerSlice";
import Logo from "../Logo";
import PagesDropDown from "./PagesDropDown";
import ShopInfo from "./ShopInfo";
import styles from "./header.module.css";
import NavLink from "./NavLink";

const Header: FC = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const headerHeight = getHeaderHeight();

    dispatch(updateHeight(headerHeight));
  }, []);

  function getHeaderHeight(): number {
    const clientHeight: number | undefined = headerRef?.current?.clientHeight;

    return clientHeight ? clientHeight : 0;
  }

  return (
    <header ref={headerRef} className={styles.header}>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Logo widthInPx="250" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-uppercase gap-3">
              <NavLink pagePath="/">Home</NavLink>
              <PagesDropDown />
              <NavLink pagePath="/products">Products</NavLink>
              <NavLink pagePath="/blog">Blog</NavLink>
              <NavLink pagePath="/contact">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
          <ShopInfo />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
