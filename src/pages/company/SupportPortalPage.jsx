import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa6";
import {
  Mail,
  PhoneCall,
  Ticket,
  Book,
  MessageSquare,
  Clock,
  Globe,
  ArrowRight,
  Users,
  FileText,
  CheckCircle2,
  Heart,
  LifeBuoy,
  Star,
} from "lucide-react";
import { BackgroundEffects } from "./../../components/BackgroundEffects";

const SupportCard = ({ option }) => {
  const { icon, title, description, response, link, color } = option;

  const isExternalLink =
    link.startsWith("http") ||
    link.startsWith("mailto") ||
    link.startsWith("tel");
  const LinkComponent = isExternalLink ? "a" : Link;
  const linkProps = isExternalLink
    ? {
      href: link,
      target: "_blank",
      rel: "noopener noreferrer",
    }
    : { to: link };

  return (
    <LinkComponent
      {...linkProps}
      className={`
        group relative p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 
        hover:bg-gray-800 hover:border-${color}-500/50
        transition-all duration-300
      `}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Clock size={14} className={`text-${color}-400`} />
        <span>{response}</span>
      </div>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <ArrowRight size={20} className={`text-${color}-400`} />
      </div>
    </LinkComponent>
  );
};

const CategoryCard = ({ category }) => {
  const { icon, title, description, link } = category;

  return (
    <Link
      to={link}
      className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 
        hover:bg-gray-800 hover:border-blue-500/50
        transition-all duration-300"
    >
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
      <div className="mt-4 flex items-center gap-2 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Learn more</span>
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform duration-300"
        />
      </div>
    </Link>
  );
};

const ActionButton = ({ to, primary = false, children, icon: Icon }) => (
  <Link
    to={to}
    className={`
      group inline-flex items-center gap-2 px-6 py-3 rounded-lg 
      transition-all duration-300
      ${primary
        ? "primary-button px-6 py-2 rounded-lg"
        : "bg-gray-800/50 rounded-lg border border-gray-700/50 border-gray-700 text-gray-200 hover:bg-gray-800"
      }
    `}
  >
    <Icon size={20} />
    <span>{children}</span>
  </Link>
);

const StatsBar = () => {
  const stats = [
    { icon: <CheckCircle2 size={16} />, label: "97% Resolution Rate" },
    { icon: <Clock size={16} />, label: "< 15min Response" },
    { icon: <Heart size={16} />, label: "24/7 Support" },
    { icon: <Star size={16} />, label: "4.9/5 Rating" },
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

const supportOptions = [
  {
    icon: <Mail size={32} className="text-blue-400" />,
    title: "Email Support",
    description:
      "Get in touch with our support team via email for non-urgent inquiries.",
    response: "Response within 24 hours",
    link: "mailto:support@gamehostpro.com",
    color: "blue",
  },
  {
    icon: <PhoneCall size={32} className="text-purple-400" />,
    title: "Phone Support",
    description:
      "Call our dedicated support line for immediate technical assistance.",
    response: "Available 24/7",
    link: "tel:+18005551234",
    color: "purple",
  },
  {
    icon: <FaDiscord size={32} className="text-green-400" />,
    title: "Discord Community",
    description:
      "Join our active Discord community for instant help and discussions.",
    response: "Real-time support",
    link: "https://discord.gg/gamehostpro",
    color: "green",
  },
  {
    icon: <Ticket size={32} className="text-yellow-400" />,
    title: "Support Ticket",
    description:
      "Create a ticket for detailed technical support and follow-ups.",
    response: "Priority support",
    link: "https://example.com",
    color: "yellow",
  },
];

const categories = [
  {
    icon: <Book size={24} />,
    title: "Knowledge Base",
    description: "Browse through our extensive documentation",
    link: "/support/kb",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Community Forum",
    description: "Discuss with other users",
    link: "/community",
  },
  {
    icon: <Globe size={24} />,
    title: "System Status",
    description: "Check our services status",
    link: "/status",
  },
  {
    icon: <FileText size={24} />,
    title: "API Documentation",
    description: "Developer resources and guides",
    link: "/api-docs",
  },
];

const SupportPortalPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Helmet>
        <title>Support Center | GameHost</title>
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gray-800 py-24 overflow-hidden">
        <BackgroundEffects />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 mb-6">
              <LifeBuoy size={16} />
              <span className="text-sm">24/7 Support Available</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                How Can We Help?
              </span>
              <span className="block text-2xl md:text-3xl text-gray-400 mt-4">
                Find answers quickly in our help center
              </span>
            </h1>
            <StatsBar />
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 border-t border-gray-800">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <SupportCard key={index} option={option} />
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 border-t border-gray-800">
        <div className="container max-w-screen-xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-white">
            Help Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-600/10 border border-gray-700/50 border-gray-700 text-gray-200">
                <Users size={24} className="text-blue-500" />
              </div>
              <div>
                <p className="text-white font-medium">Need more help?</p>
                <p className="text-gray-400">Our support team is here 24/7</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ActionButton to="https://example.com" primary icon={FaDiscord}>
                Join Our Discord
              </ActionButton>
              <ActionButton to="https://example.com" icon={Ticket}>
                Open Ticket
              </ActionButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPortalPage;
