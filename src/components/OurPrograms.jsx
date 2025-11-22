import React, { useState } from "react";

const OurPrograms = () => {
  const [selectedCategory, setSelectedCategory] = useState("Women Empowerment");

  const categories = [
    {
      id: "Women Empowerment",
      name: "Women Empowerment",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      gradient: "from-pink-500 to-purple-600",
      description: "Creating safe, equitable environment where women thrive as leaders",
      programs: [
        {
          title: "GENDER EQUALITY WORKSHOPS",
          subtitle: "Breaking stereotypes & promoting equal opportunities",
          activities: ["Interactive workshops", "Role-plays", "Awareness on gender roles"],
          goal: "Reach 1 lakh individuals by 2027",
        },
        {
          title: "RURAL & VULNERABLE COMMUNITIES",
          subtitle: "Inclusive growth for the underserved",
          activities: ["Village outreach", "Health & hygiene drives", "Support for differently-abled"],
          goal: "Work in 1,000 villages",
        },
        {
          title: "LEGAL RIGHTS AWARENESS",
          subtitle: "Seminars on women's legal rights",
          activities: ["POSH & DV laws", "Local language booklets", "Helpline awareness"],
          goal: "Empower 50,000 women",
        },
        {
          title: "ENTREPRENEURSHIP & DIGITAL LITERACY",
          subtitle: "Financial & Digital Empowerment",
          activities: ["Skill training", "E-banking workshops", "Online selling"],
          goal: "Train 10,000 rural women",
        },
      ],
    },
    {
      id: "Child Protection",
      name: "Child Protection",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="10" r="2" />
          <path d="M9 12h6" />
        </svg>
      ),
      gradient: "from-red-500 to-pink-600",
      description: "Building safe and empowered future for children",
      programs: [
        {
          title: "GOOD TOUCH/BAD TOUCH AWARENESS",
          subtitle: "Interactive sessions in schools",
          activities: ["Fun activities", "Free handbooks", "Parent workshops"],
          goal: "Protect 1 lakh children by 2027",
        },
        {
          title: "CYBER SAFETY",
          subtitle: "Awareness on cyber risks & online etiquette",
          activities: ["Online safety workshops", "Anti-bullying programs", "Role-play activities"],
          goal: "Digital safety for all",
        },
        {
          title: "MORAL EDUCATION",
          subtitle: "Values for modern life challenges",
          activities: ["Ethics & compassion", "Leadership stories", "Diversity respect"],
          goal: "Build global citizens",
        },
        {
          title: "STRESS MANAGEMENT",
          subtitle: "Exam pressure & mental wellness",
          activities: ["Breathing techniques", "Fun games", "Resilience building"],
          goal: "Healthy minds",
        },
      ],
    },
    {
      id: "Disability Inclusion",
      name: "Disability Inclusion",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1" />
        </svg>
      ),
      gradient: "from-green-600 to-green-400",
      description: "Lighting Lives Beyond Limits - Inclusive opportunities for all",
      programs: [
        {
          title: "PARA-EMPLOYMENT PROGRAMS",
          subtitle: "Dignified livelihoods through Love Candle",
          activities: ["Skill training", "Product creation", "Market linkages"],
          goal: "1000+ employed",
        },
        {
          title: "PARA-SPORTS DEVELOPMENT",
          subtitle: "Excellence in adaptive sports",
          activities: ["Talent identification", "Training modules", "Competition platforms"],
          goal: "Olympic dreams",
        },
        {
          title: "ACCESSIBLE EDUCATION",
          subtitle: "Inclusive learning environments",
          activities: ["School partnerships", "Accessibility audits", "Support systems"],
          goal: "Education for all",
        },
        {
          title: "AWARENESS & ADVOCACY",
          subtitle: "Changing societal attitudes",
          activities: ["Community workshops", "Media campaigns", "Policy advocacy"],
          goal: "Inclusive society",
        },
      ],
    },
    {
      id: "Environmental Sustainability",
      name: "Environmental Sustainability",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          <path d="M17 10l-5 5-5-5" />
        </svg>
      ),
      gradient: "from-green-600 to-green-500",
      description: "Protecting planet for future generations",
      programs: [
        {
          title: "1 MILLION TREE MISSION",
          subtitle: "Rebuilding green cover",
          activities: ["Plantation drives", "School partnerships", "Native species focus"],
          goal: "1 million trees by 2030",
        },
        {
          title: "PLASTIC FREE EARTH",
          subtitle: "Reducing plastic usage",
          activities: ["Awareness campaigns", "Eco-friendly alternatives", "Community drives"],
          goal: "Plastic-free communities",
        },
      ],
    },
    {
      id: "Para-Sports & Udaan Talk",
      name: "Para-Sports & Udan Talk",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
          <circle cx="12" cy="8" r="2" />
          <path d="M10 12h4" />
        </svg>
      ),
      gradient: "from-blue-600 to-blue-400",
      description: "Sports as a career option and real hero storytelling",
      programs: [
        {
          title: "UDAAN TALK SESSIONS",
          subtitle: "TEDx-style real hero sessions",
          activities: ["School presentations", "Corporate events", "Online sessions"],
          goal: "500+ sessions",
        },
        {
          title: "PARA-SPORTS PROGRAMS",
          subtitle: "Excellence for differently-abled",
          activities: ["Specialized training", "Equipment support", "Competition platforms"],
          goal: "Inclusive sports",
        },
      ],
    },
    {
      id: "Udaan to Space",
      name: "Udan to Space",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M4 22h16" />
          <path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" />
        </svg>
      ),
      gradient: "from-orange-500 to-yellow-500",
      description: "STEM education through space science and planetarium",
      programs: [
        {
          title: "AR/VR PLANETARIUM",
          subtitle: "Immersive space learning",
          activities: ["360° dome shows", "Rocket demonstrations", "ISRO guidelines"],
          goal: "50+ schools",
        },
        {
          title: "SCHOOL TALKS",
          subtitle: "STEM inspiration programs",
          activities: ["Interactive sessions", "Hands-on activities", "Career guidance"],
          goal: "Inspire scientists",
        },
      ],
    },
    {
      id: "Mental Health",
      name: "Mental Health",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
        </svg>
      ),
      gradient: "from-pink-500 to-red-600",
      description: "Breaking free from addiction & caring for mental health",
      programs: [
        {
          title: "नशा मुक्त भारत",
          subtitle: "Youth de-addiction",
          activities: ["School campaigns", "Peer workshops", "Rehab partnerships"],
          goal: "Addiction-free youth",
        },
        {
          title: "DIGITAL DETOX",
          subtitle: "Balanced digital use",
          activities: ["Mindfulness training", "Time management", "Parent sessions"],
          goal: "Healthy tech habits",
        },
      ],
    },
    {
      id: "TechUdan",
      name: "TechUdan",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      ),
      gradient: "from-purple-600 to-purple-400",
      description: "AR/VR learning for government schools",
      programs: [
        {
          title: "AR/VR EDUCATION",
          subtitle: "Bridging digital divide",
          activities: ["Immersive learning", "Virtual labs", "Interactive content"],
          goal: "50+ schools",
        },
        {
          title: "DIGITAL PLANETARIUM",
          subtitle: "Space education for all",
          activities: ["360° dome shows", "Rocket demonstrations", "ISRO guidelines"],
          goal: "Inspire scientists",
        },
      ],
    },
  ];

  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-b from-[#0066CC] via-[#0066CC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-8 pt-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="text-white">OUR</span>{" "}
            <span className="bg-gradient-to-r from-[#F59E0B] to-[#FF8C00] bg-clip-text text-transparent">
              PROGRAMS
            </span>
          </h2>
          <p className="text-white text-base md:text-lg max-w-3xl mx-auto">
            Comprehensive initiatives addressing critical social challenges and creating sustainable impact
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 pb-8">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                  isSelected
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg transform scale-105`
                    : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
                }`}
              >
                <span className={isSelected ? "text-white" : "text-gray-600"}>
                  {category.icon}
                </span>
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Banner */}
        {selectedCategoryData && (
          <div className="mb-8">
            <div
              className={`bg-gradient-to-r ${selectedCategoryData.gradient} rounded-lg p-6 md:p-8 shadow-xl`}
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-lg flex items-center justify-center text-white">
                  {selectedCategoryData.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {selectedCategoryData.name}
                  </h3>
                  <p className="text-white text-sm md:text-base opacity-95">
                    {selectedCategoryData.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Program Detail Cards */}
        {selectedCategoryData && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {selectedCategoryData.programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg md:text-xl font-bold text-[#333333] mb-2 uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {program.title}
                </h4>
                <p className="text-[#666] text-sm md:text-base mb-4">
                  {program.subtitle}
                </p>

                <div className="mb-4">
                  <h5 className="font-bold text-[#333333] mb-2 text-sm md:text-base">ACTIVITIES:</h5>
                  <ul className="space-y-2">
                    {program.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[#666] text-sm md:text-base">
                        <span className="text-[#F59E0B]">✓</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#FFF4CC] rounded-lg p-3 mt-4">
                  <span className="font-bold text-[#F59E0B] text-sm md:text-base">Goal: </span>
                  <span className="text-[#333333] text-sm md:text-base">{program.goal}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurPrograms;

