import { FC, ReactNode } from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import styles from "./custom_button.module.css";

type Props = {
  className?: string;
  href?: string;
  children: ReactNode;
};

const CustomButton: FC<Props> = ({ className, href, children }) => {
  const BTN = (
    <Button variant="danger" className={`${className} ${styles.danger}`}>
      {children}
    </Button>
  );

  return href ? <Link href={href}>{BTN}</Link> : BTN;
};

export default CustomButton;
