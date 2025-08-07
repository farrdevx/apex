import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Globe,
  Shield,
  Clock,
  Database,
  Mail,
  Zap,
  Award,
  Cpu,
  HardDrive,
  Code,
  Settings,
  Check,
  ArrowRight,
  Monitor,
  HeartPulse,
  Rocket,
  Sparkles,
} from "lucide-react";

const StatsBar = () => {
  const stats = [
    { icon: <Globe size={16} />, label: "50ms Global Latency" },
    { icon: <HeartPulse size={16} />, label: "99.9% Uptime" },
    { icon: <Shield size={16} />, label: "Secure by Default" },
    { icon: <Monitor size={16} />, label: "24/7 Support" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-12">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-2 text-gray-400">
          {stat.icon}
          <span className="text-sm">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

const HeroButton = ({ to, primary = false, children }) => (
  <Link
    to={to}
    className={`
      group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg
      transition-all duration-300 transform hover:scale-105
      ${primary
        ? "primary-button"
        : "border border-blue-600/50 text-gray-200 hover:bg-blue-600/10"
      }
    `}
  >
    {children}
    <ArrowRight
      size={16}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:bg-gray-800/80 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
    <div className="mb-4 transform transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const PlanSpec = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-2 text-gray-400">
    <Icon size={16} className="text-blue-400 shrink-0" />
    <span>{label}:</span>
    <span className="text-white font-medium">{value}</span>
  </div>
);

const PlanFeature = ({ icon: Icon, label, highlight }) => (
  <div
    className={`flex items-center gap-3 ${highlight ? "text-white" : "text-gray-400"
      }`}
  >
    <Check size={16} className="text-blue-400 shrink-0" />
    <span>{label}</span>
  </div>
);

const PlanCard = ({ plan }) => {
  const { title, subtitle, price, period, popular, features, specs } = plan;

  return (
    <div
      className={`
        relative group p-8 bg-gray-800/50 rounded-xl border transition-all duration-300
        ${popular
          ? "border-gray-700/50 hover:border-gray-700 scale-105 shadow-xl shadow-gray-500/10"
          : "border-gray-700/50 hover:border-gray-700 hover:shadow-lg hover:shadow-gray-500/5"
        }
      `}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-sm px-4 py-1 rounded-full flex items-center gap-1">
          <Sparkles size={14} />
          <span>Most Popular</span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-6">{subtitle}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-3xl font-bold text-white">{price}</span>
          <span className="text-gray-400">/{period}</span>
        </div>
      </div>

      {/* Technical Specs */}
      <div className="p-4 mb-6 rounded-lg bg-gray-900/50 border border-gray-700/50 space-y-2">
        <PlanSpec icon={Cpu} label="CPU" value={specs.cpu} />
        <PlanSpec icon={Globe} label="Bandwidth" value={specs.bandwidth} />
        <PlanSpec icon={Database} label="Backup" value={specs.backup} />
      </div>

      {/* Features List */}
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <PlanFeature key={index} {...feature} />
        ))}
      </div>

      <Link
        to={plan.href}
        className={`
          group/btn flex items-center justify-center gap-2 w-full py-3 rounded-lg 
          transition-all duration-300 transform hover:scale-105
          ${popular
            ? "primary-button bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25"
            : "bg-gray-700 text-white hover:bg-gray-600"
          }
        `}
      >
        <Rocket
          size={16}
        />
        <span>Get Started</span>
      </Link>
    </div>
  );
};

