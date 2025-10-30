import React, { memo } from "react";
import {
  Zap,
  Shield,
  Clock,
  Headphones,
  Award,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { BackgroundEffects } from "../BackgroundEffects";

const REASONS = [
  {
    icon: <Zap size={32} />,
    title: "Lightning Fast",
    description: "NVMe SSDs and latest-gen AMD Ryzen processors ensure blazing performance",
    color: "blue",
    benefits: ["5.2 GHz Turbo", "PCIe Gen4 Storage", "DDR5 Memory"],
  },
  {
    icon: <Shield size={32} />,
    title: "Enterprise Security",
    description: "Multi-layered DDoS protection with 2.5 Tbps mitigation capacity",
    color: "purple",
    benefits: ["Layer 7 Protection", "Real-time Monitoring", "Auto Mitigation"],
  },
  {
    icon: <Clock size={32} />,
    title: "99.9% Uptime",
    description: "Redundant infrastructure and automated failover for maximum reliability",
    color: "green",
    benefits: ["SLA Guarantee", "Auto Failover", "Redundant Network"],
  },
  {
    icon: <Headphones size={32} />,
    title: "24/7 Support",
    description: "Expert support team available round the clock to assist you",
    color: "yellow",
    benefits: ["1-Hour Response", "Discord Support", "Live Chat"],
  },
  {
    icon: <Award size={32} />,
    title: "Industry Leading",
    description: "Trusted by 50,000+ customers worldwide for their hosting needs",
    color: "pink",
    benefits: ["50K+ Customers", "99% Satisfaction", "5-Star Reviews"],
  },
  {
    icon: <Rocket size={32} />,
    title: "Instant Deploy",
    description: "Get your server up and running in under 60 seconds",
    color: "indigo",
    benefits: ["60s Setup", "One-Click Install", "Pre-configured"],
  },
];

const colorClasses = {
  blue: {
    icon: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    hover: "group-hover:border-blue-500/50",
  },
  purple: {
    icon: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    hover: "group-hover:border-purple-500/50",
  },
  green: {
    icon: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    hover: "group-hover:border-green-500/50",
  },
  yellow: {
    icon: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    hover: "group-hover:border-yellow-500/50",
  },
  pink: {
    icon: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    hover: "group-hover:border-pink-500/50",
  },
  indigo: {
    icon: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    hover: "group-hover:border-indigo-500/50",
  },
};

const ReasonCard = memo(({ reason }) => {
  const colors = colorClasses[reason.color];

  return (
    <div
      className={`
        group relative p-6 rounded-xl transition-all duration-300
        bg-gradient-to-b from-gray-800/50 to-gray-800/30
        border ${colors.border} ${colors.hover}
        hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-${reason.color}-500/10
      `}
    >
      {/* Icon */}
      <div
        className={`
          inline-flex p-3 rounded-lg ${colors.bg} mb-4
          transform transition-all duration-300 group-hover:scale-110
        `}
      >
        {React.cloneElement(reason.icon, { className: colors.icon })}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {reason.title}
      </h3>
      <p className="text-gray-400 mb-4 leading-relaxed">
        {reason.description}
      </p>

      {/* Benefits */}
      <ul className="space-y-2">
        {reason.benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
            <CheckCircle2 size={16} className={colors.icon} />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

const WhyChooseUsSection = () => {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      <BackgroundEffects />

      <div className="container relative mx-auto max-w-screen-xl px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 mb-4">
            <Award size={16} />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The Best Choice for
            </span>
            <span className="block mt-2 text-blue-600">
              Your Hosting Needs
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience the difference with enterprise-grade infrastructure,
            unmatched performance, and dedicated support.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason, index) => (
            <ReasonCard key={index} reason={reason} />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50K+", label: "Active Servers" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "2.5 Tbps", label: "DDoS Protection" },
            { value: "< 20ms", label: "Avg Latency" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(WhyChooseUsSection);
