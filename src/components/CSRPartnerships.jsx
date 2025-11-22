import React from "react";

const CSRPartnerships = () => {
  const partnerships = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12h4" />
          <path d="M6 16h4" />
          <path d="M10 6h4" />
          <path d="M14 12h4" />
          <path d="M14 16h4" />
        </svg>
      ),
      title: "CORPORATE PARTNERSHIPS",
      description:
        "Collaborate on large-scale impact programs aligned with your CSR goals",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "EMPLOYEE ENGAGEMENT",
      description:
        "Volunteer programs and team-building activities with social Impact",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
          <path d="M12 22a10 10 0 0 1-10-10" />
        </svg>
      ),
      title: "IMPACT REPORTING",
      description:
        "Transparent tracking and detailed reports on project outcomes",
    },
  ];

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="bg-gradient-to-r from-[#2563EB] to-[#F59E0B] bg-clip-text text-transparent">
              CSR
            </span>{" "}
            <span className="text-[#333333]">PARTNERSHIPS</span>
          </h2>
          <p className="text-[#666] text-lg max-w-3xl mx-auto">
            Partner with us for meaningful corporate social responsibility initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerships.map((partnership, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#F59E0B] flex items-center justify-center text-white mb-6">
                {partnership.icon}
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4 uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {partnership.title}
              </h3>
              <p className="text-[#666] text-base leading-relaxed">
                {partnership.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSRPartnerships;

