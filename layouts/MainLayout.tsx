import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { ScrollButton, ScrollIntersection } from "../components/scroll_to_top";

type Props = {
  children: ReactNode;
  background?: "dark";
};

const MainLayout = ({ children, background }: Props) => {
  return (
    <>
      <Header />
      <ScrollIntersection />
      <ScrollButton />
      {children}
      <Footer background={background ? background : "light"} />
    </>
  );
};

export default MainLayout;
