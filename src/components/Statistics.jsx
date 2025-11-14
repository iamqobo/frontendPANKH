import React, { useEffect, useState } from "react";

const Statistics = () => {
  const [counters, setCounters] = useState({
    peopleEmpowered: 0,
    programsRun: 0,
    communitiesReached: 0,
  });

  const stats = [
    {
      number: counters.peopleEmpowered,
      suffix: "+",
      label: "People Empowered",
      color: "text-[#0066CC]",
    },
    {
      number: counters.programsRun,
      suffix: "+",
      label: "Programs Run",
      color: "text-[#FF8C00]",
    },
    {
      number: counters.communitiesReached,
      suffix: "+",
      label: "Communities Reached",
      color: "text-[#009966]",
    },
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const increment = (target) => target / steps;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        setCounters({
          peopleEmpowered: Math.min(Math.floor(increment(5000) * step), 5000),
          programsRun: Math.min(Math.floor(increment(50) * step), 50),
          communitiesReached: Math.min(Math.floor(increment(100) * step), 100),
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    };

    // Trigger animation when component mounts
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats-section"
      className="relative -mt-24 md:-mt-32 z-10 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 ${stat.color}`}
                >
                  {stat.number.toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base text-[#333333] font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
