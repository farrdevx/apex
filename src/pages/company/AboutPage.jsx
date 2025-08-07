import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Settings,
  Activity,
  Users,
  Award,
  Globe,
  Zap,
  Shield,
  Server,
  Clock,
  Target,
  TrendingUp,
  Building2,
} from "lucide-react";

const stats = [
  {
    value: "50K+",
    label: "Active Users",
    icon: <Users className="text-blue-400" size={24} />,
  },
  {
    value: "99.9%",
    label: "Uptime",
    icon: <Activity className="text-green-400" size={24} />,
  },
  {
    value: "24/7",
    label: "Support",
    icon: <Clock className="text-purple-400" size={24} />,
  },
  {
    value: "15+",
    label: "Data Centers",
    icon: <Server className="text-yellow-400" size={24} />,
  },
];

const aboutSections = [
  {
    icon: <Target size={24} />,
    title: "Our Mission",
    description:
      "We are dedicated to providing powerful and user-friendly tools to help our customers manage their digital infrastructure with ease.",
    color: "blue",
  },
  {
    icon: <Settings size={24} />,
    title: "Our Expertise",
    description:
      "Our team of experienced professionals has extensive knowledge in cloud computing, server management, and software engineering.",
    color: "purple",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Our Commitment",
    description:
      "We are committed to continuous improvement, innovation, and delivering exceptional customer service.",
    color: "green",
  },
  {
    icon: <Building2 size={24} />,
    title: "Our History",
    description:
      "Established in 2015, our company has grown to become a leading provider of reliable and secure hosting solutions.",
    color: "yellow",
  },
];

const features = [
  {
    icon: <Globe size={32} />,
    title: "Global Network",
    description:
      "Strategic data centers worldwide ensuring low latency for all users.",
  },
  {
    icon: <Shield size={32} />,
    title: "Enterprise Security",
    description:
      "Advanced DDoS protection and security measures to keep your servers safe.",
  },
  {
    icon: <Zap size={32} />,
    title: "Instant Deployment",
    description: "Deploy your servers in seconds with our automated systems.",
  },
];

const timeline = [
  {
    year: "2015",
    title: "Company Founded",
    description: "Started with a vision to revolutionize game hosting.",
  },
  {
    year: "2017",
    title: "Global Expansion",
    description: "Expanded to multiple data centers across three continents.",
  },
  {
    year: "2019",
    title: "Enterprise Solutions",
    description: "Launched enterprise-grade hosting solutions.",
  },
  {
    year: "2023",
    title: "Next Generation",
    description: "Introduced next-gen infrastructure and services.",
  },
];

const StatCard = ({ stat, isVisible, delay }) => (
  <div
    className={`
      transform transition-all duration-500 backdrop-blur-sm
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
    `}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div
      className="group p-6 rounded-xl border border-gray-700/50 bg-gray-800/30
      hover:bg-gray-800/50 hover:border-blue-500/50 transition-all duration-300"
    >
      <div className="flex justify-center mb-4">{stat.icon}</div>
      <div className="text-3xl text-center font-bold text-white mb-1">{stat.value}</div>
      <div className="text-center text-gray-400">{stat.label}</div>
    </div>
  </div>
);

const AboutCard = ({ section, isVisible, delay }) => (
  <div
    className={`
      transform transition-all duration-500
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
    `}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div
      className="group p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl 
      border border-gray-700/50 hover:bg-gray-800/50 hover:border-blue-500/50 
      transition-all duration-300"
    >
      <div className={`text-${section.color}-400 mb-4`}>{section.icon}</div>
      <h3
        className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 
        bg-clip-text text-transparent mb-3"
      >
        {section.title}
      </h3>
      <p className="text-gray-400 leading-relaxed">{section.description}</p>
    </div>
  </div>
);

const FeatureCard = ({ feature, isVisible, delay }) => (
  <div
    className={`
      transform transition-all duration-500
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
    `}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div
      className="group text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl 
      border border-gray-700/50 hover:bg-gray-800/50 hover:border-blue-500/50 
      transition-all duration-300"
    >
      <div className="text-blue-400 mb-4 flex justify-center">
        {feature.icon}
      </div>
      <h3
        className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 
        bg-clip-text text-transparent mb-3"
      >
        {feature.title}
      </h3>
      <p className="text-gray-400">{feature.description}</p>
    </div>
  </div>
);

const TimelineItem = ({ item, isVisible, delay }) => (
  <div
    className={`
      relative pl-8 pb-8 last:pb-0 transform transition-all duration-500
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
    `}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-20">
      <div
        className="absolute left-0 top-1.5 w-2 h-2 -translate-x-1/2 rounded-full 
        bg-gradient-to-r from-blue-400 to-blue-500"
      />
    </div>
    <div className="text-sm text-blue-400 mb-2">{item.year}</div>
    <h3
      className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 
      bg-clip-text text-transparent mb-2"
    >
      {item.title}
    </h3>
    <p className="text-gray-400">{item.description}</p>
  </div>
);

const AboutPage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(
              (prev) => new Set([...prev, entry.target.dataset.section])
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll("[data-section]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-900 relative overflow-hidden">
      <Helmet>
        <title>About Us | GameHost</title>
      </Helmet>
      {/* Background Effects */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.08),transparent_50%)]" />
        <div className="absolute inset-0">
          <div
            className="absolute -top-48 left-0 w-96 h-96 bg-blue-500/10 rounded-full 
            mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          />
          <div
            className="absolute -top-48 right-0 w-96 h-96 bg-purple-500/10 rounded-full 
            mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          />
          <div
            className="absolute -bottom-48 left-1/2 w-96 h-96 bg-green-500/10 rounded-full 
            mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          />
        </div>
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(50,50,50,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,50,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
            transform:
              "perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(100px)",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
              bg-blue-600/10 border border-blue-500/20 text-blue-400 mb-6
              backdrop-blur-sm transition-colors duration-300"
            >
              <Award size={16} />
              <span className="text-sm">
                Trusted by 50,000+ Users Worldwide
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-2">
                About GameHost Pro
              </span>
              <span className="block text-blue-600">
                Our Story
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Leading the future of game hosting with cutting-edge technology
              and unparalleled support.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-12 border-t border-gray-800/50"
        data-section="stats"
      >
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                stat={stat}
                isVisible={visibleSections.has("stats")}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section
        className="py-20 border-t border-gray-800/50"
        data-section="about"
      >
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutSections.map((section, index) => (
              <AboutCard
                key={index}
                section={section}
                isVisible={visibleSections.has("about")}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-20 border-t border-gray-800/50"
        data-section="features"
      >
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 
              to-blue-600 bg-clip-text text-transparent"
            >
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                isVisible={visibleSections.has("features")}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        className="py-20 border-t border-gray-800/50"
        data-section="timeline"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 
              to-blue-600 bg-clip-text text-transparent"
            >
              Our Journey
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                isVisible={visibleSections.has("timeline")}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
