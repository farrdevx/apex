import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Server,
  Shield,
  Globe,
  Clock,
  Users,
  HardDrive,
  Zap,
  Download,
  Settings,
  Award,
  ChevronRight,
  Heart,
  Sparkles,
  MonitorPlay,
} from "lucide-react";

const FeatureCard = ({ icon, title, description }) => (
  <div className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:bg-gray-800/80  hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
    <div className="w-12 h-12 flex items-center justify-center mb-4">
      <div className="transform transition-all duration-300 origin-center group-hover:scale-110">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const MinecraftPage = () => {
  const features = [
    {
      icon: <Shield size={24} className="text-blue-400" />,
      title: "DDoS Protection",
      description: "Enterprise-grade protection against attacks",
    },
    {
      icon: <Globe size={24} className="text-purple-400" />,
      title: "Global Network",
      description: "Low-latency servers worldwide",
    },
    {
      icon: <Settings size={24} className="text-green-400" />,
      title: "Mod Support",
      description: "Easy installation of popular mods",
    },
    {
      icon: <Zap size={24} className="text-yellow-400" />,
      title: "Instant Setup",
      description: "Deploy your server in seconds",
    },
  ];

  const plans = [
    {
      title: "2GB Plan",
      image: "https://placehold.co/75",
      subtitle: "AMD Ryzen 9 7950X, 1 CPU Core",
      price: "$9.99",
      period: "month",
      popular: false,
      features: [
        { icon: <Server size={20} />, label: "2 GB RAM", highlight: true },
        {
          icon: <HardDrive size={20} />,
          label: "15 GB NVMe SSD",
          highlight: true,
        },
        { icon: <Users size={20} />, label: "20 Player Slots" },
        { icon: <Download size={20} />, label: "Automated Backups" },
        { icon: <Settings size={20} />, label: "Mod Support" },
        { icon: <Clock size={20} />, label: "24/7 Uptime" },
        { icon: <Shield size={20} />, label: "Basic DDoS Protection" },
      ],
      href: "https://example.com",
    },
    {
      title: "4GB Plan",
      image: "https://placehold.co/75",
      subtitle: "AMD Ryzen 9 7950X, 2 CPU Cores",
      price: "$14.99",
      period: "month",
      popular: false,
      features: [
        { icon: <Server size={20} />, label: "4 GB RAM", highlight: true },
        {
          icon: <HardDrive size={20} />,
          label: "30 GB NVMe SSD",
          highlight: true,
        },
        { icon: <Users size={20} />, label: "60 Player Slots" },
        { icon: <Download size={20} />, label: "Daily Backups" },
        { icon: <Settings size={20} />, label: "Premium Mod Support" },
        { icon: <Clock size={20} />, label: "99.9% Uptime" },
        { icon: <Shield size={20} />, label: "Advanced DDoS Protection" },
      ],
      href: "https://example.com",
    },
    {
      title: "6GB Plan",
      image: "https://placehold.co/75",
      subtitle: "AMD Ryzen 9 7950X, 2 CPU Cores",
      price: "$19.99",
      period: "month",
      popular: true,
      features: [
        { icon: <Server size={20} />, label: "6 GB RAM", highlight: true },
        {
          icon: <HardDrive size={20} />,
          label: "50 GB NVMe SSD",
          highlight: true,
        },
        { icon: <Users size={20} />, label: "100 Player Slots" },
        { icon: <Download size={20} />, label: "Daily Backups" },
        { icon: <Settings size={20} />, label: "Premium Mod Support" },
        { icon: <Clock size={20} />, label: "99.9% Uptime" },
        { icon: <Shield size={20} />, label: "Advanced DDoS Protection" },
      ],
      href: "https://example.com",
    },
    {
      title: "8GB Plan",
      image: "https://placehold.co/75",
      subtitle: "AMD Ryzen 9 7950X, 4 CPU Cores",
      price: "$24.99",
      period: "month",
      popular: false,
      features: [
        { icon: <Server size={20} />, label: "8 GB RAM", highlight: true },
        {
          icon: <HardDrive size={20} />,
          label: "100 GB NVMe SSD",
          highlight: true,
        },
        { icon: <Users size={20} />, label: "150 Player Slots" },
        { icon: <Download size={20} />, label: "Real-time Backups" },
        { icon: <Settings size={20} />, label: "Priority Mod Support" },
        { icon: <Clock size={20} />, label: "99.99% Uptime" },
        { icon: <Shield size={20} />, label: "Enterprise DDoS Protection" },
      ],
      href: "https://example.com",
    },
    {
      title: "12GB Plan",
      image: "https://placehold.co/75",
      subtitle: "AMD Ryzen 9 7950X, 4 CPU Cores",
      price: "$34.99",
      period: "month",
      popular: false,
      features: [
        { icon: <Server size={20} />, label: "12 GB RAM", highlight: true },
        {
          icon: <HardDrive size={20} />,
          label: "200 GB NVMe SSD",
          highlight: true,
        },
        { icon: <Users size={20} />, label: "Unlimited Players" },
        { icon: <Download size={20} />, label: "Real-time Backups" },
        { icon: <Settings size={20} />, label: "Priority Mod Support" },
        { icon: <Clock size={20} />, label: "99.99% Uptime" },
        { icon: <Shield size={20} />, label: "Enterprise DDoS Protection" },
      ],
      href: "https://example.com",
    },
    {
      title: "16GB Plan",
      image: "https://placehold.co/75",
      subtitle: "AMD Ryzen 9 7950X, 6 CPU Cores",
      price: "$44.99",
      period: "month",
      popular: false,
      features: [
        { icon: <Server size={20} />, label: "16 GB RAM", highlight: true },
        {
          icon: <HardDrive size={20} />,
          label: "300 GB NVMe SSD",
          highlight: true,
        },
        { icon: <Users size={20} />, label: "Unlimited Players" },
        { icon: <Download size={20} />, label: "Real-time Backups" },
        { icon: <Settings size={20} />, label: "Priority Mod Support" },
        { icon: <Clock size={20} />, label: "99.99% Uptime" },
        { icon: <Shield size={20} />, label: "Enterprise DDoS Protection" },
      ],
      href: "https://example.com",
    },
  ];

  return (
    <div className="bg-gray-900">
      <Helmet>
        <title>Minecraft Hosting | GameHost</title>
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 bg-[url('https://placehold.co/900')] bg-gray-900 bg-blend-overlay overflow-hidden">
        <div className="container  mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 mb-6">
              <Award size={16} />
              <span className="text-sm">Ranked #1 Minecraft Host</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                Premium Minecraft
              </span>
              <span className="block text-blue-600">
                Server Hosting
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Experience lag-free Minecraft gameplay with our optimized server
              hosting. Deploy your world in seconds with one-click installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/vps"
                className="primary-button inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg"
              >
                <span>Visit Our VPS Page</span>
                <ChevronRight size={16} />
              </Link>
              <Link
                to="https://example.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-blue-600/50 hover:bg-blue-600/10 transition-all duration-300"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid  */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-400 text-lg">
              Choose the perfect plan for your Minecraft community. All plans
              include 24/7 support and instant setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative group p-8 bg-gray-800/50 rounded-xl border transition-all duration-300 
                  ${plan.popular
                    ? "border-gray-700/50 hover:border-gray-700 scale-105 shadow-xl shadow-gray-700/10"
                    : "border-gray-700/50 hover:border-gray-700"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-sm px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <img src={plan.image} alt={plan.title} className="mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.subtitle}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`flex items-center gap-3 ${feature.highlight ? "text-white" : "text-gray-400"
                        }`}
                    >
                      {feature.icon}
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    to={plan.href}
                    className={`block text-center py-3 rounded-lg transition-all duration-300 ${plan.popular
                      ? "primary-button w-full bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                      }`}
                  >
                    Choose Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinecraftPage;
