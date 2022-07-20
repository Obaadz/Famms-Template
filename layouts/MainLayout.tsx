import { ReactElement } from "react";
import Header from "../components/header";

type Props = {
  children: ReactElement;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
