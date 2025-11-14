import React from "react";
import { Link } from "react-router-dom";

const DisabilityInclusionHighlight = () => {
  return (
    <section className="py-16 bg-[#009966] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Poppins']">
              Lighting Lives Beyond Limits
            </h2>
            <p className="text-lg mb-6 opacity-95">
              Our Disability Inclusion program creates opportunities for
              differently-abled individuals through employment, para-sports, and
              accessible education.
            </p>
            <p className="mb-6 opacity-90">
              Through initiatives like the Love Candle project, we provide
              meaningful employment and training. We believe in inclusion that
              goes beyond accommodation – we create spaces where everyone can
              thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/programs/disability-inclusion"
                className="bg-white text-[#009966] px-6 py-3 rounded-md font-semibold hover:bg-[#F5F5F5] transition-colors text-center"
              >
                Learn More
              </Link>
              <Link
                to="/programs/disability-inclusion#need-help"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#009966] transition-colors text-center"
              >
                Need Help?
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 font-['Poppins']">
              Impact at a Glance
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="opacity-90">People Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">10,000+</div>
                <div className="opacity-90">Love Candles Made</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="opacity-90">Para-sports Athletes Supported</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisabilityInclusionHighlight;

