import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  HelpCircle,
  ChevronRight,
  Gamepad2,
  RefreshCw,
  Zap,
} from "lucide-react";

const ActionButton = ({ to, primary = false, children, icon: Icon }) => (
  <Link
    to={to}
    className={`
      group relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg
      transition-all duration-300 transform hover:scale-105 overflow-hidden
      ${primary
        ? "text-white"
        : "text-gray-200 border border-blue-600/50 hover:border-blue-500"
      }
    `}
  >
    {primary && (
      <>
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-opacity duration-200 
          group-hover:opacity-90"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200
          bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_50%)]"
        />
      </>
    )}
    <Icon
      size={20}
      className={`relative transition-all duration-300 ${primary
        ? "group-hover:rotate-12"
        : "text-blue-400 group-hover:scale-110"
        }`}
    />
    <span className="relative font-medium">{children}</span>
  </Link>
);

const QuickLink = ({ icon, label, path }) => (
  <Link
    to={path}
    className="group flex items-center gap-2 p-2 rounded-lg text-gray-400 
      hover:text-gray-200 hover:bg-gray-800/50 transition-all duration-300
      border border-transparent hover:border-gray-700/50"
  >
    <span className="transition-transform duration-300 group-hover:scale-110 text-blue-400">
      {icon}
    </span>
    <span className="flex-1">{label}</span>
    <ChevronRight
      size={14}
      className="opacity-0 group-hover:opacity-100 transform -translate-x-2 
        group-hover:translate-x-0 transition-all duration-300"
    />
  </Link>
);

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.08),transparent_50%)]" />
        <div className="absolute inset-0">
          <div
            className="absolute -top-48 -left-48 w-96 h-96 bg-blue-500/10 rounded-full 
            mix-blend-multiply filter blur-xl animate-pulse"
          />
          <div
            className="absolute -top-48 -right-48 w-96 h-96 bg-purple-500/10 rounded-full 
            mix-blend-multiply filter blur-xl animate-pulse"
          />
          <div
            className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-500/10 rounded-full 
            mix-blend-multiply filter blur-xl animate-pulse"
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

      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Game Controller Icon */}
          <div className="mb-12 relative">
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-ping" />
              <div className="absolute inset-0 bg-blue-600/10 rounded-full animate-pulse" />
              <div
                className="relative w-full h-full bg-blue-600/10 rounded-full 
                flex items-center justify-center backdrop-blur-sm border border-blue-500/20"
              >
                <Gamepad2 size={64} className="text-blue-400" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl sm:text-8xl font-bold">
              <div className="flex items-center justify-center gap-4">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  4
                </span>
                <Gamepad2 size={56} className="text-blue-400" />
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  4
                </span>
              </div>
              <span className="block text-xl sm:text-3xl mt-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Game Over! Page Not Found
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
              Looks like you've encountered a glitch in the matrix! Don't worry,
              you can respawn back to safety using the links below.
            </p>

            {/* Game Stats */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2 bg-gray-800/30 rounded-lg px-4 py-2 border border-gray-700/50">
                <RefreshCw size={16} className="text-blue-400" />
                <span>Respawns Available: ∞</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/30 rounded-lg px-4 py-2 border border-gray-700/50">
                <Zap size={16} className="text-yellow-400" />
                <span>Power Level: 404</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ActionButton to="/" primary icon={Home}>
              Respawn at Home
            </ActionButton>
            <ActionButton to="/support" icon={HelpCircle}>
              Call for Backup
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
