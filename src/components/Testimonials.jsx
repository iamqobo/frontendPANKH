import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Udan Talk Speaker",
      image:
        "https://st2.depositphotos.com/1011643/9000/i/450/depositphotos_90003844-stock-photo-indian-woman-at-home.jpg",
      quote:
        "Udan Talk gave me the platform to share my story. It transformed my confidence and opened doors I never imagined.",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      role: "Disability Inclusion Beneficiary",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      quote:
        "Through Pankho Ki Udan, I found employment and purpose. The Love Candle project changed my life completely.",
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Podcast Listener",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      quote:
        "The Udan Podcast inspires me every week. These stories of empowerment and inclusion give me hope for a better world.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4 font-['Poppins']">
            What People Say
          </h2>
          <p className="text-[#666] text-lg">
            Stories from our community of supporters and beneficiaries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F5F5F5] rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-[#333333] font-['Poppins']">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#666]">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-[#333333] italic quote-text">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
