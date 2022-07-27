import { FC } from "react";
import { Carousel, Container } from "react-bootstrap";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import SectionHeading from "../SectionHeading";
import styles from "./customer_testimonial.module.css";

const CustomerTestimonialSection: FC = () => {
  const NextIcon = (
    <FaLongArrowAltRight
      aria-hidden="true"
      className={`fs-2 ${styles.icon} ${styles.next}`}
    />
  );
  const PrevIcon = (
    <FaLongArrowAltLeft
      aria-hidden="true"
      className={`fs-2 ${styles.icon} ${styles.prev}`}
    />
  );

  return (
    <section className={`${styles.testimonial} pb-5`}>
      <Container>
        <SectionHeading>Customer&apos;s Testimonial</SectionHeading>
        <Carousel
          variant="dark"
          indicators={false}
          nextIcon={NextIcon}
          prevIcon={PrevIcon}
        >
          <Carousel.Item className={`${styles.item}`}>
            <img
              className={`d-block rounded-circle mx-auto ${styles.img}`}
              src="/images/client.webp"
              height={160}
              width={160}
              alt="First slide"
            />
            <Carousel.Caption
              className={`${styles.caption} col-lg-8 mt-3 mx-auto`}
            >
              <h3 className="fs-4">Obada Ali</h3>
              <p>
                Dignissimos reprehenderit repellendus nobis error quibusdam?
                Atque animi sint unde quis reprehenderit, et, perspiciatis.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={`${styles.item}`}>
            <img
              className={`d-block rounded-circle mx-auto ${styles.img}`}
              src="/images/client.webp"
              height={160}
              width={160}
              alt="First slide"
            />
            <Carousel.Caption
              className={`${styles.caption} col-lg-8 mt-3 mx-auto`}
            >
              <h3 className="fs-4">Obada Ali</h3>
              <p>
                Dignissimos reprehenderit repellendus nobis error quibusdam?
                Atque animi sint unde quis reprehenderit, et, perspiciatis.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={`${styles.item}`}>
            <img
              className={`d-block rounded-circle mx-auto ${styles.img}`}
              src="/images/client.webp"
              height={160}
              width={160}
              alt="First slide"
            />
            <Carousel.Caption
              className={`${styles.caption} col-lg-8 mt-3 mx-auto`}
            >
              <h3 className="fs-4">Obada Ali</h3>
              <p>
                Dignissimos reprehenderit repellendus nobis error quibusdam?
                Atque animi sint unde quis reprehenderit, et, perspiciatis.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default CustomerTestimonialSection;
