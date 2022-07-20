import styles from "./header.module.css";
import type { ComponentType } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../Logo";
import PagesDropDown from "./PagesDropDown";
import ShopInfo from "./ShopInfo";

const Header: ComponentType = () => {
  return (
    <header className={styles.header}>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Logo widthInPx="250" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-uppercase gap-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <PagesDropDown />
              <Nav.Link href="#link">Products</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <ShopInfo />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
