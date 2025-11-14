import React from "react";

const UdaanToSpace = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
            Udaan to Space
          </h1>
          <p className="text-xl max-w-3xl opacity-95">
            Inspiring the next generation of scientists, engineers, and
            explorers through space education and innovation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#333333] mb-6 font-['Poppins']">
                About Udaan to Space
              </h2>
              <p className="text-[#666] mb-4 text-lg">
                Udaan to Space is our innovative program that brings the wonders
                of space science and exploration to students everywhere. We
                believe that inspiring curiosity about the universe can ignite
                passion for STEM fields and open doors to incredible
                opportunities.
              </p>
              <p className="text-[#666] mb-4 text-lg">
                Through hands-on workshops, rocket building competitions,
                astronomy sessions, and career guidance, we help young minds
                reach for the stars – both literally and figuratively.
              </p>
              <p className="text-[#666] text-lg">
                Our program is designed to be accessible and inclusive,
                ensuring that every student, regardless of their background, can
                explore the cosmos and discover their potential.
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#333333] mb-4 font-['Poppins']">
                Program Highlights
              </h3>
              <ul className="space-y-4 text-[#666]">
                <li className="flex items-start">
                  <span className="text-[#0066CC] mr-2 text-xl">⭐</span>
                  <div>
                    <strong className="text-[#333333]">Space Science Workshops</strong>
                    <p className="text-sm">Hands-on learning about planets, stars, and space technology</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0066CC] mr-2 text-xl">⭐</span>
                  <div>
                    <strong className="text-[#333333]">Rocket Building Competitions</strong>
                    <p className="text-sm">Design and launch your own rockets</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0066CC] mr-2 text-xl">⭐</span>
                  <div>
                    <strong className="text-[#333333]">Astronomy Sessions</strong>
                    <p className="text-sm">Stargazing and learning about the night sky</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0066CC] mr-2 text-xl">⭐</span>
                  <div>
                    <strong className="text-[#333333]">STEM Career Guidance</strong>
                    <p className="text-sm">Pathways to careers in science and engineering</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] rounded-lg p-8 md:p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center font-['Poppins']">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">1000+</div>
                <div className="text-lg opacity-90">Students Reached</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Workshops Conducted</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">200+</div>
                <div className="text-lg opacity-90">Rockets Launched</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UdaanToSpace;

