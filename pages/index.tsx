import type { NextPage } from "next";
import ArrivalSection from "../components/arrival";
import LandingSection from "../components/landing";
import ProductsListSection from "../components/products_list";
import WhyShopSection from "../components/why_shop";
import MainLayout from "../layouts/MainLayout";

const LIMIT_NUMBER_OF_PRODUCTS = 9;

const Home: NextPage = () => {
  return (
    <MainLayout>
      <main>
        <LandingSection />
        <WhyShopSection />
        <ArrivalSection />
        <ProductsListSection productsLimit={LIMIT_NUMBER_OF_PRODUCTS} />
      </main>
    </MainLayout>
  );
};

export default Home;
