import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Cpu,
  HardDrive,
  Wifi,
  Globe,
  Search,
  Filter,
  CheckCircle,
  Clock,
  AlertCircle,
  PowerIcon,
  Shield,
  Server,
  ChevronLeft,
  MemoryStick,
} from "lucide-react";

const VPSList = () => {
  const [locationFilter, setLocationFilter] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const locations = [
    { id: "na", name: "North America" },
    { id: "eu", name: "Europe" },
    { id: "asia", name: "Asia Pacific" },
  ];

  const servers = [
    {
      id: "starter",
      name: "VPS Starter",
      specs: {
        cpu: "AMD EPYC",
        cores: 2,
        threads: 2,
        ram: 4,
        storage: "80GB NVMe SSD",
        bandwidth: "2 TB",
        ddosProtection: "10 Tbps",
      },
      location: "na",
      price: 19.99,
      status: "available",
      stockCount: 50,
      setupFee: 0,
      features: [
        "Basic DDoS Protection",
        "Full Root Access",
        "Instant Deployment",
        "Dedicated IP",
      ],
      href: "/checkout/vps/starter-2c-4gb",
    },
    {
      id: "business",
      name: "VPS Business",
      specs: {
        cpu: "AMD EPYC",
        cores: 4,
        threads: 4,
        ram: 8,
        storage: "160GB NVMe SSD",
        bandwidth: "4 TB",
        ddosProtection: "10 Tbps",
      },
      location: "eu",
      price: 39.99,
      status: "available",
      stockCount: 30,
      setupFee: 0,
      features: [
        "Advanced DDoS Protection",
        "Full Root Access",
        "Priority Support",
        "Dedicated IP",
      ],
      href: "/checkout/vps/business-4c-8gb",
    },
    {
      id: "professional",
      name: "VPS Professional",
      specs: {
        cpu: "AMD EPYC",
        cores: 6,
        threads: 6,
        ram: 16,
        storage: "320GB NVMe SSD",
        bandwidth: "6 TB",
        ddosProtection: "10 Tbps",
      },
      location: "asia",
      price: 59.99,
      status: "reserved",
      stockCount: 0,
      setupFee: 0,
      features: [
        "Premium DDoS Protection",
        "Full Root Access",
        "24/7 Priority Support",
        "Multiple IPs",
      ],
      href: "/checkout/vps/professional-6c-16gb",
    },
    {
      id: "enterprise",
      name: "VPS Enterprise",
      specs: {
        cpu: "AMD EPYC",
        cores: 8,
        threads: 8,
        ram: 32,
        storage: "640GB NVMe SSD",
        bandwidth: "10 TB",
        ddosProtection: "10 Tbps",
      },
      location: "na",
      price: 99.99,
      status: "available",
      stockCount: 15,
      setupFee: 0,
      features: [
        "Enterprise DDoS Protection",
        "Full Root Access",
        "24/7 Priority Support",
        "Custom IP Range",
      ],
      href: "/checkout/vps/enterprise-8c-32gb",
    },
  ];

  const getStatusBadge = (status, stockCount) => {
    switch (status) {
      case "available":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
            <CheckCircle className="w-3 h-3 mr-1" />
            {stockCount} В наличии
          </span>
        );
      case "reserved":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-500">
            <Clock className="w-3 h-3 mr-1" />
            Зарезервировано
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-500">
            <AlertCircle className="w-3 h-3 mr-1" />
            Нет в наличии
          </span>
        );
    }
  };

  const filteredServers = servers.filter((server) => {
    const matchesLocation =
      locationFilter === "all" || server.location === locationFilter;
    const matchesAvailability =
      availabilityFilter === "all" ||
      (availabilityFilter === "available" && server.status === "available") ||
      (availabilityFilter === "unavailable" && server.status !== "available");
    const matchesSearch =
      server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      server.specs.cpu.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesLocation && matchesAvailability && matchesSearch;
  });

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Helmet>
        <title>Тарифы VPS | PrivateHub</title>
      </Helmet>
      <div className="max-w-screen-2xl mx-auto px-4 py-8">
        {/* Back Button & Header */}
        <div className="mb-8">
          <a
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            На главную
          </a>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <h1 className="text-2xl md:text-5xl font-bold mb-2">
                Виртуальные сервера
              </h1>
              <p className="text-gray-400 text-base md:text-2xl font-semibold max-w-fit">
                В разработке
              </p>
            </div>

            {/* Quick Stats
            <div className="flex gap-4 md:gap-6 w-full md:w-auto justify-between md:justify-start">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-purple-900">
                  24/7
                </div>
                <div className="text-xs md:text-sm text-gray-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-purple-900">
                  2.5 Tbps
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  DDoS Protection
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Search & Filters
        <div className="bg-gray-900/50 backdrop-blur p-6 rounded-lg mb-8 border border-gray-800">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by name or CPU..."
                className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-900 transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-white appearance-none focus:outline-none focus:border-purple-900 transition-colors"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option value="all">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-white appearance-none focus:outline-none focus:border-purple-900 transition-colors"
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
              >
                <option value="all">All Availability</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
          </div>
        </div> */}

        {/* Server Listings
        <div className="space-y-4">
          {filteredServers.map((server) => (
            <div
              key={server.id}
              className="bg-gray-900/50 backdrop-blur rounded-lg border border-gray-800 hover:border-purple-900/50 transition-colors overflow-hidden"
            > */}
              {/* Main Content */}
              {/* <div className="p-4 md:p-6"> */}
                {/* <div className="flex flex-col md:grid md:grid-cols-12 gap-6"> */}
                  {/* Server Info */}
                  {/* <div className="md:col-span-3">
                    <div className="flex items-start justify-between md:block">
                      <div>
                        <h3 className="text-lg md:text-xl font-medium text-white">
                          {server.name}
                        </h3>
                        <div className="mt-2 mb-3">
                          {getStatusBadge(server.status, server.stockCount)}
                        </div>
                      </div>
                      {/* Price for mobile */}
                      {/* <div className="text-right md:hidden">
                        <div className="text-2xl font-bold text-white">
                          ${server.price}
                        </div>
                        <div className="text-sm text-gray-400">/month</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Globe className="w-4 h-4" />
                      {locations.find((loc) => loc.id === server.location).name}
                    </div> */}
                  {/* </div> */}

                  {/* Specs */}
                  {/* <div className="md:col-span-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-purple-900 flex-shrink-0" />
                          <div>
                            <div className="text-gray-300 text-sm md:text-base">
                              {server.specs.cpu}
                            </div>
                            <div className="text-gray-500 text-xs md:text-sm">
                              {server.specs.cores}C/{server.specs.threads}T
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <MemoryStick className="w-4 h-4 text-purple-900 flex-shrink-0" />
                          <div className="text-gray-300 text-sm md:text-base">
                            {server.specs.ram} GB RAM
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <HardDrive className="w-4 h-4 text-purple-900 flex-shrink-0" />
                          <div>
                            <div className="text-gray-300 text-sm md:text-base">
                              {server.specs.storage}
                            </div>
                            <div className="text-gray-500 text-xs md:text-sm">
                              NVMe SSD
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-purple-900 flex-shrink-0" />
                          <div className="text-gray-300 text-sm md:text-base">
                            {server.specs.bandwidth} Bandwidth
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* Price & Order - Desktop only */}
                  {/* <div className="hidden md:block md:col-span-3 text-right">
                    <div className="text-3xl font-bold text-white">
                      ${server.price}
                    </div>
                    <div className="text-sm text-gray-400 mb-2">/month</div>
                    <div className="text-sm text-gray-400 mb-4">
                      {server.setupFee === 0
                        ? "No setup fee"
                        : `+ $${server.setupFee} setup`}
                    </div>
                    <a
                      href={server.href}
                      className="w-full bg-purple-900 py-2 px-4 rounded-lg text-white font-medium hover:bg-purple-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-block text-center"
                      style={{
                        pointerEvents:
                          server.status !== "available" ? "none" : "auto",
                      }}
                    >
                      {server.status === "available"
                        ? "Deploy Now"
                        : "Unavailable"}
                    </a>
                  </div> */}

                  {/* Mobile Order Button */}
                  {/* <div className="md:hidden">
                    <div className="text-sm text-gray-400 text-center mb-2">
                      {server.setupFee === 0
                        ? "No setup fee"
                        : `+ $${server.setupFee} setup`}
                    </div>
                    <a
                      href={server.href}
                      className="w-full bg-purple-900 py-2 px-4 rounded-lg text-white font-medium hover:bg-purple-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-block text-center"
                      style={{
                        pointerEvents:
                          server.status !== "available" ? "none" : "auto",
                      }}
                    >
                      {server.status === "available"
                        ? "Deploy Now"
                        : "Unavailable"}
                    </a>
                  </div> */}
                {/* </div>
              </div> */}

              {/* Features Footer 
              // <div className="px-4 md:px-6 py-3 border-t border-gray-800 bg-gray-900/30">
              //   <div className="flex flex-wrap gap-4">
              //     {server.features.map((feature, index) => (
              //       <div
              //         key={index}
              //         className="flex items-center gap-1 text-xs md:text-sm text-gray-400"
              //       >
              //         <CheckCircle className="w-3 h-3 text-purple-900" />
              //         {feature}
              //       </div>
              //     ))}
              //   </div>
              // </div>
            </div>
          ))}*/}
        {/* </div> */}
      </div>
    </div>
  );
};

export default VPSList;
