import { FC } from "react";
import { Container } from "react-bootstrap";
import styles from "./blog_list.module.css";

const BlogList: FC = () => {
  return (
    <section className={styles.blog}>
      <Container fluid="true" className="text-center py-5">
        <h3 className="fs-1 fw-bolder text-light">Blog List</h3>
      </Container>
    </section>
  );
};

export default BlogList;
