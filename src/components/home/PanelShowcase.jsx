import React from "react";
import {
  Terminal,
  HardDrive,
  Settings,
  BarChart2,
  Clock,
  Database,
  FolderOpen,
  Users,
} from "lucide-react";
import { BackgroundEffects } from "../BackgroundEffects";

const PanelFeature = ({ icon: Icon, title, description }) => (
  <div
    className="group p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 
    hover:bg-gray-800 transition-all duration-300"
  >
    <div
      className="inline-flex p-3 rounded-lg bg-blue-500/10 mb-4
      transform transition-all duration-300 group-hover:scale-110"
    >
      <Icon size={24} className="text-blue-400" />
    </div>
    <h3
      className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 
      transition-colors duration-300"
    >
      {title}
    </h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const ServerInterfaceShowcase = () => {
  const features = [
    {
      icon: BarChart2,
      title: "Real-time Monitoring",
      description:
        "Monitor CPU, memory, disk, and network usage in real-time with detailed metrics and graphs.",
    },
    {
      icon: Terminal,
      title: "Advanced Console",
      description:
        "Full terminal access with command history, syntax highlighting, and custom scripts support.",
    },
    {
      icon: FolderOpen,
      title: "File Management",
      description:
        "Built-in file manager with drag-and-drop support, file editor, and zip archive handling.",
    },
    {
      icon: Database,
      title: "Database Access",
      description:
        "Direct database management with MySQL support and automated backups.",
    },
  ];

  const sidebarFeatures = [
    { icon: <BarChart2 size={20} />, label: "Dashboard" },
    { icon: <Terminal size={20} />, label: "Console" },
    { icon: <FolderOpen size={20} />, label: "File Manager" },
    { icon: <Database size={20} />, label: "Databases" },
    { icon: <Clock size={20} />, label: "Schedules" },
    { icon: <Users size={20} />, label: "User Management" },
    { icon: <HardDrive size={20} />, label: "Backups" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <BackgroundEffects />

      <div className="container mx-auto max-w-screen-xl px-6 relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powerful Control Panel
            </span>
            <span className="block mt-2 text-blue-600">
              Everything You Need
            </span>
          </h2>
        </div>

        {/* Interface Preview */}
        <div className="relative mb-16 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
          <div className="flex">
            {/* Sidebar Preview */}
            <div className="hidden md:block w-56 bg-gray-800/30 rounded-lg border-r border-gray-700/50 p-3 space-y-1">
              {sidebarFeatures.map((item, index) => (
                <div
                  key={index}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 
                    ${index === 1
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-700/50 hover:text-gray-200"
                    }
                  `}
                >
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex-1 pl-4">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                {[
                  { label: "CPU Load", value: "0.28%", color: "blue" },
                  { label: "Memory", value: "1.2 GiB", color: "purple" },
                  { label: "Disk", value: "132 MiB", color: "green" },
                  { label: "Network", value: "12.75 MiB", color: "yellow" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50"
                  >
                    <div className="text-sm text-gray-400">{stat.label}</div>
                    <div className="text-lg font-semibold text-white">
                      {stat.value}
                    </div>
                    <div className="mt-2 bg-gray-700/50 rounded-full h-1">
                      <div
                        className={`h-full w-1/4 bg-${stat.color}-500 rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Console Preview */}
              <div className="bg-gray-800/50 rounded-lg border border-gray-700/50">
                <div className="px-4 py-2 border-b border-gray-700/50 flex items-center justify-between">
                  <span className="text-sm text-gray-400">Terminal</span>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="p-4 font-mono text-sm max-h-48 overflow-hidden">
                  <div className="text-blue-400">
                    $ Server marked as running...
                  </div>
                  <div className="text-gray-300">$ Java version: 1.20.4</div>
                  <div className="text-gray-300">
                    $ Starting Minecraft server...
                  </div>
                  <div className="text-yellow-400">
                    $ Skipping malware scan...
                  </div>
                  <div className="text-green-400">
                    $ World generation complete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <PanelFeature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerInterfaceShowcase;
