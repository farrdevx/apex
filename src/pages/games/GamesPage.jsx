import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Users,
  Cpu,
  Shield,
  Crosshair,
  Clock,
  Box,
  Server,
  Search,
  ChevronsRight,
  Gamepad2,
  Activity,
  Zap,
} from "lucide-react";
import { BackgroundEffects } from "./../../components/BackgroundEffects";

const categories = [
  { id: "all", label: "All Games", icon: <Gamepad2 size={16} /> },
  { id: "survival", label: "Survival", icon: <Activity size={16} /> },
  { id: "fps", label: "FPS", icon: <Crosshair size={16} /> },
  { id: "sandbox", label: "Sandbox", icon: <Box size={16} /> },
];

const games = [
  {
    cover: "/images/covers/minecraft.png",
    title: "Minecraft",
    shortDesc: "World's most popular sandbox game",
    price: "$9.99/month",
    url: "/minecraft",
    category: "sandbox",
    popular: true,
  },
  // ... other games here mate
];

const CategoryButton = ({ id, label, selected, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`
      px-6 py-2 rounded-lg border transition-all duration-300
      ${selected
        ? "primary-button px-6 py-2 rounded-lg border-blue-600 text-white"
        : "bg-gray-800/50 border-gray-700/50 text-gray-400 hover:bg-gray-800 hover:text-white"
      }
    `}
  >
    {label}
  </button>
);

const GameCard = ({ game }) => {
  const { cover, title, shortDesc, price, url, popular } = game;

  return (
    <div className="group bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden hover:bg-gray-800 hover:border-blue-600/50 transition-all duration-300">
      {/* Game Image */}
      <div className="relative h-64 overflow-hidden">
        <img src={cover} alt={title} className="w-full h-full object-cover" />
        {popular && (
          <div className="absolute top-4 left-4 flex items-center gap-1 bg-blue-600 text-sm px-3 py-1 rounded-full">
            <Zap size={14} />
            <span>Popular</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{shortDesc}</p>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          <div>
            <p className="text-blue-400 font-medium">{price}</p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock size={12} />
              <span>Instant Setup</span>
            </div>
          </div>
          <Link
            to={url}
            className="primary-button px-6 py-2 rounded-lg items-center"
          >
            <span>Deploy Server</span>
            <ChevronsRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchBar = ({ value, onChange }) => (
  <div className="relative">
    <Search
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
      size={20}
    />
    <input
      type="text"
      placeholder="Search games..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl 
        focus:outline-none focus:border-blue-500/50 focus:ring-blue-500/10 
        transition-all duration-300 placeholder:text-gray-500"
    />
  </div>
);

const EmptyState = () => (
  <div className="text-center py-12">
    <Server size={48} className="mx-auto text-gray-600 mb-4" />
    <h3 className="text-xl font-semibold text-gray-400 mb-2">No games found</h3>
    <p className="text-gray-500">
      Try adjusting your search or filter criteria
    </p>
  </div>
);

const GamesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch =
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || game.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-900 py-12 relative">
      <Helmet>
        <title>Hosted Games | GameHost</title>
      </Helmet>
      <BackgroundEffects />
      <div className="container mx-auto max-w-screen-xl px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Game Server
            </span>
            <span className="block mt-2 text-blue-600">
              Hosting
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Deploy your game server in seconds with our optimized hosting
            solutions. Experience low latency, high performance, and 24/7
            support.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />

          {/* Categories */}
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                {...category}
                selected={selectedCategory === category.id}
                onClick={setSelectedCategory}
              />
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-sm text-gray-500">
            Showing {filteredGames.length}{" "}
            {filteredGames.length === 1 ? "game" : "games"}
          </div>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredGames.map((game) => (
              <GameCard key={game.title} game={game} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default GamesPage;
