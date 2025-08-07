import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";
import { BackgroundEffects } from "../BackgroundEffects";

const CTAButton = memo(({ to, primary = false, children }) => {
  const isExternal = to.startsWith("http");
  const LinkComponent = isExternal ? "a" : Link;
  const externalProps = isExternal
    ? {
      href: to,
      target: "_blank",
      rel: "noopener noreferrer",
    }
    : { to };

  return (
    <LinkComponent
      {...externalProps}
      className={`
        group relative px-6 py-3 rounded-lg font-medium 
        transition-all duration-300 inline-flex items-center
        hover:scale-105 active:scale-100
        focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-gray-900
        disabled:opacity-50 disabled:pointer-events-none
        ${primary
          ? "primary-button "
          : "border border-blue-600 text-blue-400 hover:bg-blue-600/10"
        }
      `}
      role="button"
      aria-label={children}
    >
      <span className="flex items-center gap-2">
        {children}
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </LinkComponent>
  );
});

const FeatureBadge = memo(({ icon: Icon, text }) => (
  <div
    className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full"
    role="presentation"
  >
    <Icon size={16} className="text-blue-400" aria-hidden="true" />
    <span className="text-sm text-blue-400 font-medium">{text}</span>
  </div>
));

const CTASection = () => {
  return (
    <section
      className="bg-gray-900 py-20 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <BackgroundEffects />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto relative">
          <FeatureBadge icon={Shield} text="Advanced DDoS Protection" />

          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl mt-5 font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Keep Your Game Servers
            </span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Protected & Online 24/7
            </span>
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Our enterprise-grade DDoS protection ensures your game servers stay
            online and your players stay connected, no matter what challenges
            come your way.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            role="group"
            aria-label="Call to action buttons"
          >
            <CTAButton to="/games" primary>
              View Game Servers
            </CTAButton>
            <CTAButton to="https://example.com">Claim a Free Trial</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(CTASection);
