import React from "react";

const Team = () => {
  const teamMembers = [
    { name: "Team Member 1", role: "Founder & Director" },
    { name: "Team Member 2", role: "Program Coordinator" },
    { name: "Team Member 3", role: "Inclusion Specialist" },
    { name: "Team Member 4", role: "Community Outreach" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
            Our Team
          </h1>
          <p className="text-xl max-w-3xl opacity-95">
            Meet the passionate individuals driving change at Pankhon Ki Udaan.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] rounded-lg p-6 text-center"
              >
                <div className="w-32 h-32 bg-[#333333] rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-[#333333] mb-2 font-['Poppins']">
                  {member.name}
                </h3>
                <p className="text-[#666]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

