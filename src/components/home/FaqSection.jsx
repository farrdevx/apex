import React, { useState, useMemo } from "react";
import {
  ChevronDown,
  Shield,
  Cpu,
  Settings,
  Mail,
  Search,
  ExternalLink,
  ArrowRight,
  Globe,
  Zap,
  Clock,
  HardDrive,
  Network,
  Wifi,
  MonitorPlay,
  Database,
  TicketCheck,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa6";
import { BackgroundEffects } from "../BackgroundEffects";

const RelatedLink = ({ link }) => (
  <a
    href={link.url}
    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-blue-400 rounded-lg text-sm transition-all duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>{link.text}</span>
    <ExternalLink size={12} />
  </a>
);

const SupportMetric = ({ icon, text }) => (
  <div className="flex items-center gap-2 text-sm text-gray-400">
    {icon}
    <span>{text}</span>
  </div>
);

const ActionButton = ({ href, className, icon: Icon, children }) => (
  <a
    href={href}
    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${className}`}
  >
    <Icon size={20} />
    <span>{children}</span>
  </a>
);

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    {
      id: "general",
      label: "General",
      icon: <Globe size={20} />,
      description: "Common questions about our services",
      color: "blue",
    },
    {
      id: "gameservers",
      label: "Game Servers",
      icon: <MonitorPlay size={20} />,
      description: "Game hosting specific questions",
      color: "purple",
    },
    {
      id: "vps",
      label: "VPS",
      icon: <Database size={20} />,
      description: "Virtual Private Server information",
      color: "green",
    },
  ];

  const faqData = {
    general: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, PayPal, and cryptocurrency. All payments are processed securely through our encrypted payment system.",
        icon: <Shield size={18} />,
        tag: "Billing",
        relatedLinks: [
          { text: "Payment Methods", url: "/payment-methods" },
          { text: "Billing FAQ", url: "/billing-faq" },
        ],
      },
      {
        question: "Do you offer refunds?",
        answer:
          "Yes, we offer a 24-hour money-back guarantee if you're not satisfied with our service. No questions asked.",
        icon: <ArrowRight size={18} />,
        tag: "Billing",
        relatedLinks: [
          { text: "Refund Policy", url: "/refund-policy" },
          { text: "Terms of Service", url: "/terms" },
        ],
      },
      {
        question: "Where are your data centers located?",
        answer:
          "We operate data centers across North America, Europe, and Asia Pacific to ensure low latency and optimal performance worldwide.",
        icon: <Network size={18} />,
        tag: "Infrastructure",
        features: [
          "North America (NY, LA, Chicago)",
          "Europe (Frankfurt, London, Amsterdam)",
          "Asia Pacific (Singapore, Tokyo, Sydney)",
        ],
      },
    ],
    gameservers: [
      {
        question: "What games do you support?",
        answer:
          "We support all popular games including Minecraft, Valheim, ARK, Rust, CS:GO, and many more. Our control panel makes installation and configuration simple.",
        icon: <MonitorPlay size={18} />,
        tag: "Games",
        features: [
          "One-Click Game Installation",
          "Mod Support",
          "Custom Launch Parameters",
        ],
      },
      {
        question: "What are the game server specifications?",
        answer:
          "Our game servers run on high-performance hardware with AMD Ryzen processors, NVMe SSDs, and DDR4 memory for optimal gaming performance.",
        icon: <Cpu size={18} />,
        tag: "Hardware",
        specs: {
          cpu: "AMD Ryzen 9 5950X",
          memory: "128GB DDR4",
          storage: "NVMe SSD",
          network: "10 Gbps",
        },
      },
      {
        question: "Do you offer DDOS protection for game servers?",
        answer:
          "Yes, all game servers include enterprise-grade DDoS protection with automatic mitigation of attacks up to 1Tbps.",
        icon: <Shield size={18} />,
        tag: "Security",
        features: [
          "Layer 7 Protection",
          "Automatic Mitigation",
          "Real-time Monitoring",
        ],
      },
    ],
    vps: [
      {
        question: "What VPS configurations are available?",
        answer:
          "We offer a range of VPS plans with different CPU, RAM, and storage configurations to suit your needs. All VPS instances use enterprise-grade hardware.",
        icon: <HardDrive size={18} />,
        tag: "Hardware",
        specs: {
          cpu: "Up to 8 vCPU Cores",
          memory: "Up to 32GB RAM",
          storage: "NVMe SSD",
          bandwidth: "Unmetered",
        },
      },
      {
        question: "What operating systems do you support?",
        answer:
          "We support all major Linux distributions and Windows Server editions. Custom ISO support is available on selected plans.",
        icon: <Settings size={18} />,
        tag: "OS",
        features: [
          "Ubuntu, CentOS, Debian",
          "Windows Server 2019/2022",
          "Custom ISO Support",
        ],
      },
      {
        question: "What kind of VPS management tools do you provide?",
        answer:
          "Our VPS control panel provides full management capabilities including power controls, OS reinstall, console access, and resource monitoring.",
        icon: <Wifi size={18} />,
        tag: "Management",
        features: [
          "Full Root Access",
          "Resource Monitoring",
          "Backup Solutions",
        ],
      },
    ],
  };

  const popularQuestions = [
    "Game Server Specs",
    "VPS Plans",
    "DDoS Protection",
    "Payment Methods",
  ];

  const getTabColor = (tab, isActive) => {
    const colors = {
      blue: isActive
        ? " bg-blue-600 shadow-blue-500/25"
        : "hover:bg-blue-600/10",
      purple: isActive
        ? "bg-purple-600 shadow-purple-500/25"
        : "hover:bg-purple-600/10",
      green: isActive
        ? "bg-green-600 shadow-green-500/25"
        : "hover:bg-green-600/10",
    };
    return colors[tab.color];
  };

  const filteredFaqs = useMemo(() => {
    if (!searchQuery) return faqData[activeTab];

    const query = searchQuery.toLowerCase();
    return faqData[activeTab].filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.tag?.toLowerCase().includes(query)
    );
  }, [searchQuery, activeTab, faqData]);

  return (
    <section className="py-12 sm:py-20 relative overflow-hidden">
      <BackgroundEffects />
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-16 space-y-4 sm:space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Need Help?
            </span>
            <span className="block mt-1 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              We've Got You Covered
            </span>
          </h2>

          {/* Search Bar */}
          <div className="max-w-7xl mx-auto px-2">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg pl-12 pr-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            {/* Popular Searches  */}
            <div className="mt-4 text-sm">
              <span className="text-gray-500 float-start mr-5 block sm:inline mb-2 sm:mb-0">
                Popular:
              </span>
              <div className="flex flex-wrap gap-2">
                {popularQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setSearchQuery(q)}
                    className="px-3 py-1 bg-gray-800/50 text-gray-400 rounded-full hover:bg-gray-800 hover:text-blue-400 transition-all duration-200 text-sm"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 sm:mb-12 max-w-screen-xl mx-auto px-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative group p-3 sm:p-4 rounded-xl border border-gray-700/50 
                transition-all duration-300 ease-out
                ${activeTab === tab.id
                  ? `${getTabColor(tab, true)} text-white shadow-lg`
                  : `bg-gray-800/50 text-gray-400 hover:bg-gray-800/70 ${getTabColor(
                    tab,
                    false
                  )}`
                }
              `}
            >
              <div className="flex items-center gap-2">
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {tab.icon}
                </span>
                <div className="text-left">
                  <div className="font-semibold">{tab.label}</div>
                  <p className="text-xs sm:text-sm opacity-75 line-clamp-1">
                    {tab.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* FAQ List  */}
        <div className="max-w-7xl mx-auto space-y-3 px-2">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="group">
              <button
                onClick={() =>
                  setActiveQuestion(activeQuestion === index ? null : index)
                }
                className={`
                  w-full flex items-center gap-3 p-4 rounded-lg text-left transition-all duration-300
                  ${activeQuestion === index
                    ? "bg-gray-800 shadow-lg border-b border-gray-700/50"
                    : "bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50"
                  }
                `}
              >
                <span className="text-blue-400 group-hover:scale-110 transition-transform duration-300 hidden sm:block">
                  {faq.icon}
                </span>
                <span className="font-medium flex-1 text-gray-100 group-hover:text-white text-sm sm:text-base">
                  {faq.question}
                </span>
                {faq.tag && (
                  <span className="hidden sm:block px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">
                    {faq.tag}
                  </span>
                )}
                <ChevronDown
                  size={18}
                  className={`transform transition-transform duration-300 text-gray-400 group-hover:text-blue-400 flex-shrink-0
                    ${activeQuestion === index ? "rotate-180" : ""}
                  `}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-out
                  ${activeQuestion === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="p-4 sm:p-6 bg-gray-800/30 rounded-b-lg border-x border-b border-gray-700/50">
                  <p className="text-gray-300 text-sm sm:text-base">
                    {faq.answer}
                  </p>

                  {/* Specs Grid */}
                  {faq.specs && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {Object.entries(faq.specs).map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-gray-900/50 p-3 rounded-lg"
                        >
                          <div className="text-xs sm:text-sm text-gray-400 mb-1">
                            {key.toUpperCase()}
                          </div>
                          <div className="text-blue-400 font-medium text-sm">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features List */}
                  {faq.features && (
                    <div className="mt-4 space-y-2">
                      {faq.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >
                          <ArrowRight
                            size={12}
                            className="text-blue-400 flex-shrink-0"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Related Links */}
                  {faq.relatedLinks && (
                    <div className="mt-6 pt-4 border-t border-gray-700/50">
                      <div className="text-xs sm:text-sm text-gray-400 mb-2">
                        Related Resources:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {faq.relatedLinks.map((link, i) => (
                          <RelatedLink key={i} link={link} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 space-y-6 sm:space-y-8 px-2">
          <div className="max-w-xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              Still have questions?
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Our support team is available 24/7 to help you with any questions
              or concerns.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <ActionButton
              href="/contact"
              className="bg-blue-600 primary-button hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 text-white text-sm sm:text-base"
              icon={FaDiscord}
            >
              Join Our Discord
            </ActionButton>

            <ActionButton
              href="/contact"
              className="border border-blue-600/50 hover:bg-blue-600/10 text-gray-200 text-sm sm:text-base"
              icon={Mail}
            >
              Email Support
            </ActionButton>

            <ActionButton
              href="/discord"
              className="border border-purple-600/50 hover:bg-purple-600/10 text-gray-200 text-sm sm:text-base"
              icon={TicketCheck}
            >
              Ticket Support
            </ActionButton>
          </div>

          {/* Support Metrics */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-4">
            <SupportMetric icon={<Clock size={14} />} text="24/7 Support" />
            <SupportMetric icon={<Zap size={14} />} text="< 15min Response" />
            <SupportMetric icon={<Globe size={14} />} text="Global Coverage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
