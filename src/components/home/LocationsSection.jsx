import React, { useState, useEffect, memo } from "react";
import {
  Server,
  Cpu,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
} from "lucide-react";
import { BackgroundEffects } from "../BackgroundEffects";

const LOCATIONS_DATA = [
  {
    region: "North America",
    icon: "🌎",
    networkStats: {
      averageLatency: "18ms",
      uptime: "99.99%",
      bandwidth: "100 Gbps",
    },
    cities: [
      {
        name: "New York",
        hardware: "AMD Ryzen 9 5950X",
        memory: "128GB DDR4",
        status: "operational",
      },
      {
        name: "Los Angeles",
        hardware: "AMD Ryzen 9 7950X",
        memory: "128GB DDR5",
        status: "operational",
      },
    ],
  },
  {
    region: "Europe",
    icon: "🌍",
    networkStats: {
      averageLatency: "16ms",
      uptime: "99.99%",
      bandwidth: "100 Gbps",
    },
    cities: [
      {
        name: "Frankfurt",
        hardware: "AMD Ryzen 9 7950X3D",
        memory: "128GB DDR5",
        status: "operational",
      },
      {
        name: "Amsterdam",
        hardware: "AMD Ryzen 9 7950X",
        memory: "256GB DDR5",
        status: "operational",
      },
    ],
  },
  {
    region: "Asia Pacific",
    icon: "🌏",
    networkStats: {
      averageLatency: "22ms",
      uptime: "99.99%",
      bandwidth: "100 Gbps",
    },
    cities: [
      {
        name: "Singapore",
        hardware: "AMD Ryzen 9 5950X",
        memory: "256GB DDR5",
        status: "operational",
      },
    ],
  },
];

const STATUS_CONFIGS = {
  operational: {
    color: "text-emerald-400 bg-emerald-500/10",
    icon: CheckCircle2,
    label: "Operational",
  },
  warning: {
    color: "text-amber-400 bg-amber-500/10",
    icon: AlertTriangle,
    label: "Warning",
  },
  critical: {
    color: "text-rose-400 bg-rose-500/10",
    icon: AlertCircle,
    label: "Critical",
  },
};

const StatusIndicator = memo(({ status, size = "small" }) => {
  const config = STATUS_CONFIGS[status.toLowerCase()];
  const Icon = config.icon;
  const iconSize = size === "small" ? 14 : 16;

  return (
    <div
      className={`flex items-center gap-2 px-2 py-1 rounded-full ${config.color}`}
      role="status"
      aria-label={`Status: ${config.label}`}
    >
      <Icon size={iconSize} aria-hidden="true" />
      <span className="text-xs capitalize">{config.label}</span>
    </div>
  );
});

const CityCard = memo(({ city }) => (
  <div
    className="group p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-all duration-300"
    role="region"
    aria-labelledby={`city-${city.name}`}
  >
    <div className="flex items-center justify-between mb-3">
      <div
        id={`city-${city.name}`}
        className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300"
      >
        {city.name}
      </div>
      <StatusIndicator status={city.status} />
    </div>

    <div className="space-y-3">
      <div className="flex items-center text-sm">
        <Cpu size={14} className="text-purple-400 mr-2" aria-hidden="true" />
        <span className="text-gray-400">{city.hardware}</span>
      </div>
      <div className="flex items-center text-sm">
        <Server size={14} className="text-blue-400 mr-2" aria-hidden="true" />
        <span className="text-gray-400">{city.memory}</span>
      </div>
    </div>
  </div>
));

const LocationCard = memo(({ location, isVisible, index }) => (
  <div
    className={`
      transform transition-all duration-500
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
    `}
    role="region"
    aria-labelledby={`region-${index}`}
  >
    <div className="h-full p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-hidden="true">
            {location.icon}
          </span>
          <h3
            id={`region-${index}`}
            className="text-xl font-semibold text-white"
          >
            {location.region}
          </h3>
        </div>
        <StatusIndicator status="operational" size="large" />
      </div>

      <div className="space-y-4">
        {location.cities.map((city, cityIndex) => (
          <CityCard key={cityIndex} city={city} />
        ))}
      </div>
    </div>
  </div>
));

const LocationsSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(
              (prev) => new Set([...prev, entry.target.dataset.item])
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    document
      .querySelectorAll("[data-item]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-20 bg-gray-900 relative overflow-hidden"
      aria-labelledby="locations-heading"
    >
      <BackgroundEffects />

      <div className="container mx-auto max-w-screen-xl px-4 md:px-6 relative">
        <div className="text-center mb-16 space-y-6">
          <h2 id="locations-heading" className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Global Infrastructure Network
            </span>
            <span className="block mt-1 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Built for Performance
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience low-latency gaming with our enterprise-grade hardware and
            globally distributed network infrastructure.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="region"
          aria-label="Data Center Locations"
        >
          {LOCATIONS_DATA.map((location, index) => (
            <div key={index} data-item={`location-${index}`}>
              <LocationCard
                location={location}
                index={index}
                isVisible={visibleItems.has(`location-${index}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(LocationsSection);
