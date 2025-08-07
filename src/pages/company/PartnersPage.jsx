import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Users,
  Globe,
  ArrowRight,
  Handshake,
  ExternalLink,
  Building2,
  Star,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    value: "10+",
    label: "Active Partners",
    icon: <Users size={24} className="text-blue-400" />,
  },
  {
    value: "1M+",
    label: "Players Reached",
    icon: <Globe size={24} className="text-purple-400" />,
  },
  {
    value: "5+",
    label: "Countries",
    icon: <Building2 size={24} className="text-green-400" />,
  },
  {
    value: "99%",
    label: "Partner Satisfaction",
    icon: <Star size={24} className="text-yellow-400" />,
  },
];

const partners = [
  {
    logo: "https://placehold.co/75",
    name: "Acme Game Studios",
    description:
      "Leading game development studio specializing in multiplayer experiences",
    category: "Game Developer",
    location: "Los Angeles, USA",
    partnerSince: "2020",
    url: "https://acmegames.com",
  },
];

const benefits = [
  {
    title: "Global Reach",
    description: "Access to millions of players worldwide",
    icon: <Globe size={32} className="text-blue-400" />,
  },
  {
    title: "Technical Support",
    description: "24/7 dedicated partner support",
    icon: <Users size={32} className="text-purple-400" />,
  },
  {
    title: "Growth Opportunities",
    description: "Joint marketing and promotion",
    icon: <TrendingUp size={32} className="text-green-400" />,
  },
];

const StatCard = ({ stat }) => (
  <div className="text-center">
    <div className="flex justify-center mb-4">{stat.icon}</div>
    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
    <div className="text-gray-400">{stat.label}</div>
  </div>
);

const PartnerCard = ({ partner }) => (
  <a
    href={partner.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 
    hover:bg-gray-800 hover:border-blue-500/50 transition-all duration-300"
  >
    <div className="flex items-center justify-between mb-6">
      <img src={partner.logo} alt={partner.name} className="h-12" />
      <ExternalLink
        size={18}
        className="text-gray-500 group-hover:text-blue-400 transition-colors"
      />
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
        {partner.name}
      </h3>
      <p className="text-gray-400">{partner.description}</p>

      <div className="pt-4 border-t border-gray-700/50 space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <Building2 size={14} className="mr-2" />
          {partner.category}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Globe size={14} className="mr-2" />
          {partner.location}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Users size={14} className="mr-2" />
          Partner since {partner.partnerSince}
        </div>
      </div>
    </div>
  </a>
);

const BenefitCard = ({ benefit }) => (
  <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
    <div className="mb-4">{benefit.icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
    <p className="text-gray-400">{benefit.description}</p>
  </div>
);

const PartnersPage = () => {
  return (
    <div className="bg-gray-900">
      <Helmet>
        <title>Our Partners | GameHost</title>
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 bg-[url('https://placehold.co/900')] bg-gray-900 bg-blend-overlay overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 mb-6">
              <Handshake size={16} />
              <span className="text-sm">Partner Network</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                Our Trusted
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Partners
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Join forces with industry leaders and innovators in gaming and
              technology. Together, we're shaping the future of game hosting.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 border-t border-gray-800">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              Partnership Benefits
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join our partner network and unlock exclusive benefits and
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Become a Partner
            </h2>
            <p className="text-gray-400 mb-8">
              Join our partner network and let's create something amazing
              together. We're always looking for new partnerships and
              collaborations.
            </p>
            <Link
              to="https://example.com"
              className="primary-button px-8 py-3 rounded-lg "
            >
              <span>Apply Now</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
