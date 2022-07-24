import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

type Props = {
  children: ReactNode;
  background?: "dark";
};

const MainLayout = ({ children, background }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer background={background ? background : "light"} />
    </>
  );
};

export default MainLayout;
