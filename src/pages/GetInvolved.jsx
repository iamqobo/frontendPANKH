import React from "react";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
            Get Involved
          </h1>
          <p className="text-xl max-w-3xl opacity-95">
            Join us in creating change. There are many ways to get involved and
            make a difference.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4 font-['Poppins']">
                Volunteer
              </h3>
              <p className="text-[#666] mb-6">
                Share your time and skills to support our programs and make a
                direct impact in your community.
              </p>
              <Link
                to="/contact"
                className="text-[#0066CC] font-semibold hover:text-[#0052a3] transition-colors"
              >
                Contact Us →
              </Link>
            </div>

            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4 font-['Poppins']">
                Donate
              </h3>
              <p className="text-[#666] mb-6">
                Your financial support helps us expand our programs and reach
                more people in need.
              </p>
              <Link
                to="/donate"
                className="text-[#0066CC] font-semibold hover:text-[#0052a3] transition-colors"
              >
                Donate Now →
              </Link>
            </div>

            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4 font-['Poppins']">
                Partner
              </h3>
              <p className="text-[#666] mb-6">
                Partner with us to create larger impact through collaborations
                and joint initiatives.
              </p>
              <Link
                to="/contact"
                className="text-[#0066CC] font-semibold hover:text-[#0052a3] transition-colors"
              >
                Partner With Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;

