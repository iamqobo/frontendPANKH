import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const journeyMilestones = [
    {
      year: "2015",
      title: "FOUNDATION ESTABLISHED",
      description: "Started our journey in Indore with a vision to empower communities.",
    },
    {
      year: "2017",
      title: "FIRST 100 VILLAGES",
      description: "Reached 100 villages with women empowerment programs.",
    },
    {
      year: "2019",
      title: "TechUdan Launched",
      description: "Introduced AR/VR learning in government schools.",
    },
    {
      year: "2021",
      title: "50,000 Children Protected",
      description: "Good Touch-Bad Touch programs reached milestone.",
    },
    {
      year: "2023",
      title: "UN SDG Recognition",
      description: "Officially aligned with United Nations SDG goals.",
    },
    {
      year: "2024",
      title: "Project 1% Initiated",
      description: "Launched ambitious mission to reach 1% of India.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Our Story Banner Section */}
      <section className="bg-gradient-to-b from-[#0B63CE] to-[#0047A3] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide font-['Poppins']">
            OUR <span className="text-[#FF9F1C]">STORY</span>
          </h2>

          <div className="mt-6 flex items-center justify-center gap-3 text-lg text-[#E0F2FF]">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FF9F1C] text-[#0B63CE]">
              {/* Location pin icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 2.25A6.75 6.75 0 0 0 5.25 9c0 1.906.76 3.6 1.713 5.043a31.27 31.27 0 0 0 2.88 3.75 34.37 34.37 0 0 0 1.92 2.1l.015.014.004.004.002.002A.75.75 0 0 0 12 20.25a.75.75 0 0 0 .216-.337l.002-.002.004-.004.015-.014a34.38 34.38 0 0 0 1.92-2.1 31.27 31.27 0 0 0 2.88-3.75C18 12.6 18.75 10.906 18.75 9A6.75 6.75 0 0 0 12 2.25Zm0 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
            </span>
            <p className="text-base md:text-lg">
              Based in Indore, Madhya Pradesh
            </p>
          </div>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-[#E0F2FF]">
            Pankh Ki Udaan Foundation was born from a simple yet powerful
            belief: every individual deserves the opportunity to dream, grow,
            and create positive change. Since 2015, we've been working
            tirelessly to empower marginalized communities through education,
            protection, and sustainable development initiatives aligned with UN
            SDGs.
          </p>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="bg-[#F8FAFF] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase text-[#8C8C8C] font-semibold">
              Timeline
            </p>
            <h2 className="text-4xl font-bold font-['Poppins'] text-[#1F1F1F] mt-3">
              OUR{" "}
              <span className="bg-gradient-to-r from-[#0F52BA] via-[#3B82F6] to-[#F59E0B] text-transparent bg-clip-text">
                JOURNEY
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#0F52BA] via-[#3B82F6] to-[#F59E0B]" />

            <div className="space-y-16">
              {journeyMilestones.map((milestone, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={milestone.year}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  >
                    {/* Card */}
                    <div
                      className={`order-2 md:order-1 ${
                        isLeft
                          ? "md:col-start-1 md:text-left"
                          : "md:col-start-2 md:text-right"
                      }`}
                    >
                      <div className="bg-white rounded-2xl shadow-xl border border-[#F1F1F1] px-8 py-6 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-l-2xl before:bg-gradient-to-b before:from-[#0F52BA] before:to-[#F59E0B]">
                        <p className="text-3xl font-bold text-[#F59E0B]">
                          {milestone.year}
                        </p>
                        <h3 className="text-xl font-semibold text-[#1F1F1F] mt-4 uppercase tracking-wide">
                          {milestone.title}
                        </h3>
                        <p className="text-[#6C6C6C] mt-3 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    
                  </div>
                );
              })}
            </div>
          </div>
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
              Pankh Ki Udaan Foundation is a non-profit organization
              dedicated to empowering individuals and communities through
              education, inclusion, and opportunity. We believe that every
              person, regardless of their background or abilities, deserves the
              chance to dream, learn, and achieve their full potential.
            </p>

            <h2 className="text-3xl font-bold text-[#333333] mb-6">
              Our Story
            </h2>
            <p className="text-[#666] mb-6 text-lg">
              Founded with a vision to create lasting change, Pankh Ki Udaan
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

      {/* Invite Udaan Talk CTA */}
      <section className="bg-gradient-to-b from-[#0B63CE] to-[#0047A3] text-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide font-['Poppins']">
            INVITE UDAAN TALK TO YOUR{" "}
            <span className="text-[#FF9F1C]">ORGANIZATION</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#E0F2FF] max-w-3xl mx-auto">
            Bring inspiring stories of real heroes to your school, college, or
            corporate event.
          </p>
          <div className="mt-10">
            <Link
              to="/programs/udaan-talk"
              className="inline-flex items-center justify-center rounded-full bg-[#FF9F1C] hover:bg-[#ff8c00] text-white font-semibold px-8 md:px-10 py-3 md:py-3.5 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B63CE] focus:ring-[#FF9F1C]"
            >
              Request Udaan Talk Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

