import React from "react";
import { Link } from "react-router-dom";
import {
  Server,
  Shield,
  Globe,
  Clock,
  Cpu,
  HardDrive,
  Wifi,
  Settings,
  Cloud,
  Lock,
  Zap,
  Check,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Helmet } from "react-helmet";

const SpecItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-2 text-gray-400">
    <Icon size={16} className="text-blue-400" />
    <span>{label}:</span>
    <span className="text-white font-medium">{value}</span>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:bg-gray-800/80 hover:border-blue-500/50 transition-all  duration-300 hover:shadow-lg hover:shadow-blue-500/5">
    <div className="w-12 h-12 flex items-center justify-center mb-4">
      <div className="transform transition-all duration-300 origin-center group-hover:scale-110">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    <p className="text-gray-400">{description}</p>
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

const StatsBar = () => {
  const stats = [
    { icon: <Cloud size={16} />, label: "99.9% Uptime" },
    { icon: <Globe size={16} />, label: "Global Network" },
    { icon: <Shield size={16} />, label: "DDoS Protected" },
    { icon: <Zap size={16} />, label: "Instant Deploy" },
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

const PlanCard = ({ plan }) => {
  const { title, subtitle, price, period, popular, features, specs } = plan;

  return (
    <div
      className={`
        relative group p-8 bg-gray-800/50 rounded-xl border transition-all duration-300
        ${popular
          ? "border-gray-700/50 hover:border-gray-700 scale-105 shadow-xl shadow-gray-700/10"
          : "border-gray-700/50 hover:border-gray-700 hover:shadow-lg hover:shadow-gray-700/5"
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

      {/* Hardware Specs */}
      <div className="p-4 mb-6 rounded-lg bg-gray-900/50 border border-gray-700/50 space-y-2">
        <SpecItem icon={Cpu} label="CPU" value={specs.cpu} />
        <SpecItem icon={HardDrive} label="Storage" value={specs.storage} />
        <SpecItem icon={Wifi} label="Network" value={specs.network} />
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
        <span>Deploy Now</span>
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover/btn:translate-x-1"
        />
      </Link>
    </div>
  );
};

const VPSPlansPage = () => {
  const features = [
    {
      icon: <Cloud className="text-blue-400" size={24} />,
      title: "Cloud Infrastructure",
      description: "Powered by enterprise-grade hardware",
    },
    {
      icon: <Shield className="text-purple-400" size={24} />,
      title: "DDoS Protection",
      description: "Advanced mitigation included",
    },
    {
      icon: <Wifi className="text-green-400" size={24} />,
      title: "Premium Network",
      description: "Multiple 10Gbps uplinks",
    },
    {
      icon: <Settings className="text-yellow-400" size={24} />,
      title: "Full Control",
      description: "Root access and custom ISO",
    },
  ];

  const plans = [
    {
      title: "Starter VPS",
      subtitle: "Perfect for development",
      price: "$19.99",
      period: "month",
      popular: false,
      features: [
        { icon: <Server size={20} />, label: "2 GB DDR4 RAM", highlight: true },
        {
          icon: <Cpu size={20} />,
          label: "2 vCPU Cores (Ryzen 9 7950X)",
          highlight: true,
        },
        {
          icon: <HardDrive size={20} />,
          label: "50 GB NVMe SSD",
          highlight: true,
        },
        { icon: <Globe size={20} />, label: "2 TB Bandwidth" },
        { icon: <Shield size={20} />, label: "DDoS Protection" },
        { icon: <Lock size={20} />, label: "Full Root Access" },
        { icon: <Clock size={20} />, label: "99.9% Uptime" },
        { icon: <Settings size={20} />, label: "Control Panel" },
      ],
      specs: {
        cpu: "AMD Ryzen 9 7950X",
        storage: "NVMe SSD",
        network: "1 Gbps",
      },
      href: "https://example.com",
    },
    {
      title: "Advanced VPS",
      subtitle: "Most popular choice",
      price: "$29.99",
      period: "month",
      popular: true,
      features: [
        { icon: <Server size={20} />, label: "4 GB DDR4 RAM", highlight: true },
        {
          icon: <Cpu size={20} />,
          label: "4 vCPU Cores (Ryzen 9 7950X)",
          highlight: true,
        },
        {
          icon: <HardDrive size={20} />,
          label: "100 GB NVMe SSD",
          highlight: true,
        },
        { icon: <Globe size={20} />, label: "5 TB Bandwidth" },
        { icon: <Shield size={20} />, label: "Advanced DDoS Protection" },
        { icon: <Lock size={20} />, label: "Full Root Access" },
        { icon: <Clock size={20} />, label: "99.99% Uptime" },
        { icon: <Settings size={20} />, label: "Premium Control Panel" },
      ],
      specs: {
        cpu: "AMD Ryzen 9 7950X",
        storage: "NVMe SSD",
        network: "2.5 Gbps",
      },
      href: "https://example.com",
    },
    {
      title: "Enterprise VPS",
      subtitle: "For demanding workloads",
      price: "$49.99",
      period: "month",
      popular: false,
      features: [
        { icon: <Server size={20} />, label: "8 GB DDR4 RAM", highlight: true },
        {
          icon: <Cpu size={20} />,
          label: "6 vCPU Cores (Ryzen 9 7950X)",
          highlight: true,
        },
        {
          icon: <HardDrive size={20} />,
          label: "200 GB NVMe SSD",
          highlight: true,
        },
        { icon: <Globe size={20} />, label: "10 TB Bandwidth" },
        { icon: <Shield size={20} />, label: "Enterprise DDoS Protection" },
        { icon: <Lock size={20} />, label: "Full Root Access" },
        { icon: <Clock size={20} />, label: "99.99% Uptime" },
        { icon: <Settings size={20} />, label: "Enterprise Control Panel" },
      ],
      specs: {
        cpu: "AMD Ryzen 9 7950X",
        storage: "NVMe SSD",
        network: "5 Gbps",
      },
      href: "https://example.com",
    },
  ];

  return (
    <div className="bg-gray-900">
      <Helmet>
        <title>Virtual Private Servers | GameHost</title>
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 bg-[url('https://placehold.co/900')] bg-gray-900 bg-blend-overlay overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 mb-6">
              <Award size={16} />
              <span className="text-sm">Enterprise-Grade VPS Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-white mb-2">
                High-Performance
              </span>
              <span className="block text-blue-600">
                VPS Hosting
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Powered by latest-gen AMD Ryzen processors and NVMe SSDs. Deploy
              your VPS in seconds with full root access.
            </p>

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
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Flexible VPS
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Plans
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Choose the perfect VPS plan for your needs. All plans include 24/7
              support and instant deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>

          {/* Comparison Table */}
          <div className="max-w-6xl mx-auto mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Plan Comparison
              </span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800/30 rounded-xl border border-gray-700/50">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="text-left p-4 text-gray-400 font-medium">Feature</th>
                    <th className="p-4 text-center text-white font-semibold">Starter</th>
                    <th className="p-4 text-center text-white font-semibold">
                      <div className="flex items-center justify-center gap-2">
                        Advanced
                        <Sparkles size={16} className="text-blue-400" />
                      </div>
                    </th>
                    <th className="p-4 text-center text-white font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "RAM", starter: "2 GB", advanced: "4 GB", enterprise: "8 GB" },
                    { feature: "CPU Cores", starter: "2 Cores", advanced: "4 Cores", enterprise: "6 Cores" },
                    { feature: "Storage", starter: "50 GB", advanced: "100 GB", enterprise: "200 GB" },
                    { feature: "Bandwidth", starter: "2 TB", advanced: "5 TB", enterprise: "10 TB" },
                    { feature: "DDoS Protection", starter: "✓", advanced: "✓ Enhanced", enterprise: "✓ Enterprise" },
                    { feature: "Backups", starter: "Weekly", advanced: "Daily", enterprise: "Daily" },
                    { feature: "Support", starter: "24/7", advanced: "24/7 Priority", enterprise: "24/7 Dedicated" },
                    { feature: "Uptime SLA", starter: "99.9%", advanced: "99.99%", enterprise: "99.99%" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-700/30 hover:bg-gray-800/50 transition-colors">
                      <td className="p-4 text-gray-300 font-medium">{row.feature}</td>
                      <td className="p-4 text-center text-gray-400">{row.starter}</td>
                      <td className="p-4 text-center text-blue-400 font-medium">{row.advanced}</td>
                      <td className="p-4 text-center text-gray-400">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VPSPlansPage;
