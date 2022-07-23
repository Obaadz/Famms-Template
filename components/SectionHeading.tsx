import { FC, ReactNode } from "react";
import styles from "./section_heading.module.css";

type Props = {
  children: ReactNode;
};

const SectionHeading: FC<Props> = ({ children }) => {
  return (
    <h2 className={`fs-1 fw-bolder mt-5 mb-5 mx-auto ${styles.heading}`}>
      {children}
    </h2>
  );
};

export default SectionHeading;