const WebsiteHostingPage = () => {
  const features = [
    {
      icon: <Zap className="text-blue-400" size={24} />,
      title: "LiteSpeed Servers",
      description: "Up to 50% faster than Apache",
    },
    {
      icon: <Database className="text-purple-400" size={24} />,
      title: "SSD Storage",
      description: "NVMe SSD for maximum speed",
    },
    {
      icon: <Shield className="text-green-400" size={24} />,
      title: "Free SSL",
      description: "Auto-renewed SSL certificates",
    },
    {
      icon: <Code className="text-yellow-400" size={24} />,
      title: "cPanel Included",
      description: "Easy website management",
    },
  ];

  const plans = [
    {
      title: "Starter",
      subtitle: "Perfect for personal websites",
      price: "$5.99",
      period: "month",
      popular: false,
      features: [
        { icon: <Globe size={20} />, label: "1 Website", highlight: true },
        {
          icon: <HardDrive size={20} />,
          label: "10 GB NVMe SSD",
          highlight: true,
        },
        { icon: <Database size={20} />, label: "1 Database", highlight: true },
        { icon: <Mail size={20} />, label: "5 Email Accounts" },
        { icon: <Shield size={20} />, label: "Free SSL Certificate" },
        { icon: <Zap size={20} />, label: "LiteSpeed Cache" },
        { icon: <Settings size={20} />, label: "cPanel Control Panel" },
        { icon: <Clock size={20} />, label: "99.9% Uptime" },
      ],
      specs: {
        cpu: "1 vCPU Core",
        bandwidth: "100 GB/month",
        backup: "Weekly Backups",
      },
      href: "https://example.com",
    },
    {
      title: "Professional",
      subtitle: "Most popular choice",
      price: "$9.99",
      period: "month",
      popular: true,
      features: [
        { icon: <Globe size={20} />, label: "5 Websites", highlight: true },
        {
          icon: <HardDrive size={20} />,
          label: "25 GB NVMe SSD",
          highlight: true,
        },
        {
          icon: <Database size={20} />,
          label: "10 Databases",
          highlight: true,
        },
        { icon: <Mail size={20} />, label: "20 Email Accounts" },
        { icon: <Shield size={20} />, label: "Free SSL Certificate" },
        { icon: <Zap size={20} />, label: "LiteSpeed Cache" },
        { icon: <Settings size={20} />, label: "cPanel Control Panel" },
        { icon: <Clock size={20} />, label: "99.9% Uptime" },
      ],
      specs: {
        cpu: "2 vCPU Cores",
        bandwidth: "500 GB/month",
        backup: "Daily Backups",
      },
      href: "https://example.com",
    },
    {
      title: "Business",
      subtitle: "For growing businesses",
      price: "$14.99",
      period: "month",
      popular: false,
      features: [
        {
          icon: <Globe size={20} />,
          label: "Unlimited Websites",
          highlight: true,
        },
        {
          icon: <HardDrive size={20} />,
          label: "50 GB NVMe SSD",
          highlight: true,
        },
        {
          icon: <Database size={20} />,
          label: "Unlimited Databases",
          highlight: true,
        },
        { icon: <Mail size={20} />, label: "Unlimited Email Accounts" },
        { icon: <Shield size={20} />, label: "Wildcard SSL" },
        { icon: <Zap size={20} />, label: "LiteSpeed Cache Pro" },
        { icon: <Settings size={20} />, label: "cPanel Control Panel" },
        { icon: <Clock size={20} />, label: "99.99% Uptime" },
      ],
      specs: {
        cpu: "4 vCPU Cores",
        bandwidth: "1 TB/month",
        backup: "Daily Backups",
      },
      href: "https://example.com",
    },
  ];

  return (
    <div className="bg-gray-900">
      <Helmet>
        <title>Website Hosting | GameHost</title>
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 bg-[url('https://placehold.co/900')] bg-gray-900 bg-blend-overlay overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 mb-6">
              <Award size={16} />
              <span className="text-sm">Rated #1 for Performance</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-gradient-to-r from-white to-gray-300 mb-2">
                Lightning-Fast
              </span>
              <span className="block text-blue-600">
                Website Hosting
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Powered by LiteSpeed and NVMe SSDs for maximum performance. Get
              your website online in minutes with our optimized hosting
              platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HeroButton to="/vps" primary>
                Visit Our VPS Page
              </HeroButton>
              <HeroButton to="https://example.com">Contact Us</HeroButton>
            </div>

            <StatsBar />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 border-t border-gray-800">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="block text-white">
                Simple, Transparent
              </span>
              <span className="block text-blue-600">
                Pricing
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              All plans include 24/7 support, free SSL certificates, and daily
              backups. No hidden fees or long-term contracts required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteHostingPage;
