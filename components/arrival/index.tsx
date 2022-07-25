import { FC } from "react";
import { Container, Button } from "react-bootstrap";
import styles from "./arrival.module.css";

type Props = {};

const ArrivalSection: FC = (props: Props) => {
  return (
    <section className={`${styles.arrival}`}>
      <Container>
        <div className="row justify-content-between pt-3">
          <img
            src="images/arrival-bg.png"
            alt="Arrival Section Image"
            className="d-none d-lg-block col-lg-4"
          />
          <div className="col-lg-6 my-auto text-center text-lg-start">
            <h2 className="fs-1 fw-bolder">#NewArrivals</h2>
            <p className="my-4">
              Vitae fugiat laboriosam officia perferendis provident aliquid
              voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic?
              Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique
              ex unde!
            </p>
            <Button variant="danger" className="px-5 py-2 mb-4">
              Shop Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ArrivalSection;
