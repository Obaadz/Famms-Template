import Link from "next/link";
import { FC } from "react";
import { Button, Container } from "react-bootstrap";
import SectionHeading from "../SectionHeading";
import ProductItem from "./ProductItem";
import { productsData } from "./productsData";
import styles from "./products_list.module.css";

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
          <Link href="./products">
            <Button
              variant="danger"
              className={`fw-normal px-5 py-2 ${styles.button}`}
            >
              View All Products
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ProductsListSection;
