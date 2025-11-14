import React from "react";
import { Link } from "react-router-dom";

const DonationCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0066CC] to-[#0052a3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Poppins']">
          Make a Difference Today
        </h2>
        <p className="text-white text-lg mb-8 opacity-95">
          Your donation can change lives. Join us in our mission to empower
          dreams and enable inclusion for all.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/donate"
            className="bg-[#FF8C00] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#e67d00] transition-colors shadow-lg"
          >
            DONATE NOW
          </Link>
          <Link
            to="/get-involved"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0066CC] transition-colors"
          >
            VOLUNTEER
          </Link>
        </div>
        <p className="text-white text-sm mt-6 opacity-90">
          Every contribution matters. Together, we can build a brighter future.
        </p>
      </div>
    </section>
  );
};

export default DonationCTA;
