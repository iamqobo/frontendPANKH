import React from "react";

const sdgGoals = [
  {
    number: 3,
    label: "GOOD HEALTH",
    bg: "bg-[#00A651]",
  },
  {
    number: 4,
    label: "QUALITY EDUCATION",
    bg: "bg-[#ED1C24]",
  },
  {
    number: 5,
    label: "GENDER EQUALITY",
    bg: "bg-[#F36F21]",
  },
  {
    number: 8,
    label: "DECENT WORK",
    bg: "bg-[#C60C30]",
  },
  {
    number: 10,
    label: "REDUCED INEQUALITIES",
    bg: "bg-[#DD137B]",
  },
  {
    number: 13,
    label: "CLIMATE ACTION",
    bg: "bg-[#3FA535]",
  },
];

const UNSDGAligned = () => {
  return (
    <section className="bg-white py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF9F1C] text-white text-2xl">
            <span role="img" aria-label="globe">
              🌍
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide font-['Poppins']">
            UN SDG{" "}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#4B5563] to-[#F59E0B] text-transparent bg-clip-text">
              ALIGNED
            </span>
          </h2>
        </div>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto">
          Our initiatives contribute directly to the United Nations Sustainable
          Development Goals.
        </p>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 justify-items-center">
          {sdgGoals.map((goal) => (
            <div
              key={goal.number}
              className={`${goal.bg} text-white rounded-2xl w-full max-w-[190px] h-40 md:h-44 flex flex-col items-center justify-center shadow-lg`}
            >
              <div className="text-3xl md:text-4xl font-extrabold">
                {goal.number}
              </div>
              <div className="mt-3 text-xs md:text-sm font-semibold tracking-wide text-center px-2 uppercase">
                {goal.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UNSDGAligned;


