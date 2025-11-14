import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Pankhon Ki Udaan Foundation
          </h1>
          <p className="text-xl max-w-3xl opacity-95">
            Empowering Dreams, Enabling Inclusion
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#333333] mb-6">
              Who We Are
            </h2>
            <p className="text-[#666] mb-6 text-lg">
              Pankhon Ki Udaan Foundation is a non-profit organization
              dedicated to empowering individuals and communities through
              education, inclusion, and opportunity. We believe that every
              person, regardless of their background or abilities, deserves the
              chance to dream, learn, and achieve their full potential.
            </p>

            <h2 className="text-3xl font-bold text-[#333333] mb-6">
              Our Story
            </h2>
            <p className="text-[#666] mb-6 text-lg">
              Founded with a vision to create lasting change, Pankhon Ki Udaan
              has grown from a small initiative to a movement that touches
              thousands of lives. Our journey began with a simple belief: that
              inclusion and empowerment are not just ideals, but actionable
              goals that can transform communities.
            </p>

            <h2 className="text-3xl font-bold text-[#333333] mb-6">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#333333] mb-3">
                  Inclusion
                </h3>
                <p className="text-[#666]">
                  We create spaces where everyone belongs and can contribute
                  meaningfully.
                </p>
              </div>
              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#333333] mb-3">
                  Empowerment
                </h3>
                <p className="text-[#666]">
                  We provide tools, opportunities, and platforms for individuals
                  to realize their potential.
                </p>
              </div>
              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#333333] mb-3">
                  Integrity
                </h3>
                <p className="text-[#666]">
                  We operate with transparency, accountability, and ethical
                  practices.
                </p>
              </div>
              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#333333] mb-3">
                  Innovation
                </h3>
                <p className="text-[#666]">
                  We embrace creative solutions and new approaches to address
                  social challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

