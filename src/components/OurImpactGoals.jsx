import React from "react";

const OurImpactGoals = () => {
  const goals = [
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
          className="w-6 h-6"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      iconColor: "bg-red-500",
      title: "PROTECT 1 LAKH CHILDREN",
      percentage: 45,
      targetYear: "2027",
      current: "45,000",
      target: "1,00,000",
      progressColor: "bg-pink-500",
      callToAction:
        "We've reached 45% of our goal. Join us in making this vision a reality.",
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
          className="w-6 h-6"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      iconColor: "bg-purple-500",
      title: "TRAIN 10,000 RURAL WOMEN",
      percentage: 35,
      targetYear: "2028",
      current: "3,500",
      target: "10,000",
      progressColor: "bg-purple-500",
      callToAction:
        "We've reached 35% of our goal. Join us in making this vision a reality.",
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
          className="w-6 h-6"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      iconColor: "bg-blue-500",
      title: "WORK IN 1,000 VILLAGES",
      percentage: 28,
      targetYear: "2028",
      current: "280",
      target: "1,000",
      progressColor: "bg-cyan-500",
      callToAction:
        "We've reached 28% of our goal. Join us in making this vision a reality.",
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
          className="w-6 h-6"
        >
          <path d="M12 17v5" />
          <path d="M12 6V2" />
          <path d="M4 12h16" />
          <path d="M12 6c-2.5 0-4.5 2-4.5 4.5S9.5 15 12 15s4.5-2 4.5-4.5S14.5 6 12 6z" />
        </svg>
      ),
      iconColor: "bg-green-500",
      title: "1 MILLION TREE MISSION",
      percentage: 13,
      targetYear: "2030",
      current: "1,30,000",
      target: "1,000,000",
      progressColor: "bg-green-500",
      callToAction:
        "We've reached 13% of our goal. Join us in making this vision a reality.",
    },
  ];

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section className="py-16 bg-[#2D2D2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            OUR{" "}
            <span className="text-[#4A9EFF]">IMPACT</span>{" "}
            GOALS
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Ambitious targets driving meaningful change across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 lg:p-8 border border-white/20 shadow-lg"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`${goal.iconColor} w-12 h-12 rounded-full flex items-center justify-center text-white`}>
                  {goal.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {goal.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Target: {goal.targetYear}
                  </p>
                </div>
              </div>

              {/* Percentage */}
              <div className="mb-4">
                <span className="text-[#F59E0B] text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {goal.percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-300 mb-2">
                  <span>{formatNumber(goal.current)}</span>
                  <span>{formatNumber(goal.target)}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${goal.progressColor} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${goal.percentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Call to Action */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {goal.callToAction}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpactGoals;

