import React from "react";

const WomenEmpowerment = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF8C00] to-[#e67d00] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
            Women Empowerment
          </h1>
          <p className="text-xl max-w-3xl opacity-95">
            Empowering women to break barriers, achieve their dreams, and lead
            change in their communities and beyond.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#333333] mb-6 font-['Poppins']">
                Empowering Women, Transforming Communities
              </h2>
              <p className="text-[#666] mb-4 text-lg">
                Our Women Empowerment program is dedicated to creating
                opportunities for women to thrive in all aspects of life. We
                believe that when women are empowered, entire communities
                benefit.
              </p>
              <p className="text-[#666] mb-4 text-lg">
                Through skills training, leadership development, mentorship
                programs, and economic opportunities, we help women build
                confidence, gain independence, and become agents of change.
              </p>
              <p className="text-[#666] text-lg">
                We work to break down barriers, challenge stereotypes, and
                create spaces where women can lead, innovate, and inspire.
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#333333] mb-4 font-['Poppins']">
                Program Areas
              </h3>
              <ul className="space-y-3 text-[#666]">
                <li className="flex items-start">
                  <span className="text-[#FF8C00] mr-2">✓</span>
                  <span>Skills Training & Vocational Education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF8C00] mr-2">✓</span>
                  <span>Leadership Development Programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF8C00] mr-2">✓</span>
                  <span>Entrepreneurship Support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF8C00] mr-2">✓</span>
                  <span>Mentorship & Networking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF8C00] mr-2">✓</span>
                  <span>Health & Wellness Programs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-[#FFF4CC] rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-[#333333] mb-8 text-center font-['Poppins']">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-[#333333] mb-2">500+</div>
                <div className="text-lg text-[#666]">Women Trained</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#333333] mb-2">100+</div>
                <div className="text-lg text-[#666]">Entrepreneurs Supported</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#333333] mb-2">50+</div>
                <div className="text-lg text-[#666]">Leadership Programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenEmpowerment;

