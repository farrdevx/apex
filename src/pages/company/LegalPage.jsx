import React, { useState, useEffect, useCallback, useRef } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import { Shield, Clock, Scale, Ban, ArrowRight } from "lucide-react";

const LegalTab = ({
  id,
  icon: Icon,
  label,
  description,
  selected,
  onClick,
}) => (
  <button
    onClick={() => onClick(id)}
    className={`
      group relative flex flex-col items-center text-center p-4 rounded-lg border 
      transition-all duration-300 w-full md:w-auto min-w-[180px]
      ${selected
        ? "primary-button px-6 py-2 rounded-lg bg-blue-600 border-blue-600 text-white"
        : "bg-gray-800/50 rounded-xl border border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-white"
      }
    `}
    role="tab"
    aria-selected={selected}
    aria-controls={`panel-${id}`}
  >
    <div className="flex items-center justify-center gap-2 mb-2">
      <Icon size={20} className="shrink-0" />
      <span className="font-medium">{label}</span>
    </div>
    {description && (
      <span className="text-xs opacity-75 line-clamp-1">{description}</span>
    )}
  </button>
);

const LastUpdated = ({ date }) => (
  <div
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
    bg-blue-600/10 border border-blue-500/20 text-blue-400"
  >
    <Clock size={14} />
    <span className="text-sm">Last updated: {date}</span>
  </div>
);

const Section = ({ id, title, content }) => (
  <div id={id} className="scroll-mt-24">
    <div className="mb-2">
      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
        <ArrowRight size={20} className="text-blue-400" />
        {title}
      </h3>
      <div className="prose prose-invert prose-blue max-w-none">
        <div className="whitespace-pre-wrap text-gray-300 leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  </div>
);

const TableOfContents = ({ sections, activeSection }) => (
  <div className="hidden lg:block w-64 shrink-0">
    <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pb-8">
      <h4 className="text-sm font-semibold text-gray-400 mb-4">
        Table of Contents
      </h4>
      <nav className="space-y-2">
        {sections?.map((section) => (
          <div
            key={section.id}
            className={`
              w-full text-left px-4 py-2 rounded-lg text-sm
              ${activeSection === section.id
                ? "bg-blue-600/10 text-blue-400"
                : "text-gray-400"
              }
            `}
          >
            {section.title}
          </div>
        ))}
      </nav>
    </div>
  </div>
);

const LoadingSpinner = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="text-center">
      <div
        className="w-12 h-12 border-2 border-blue-500 border-t-transparent 
        rounded-full animate-spin mx-auto mb-4"
      />
      <p className="text-gray-400">Loading legal documents...</p>
    </div>
  </div>
);

const LegalPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    {
      id: "privacy",
      label: "Privacy Policy",
      icon: Shield,
      description: "How we collect and protect your data",
      hash: "privacy-policy",
    },
    {
      id: "terms",
      label: "Terms of Service",
      icon: Scale,
      description: "Rules and guidelines for using our services",
      hash: "terms-of-service",
    },
    {
      id: "aup",
      label: "Acceptable Use Policy",
      icon: Ban,
      description: "Permitted and prohibited uses of our services",
      hash: "acceptable-use-policy",
    },
  ];

  const getInitialTab = () => {
    const hash = location.hash.replace("#", "").split("#")[0];
    const tab = tabs.find((t) => t.hash === hash);
    return tab ? tab.id : "privacy";
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());
  const [activeSection, setActiveSection] = useState(null);
  const [legalContent, setLegalContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const initialLoadRef = useRef(true);
  const contentLoadedRef = useRef(false);

  const handleHash = useCallback(() => {
    const [mainHash, sectionHash] = location.hash.replace("#", "").split("#");
    const tab = tabs.find((t) => t.hash === mainHash);

    if (tab) {
      setActiveTab(tab.id);
      if (sectionHash) {
        setActiveSection(sectionHash);
        if (contentLoadedRef.current && !initialLoadRef.current) {
          requestAnimationFrame(() => {
            const element = document.getElementById(sectionHash);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          });
        }
      } else {
        setActiveSection(null);
      }
    } else if (!mainHash) {
      setActiveTab("privacy");
      navigate("#privacy-policy", { replace: true });
    }
  }, [location.hash, navigate]);

  useEffect(() => {
    const hash = location.hash.replace("#", "").split("#")[0];
    const tab = tabs.find((t) => t.hash === hash);
    if (tab) {
      setActiveTab(tab.id);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      requestAnimationFrame(handleHash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [handleHash]);

  useEffect(() => {
    const fetchLegalContent = async () => {
      try {
        const response = await fetch("/legal.json");
        const data = await response.json();
        setLegalContent(data);
        setIsLoading(false);
        contentLoadedRef.current = true;

        if (initialLoadRef.current) {
          const [, sectionHash] = location.hash.replace("#", "").split("#");
          if (sectionHash) {
            requestAnimationFrame(() => {
              const element = document.getElementById(sectionHash);
              if (element) {
                element.scrollIntoView({ behavior: "instant" });
              }
              initialLoadRef.current = false;
            });
          } else {
            initialLoadRef.current = false;
          }
        }
      } catch (error) {
        console.error("Error loading legal content:", error);
        setIsLoading(false);
        initialLoadRef.current = false;
      }
    };

    fetchLegalContent();
  }, [location.hash]);

  const handleTabChange = (tabId) => {
    if (initialLoadRef.current) {
      initialLoadRef.current = false;
    }
    const tab = tabs.find((t) => t.id === tabId);
    if (tab) {
      setActiveTab(tabId);
      setActiveSection(null);
      navigate(`#${tab.hash}`, { replace: true });
    }
  };

  const handleSectionClick = (sectionId) => {
    if (initialLoadRef.current) {
      initialLoadRef.current = false;
    }
    setActiveSection(sectionId);
    const tab = tabs.find((t) => t.id === activeTab);
    if (tab) {
      navigate(`#${tab.hash}#${sectionId}`, { replace: true });
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const currentContent = legalContent?.[activeTab];

  return (
    <div className="min-h-screen bg-gray-900 py-12 relative">
      <Helmet>
        <title>Legal Policies | GameHost</title>
      </Helmet>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.05),transparent_50%)]" />
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(50,50,50,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,50,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black, transparent)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Legal Documentation
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Please review our policies and terms carefully. These documents
            outline your rights and responsibilities when using our services.
          </p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          {tabs.map((tab) => (
            <LegalTab
              key={tab.id}
              {...tab}
              selected={activeTab === tab.id}
              onClick={handleTabChange}
            />
          ))}
        </div>

        {/* Content */}
        <div className="flex gap-12">
          {/* Table of Contents */}
          {currentContent?.sections && (
            <TableOfContents
              sections={currentContent.sections}
              activeSection={activeSection}
              onSectionClick={handleSectionClick}
            />
          )}

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {tabs.find((t) => t.id === activeTab)?.label}
                </h2>
                <LastUpdated date={currentContent?.lastUpdated} />
              </div>

              <div className="space-y-8">
                {currentContent?.sections?.map((section) => (
                  <Section
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    content={section.content}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            If you have any questions about these documents, please{" "}
            <a
              href="/contact"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
