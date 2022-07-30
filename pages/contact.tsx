import { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import PageHeader from "../components/page_header";
import ContactUsSection from "../components/contact_us";

const contact: NextPage = () => {
  return (
    <MainLayout background="dark">
      <main>
        <PageHeader>Contact us</PageHeader>
        <ContactUsSection />
      </main>
    </MainLayout>
  );
};
export default contact;
