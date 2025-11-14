import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Purple Flower Logo SVG Component
  const FlowerLogo = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Five petals - darker purple */}
      <ellipse
        cx="20"
        cy="8"
        rx="6"
        ry="8"
        fill="#8B5CF6"
      />
      <ellipse
        cx="32"
        cy="20"
        rx="6"
        ry="8"
        fill="#8B5CF6"
        transform="rotate(72 20 20)"
      />
      <ellipse
        cx="20"
        cy="32"
        rx="6"
        ry="8"
        fill="#8B5CF6"
        transform="rotate(144 20 20)"
      />
      <ellipse
        cx="8"
        cy="20"
        rx="6"
        ry="8"
        fill="#8B5CF6"
        transform="rotate(216 20 20)"
      />
      <ellipse
        cx="28.5"
        cy="12"
        rx="6"
        ry="8"
        fill="#8B5CF6"
        transform="rotate(288 20 20)"
      />
      {/* Center circle - lighter purple */}
      <circle cx="20" cy="20" r="6" fill="#B794F6" />
    </svg>
  );

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity shrink-0"
          >
            <div className="flex items-center space-x-2 sm:space-x-3">
              <FlowerLogo />
              <div className="flex flex-col leading-tight">
                <span
                  className="text-[#333333] text-base sm:text-lg md:text-xl font-bold tracking-tight"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Pankhon Ki Udaan
                </span>
                
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2 flex-wrap justify-end">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                isActive("/")
                  ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                  : "text-[#333333] hover:text-[#0066CC] hover:bg-[#F5F5F5]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                isActive("/about")
                  ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                  : "text-[#333333] hover:text-[#0066CC] hover:bg-[#F5F5F5]"
              }`}
            >
              <span className="block">About Us</span>
            
            </Link>

            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 flex items-center space-x-1 whitespace-nowrap ${
                  location.pathname.startsWith("/programs") ||
                  location.pathname.startsWith("/udaan-talk") ||
                  location.pathname.startsWith("/udaan-podcast") ||
                  location.pathname.startsWith("/udaan-to-space") ||
                  location.pathname.startsWith("/women-empowerment") ||
                  location.pathname.startsWith("/disability-inclusion")
                    ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                    : "text-[#333333] hover:text-[#0066CC] hover:bg-[#F5F5F5]"
                }`}
              >
                <span>Programs</span>
                <svg
                  className="w-3 h-3 lg:w-4 lg:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isProgramsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <Link
                    to="/programs/udaan-talk"
                    className="block px-4 py-2.5 text-sm text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0066CC] transition-colors duration-200"
                  >
                    Udaan Talk
                  </Link>
                  <Link
                    to="/programs/udaan-podcast"
                    className="block px-4 py-2.5 text-sm text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0066CC] transition-colors duration-200"
                  >
                    Udaan Podcast
                  </Link>
                  <Link
                    to="/programs/udaan-to-space"
                    className="block px-4 py-2.5 text-sm text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0066CC] transition-colors duration-200"
                  >
                    Udaan to Space
                  </Link>
                  <Link
                    to="/programs/women-empowerment"
                    className="block px-4 py-2.5 text-sm text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0066CC] transition-colors duration-200"
                  >
                    Women Empowerment
                  </Link>
                  <Link
                    to="/programs/disability-inclusion"
                    className="block px-4 py-2.5 text-sm text-[#333333] hover:bg-[#F5F5F5] hover:text-[#009966] transition-colors duration-200"
                  >
                    Disability Inclusion
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/impact"
              className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                isActive("/impact")
                  ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                  : "text-[#333333] hover:text-[#0066CC] hover:bg-[#F5F5F5]"
              }`}
            >
              Impact
            </Link>
            <Link
              to="/media"
              className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                isActive("/media")
                  ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                  : "text-[#333333] hover:text-[#0066CC] hover:bg-[#F5F5F5]"
              }`}
            >
              Media
            </Link>
            <Link
              to="/events"
              className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                isActive("/events")
                  ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                  : "text-[#333333] hover:text-[#0066CC] hover:bg-[#F5F5F5]"
              }`}
            >
              Events
            </Link>
            <Link
              to="/team"
              className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                isActive("/team")
                  ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                  : "text-[#333333] hover:text-[#0066CC] hover:bg-[#F5F5F5]"
              }`}
            >
              <span className="block">Our Team</span>
            </Link>
            <Link
              to="/get-involved"
              className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                isActive("/get-involved")
                  ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                  : "text-[#333333] hover:text-[#0066CC] hover:bg-[#F5F5F5]"
              }`}
            >
              <span className="block">Get Involved</span>
            </Link>
            <Link
              to="/donate"
              className="px-4 lg:px-5 py-2 rounded-lg text-xs lg:text-sm font-semibold bg-[#FF8C00] text-white hover:bg-[#e67d00] transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
            >
              Donate
            </Link>
            <Link
              to="/shop"
              className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                isActive("/shop")
                  ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                  : "text-[#333333] hover:text-[#0066CC] hover:bg-[#F5F5F5]"
              }`}
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                isActive("/contact")
                  ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                  : "text-[#333333] hover:text-[#0066CC] hover:bg-[#F5F5F5]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="xl:hidden text-[#333333] p-2 hover:bg-[#F5F5F5] rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="xl:hidden pb-4 border-t border-gray-200 mt-2">
            <nav className="flex flex-col space-y-1 pt-4">
              <Link
                to="/"
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/")
                    ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                    : "text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0066CC]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/about")
                    ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                    : "text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0066CC]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="px-4 py-2">
                <button
                  className="text-sm font-medium text-[#333333] flex items-center justify-between w-full"
                  onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                >
                  Programs
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isProgramsOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link
                      to="/programs/udaan-talk"
                      className="block py-2 text-sm text-[#666] hover:text-[#0066CC]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Udaan Talk
                    </Link>
                    <Link
                      to="/programs/udaan-podcast"
                      className="block py-2 text-sm text-[#666] hover:text-[#0066CC]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Udaan Podcast
                    </Link>
                    <Link
                      to="/programs/udaan-to-space"
                      className="block py-2 text-sm text-[#666] hover:text-[#0066CC]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Udaan to Space
                    </Link>
                    <Link
                      to="/programs/women-empowerment"
                      className="block py-2 text-sm text-[#666] hover:text-[#0066CC]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Women Empowerment
                    </Link>
                    <Link
                      to="/programs/disability-inclusion"
                      className="block py-2 text-sm text-[#666] hover:text-[#009966]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Disability Inclusion
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/impact"
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/impact")
                    ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                    : "text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0066CC]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Impact
              </Link>
              <Link
                to="/media"
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/media")
                    ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                    : "text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0066CC]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Media
              </Link>
              <Link
                to="/events"
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/events")
                    ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                    : "text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0066CC]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/team"
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/team")
                    ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                    : "text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0066CC]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link
                to="/get-involved"
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/get-involved")
                    ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                    : "text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0066CC]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Involved
              </Link>
              <Link
                to="/donate"
                className="px-4 py-2.5 text-sm font-semibold bg-[#FF8C00] text-white rounded-lg hover:bg-[#e67d00] transition-colors duration-200 shadow-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
              <Link
                to="/shop"
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/shop")
                    ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                    : "text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0066CC]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive("/contact")
                    ? "text-[#0066CC] bg-[#F5F5F5] font-semibold"
                    : "text-[#333333] hover:bg-[#F5F5F5] hover:text-[#0066CC]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
      
      {/* Colored Bars Below Navigation */}
      <div className="flex h-1.5">
        <div className="flex-1 bg-[#0066CC]"></div>
        <div className="flex-1 bg-[#FF8C00]"></div>
        <div className="w-2 bg-white"></div>
        <div className="flex-1 bg-[#009966]"></div>
      </div>
    </header>
  );
};

export default Header;
