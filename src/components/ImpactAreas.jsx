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
  "Udaan to Space",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {AREAS.map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 rounded-2xl bg-white shadow-sm border border-[#E5E7EB] px-4 py-3 hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#F59E0B] text-white text-sm font-semibold">
                <span>✓</span>
              </div>
              <p className="text-sm md:text-base font-medium text-[#111827]">
                {area}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactAreas;


