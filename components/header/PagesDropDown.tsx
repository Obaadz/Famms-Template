import { NavDropdown } from "react-bootstrap";

type Props = {};

const PagesDropDown = (props: Props) => {
  return (
    <NavDropdown title="Pages" id="basic-nav-dropdown">
      <NavDropdown.Item className="text-capitalize" href="#action/3.1">
        About
      </NavDropdown.Item>
      <NavDropdown.Item className="text-capitalize" href="#action/3.2">
        Testimonial
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default PagesDropDown;
