import React from "react";

const heroes = [
  {
    name: "ARUNIMA SINHA",
    title: "First Female Amputee to Climb Everest",
    subtitle:
      "Her grit proves that resilience and hope can conquer any altitude.",
    description:
      "Mountaineer and motivational speaker who overcame tragedy to achieve the impossible.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "MALALA YOUSAFZAI",
    title: "Education Rights Activist",
    subtitle:
      "A fearless advocate ensuring every girl can claim her right to learn.",
    description:
      "Nobel laureate inspiring millions through her fight for access to education.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "KIRAN BEDI",
    title: "First Woman IPS Officer",
    subtitle:
      "Her trailblazing service redefined leadership, justice, and compassion.",
    description:
      "Pioneering officer and social reformer committed to transforming communities.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* Udaan Talk hero section */}
      <section className="bg-gradient-to-b from-[#0B63CE] to-[#0047A3] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 border border-white/30 text-sm font-medium tracking-wide mb-6 shadow-sm">
            TEDx–Style Real Hero Sessions
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide font-['Poppins'] text-[#FF9F1C]">
            UDAN TALK
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-[#E0F2FF] leading-relaxed">
            Inspiring the nation with stories of resilience, courage, and
            extraordinary achievements.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {["Schools", "Youth", "Corporates", "Global Leaders"].map((tag) => (
              <button
                key={tag}
                className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm md:text-base text-[#EAF6FF] border border-white/30 transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured heroes heading */}
      <section className="text-center pt-16 pb-10 px-4">
        <p className="text-xs tracking-[0.35em] uppercase text-[#F4A259] font-semibold">
          Featured Heroes
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 font-['Poppins'] text-[#1F1F1F]">
          FEATURED{" "}
          <span className="bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#F59E0B] text-transparent bg-clip-text">
            HEROES
          </span>
        </h1>
        <p className="text-lg md:text-xl text-[#6C757D] max-w-3xl mx-auto mt-4">
          Real-life champions who have overcome extraordinary challenges to
          inspire millions.
        </p>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heroes.map((hero) => (
            <article
              key={hero.name}
              className="rounded-3xl bg-white shadow-xl border border-[#F0F0F0] overflow-hidden transition duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 md:h-72 group">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-[-200px]  p-6 bg-gradient-to-t from-black/85 via-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-lg font-semibold tracking-wide">
                    {hero.name}
                  </h3>
                  <p className="text-sm leading-relaxed mt-2">{hero.description}</p>
                </div>
              </div>
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold tracking-wide text-[#1F1F1F]">
                  {hero.name}
                </h3>
                <p className="text-[#F59E0B] font-semibold text-sm uppercase tracking-wide mt-3">
                  {hero.title}
                </p>
                <p className="text-[#6C6C6C] mt-4 text-sm leading-relaxed">
                  {hero.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
