import { FC } from "react";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/page_header";
import WhyShopSection from "../components/why_shop";

const Blog: FC = () => {
  return (
    <MainLayout background="dark">
      <main>
        <PageHeader>Blog List</PageHeader>
        <WhyShopSection />
      </main>
    </MainLayout>
  );
};

export default Blog;
