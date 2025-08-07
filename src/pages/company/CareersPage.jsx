import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Code,
  HeadsetIcon,
  Server,
  Building2,
  Globe,
  Coffee,
  Laptop,
  Heart,
  CheckCircle2,
  ChevronRight,
  MapPin,
  ArrowRight,
} from "lucide-react";

const perks = [
  {
    icon: <Globe size={24} className="text-blue-400" />,
    title: "Remote First",
    description: "Work from anywhere in the world",
  },
  {
    icon: <Coffee size={24} className="text-purple-400" />,
    title: "Flexible Hours",
    description: "Balance work and personal life",
  },
  {
    icon: <Laptop size={24} className="text-green-400" />,
    title: "Latest Tech",
    description: "Access to cutting-edge tools",
  },
  {
    icon: <Heart size={24} className="text-red-400" />,
    title: "Health Benefits",
    description: "Comprehensive healthcare coverage",
  },
];

const values = [
  "Innovation First",
  "Customer Obsession",
  "Team Collaboration",
  "Continuous Learning",
  "Work-Life Balance",
  "Diversity & Inclusion",
];

const openPositions = [
  {
    title: "Software Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build innovative game hosting solutions using cutting-edge technologies.",
    requirements: [
      "5+ years of experience with modern web technologies",
      "Strong knowledge of React, Node.js, and TypeScript",
      "Experience with cloud infrastructure (AWS/GCP)",
      "Understanding of game server architecture",
      "Strong problem-solving skills",
    ],
    responsibilities: [
      "Develop and maintain our game hosting platform",
      "Design and implement new features",
      "Optimize application performance",
      "Collaborate with cross-functional teams",
      "Participate in code reviews",
    ],
    icon: <Code size={24} />,
    link: "/careers/software-engineer",
  },
  {
    title: "Technical Support Specialist",
    department: "Support",
    location: "Remote",
    type: "Full-time",
    description:
      "Provide world-class technical support to our gaming community.",
    requirements: [
      "3+ years of technical support experience",
      "Strong knowledge of game server administration",
      "Excellent communication skills",
      "Problem-solving mindset",
      "Customer service oriented",
    ],
    responsibilities: [
      "Handle technical support tickets",
      "Troubleshoot server issues",
      "Create support documentation",
      "Provide customer guidance",
      "Monitor server performance",
    ],
    icon: <HeadsetIcon size={24} />,
    link: "/careers/technical-support",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build and maintain our cloud infrastructure and deployment systems.",
    requirements: [
      "4+ years of DevOps experience",
      "Strong knowledge of AWS/GCP",
      "Experience with Docker and Kubernetes",
      "Infrastructure as Code expertise",
      "CI/CD pipeline experience",
    ],
    responsibilities: [
      "Manage cloud infrastructure",
      "Optimize deployment processes",
      "Implement security best practices",
      "Monitor system performance",
      "Automate operational tasks",
    ],
    icon: <Server size={24} />,
    link: "/careers/devops-engineer",
  },
];

const PerkCard = ({ perk }) => (
  <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:bg-gray-800 hover:border-blue-500/50 transition-all duration-300">
    <div className="mb-4">{perk.icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{perk.title}</h3>
    <p className="text-gray-400">{perk.description}</p>
  </div>
);

const ValueBadge = ({ value }) => (
  <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:bg-gray-800 hover:border-blue-500/50 transition-all duration-300">
    <CheckCircle2 size={20} className="text-blue-400" />
    <span className="text-white">{value}</span>
  </div>
);

const PositionCard = ({ position }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
      {/* Header  */}
      <div
        className="p-6 flex items-start justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-grow">
          <div className="flex items-start gap-4">
            <div className="text-blue-400 mt-1">{position.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {position.title}
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2 text-sm">
                <span className="bg-blue-400/10 text-blue-400 px-2.5 py-0.5 rounded-full">
                  {position.department}
                </span>
                <div className="flex items-center gap-1 text-gray-400">
                  <MapPin size={14} />
                  <span>{position.location}</span>
                </div>
                <span className="text-gray-400">{position.type}</span>
              </div>
              <p className="text-gray-400">{position.description}</p>
            </div>
          </div>
        </div>
        <button
          className={`p-2 rounded-lg text-gray-400 hover:bg-gray-700/50 transition-all duration-300 ${isExpanded ? "rotate-180" : ""
            }`}
          aria-label="Toggle details"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Expandable Content */}
      <div
        className={`
        overflow-hidden transition-all duration-300
        ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <div className="px-6 pb-6 space-y-6 border-t border-gray-700/50">
          {/* Requirements */}
          <div className="pt-6">
            <h4 className="text-lg font-semibold text-white mb-3">
              Requirements
            </h4>
            <ul className="space-y-2">
              {position.requirements.map((req, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-400"
                >
                  <CheckCircle2
                    size={16}
                    className="text-blue-400 mt-1 flex-shrink-0"
                  />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsibilities */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Responsibilities
            </h4>
            <ul className="space-y-2">
              {position.responsibilities.map((resp, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-400"
                >
                  <CheckCircle2
                    size={16}
                    className="text-blue-400 mt-1 flex-shrink-0"
                  />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Button */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
            <Link
              to={position.link}
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              View Full Description
            </Link>
            <a
              href={`mailto:careers@company.com?subject=Application for ${position.title} Position`}
              className="primary-button px-6 py-2 rounded-lg"
            >
              <span>Apply Now</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CareersPage = () => {
  return (
    <div className="bg-gray-900">
      <Helmet>
        <title>Careers | GameHost</title>
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 bg-[url('https://placehold.co/900')] bg-gray-900 bg-blend-overlay overflow-hidden">

        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 mb-6">
              <Building2 size={16} />
              <span className="text-sm">We're Hiring!</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                Join Our Team
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Shape the Future
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Join our dynamic team and help revolutionize the future of game
              hosting. We're looking for passionate individuals who love gaming
              and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <PerkCard key={index} perk={perk} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              Our Values
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These core values guide everything we do and shape our company
              culture.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <ValueBadge key={index} value={value} />
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 border-t border-gray-800">
        <div className="container max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              Open Positions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find your perfect role and help us shape the future of game
              hosting.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <PositionCard key={index} position={position} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-gray-400 mb-8">
              We're always looking for talented individuals to join our team.
              Send us your resume and we'll keep you in mind for future
              opportunities.
            </p>
            <Link
              to="https://example.com"
              className="primary-button rounded-lg px-8 py-3 "
            >
              <span>Get in Touch</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
