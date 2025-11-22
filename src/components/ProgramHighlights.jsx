import React from "react";
import { Link } from "react-router-dom";

const ProgramHighlights = () => {
  const programs = [
    {
      id: 1,
      title: "Udan Talk",
      description:
        "A platform for young minds to share ideas, inspire change, and speak like TED. Empowering voices, one talk at a time.",
      icon: "🎤",
      link: "/programs/udaan-talk",
      color: "bg-[#0066CC]",
    },
    {
      id: 2,
      title: "Udan Podcast",
      description:
        "Voices of change, stories of empowerment. Listen to inspiring conversations about inclusion, rights, and transformation.",
      icon: "🎧",
      link: "/programs/udaan-podcast",
      color: "bg-[#FF8C00]",
    },
    {
      id: 3,
      title: "Udan to Space",
      description:
        "Reaching for the stars! Inspiring the next generation of scientists and explorers through space education and innovation.",
      icon: "🚀",
      link: "/programs/udaan-to-space",
      color: "bg-[#009966]",
    },
    {
      id: 4,
      title: "Women Empowerment",
      description:
        "Empowering women to break barriers, achieve their dreams, and lead change in their communities and beyond.",
      icon: "👩‍💼",
      link: "/programs/women-empowerment",
      color: "bg-[#FF8C00]",
    },
    {
      id: 5,
      title: "Disability Inclusion",
      description:
        "Lighting lives beyond limits. Creating opportunities for differently-abled individuals through employment, sports, and education.",
      icon: "♿",
      link: "/programs/disability-inclusion",
      color: "bg-[#009966]",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4 font-['Poppins']">
            Our Programs
          </h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            Discover our initiatives that empower, educate, and include
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Link
              key={program.id}
              to={program.link}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className={`${program.color} p-6 text-white`}>
                <div className="text-4xl mb-2">{program.icon}</div>
                <h3 className="text-xl font-bold font-['Poppins']">
                  {program.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-[#666] mb-4">{program.description}</p>
                <span className="text-[#0066CC] font-semibold hover:text-[#0052a3] transition-colors">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;

