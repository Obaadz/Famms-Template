import { FC } from "react";
import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CustomButton from "../CustomButton";
import styles from "./arrival.module.css";

const ArrivalSection: FC = () => {
  return (
    <section className={`${styles.arrival}`}>
      <Container>
        <div className="row justify-content-between pt-3">
          <LazyLoadImage
            src="images/arrival-bg.webp"
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
            <CustomButton className="px-5 py-2 mb-4">Shop Now</CustomButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ArrivalSection;
