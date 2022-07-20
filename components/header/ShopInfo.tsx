import classes from "./header.module.css";
import { FaSearch } from "react-icons/fa";
import Cart from "./Cart";

const ShopInfo = () => {
  return (
    <div className="d-none d-lg-flex ms-5 gap-2 align-items-center">
      <Cart fontSize="1.4rem" classes={classes.link} />
      <FaSearch fontSize="1.2rem" className={classes.link} />
    </div>
  );
};

export default ShopInfo;
