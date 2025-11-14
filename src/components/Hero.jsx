import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80)",
          filter: "blur(3px)",
          transform: "scale(1.1)",
        }}
      >
        <div className="absolute inset-0 bg-[#0066CC]/60"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Creating lasting change through education, empowerment, and
              inclusion.
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 drop-shadow-md max-w-2xl">
              Join us in lighting lives beyond limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/donate"
                className="bg-[#FF8C00] text-white px-8 py-4 text-base font-semibold hover:bg-[#e67d00] transition-colors shadow-lg rounded-md text-center"
              >
                Donate Now
              </Link>
              <Link
                to="/get-involved"
                className="bg-white text-[#0066CC] px-8 py-4 text-base font-semibold hover:bg-[#F5F5F5] transition-colors shadow-lg rounded-md text-center"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
