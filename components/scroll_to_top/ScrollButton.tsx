import { FC } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./scroll_to_top.module.css";

const ScrollButton: FC = () => {
  const isIntersectingTop = useSelector(
    (state: RootState) => state.scrollIntersection.isVisible
  );

  return isIntersectingTop ? (
    <div></div>
  ) : (
    <div className={styles.scroll_button}>
      <a href="#header">
        <BsArrowUpShort className="fs-2" />
      </a>
    </div>
  );
};

export default ScrollButton;
