// components/Navbar.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="w-full shadow-sm border border-b bg-white ">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between h-20">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={48}
                    height={48}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>

            {/* Center: Nav Links */}
            <div className="flex items-center space-x-12">
              <Link
                href="/cloths"
                className="relative text-gray-700 font-medium tracking-wide transition-all duration-300 hover:text-gray-900 group"
              >
                Clothing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/electronics"
                className="relative text-gray-700 font-medium tracking-wide transition-all duration-300 hover:text-gray-900 group"
              >
                Electronics
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/household"
                className="relative text-gray-700 font-medium tracking-wide transition-all duration-300 hover:text-gray-900 group"
              >
                Home & Living
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Right: Login Button */}
            <div>
              <Link
                href="/login"
                className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/25 hover:-translate-y-0.5"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="relative overflow-hidden rounded-lg">
                  <Image src="/logo.png" alt="logo" width={36} height={36} />
                </div>
              </Link>
            </div>

            {/* Right: Login & Menu Toggle */}
            <div className="flex items-center space-x-3">
              <Link
                href="/login"
                className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-300"
              >
                Sign In
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-all duration-300 "
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                <div className="w-6 h-6 flex flex-col justify-around">
                  <span
                    className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                      isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 bg-white/95 backdrop-blur-md border-t border-gray-100">
            <div className="space-y-4">
              <Link
                href="/cloths"
                className="block text-gray-700 font-medium tracking-wide hover:text-gray-900 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Clothing
              </Link>
              <Link
                href="/electronics"
                className="block text-gray-700 font-medium tracking-wide hover:text-gray-900 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Electronics
              </Link>
              <Link
                href="/household"
                className="block text-gray-700 font-medium tracking-wide hover:text-gray-900 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home & Living
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
