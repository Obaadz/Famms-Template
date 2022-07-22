import type { NextPage } from "next";
import LandingSection from "../components/landing";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <main>
        <LandingSection />
      </main>
    </MainLayout>
  );
};

export default Home;
