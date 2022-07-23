import type { NextPage } from "next";
import LandingSection from "../components/landing";
import WhyShopSection from "../components/why_shop";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <main>
        <LandingSection />
        <WhyShopSection />
      </main>
    </MainLayout>
  );
};

export default Home;
