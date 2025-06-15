"use client"
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

export default function AdminPage() {
    const router = useRouter();
    const { data: session } = useSession();

   
    if (!session) {
      router.push("/login");
      return null;
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-2xl">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h1 className="lg:text-4xl text-center text-2xl font-bold text-gray-900 underline underline-offset-4 tracking-wide">
            Admin Dashboard
          </h1>

        </div>

        {/* Admin Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Laptop Store Card */}
          <Link href="/admin/laptops" className="group">
            <div className="border border-gray-200 rounded-2xl p-8 bg-white hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-lg mb-6 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-emerald-600">
                  Laptop Store
                </h2>

              </div>
            </div>
          </Link>

          {/* Hero Section Card */}
          <Link href="/admin/herosection" className="group">
            <div className="border border-gray-200 rounded-2xl p-8 bg-white hover:shadow-2xl transition-all duration-300 hover:border-purple-500/30">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-lg mb-6 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-purple-600">
                  Hero Section
                </h2>

              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
