import React from "react";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import {
  Github,
  Twitter,
  Gamepad2,
  ChevronRight,
  Building2,
  Globe,
  HelpingHand,
} from "lucide-react";

const footerSections = [
  {
    title: "Solutions",
    icon: <Globe size={24} className="text-blue-500" />,
    links: [
      { label: "Game Servers", url: "/games" },
      { label: "Website Hosting", url: "/website-hosting" },
      { label: "VPS Servers", url: "/vps" },
    ],
  },
  {
    title: "Popular Games",
    icon: <Gamepad2 size={24} className="text-blue-500" />,
    links: [
      { label: "Minecraft", url: "/minecraft" },
      { label: "CounterStrike", url: "/csgo" },
      { label: "Valheim", url: "/valheim" },
      { label: "ARK: Survival Evolved", url: "/ark-se" },
      { label: "Browse Games", url: "/games", highlight: true },
    ],
  },
  {
    title: "Company",
    icon: <Building2 size={24} className="text-blue-500" />,
    links: [
      { label: "Contact", url: "https://example.com" },
      { label: "About Us", url: "/about" },
      { label: "Careers", url: "/careers" },
      { label: "Partners", url: "/partners" },
    ],
  },
  {
    title: "Resources",
    icon: <HelpingHand size={24} className="text-blue-500" />,
    links: [
      { label: "Knowledgebase", url: "https://example.com" },
      { label: "Network Status", url: "https://example.com" },
      { label: "Support Center", url: "/support" },
      { label: "Legal Policies", url: "/legal" },
    ],
  },
];

const socialLinks = [
  {
    icon: <FaDiscord size={20} />,
    url: "https://example.com",
    label: "Discord",
    hoverText: "Join our Discord community",
  },
  {
    icon: <Twitter size={20} />,
    url: "https://example.com",
    label: "Twitter",
    hoverText: "Follow us on Twitter",
  },
];

const legalLinks = [{ label: "Legal Policies", url: "/legal" }];

const FooterLink = ({ url, label, highlight, children }) => (
  <Link
    to={url}
    className={`
      group flex items-center gap-2 py-1 text-gray-400 
      hover:text-gray-200 transition-all duration-100
      ${highlight ? "text-blue-400 hover:text-blue-300" : ""}
    `}
  >
    <span className="relative">
      {label}
      <span
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500/50 
        transition-all duration-100 group-hover:w-full"
      />
    </span>
    {highlight && children}
  </Link>
);

const SocialLink = ({ url, icon, label, hoverText }) => (
  <Link
    to={url}
    className="relative flex items-center justify-center w-10 h-10 
      text-gray-400 hover:text-blue-400 transition-all duration-300 
      hover:bg-gray-800/90 rounded-lg group"
    aria-label={label}
  >
    <div className="transform transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    <span
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 
      text-xs text-white bg-gray-800/90 backdrop-blur-sm rounded-md 
      opacity-0 group-hover:opacity-100 transition-opacity duration-200 
      whitespace-nowrap shadow-xl border border-gray-700/50"
    >
      {hoverText}
    </span>
  </Link>
);

const FooterSection = ({ title, icon, links }) => (
  <div className="col-span-2 sm:col-span-1">
    <div className="flex items-center gap-2 mb-4">
      <div
        className="bg-blue-500/10 p-2 rounded-lg 
        backdrop-blur-sm border border-blue-500/10"
      >
        {icon}
      </div>
      <h2
        className="text-lg font-bold bg-gradient-to-r from-white to-gray-200 
        bg-clip-text text-transparent"
      >
        {title}
      </h2>
    </div>
    <ul className="space-y-2" role="list">
      {links.map((link, index) => (
        <li key={index}>
          <FooterLink {...link}>
            {link.highlight && (
              <ChevronRight
                size={16}
                className="ml-1 opacity-0 -translate-x-2 transition-all duration-300 
                  group-hover:opacity-100 group-hover:translate-x-0"
              />
            )}
          </FooterLink>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 z-10"
      role="contentinfo"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {footerSections.map((section, index) => (
            <FooterSection key={index} {...section} />
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div
              className="flex items-center gap-2 bg-gray-800/30 
              backdrop-blur-sm rounded-lg p-1 border border-gray-700/50"
            >
              {socialLinks.map((social, index) => (
                <SocialLink key={index} {...social} />
              ))}
            </div>

            {/* Copyright and Legal Links */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <div className="space-x-2 flex flex-wrap justify-center md:justify-end gap-2">
                <span className="text-gray-500">
                  © {currentYear} @26BZ https://26bz.online/. All rights
                  reserved.
                </span>
                <div className="hidden md:flex items-center space-x-4">
                  {legalLinks.map((link, index) => (
                    <React.Fragment key={link.url}>
                      {index > 0 && (
                        <span className="text-gray-700" aria-hidden="true">
                          •
                        </span>
                      )}
                      <Link
                        to={link.url}
                        className="hover:text-gray-200 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
