import React from "react";
import { Link } from "react-router-dom";

const UdaanToSpacePreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] rounded-lg p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Poppins']">
                Udaan to Space
              </h2>
              <p className="text-lg mb-6 opacity-95">
                Inspiring the next generation of scientists, engineers, and
                explorers. Our space education program brings the wonders of the
                universe to students everywhere.
              </p>
              <p className="mb-6 opacity-90">
                Through workshops, competitions, and hands-on learning, we're
                helping young minds reach for the stars and discover their
                potential in STEM fields.
              </p>
              <Link
                to="/programs/udaan-to-space"
                className="inline-block bg-[#FF8C00] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#e67d00] transition-colors"
              >
                Explore Udaan to Space →
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 font-['Poppins']">
                Program Highlights
              </h3>
              <ul className="space-y-3 opacity-95">
                <li className="flex items-start">
                  <span className="mr-2">⭐</span>
                  <span>Space Science Workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">⭐</span>
                  <span>Rocket Building Competitions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">⭐</span>
                  <span>Astronomy Sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">⭐</span>
                  <span>STEM Career Guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UdaanToSpacePreview;

