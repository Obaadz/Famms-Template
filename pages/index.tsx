import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import LandingSection from "../components/landing";
import WhyShopSection from "../components/why_shop";
import ArrivalSection from "../components/arrival";
import ProductsListSection from "../components/products_list";
import SubscribeSection from "../components/subscribe";
import CustomerTestimonialSection from "../components/customer_testimonial";

const LIMIT_NUMBER_OF_PRODUCTS = 9;

const Home: NextPage = () => {
  return (
    <MainLayout>
      <main>
        <LandingSection />
        <WhyShopSection />
        <ArrivalSection />
        <ProductsListSection productsLimit={LIMIT_NUMBER_OF_PRODUCTS} />
        <SubscribeSection />
        <CustomerTestimonialSection />
      </main>
    </MainLayout>
  );
};

export default Home;
