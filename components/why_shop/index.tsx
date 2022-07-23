import { FC } from "react";
import { Container, Card, CardGroup } from "react-bootstrap";
import { FaTruck } from "react-icons/fa";
import { TbFreeRights, TbMedal } from "react-icons/tb";
import SectionHeading from "../SectionHeading";
import styles from "./why_shop.module.css";
const WhyShopSection: FC = () => {
  return (
    <section>
      <Container className="my-5">
        <SectionHeading>Why Shop With Us</SectionHeading>
        <CardGroup className="gap-3">
          <Card text="light" className={`${styles.card} text-center p-4`}>
            <Card.Body>
              <FaTruck fontSize="3rem" />
              <Card.Title className="fs-4 fw-bold my-3">
                Fast Delivery
              </Card.Title>
              <Card.Text>
                variations of passages of Lorem Ipsum available
              </Card.Text>
            </Card.Body>
          </Card>
          <Card text="light" className={`${styles.card} text-center p-3`}>
            <Card.Body>
              <TbFreeRights fontSize="3rem" />
              <Card.Title className="fs-4 fw-bold my-3">
                Free Shiping
              </Card.Title>
              <Card.Text>
                variations of passages of Lorem Ipsum available
              </Card.Text>
            </Card.Body>
          </Card>
          <Card text="light" className={`${styles.card} text-center p-3`}>
            <Card.Body>
              <TbMedal fontSize="3rem" />
              <Card.Title className="fs-4 fw-bold my-3">
                Best Quality
              </Card.Title>
              <Card.Text>
                variations of passages of Lorem Ipsum available
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </section>
  );
};

export default WhyShopSection;
