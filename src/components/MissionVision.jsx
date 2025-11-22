import React from "react";

const MissionVision = () => {
  const pillars = [
    {
      icon: "💪",
      title: "Empower",
      description:
        "We empower individuals to realize their full potential through education, skills training, and opportunities.",
    },
    {
      icon: "📚",
      title: "Educate",
      description:
        "We provide quality education and learning platforms that inspire and transform lives.",
    },
    {
      icon: "🤝",
      title: "Include",
      description:
        "We create inclusive spaces where everyone, regardless of ability, can thrive and contribute.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Mission & Vision
          </h2>
          <p className="text-[#666] text-lg max-w-3xl mx-auto">
            Pankho Ki Udan Foundation is committed to empowering dreams and
            enabling inclusion through three core pillars:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-[#FFF4CC] rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{pillar.icon}</div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {pillar.title}
              </h3>
              <p className="text-[#666]">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#F5F5F5] rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Vision
            </h3>
            <p className="text-lg text-[#666] mb-6">
              A world where every individual, regardless of their background or
              abilities, has the opportunity to dream, learn, and achieve their
              full potential. We envision inclusive communities where diversity
              is celebrated and everyone can contribute meaningfully.
            </p>
            <h3 className="text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Mission
            </h3>
            <p className="text-lg text-[#666]">
              To create platforms and programs that empower, educate, and
              include. Through Udan Talk, Udan Podcast, Udan to Space, Women
              Empowerment, and Disability Inclusion initiatives, we work
              tirelessly to break barriers and light lives beyond limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

