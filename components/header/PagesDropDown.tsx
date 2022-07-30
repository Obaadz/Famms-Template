import Link from "next/link";
import { FC } from "react";
import { NavDropdown } from "react-bootstrap";

const PagesDropDown: FC = () => {
  return (
    <NavDropdown title="Pages" id="basic-nav-dropdown">
      <Link href="/about">
        <NavDropdown.Item className="text-capitalize" href="/about">
          About
        </NavDropdown.Item>
      </Link>
      <Link href="/testimonial">
        <NavDropdown.Item className="text-capitalize" href="/testimonial">
          Testimonial
        </NavDropdown.Item>
      </Link>
    </NavDropdown>
  );
};

export default PagesDropDown;
