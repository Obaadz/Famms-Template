import React, { FC } from "react";
import CustomButton from "../CustomButton";
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
      <CustomButton className="fw-bold px-4 py-2">Shop Now</CustomButton>
    </>
  );
};

export default CarouselItem;
