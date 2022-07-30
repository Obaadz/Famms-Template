import { Container, Form } from "react-bootstrap";
import CustomButton from "../CustomButton";

const ContactUsSection = () => {
  return (
    <section className="py-5">
      <Container>
        <Form className="col-sm-10 col-md-8 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              className="py-2"
              type="text"
              placeholder="Enter Your Full Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address: </Form.Label>
            <Form.Control
              className="py-2"
              type="email"
              placeholder="Enter Your Email Address"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSubject">
            <Form.Label>Subject: </Form.Label>
            <Form.Control
              className="py-2"
              type="text"
              placeholder="Enter Subject"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSubject">
            <Form.Label>Message: </Form.Label>
            <Form.Control
              className="py-2"
              type="text"
              placeholder="Enter Your Message"
              as="textarea"
              rows={4}
            />
          </Form.Group>
          <CustomButton className="px-5 py-2">Submit</CustomButton>
        </Form>
      </Container>
    </section>
  );
};

export default ContactUsSection;
