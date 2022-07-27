import { FC } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { AccountData, MenuData } from "./navData";
import styles from "./footer.module.css";
import CustomButton from "../CustomButton";

type Props = {
  background: "light" | "dark";
};

const Footer: FC<Props> = ({ background }) => {
  return (
    <footer className={`${styles[background]}`}>
      <Container className="py-5">
        <div className="row gap-3 justify-content-md-between">
          <Contact dark={background == "dark" ? true : false} />
          <Navbar navData={MenuData} />
          <Navbar navData={AccountData} />
          <div className="col-lg-3 col-md-5">
            <h3 className="fw-bold fs-5 mb-4">Newsletter</h3>
            <p>Subscribe by our newsletter and get update protidin.</p>
            <InputGroup>
              <Form.Control
                placeholder="Enter Your Mail"
                aria-label="Enter Your Mail"
                aria-describedby="basic-addon2"
              />
              <CustomButton>Subscribe</CustomButton>
            </InputGroup>
          </div>
        </div>
      </Container>
      <div className={`${styles.copyrights} d-flex`}>
        <p className="my-4 mx-auto text-center">
          © 2021 All Rights Reserved By <span>Free Html Templates </span>
          <br />
          Distributed By <span>ThemeWagon</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
