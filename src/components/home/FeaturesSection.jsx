import React, { useState, useEffect, memo } from "react";
import {
  Server,
  Shield,
  Users,
  Gauge,
  Cloud,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { BackgroundEffects } from "../BackgroundEffects";

const FEATURES_DATA = [
  {
    icon: <Server size={40} />,
    title: "Enterprise Infrastructure",
    description: "Powered by latest-gen AMD Ryzen™ processors and NVMe storage",
    benefits: [
      "Up to 5.2GHz Turbo Boost",
      "PCIe Gen4 NVMe Storage",
      "DDR5-4800 ECC RAM",
    ],
    colorClasses: {
      text: "text-blue-400",
      hover: "hover:text-blue-500",
      iconBg: "bg-blue-500/10",
      borderHover: "hover:border-blue-500/50",
      gradientBg: "from-blue-400 to-blue-600",
    },
  },
  {
    icon: <Shield size={40} />,
    title: "Advanced Protection",
    description: "Multi-layered DDoS protection with ML-powered mitigation",
    benefits: [
      "2.5 Tbps Protection",
      "Automated Mitigation",
      "Real-time Analytics",
    ],
    colorClasses: {
      text: "text-purple-400",
      hover: "hover:text-purple-500",
      iconBg: "bg-purple-500/10",
      borderHover: "hover:border-purple-500/50",
      gradientBg: "from-purple-400 to-purple-600",
    },
  },
  {
    icon: <Users size={40} />,
    title: "Expert Support",
    description: "24/7 dedicated support team with game server expertise",
    benefits: [
      "1-Hour Response Time",
      "Discord Priority Support",
      "Custom Solutions",
    ],
    colorClasses: {
      text: "text-amber-400",
      hover: "hover:text-amber-500",
      iconBg: "bg-amber-500/10",
      borderHover: "hover:border-amber-500/50",
      gradientBg: "from-amber-400 to-amber-600",
    },
  },
  {
    icon: <Gauge size={40} />,
    title: "Optimized Network",
    description: "Global network infrastructure optimized for gaming",
    benefits: [
      "5+ Global Locations",
      "Anti-DDoS Protection",
      "TCP/UDP Optimization",
    ],
    colorClasses: {
      text: "text-rose-400",
      hover: "hover:text-rose-500",
      iconBg: "bg-rose-500/10",
      borderHover: "hover:border-rose-500/50",
      gradientBg: "from-rose-400 to-rose-600",
    },
  },
  {
    icon: <Cloud size={40} />,
    title: "Automated Backups",
    description: "Secure, automated backup system with instant recovery",
    benefits: ["Daily Snapshots", "30-Day Retention", "One-Click Restore"],
    colorClasses: {
      text: "text-indigo-400",
      hover: "hover:text-indigo-500",
      iconBg: "bg-indigo-500/10",
      borderHover: "hover:border-indigo-500/50",
      gradientBg: "from-indigo-400 to-indigo-600",
    },
  },
  {
    icon: <HeartHandshake size={40} />,
    title: "Gaming Ecosystem",
    description: "Complete toolkit for modern game server management",
    benefits: ["Mod Manager", "Plugin Marketplace", "Community Tools"],
    colorClasses: {
      text: "text-pink-400",
      hover: "hover:text-pink-500",
      iconBg: "bg-pink-500/10",
      borderHover: "hover:border-pink-500/50",
      gradientBg: "from-pink-400 to-pink-600",
    },
  },
];

const BenefitItem = memo(({ benefit, colorClass }) => (
  <li className="flex items-start gap-2 group/item">
    <CheckCircle2
      size={18}
      className={`${colorClass} mt-0.5 transition-transform duration-300 group-hover/item:scale-110`}
      aria-hidden="true"
    />
    <span className="text-sm text-gray-400 group-hover:text-gray-300">
      {benefit}
    </span>
  </li>
));

const FeatureCard = memo(
  ({ feature, index, isVisible, onMouseEnter, onMouseLeave }) => {
    const { colorClasses } = feature;

    return (
      <div
        className={`
        group relative p-6 rounded-xl transition-all duration-500
        bg-gradient-to-b from-gray-800/50 to-gray-800/30
        border border-gray-700/50 ${colorClasses.borderHover}
        hover:transform hover:-translate-y-1 hover:shadow-xl
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        tabIndex={0}
        role="article"
        aria-labelledby={`feature-title-${index}`}
      >
        {/* Icon Container */}
        <div
          className={`
          relative mb-4 p-3 rounded-lg ${colorClasses.iconBg} w-fit
          transform transition-all duration-300 group-hover:scale-110
        `}
          aria-hidden="true"
        >
          {React.cloneElement(feature.icon, {
            className: `${colorClasses.text} transition-transform duration-300 group-hover:rotate-6`,
          })}
        </div>

        <div className="space-y-4">
          <h3
            id={`feature-title-${index}`}
            className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300"
          >
            {feature.title}
          </h3>

          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {feature.description}
          </p>

          {/* Benefits */}
          <ul className="space-y-3 pt-4 border-t border-gray-700/50">
            {feature.benefits.map((benefit, idx) => (
              <BenefitItem
                key={idx}
                benefit={benefit}
                colorClass={colorClasses.text}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
);

const FeaturesSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleFeatures(
              (prev) => new Set([...prev, entry.target.dataset.featureIndex])
            );
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    );

    const elements = document.querySelectorAll("[data-feature-index]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative py-24 bg-gray-900 overflow-hidden"
      aria-labelledby="features-heading"
    >
      <BackgroundEffects />

      <div className="container relative mx-auto max-w-screen-xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2
            id="features-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Built for Performance.
            </span>
            <span className="block mt-2 text-blue-600">
              Optimized for Gaming.
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          role="list"
        >
          {FEATURES_DATA.map((feature, index) => (
            <div
              key={index}
              data-feature-index={index}
              className="min-h-[350px]"
            >
              <FeatureCard
                feature={feature}
                index={index}
                isVisible={visibleFeatures.has(index.toString())}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);
