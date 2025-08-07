import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import PanelShowcase from "../components/home/PanelShowcase";
import LocationsSection from "../components/home/LocationsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FaqSection from "../components/home/FaqSection";
import CTASection from "../components/home/CTASection";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home | GameHost</title>
        <meta
          name="description"
          content="GameHost - The ultimate hosting solution for gamers."
        />
        <meta name="keywords" content="GameHost, game server hosting, gaming" />
      </Helmet>

      <HeroSection />
      <FeaturesSection />
      <PanelShowcase />
      <LocationsSection />
      <CTASection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
};

export default HomePage;
