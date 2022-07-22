import React, { FC } from "react";
import { Container, Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import carouselItemsData from "./carouselItemsData";
import CarouselItem from "./CarouselItem";
import styles from "./landing.module.css";

// Default slider time for each item in milliseconds
const SLIDER_TIME = 3000;

const LandingSection: FC = () => {
  const height = useSelector((state: RootState) => state.header.height);

  function renderCarouselItems() {
    const allItems = carouselItemsData.map((item) => (
      <Carousel.Item key={item.id} interval={SLIDER_TIME}>
        <CarouselItem data={item} />
      </Carousel.Item>
    ));

    return allItems;
  }

  return (
    <section
      className={`pt-5 pb-2 ${styles.landing}`}
      style={{ height: `calc(100vh - ${height}px)` }}
    >
      <Container>
        <div className="row">
          <Carousel
            controls={false}
            className={`col col-md-7 ${styles.carousel}`}
          >
            {renderCarouselItems()}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default LandingSection;
