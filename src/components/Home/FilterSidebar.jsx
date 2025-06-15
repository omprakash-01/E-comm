"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

export default function FilterSidebar({
  brands,
  rams,
  ssds,
  oses,
  gpus,
  priceRanges,
}) {
  const [showFilters, setShowFilters] = useState({
    brand: false,
    ram: false,
    ssd: false,
    os: false,
    gpu: false,
    priceRange: false,
  });

  const toggleFilter = (filterName) => {
    setShowFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const searchParams = useSearchParams();
  const router = useRouter();

  const brand = searchParams.get("brand") || "all";
  const ram = searchParams.get("ram") || "all";
  const ssd = searchParams.get("ssd") || "all";
  const os = searchParams.get("os") || "all";
  const gpu = searchParams.get("gpu") || "all";
  const priceRange = searchParams.get("priceRange") || "all";
  const searchQuery = searchParams.get("search") || "";

  // Local state for search input
  const [searchInput, setSearchInput] = useState(searchQuery);

  const handleFilterChange = (filterType, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete(filterType);
    } else {
      params.set(filterType, value);
    }
    router.replace(`?${params.toString()}`);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = () => {
    const params = new URLSearchParams(searchParams);

    if (searchInput.trim() === "") {
      params.delete("search");
    } else {
      params.set("search", searchInput);
    }
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden sticky top-4">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        </div>
      </div>

      <div className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
        {/* Search Filter */}
        <div className="border-b border-gray-100 pb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Search Laptop</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by laptop name..."
              value={searchInput}
              onChange={handleSearchInputChange}
              className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 focus:outline-none  placeholder-gray-400"
            />
            <button
              onClick={handleSearchClick}
              className="absolute right-0 text-white rounded-tr-lg rounded-br-lg  bg-blue-500 w-12 h-[49px]"
            >
              <Search className="pl-2" size={35} />
            </button>
          </div>
        </div>

        {/* Brand Filter */}
        <div className="border-b border-gray-100 pb-6">
          <button
            className="flex items-center justify-between w-full font-semibold text-gray-900 mb-4 hover:text-blue-600 transition-colors"
            onClick={() => toggleFilter("brand")}
          >
            <span>Brand</span>
            {showFilters.brand ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {showFilters.brand && (
            <div className="space-y-2">
              {brands.map((brandOption) => (
                <button
                  key={brandOption}
                  onClick={() => handleFilterChange("brand", brandOption)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                    brand === brandOption
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "hover:bg-gray-50 text-gray-700 border border-gray-200"
                  }`}
                >
                  {brandOption === "all" ? "All Brands" : brandOption}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RAM Filter */}
        <div className="border-b border-gray-100 pb-6">
          <button
            className="flex items-center justify-between w-full font-semibold text-gray-900 mb-4 hover:text-blue-600 transition-colors"
            onClick={() => toggleFilter("ram")}
          >
            <span>RAM</span>
            {showFilters.ram ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {showFilters.ram && (
            <div className="space-y-2">
              {rams.map((ramOption) => (
                <button
                  key={ramOption}
                  onClick={() => handleFilterChange("ram", ramOption)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                    ram === ramOption
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "hover:bg-gray-50 text-gray-700 border border-gray-200"
                  }`}
                >
                  {ramOption === "all" ? "All RAM" : `${ramOption} GB`}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* SSD Filter */}
        <div className="border-b border-gray-100 pb-6">
          <button
            className="flex items-center justify-between w-full font-semibold text-gray-900 mb-4 hover:text-blue-600 transition-colors"
            onClick={() => toggleFilter("ssd")}
          >
            <span>Storage</span>
            {showFilters.ssd ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {showFilters.ssd && (
            <div className="space-y-2">
              {ssds.map((ssdOption) => (
                <button
                  key={ssdOption}
                  onClick={() => handleFilterChange("ssd", ssdOption)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                    ssd === ssdOption
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "hover:bg-gray-50 text-gray-700 border border-gray-200"
                  }`}
                >
                  {ssdOption === "all" ? "All Storage" : `${ssdOption} GB`}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* OS Filter */}
        <div className="border-b border-gray-100 pb-6">
          <button
            className="flex items-center justify-between w-full font-semibold text-gray-900 mb-4 hover:text-blue-600 transition-colors"
            onClick={() => toggleFilter("os")}
          >
            <span>Operating System</span>
            {showFilters.os ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {showFilters.os && (
            <div className="space-y-2">
              {oses.map((osOption) => (
                <button
                  key={osOption}
                  onClick={() => handleFilterChange("os", osOption)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                    os === osOption
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "hover:bg-gray-50 text-gray-700 border border-gray-200"
                  }`}
                >
                  {osOption === "all" ? "All OS" : osOption}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* GPU Filter */}
        <div className="border-b border-gray-100 pb-6">
          <button
            className="flex items-center justify-between w-full font-semibold text-gray-900 mb-4 hover:text-blue-600 transition-colors"
            onClick={() => toggleFilter("gpu")}
          >
            <span>Graphics</span>
            {showFilters.gpu ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {showFilters.gpu && (
            <div className="space-y-2">
              {gpus.map((gpuOption) => (
                <button
                  key={gpuOption}
                  onClick={() => handleFilterChange("gpu", gpuOption)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                    gpu === gpuOption
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "hover:bg-gray-50 text-gray-700 border border-gray-200"
                  }`}
                >
                  {gpuOption === "all" ? "All Graphics" : gpuOption}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Price Range Filter */}
        <div>
          <button
            className="flex items-center justify-between w-full font-semibold text-gray-900 mb-4 hover:text-blue-600 transition-colors"
            onClick={() => toggleFilter("priceRange")}
          >
            <span>Price Range</span>
            {showFilters.priceRange ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {showFilters.priceRange && (
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => handleFilterChange("priceRange", range)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                    priceRange === range
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "hover:bg-gray-50 text-gray-700 border border-gray-200"
                  }`}
                >
                  {range === "all"
                    ? "All Prices"
                    : range === "under-1000"
                    ? "Under $1,000"
                    : range === "1000-1500"
                    ? "$1,000 - $1,500"
                    : range === "1500-2000"
                    ? "$1,500 - $2,000"
                    : "Over $2,000"}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
