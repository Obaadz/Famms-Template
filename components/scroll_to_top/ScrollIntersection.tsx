import { FC, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateIsVisible } from "../../redux/slice/scrollSlice";
import styles from "./scroll_to_top.module.css";

const ScrollIntersection: FC = () => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      const isVisible = entry.isIntersecting ? true : false;

      dispatch(updateIsVisible(isVisible));
    });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef]);

  return (
    <span ref={containerRef} className={styles.scroll_intersection}></span>
  );
};

export default ScrollIntersection;
