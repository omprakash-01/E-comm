"use client"
import { useSearchParams } from "next/navigation";
import FilterSidebar from "./FilterSidebar";
import LaptopCard from "./LaptopCard";
import ApiLoading from "./ApiLoading";
import ApiError from "./ApiError";
import useFetchData from "@/hooks/useFetchData";


export default function LaptopStore() {
  const { data: laptopData, loading, error } = useFetchData("/api/laptops");

  const searchParams = useSearchParams();

  const brand = searchParams.get("brand") || "all";
  const ram = searchParams.get("ram") || "all";
  const ssd = searchParams.get("ssd") || "all";
  const os = searchParams.get("os") || "all";
  const gpu = searchParams.get("gpu") || "all";
  const priceRange = searchParams.get("priceRange") || "all";
  const searchQuery = searchParams.get("search") || "";

  // 🔍 Get filters from fetched data
  const brands = ["all", ...new Set(laptopData.map((item) => item.brand))];
  const rams = ["all", ...new Set(laptopData.map((item) => item.ram))];
  const ssds = ["all", ...new Set(laptopData.map((item) => item.ssd))];
  const oses = ["all", ...new Set(laptopData.map((item) => item.os))];
  const gpus = ["all", ...new Set(laptopData.map((item) => item.gpu))];
  const priceRanges = [
    "all",
    "under-1000",
    "1000-1500",
    "1500-2000",
    "over-2000",
  ];

  // 🔍 Filter logic
  const filteredLaptops = laptopData.filter((item) => {
    const matchesBrand = brand === "all" || item.brand === brand;
    const matchesRam = ram === "all" || item.ram === ram;
    const matchesSsd = ssd === "all" || item.ssd === ssd;
    const matchesOs = os === "all" || item.os === os;
    const matchesGpu = gpu === "all" || item.gpu === gpu;

    // Add search filter
    const matchesSearch =
      searchQuery === "" ||
      item.laptopName.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesPrice = true;
    if (priceRange === "under-1000") {
      matchesPrice = item.price < 1000;
    } else if (priceRange === "1000-1500") {
      matchesPrice = item.price >= 1000 && item.price <= 1500;
    } else if (priceRange === "1500-2000") {
      matchesPrice = item.price >= 1500 && item.price <= 2000;
    } else if (priceRange === "over-2000") {
      matchesPrice = item.price > 2000;
    }

    return (
      matchesBrand &&
      matchesRam &&
      matchesSsd &&
      matchesOs &&
      matchesGpu &&
      matchesPrice &&
      matchesSearch
    );
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-56 md:h-96">
        <ApiLoading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center text-gray-600 h-56 md:h-96 ">
        <ApiError error={error} />
      </div>
    );
  }
  if (laptopData.length === 0) {
    return (
      <>
        <div>
          <div className="bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              No Laptop Available
            </h2>
            <p className="text-gray-500 mb-4">
              We couldn't find any Laptop to display right now.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-slate-200 px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-10 drop-shadow-sm">
        Laptop Store
      </h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-80 lg:sticky top-4">
          <FilterSidebar
            brands={brands}
            rams={rams}
            ssds={ssds}
            oses={oses}
            gpus={gpus}
            priceRanges={priceRanges}
          />
        </div>

        {/* Laptops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredLaptops.map((laptop) => (
            <LaptopCard key={laptop._id} laptop={laptop} />
          ))}
        </div>
      </div>
    </div>
  );
}
