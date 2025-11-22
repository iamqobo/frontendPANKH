import React from "react";
import PodcastGuestForm from "../components/PodcastGuestForm";

const UdaanPodcast = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF8C00] to-[#e67d00] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
            Voices of Change – The Udan Podcast
          </h1>
          <p className="text-xl max-w-3xl opacity-95">
            Stories of empowerment, inclusion, and transformation. Listen to
            inspiring conversations that matter.
          </p>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-8 font-['Poppins']">
            Featured Episode
          </h2>
          <div className="bg-[#F5F5F5] rounded-lg p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="aspect-video bg-[#333333] rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🎧</div>
                    <p>YouTube / Spotify Embed</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1DB954] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#1aa34a] transition-colors"
                  >
                    Listen on Spotify
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF0000] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#e60000] transition-colors"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#333333] mb-4 font-['Poppins']">
                  Latest Episode: Voices of Inclusion
                </h3>
                <p className="text-[#666] mb-4 text-lg">
                  Join us for an inspiring conversation about breaking barriers
                  and creating inclusive communities. Our guest shares their
                  journey of empowerment and the impact of inclusion initiatives.
                </p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-[#333333] mb-2">
                    Episode Themes:
                  </h4>
                  <ul className="space-y-1 text-[#666]">
                    <li>• Empowerment</li>
                    <li>• Inclusion</li>
                    <li>• Child Rights</li>
                    <li>• Climate Action</li>
                    <li>• Technology for Good</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Episode Library */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#333333] mb-8 font-['Poppins']">
              Episode Library
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((episode) => (
                <div
                  key={episode}
                  className="bg-[#F5F5F5] rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-[#333333] rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl">🎧</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#333333] mb-2 font-['Poppins']">
                    Episode {episode}: Story Title
                  </h3>
                  <p className="text-[#666] text-sm mb-4">
                    Brief description of the episode content and themes.
                  </p>
                  <a
                    href="#"
                    className="text-[#FF8C00] font-semibold hover:text-[#e67d00] transition-colors"
                  >
                    Listen Now →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Hosts & Guests */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#333333] mb-8 font-['Poppins']">
              Hosts & Guests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F5F5F5] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#333333] mb-4 font-['Poppins']">
                  Our Hosts
                </h3>
                <p className="text-[#666]">
                  Our passionate hosts bring years of experience in social
                  impact, inclusion, and storytelling. They guide conversations
                  that inspire and inform.
                </p>
              </div>
              <div className="bg-[#F5F5F5] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#333333] mb-4 font-['Poppins']">
                  Featured Guests
                </h3>
                <p className="text-[#666]">
                  We feature changemakers, activists, entrepreneurs, and
                  community leaders who share their stories of transformation
                  and impact.
                </p>
              </div>
            </div>
          </div>

          {/* Guest Suggestion Form */}
          <div>
            <PodcastGuestForm />
          </div>
        </div>
      </section>

      {/* Subscribe Banner */}
      <section className="bg-[#2563EB] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-['Poppins']">
              SUBSCRIBE TO UDAAN
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#FF8C00] mb-4 font-['Poppins']">
              PODCAST
            </h3>
            <p className="text-white text-lg md:text-xl mb-8 opacity-95">
              Get notified when new episodes are released
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF8C00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e67d00] transition-colors text-center min-w-[150px]"
              >
                Spotify
              </a>
              <a
                href="https://podcasts.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2563EB] border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors text-center min-w-[150px]"
              >
                Apple Podcasts
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF8C00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e67d00] transition-colors text-center min-w-[150px]"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UdaanPodcast;

