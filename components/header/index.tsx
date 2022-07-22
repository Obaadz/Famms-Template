import { useEffect, useRef } from "react";
import type { ComponentType } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateHeight } from "../../redux/slice/headerSlice";
import Logo from "../Logo";
import PagesDropDown from "./PagesDropDown";
import ShopInfo from "./ShopInfo";
import styles from "./header.module.css";

const Header: ComponentType = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const dispatch = useDispatch();
  // TODO: change the location of variable
  // const height = useSelector((state: RootState) => state.header.height);

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
