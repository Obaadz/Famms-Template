import type { NextPage } from "next";
import ArrivalSection from "../components/arrival";
import LandingSection from "../components/landing";
import WhyShopSection from "../components/why_shop";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <main>
        <LandingSection />
        <WhyShopSection />
        <ArrivalSection />
      </main>
    </MainLayout>
  );
};

export default Home;
