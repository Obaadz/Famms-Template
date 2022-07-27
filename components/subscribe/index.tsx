import { FC } from "react";
import { Form } from "react-bootstrap";
import CustomButton from "../CustomButton";
import styles from "./subscribe.module.css";

const SubscribeSection: FC = () => {
  return (
    <section className={` py-5 px-2 d-flex flex-column ${styles.subscribe}`}>
      <div className="col-sm-12 col-md-6 mx-auto text-center">
        <h5 className="fs-2 fw-bold">Subscribe To Get Discount Offers</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <Form>
          <Form.Group className="my-4" controlId="formBasicEmail">
            <Form.Control
              className="py-2"
              type="email"
              placeholder="Enter Your Email"
            />
          </Form.Group>
          <CustomButton className="px-5 text-uppercase">
            <span className="px-5">Subscribe</span>
          </CustomButton>
        </Form>
      </div>
    </section>
  );
};

export default SubscribeSection;
