import { FC } from "react";
import MainLayout from "../layouts/MainLayout";
import BlogList from "../components/blog_list";
import WhyShopSection from "../components/why_shop";

const Blog: FC = () => {
  return (
    <MainLayout background="dark">
      <BlogList />
      <WhyShopSection />
    </MainLayout>
  );
};

export default Blog;
