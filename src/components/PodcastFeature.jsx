import React from "react";
import { Link } from "react-router-dom";

const PodcastFeature = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#FF8C00] to-[#e67d00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Poppins']">
              Udan Podcast
            </h2>
            <p className="text-lg mb-6 opacity-95">
              Voices of Change – Stories of Empowerment, Inclusion, and
              Transformation. Listen to inspiring conversations that matter.
            </p>
            <p className="mb-6 opacity-90">
              Join us as we explore themes of empowerment, inclusion, child
              rights, climate action, and technology for good. Each episode
              brings you real stories from real people making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/programs/udaan-podcast"
                className="bg-white text-[#FF8C00] px-6 py-3 rounded-md font-semibold hover:bg-[#F5F5F5] transition-colors text-center"
              >
                Listen Now
              </Link>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#FF8C00] transition-colors text-center"
              >
                Listen on Spotify
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-xl">
            <div className="aspect-video bg-[#F5F5F5] rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="text-6xl mb-4">🎧</div>
                <p className="text-[#666]">Featured Episode</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#333333] mb-2 font-['Poppins']">
              Latest Episode: Voices of Inclusion
            </h3>
            <p className="text-[#666] mb-4">
              Join us for an inspiring conversation about breaking barriers and
              creating inclusive communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastFeature;

