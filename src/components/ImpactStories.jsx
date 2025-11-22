import React from "react";
import { Link } from "react-router-dom";

const ImpactStories = () => {
  const stories = [
    {
      id: 1,
      title: "Empowering Through Education",
      description:
        "Through our Udan Talk program, we've empowered thousands of students to share their ideas and dreams, creating a platform for young voices.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
      category: "Udan Talk",
      link: "/programs/udaan-talk",
    },
    {
      id: 2,
      title: "Inclusion Beyond Limits",
      description:
        "Our Disability Inclusion program has transformed lives, providing employment opportunities and training to hundreds of differently-abled individuals.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
      category: "Disability Inclusion",
      link: "/programs/disability-inclusion",
    },
    {
      id: 3,
      title: "Voices of Change",
      description:
        "The Udan Podcast has amplified stories of empowerment, reaching millions of listeners and inspiring change across communities.",
      image:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&q=80",
      category: "Udan Podcast",
      link: "/programs/udaan-podcast",
    },
  ];

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4 font-['Poppins']">
            Success Stories
          </h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            Real stories of transformation, empowerment, and inclusion from our
            community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-[#FF8C00] text-sm font-semibold uppercase tracking-wide">
                  {story.category}
                </span>
                <h3 className="text-xl font-bold text-[#333333] mt-2 mb-3 font-['Poppins']">
                  {story.title}
                </h3>
                <p className="text-[#666] mb-4">{story.description}</p>
                <Link
                  to={story.link}
                  className="text-[#0066CC] font-semibold hover:text-[#0052a3] transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
