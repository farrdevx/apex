import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Cpu,
  Wifi,
  BoxIcon,
  Zap,
  Globe,
  Clock,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";
import { BackgroundEffects } from "../BackgroundEffects";

const STATS_DATA = [
  {
    icon: <Cpu className="text-blue-400" size={20} />,
    label: "Enterprise Hardware",
    value: "AMD™ Ryzen 9",
    description: "Up to 32 Cores",
    metric: "4.5 GHz Boost",
  },
  {
    icon: <Shield className="text-purple-400" size={20} />,
    label: "DDoS Protection",
    value: "Enterprise Grade",
    description: "Layer 7 Protection",
    metric: "2.5 Tbps",
  },
  {
    icon: <Wifi className="text-green-400" size={20} />,
    label: "Global Network",
    value: "< 20ms Latency",
    description: "5 Data Centers",
    metric: "99.9% Uptime",
  },
];

const FEATURED_GAMES = [
  {
    game: "Minecraft",
    players: "150+",
    region: "EU West",
    trend: "+12% today",
    color: "text-green-400",
  },
  {
    game: "CS2",
    players: "128",
    region: "US East",
    trend: "+8% today",
    color: "text-blue-400",
  },
  {
    game: "Rust",
    players: "200+",
    region: "Asia",
    trend: "+15% today",
    color: "text-purple-400",
  },
];

const TRUST_INDICATORS = [
  { icon: <Globe size={16} />, label: "Global Infrastructure" },
  { icon: <Clock size={16} />, label: "24/7 Support" },
  { icon: <Award size={16} />, label: "Industry Leading" },
  { icon: <Users size={16} />, label: "50K+ Customers" },
];

const StatCard = memo(
  ({ icon, label, value, description, metric }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true));
      return () => clearTimeout(timer);
    });

    return (
      <div
        className={`
        group flex flex-col items-center p-6 rounded-xl backdrop-blur-sm
        bg-gradient-to-b from-gray-800/50 to-gray-800/30
        border border-gray-700/50 hover:border-gray-600/50
        transition-all duration-500 hover:transform 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      >
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-all duration-300" />
          <div className="relative transform transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
        <div className="text-center space-y-1">
          <div className="text-sm text-gray-400 font-medium">{label}</div>
          <div className="font-bold text-white text-lg tracking-tight">
            {value}
          </div>
          <div className="text-xs text-gray-500">{description}</div>
          <div className="text-xs text-blue-400 font-semibold">{metric}</div>
        </div>
      </div>
    );
  }
);

const GamingFeature = memo(({ game, players, region, trend, color }) => (
  <div
    className="flex items-center space-x-3 text-sm transition-opacity duration-500"
    role="status"
    aria-live="polite"
  >
    <Zap size={16} className={color} />
    <span className="text-gray-200 font-medium">{game}</span>
    <span className="text-gray-600">•</span>
    <span className="text-gray-400">{players} players</span>
    <span className="text-gray-600">•</span>
    <span className="text-gray-400">{region}</span>
    <span className={`${color} text-xs font-medium`}>{trend}</span>
  </div>
));

const TrustIndicators = memo(() => (
  <div className="flex flex-wrap justify-center gap-3 md:gap-8 mb-8 md:mb-6">
    {TRUST_INDICATORS.map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-2 text-xs md:text-sm text-gray-400 px-3 py-1.5 md:px-4 md:py-2 rounded-lg
          hover:bg-gray-800/30 transition-all duration-300 hover:text-gray-200
          border border-transparent hover:border-gray-700/50"
      >
        {item.icon}
        <span>{item.label}</span>
      </div>
    ))}
  </div>
));

const PrimaryButton = memo(({ to, children }) => (
  <Link
    to={to}
    className="group relative inline-flex items-center justify-center px-8 py-4 
      bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg overflow-hidden 
      transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
  >
    <div className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:bg-blue-600/20" />
    <div
      className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
      skew-x-30 transition-transform duration-500 translate-x-[-200%] group-hover:translate-x-[200%]"
    />
    <span className="relative text-lg font-semibold flex items-center gap-2">
      {children}
    </span>
  </Link>
));

const SecondaryButton = memo(({ to, children }) => (
  <Link
    to={to}
    className="group px-8 py-4 border-2 border-blue-600/50 rounded-lg text-lg
      hover:bg-blue-600/10 hover:border-blue-600 transition-all duration-300 
      hover:scale-105"
  >
    <span className="relative flex items-center justify-center text-gray-200 gap-2">
      {children}
    </span>
  </Link>
));

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const displayInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % FEATURED_GAMES.length);
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(displayInterval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] pt-16 md:pt-0 overflow-hidden">
      <BackgroundEffects />

      <div
        className={`
        container relative mx-auto px-4 md:px-6 py-8 md:py-20 text-center
        transition-all duration-1000 ease-out transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      >
        <TrustIndicators />

        {/* Main Content */}
        <div className="space-y-6 md:space-y-8 mb-10 md:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-white">
              Next-Generation
            </span>
            <span className="block text-blue-500 mt-1 md:mt-2">
              Game Hosting
            </span>
          </h1>

          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              Experience enterprise-grade game hosting with instant deployment,
              advanced DDoS protection, and 24/7 dedicated support.
            </p>

            {/* Game Features */}
            <div className="h-6 md:h-8 flex justify-center items-center">
              <div
                className={`transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
              >
                <GamingFeature {...FEATURED_GAMES[currentFeature]} />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-12 md:mb-20 px-4">
          <PrimaryButton to="/vps">
            Deploy a VPS
            <BoxIcon
              size={20}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
          </PrimaryButton>
          <SecondaryButton to="/games">
            View Game Servers
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </SecondaryButton>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
          {STATS_DATA.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
