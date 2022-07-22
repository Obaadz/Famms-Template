import React, { FC } from "react";
import { Button } from "react-bootstrap";
import type { CarouselData } from "./carouselItemsData";

type Props = {
  data: CarouselData;
};

const CarouselItem: FC<Props> = ({ data }) => {
  return (
    <>
      <h1>
        {data.title.header} <br />
        <span>{data.title.sub}</span>
      </h1>
      <p>{data.description}</p>
      <Button variant="danger" className="px-4 py-2">
        Shop Now
      </Button>
    </>
  );
};

export default CarouselItem;
