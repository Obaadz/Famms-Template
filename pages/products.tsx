import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/page_header";
import ProductsListSection from "../components/products_list";

const Home: NextPage = () => {
  return (
    <MainLayout background="dark">
      <main>
        <PageHeader>Product Grid</PageHeader>
        <ProductsListSection />
      </main>
    </MainLayout>
  );
};

export default Home;
