import { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/page_header";
import WhyShopSection from "../components/why_shop";
import ArrivalSection from "../components/arrival";

const about: NextPage = () => {
  return (
    <MainLayout background="dark">
      <main>
        <PageHeader>About us</PageHeader>
        <WhyShopSection />
        <ArrivalSection />
      </main>
    </MainLayout>
  );
};
export default about;
