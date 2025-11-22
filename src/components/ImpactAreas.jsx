import React from "react";

const AREAS = [
  "Child Protection",
  "Good Touch–Bad Touch Programs",
  "Women Empowerment",
  "Digital Literacy & Skills",
  "Disability Inclusion",
  "Para-employment & Sports",
  "Para-Athlete Programs",
  "Sports Awareness Campaigns",
  "Environmental Sustainability",
  "1 Million Tree Mission",
  "TechUdan",
  "AR/VR Learning for Schools",
  "Mental Health",
  "De-addiction Programs",
  "Udan to Space",
  "STEM Education Initiative",
];

const ImpactAreas = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-[#111827]">
            Our Impact Areas
          </h2>
          <p className="mt-3 text-[#4B5563] text-sm md:text-base max-w-2xl mx-auto">
            Transforming lives across multiple dimensions, aligned with United
            Nations Sustainable Development Goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {AREAS.map((area) => (
            <div
              key={area}
              className="group relative flex flex-col items-center justify-center rounded-xl bg-white shadow-md border-2 border-[#E5E7EB] px-5 py-6 hover:shadow-xl hover:-translate-y-1 hover:border-[#2563EB] transition-all duration-300 min-h-[120px]"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#F59E0B] text-white text-lg font-semibold shadow-md group-hover:scale-110 transition-transform duration-300">
                  <span>✓</span>
                </div>
                <p className="text-sm md:text-base font-semibold text-[#111827] leading-tight">
                  {area}
                </p>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2563EB]/5 to-[#F59E0B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactAreas;


