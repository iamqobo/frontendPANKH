import React from "react";

const Impact = () => {
  const impactAreas = [
    {
      title: "Education & Empowerment",
      count: "5000+",
      description: "Individuals empowered through education and skills training",
    },
    {
      title: "Inclusion Programs",
      count: "500+",
      description: "Differently-abled individuals supported through our programs",
    },
    {
      title: "Community Reach",
      count: "100+",
      description: "Communities impacted across various initiatives",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
            Our Impact
          </h1>
          <p className="text-xl max-w-3xl opacity-95">
            Measuring change, one life at a time. See how we're making a
            difference.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] rounded-lg p-8 text-center"
              >
                <div className="text-5xl font-bold text-[#0066CC] mb-4">
                  {area.count}
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-3 font-['Poppins']">
                  {area.title}
                </h3>
                <p className="text-[#666]">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#FFF4CC] rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-6 text-center font-['Poppins']">
              Stories of Transformation
            </h2>
            <p className="text-[#666] text-lg text-center max-w-3xl mx-auto">
              Every number represents a life changed, a dream realized, and a
              community transformed. Our impact goes beyond statistics – it's
              about real people, real stories, and real change.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;

