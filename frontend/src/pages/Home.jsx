// import React from "react";
// import FAQs from "../components/Faq";
import Testimonials from "../components/Testimonials";
// import Locations from "../components/Locations";
import GamesGrid from "../components/PopularGames";
// import FeaturesGrid from "../components/Features";
import HeroSection from "../components/HeroSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="min-h-screen text-white bg-[#24293A]">
      <Helmet>
        <title>Главная | PrivateHub</title>
      </Helmet>

      <HeroSection />
      {/*<FeaturesGrid />*/}
      <GamesGrid />
      {/*<Locations />*/}
      <Testimonials />
      {/*<FAQs />*/}
    </div>
  );
};

export default Home;
