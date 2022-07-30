import { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/page_header";
import CustomerTestimonialSection from "../components/customer_testimonial";

const testimonial: NextPage = () => {
  return (
    <MainLayout background="dark">
      <main>
        <PageHeader>Testimonial</PageHeader>
        <CustomerTestimonialSection />
      </main>
    </MainLayout>
  );
};

export default testimonial;
