// components/Footer.js
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" border-t border-black shadow-sm bg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info - Takes up more space */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Ecomm</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
              Curating exceptional products for modern living. Quality, style,
              and innovation in every purchase.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-5">
              <a
                href="#"
                className="p-2.5 bg-white rounded-full shadow-sm border border-gray-200 text-gray-500 hover:text-gray-900 hover:shadow-md hover:border-gray-300 transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-white rounded-full shadow-sm border border-gray-200 text-gray-500 hover:text-gray-900 hover:shadow-md hover:border-gray-300 transition-all duration-300"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-white rounded-full shadow-sm border border-gray-200 text-gray-500 hover:text-gray-900 hover:shadow-md hover:border-gray-300 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-white rounded-full shadow-sm border border-gray-200 text-gray-500 hover:text-gray-900 hover:shadow-md hover:border-gray-300 transition-all duration-300"
                aria-label="Connect with us on LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Shop */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
                  Shop
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/electronics"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                    >
                      Electronics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/household"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                    >
                      Home & Living
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/clothing"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                    >
                      Clothing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/new-arrivals"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                    >
                      New Arrivals
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
                  Support
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shipping"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                    >
                      Shipping Info
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/returns"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                    >
                      Returns & Exchanges
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
                  Company
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                    >
                      Journal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Ecomm. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
