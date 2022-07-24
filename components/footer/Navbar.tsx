import { FC } from "react";
import Link from "next/link";
import styles from "./footer.module.css";
import type { NavData } from "./navData";

type Props = {
  navData: NavData;
};

const Navbar: FC<Props> = ({ navData }: Props) => {
  function renderLinkItems() {
    return navData.items.map((item) => (
      <li key={item.id}>
        <Link href={item.href ? item.href : item.name}>{item.name}</Link>
      </li>
    ));
  }

  return (
    <div className="d-flex flex-column col-md-4 col-lg-2 gap-3">
      <h3 className="fw-bold fs-5">{navData.title}</h3>
      <ul className={`d-flex flex-column list-unstyled gap-2 ${styles.list}`}>
        {renderLinkItems()}
      </ul>
    </div>
  );
};

export default Navbar;
