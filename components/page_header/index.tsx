import { FC, ReactNode } from "react";
import { Container } from "react-bootstrap";
import styles from "./page_header.module.css";

type Props = {
  children: ReactNode;
};

const PageHeader: FC<Props> = ({ children }) => {
  return (
    <section className={styles.page_header}>
      <Container fluid="true" className="text-center py-5">
        <h1 className="fw-bolder text-light">{children}</h1>
      </Container>
    </section>
  );
};

export default PageHeader;
