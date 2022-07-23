import Link from "next/link";
import { FC } from "react";
import { NavDropdown } from "react-bootstrap";

const PagesDropDown: FC = () => {
  return (
    <NavDropdown title="Pages" id="basic-nav-dropdown">
      <NavDropdown.Item className="text-capitalize" href="#action/3.1">
        About
      </NavDropdown.Item>
      <Link href="/testimonial">
        <NavDropdown.Item className="text-capitalize" href="/testimonial">
          Testimonial
        </NavDropdown.Item>
      </Link>
    </NavDropdown>
  );
};

export default PagesDropDown;
