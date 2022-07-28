import { FC } from "react";
import { Product } from "./productsData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./products_list.module.css";

type Props = {
  product: Product;
};

const ProductItem: FC<Props> = ({ product }) => {
  return (
    <div className={`col-lg-3 col-md-4 py-3 ${styles.item}`}>
      <div className="m-2 text-center mb-3">
        <LazyLoadImage src={product.img} alt={product.title} />
      </div>
      <div className=" d-flex justify-content-between">
        <h3 className="fs-5 fw-bold">{product.title}</h3>
        <span>{"$" + product.price}</span>
      </div>
    </div>
  );
};

export default ProductItem;
