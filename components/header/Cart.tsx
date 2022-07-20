import { FaShoppingCart } from "react-icons/fa";

type Props = {
  fontSize: string;
  classes: string;
};

const Cart = ({ fontSize, classes }: Props) => {
  return <FaShoppingCart fontSize={fontSize} className={classes} />;
};

export default Cart;
