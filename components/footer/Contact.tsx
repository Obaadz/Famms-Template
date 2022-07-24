import { FC } from "react";
import Logo from "../Logo";

type Props = {
  dark?: boolean;
};

const Contact: FC<Props> = ({ dark }) => {
  return (
    <div className="d-flex flex-column col-lg-4 col-md-6 gap-3">
      <Logo widthInPx="210" dark={dark} />
      <address>
        <strong>Address: </strong>28 White tower, Street Name New York City, USA
      </address>
      <div>
        <strong>Telephone: </strong> +91 987 654 3210
      </div>
      <div>
        <strong>Email: </strong> obada347@gmail.com
      </div>
    </div>
  );
};

export default Contact;
