import React, { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/games/GamesPage";
import AboutPage from "./pages/company/AboutPage";
import MinecraftPage from "./pages/games/MinecraftPage";
import VPSPlansPage from "./pages/services/VPSPlansPage";
import WebsiteHostingPage from "./pages/services/WebsiteHostingPage";
import SupportPortalPage from "./pages/company/SupportPortalPage";
import PartnersPage from "./pages/company/PartnersPage";
import CareersPage from "./pages/company/CareersPage";
import NotFoundPage from "./pages/NotFound";
import LegalPage from "./pages/company/LegalPage";

const PageLoader = () => (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
    role="progressbar"
    aria-valuetext="Loading page..."
  >
    <div className="relative flex">
      <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-purple-500  animate-delay-150" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-8 w-8 rounded-full border-t-4 border-b-4 border-blue-300  animate-delay-300" />
      </div>
    </div>
  </div>
);

const useSmoothScrollToTop = () => {
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);

  const smoothScrollToTop = useCallback(() => {
    setIsScrolling(true);

    const currentScroll = window.pageYOffset;
    if (currentScroll === 0) {
      setIsScrolling(false);
      return;
    }

    const scroll = () => {
      const scrollStep = Math.max(currentScroll / 15, 10);
      const newPosition = window.pageYOffset - scrollStep;

      if (newPosition > 0) {
        window.scrollTo(0, newPosition);
        requestAnimationFrame(scroll);
      } else {
        window.scrollTo(0, 0);
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(scroll);
  }, []);

  useEffect(() => {
    if (!isScrolling) {
      const timeoutId = setTimeout(() => {
        smoothScrollToTop();
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [location, smoothScrollToTop, isScrolling]);

  return isScrolling;
};

const PageTransitionLoader = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const isScrolling = useSmoothScrollToTop();

  useEffect(() => {
    setIsLoading(true);

    const minLoadTime = 600;
    const loadStartTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - loadStartTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeoutId);
    };
  }, [location]);

  if (!isLoading && !isScrolling) return null;
  return <PageLoader />;
};

const AppContent = () => (
  <Layout>
    <PageTransitionLoader />
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/games" element={<GamesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/minecraft" element={<MinecraftPage />} />
      <Route path="/vps" element={<VPSPlansPage />} />
      <Route path="/website-hosting" element={<WebsiteHostingPage />} />
      <Route path="/support" element={<SupportPortalPage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/legal" element={<LegalPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Layout>
);

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;