import { FC } from "react";
import { Container } from "react-bootstrap";
import CustomButton from "../CustomButton";
import SectionHeading from "../SectionHeading";
import ProductItem from "./ProductItem";
import { productsData } from "./productsData";

type Props = {
  productsLimit?: number;
};

const ProductsListSection: FC<Props> = ({ productsLimit }) => {
  function renderProducts(): JSX.Element[] {
    const productsArray = productsLimit
      ? productsData.slice(0, productsLimit)
      : productsData;

    return productsArray.map((product) => (
      <ProductItem key={product.id} product={product} />
    ));
  }

  return (
    <section>
      <Container className="my-5">
        <SectionHeading>
          Our <span>products</span>
        </SectionHeading>
        <div className="row gap-3 justify-content-center">
          {renderProducts()}
        </div>
        <div className="d-flex justify-content-center mt-4 mb-5">
          <CustomButton className={`fw-normal px-5 py-2`} href="./products">
            View All Products
          </CustomButton>
        </div>
      </Container>
    </section>
  );
};

export default ProductsListSection;
