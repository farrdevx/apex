import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
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
        <title>Home | GameHost - VPS & Game Server Hosting</title>
        <meta
          name="description"
          content="GameHost - Enterprise-grade VPS and game server hosting with 99.9% uptime, DDoS protection, and 24/7 support. Deploy in 60 seconds."
        />
        <meta name="keywords" content="VPS hosting, game server hosting, dedicated servers, cloud hosting, minecraft hosting" />
      </Helmet>

      <HeroSection />
      <FeaturesSection />
      <WhyChooseUsSection />
      <PanelShowcase />
      <LocationsSection />
      <CTASection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
};

export default HomePage;
