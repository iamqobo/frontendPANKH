import React from "react";
import { Link } from "react-router-dom";
import DisabilityInclusionForm from "../components/DisabilityInclusionForm";

const DisabilityInclusion = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#009966] to-[#007a4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
            Lighting Lives Beyond Limits
          </h1>
          <p className="text-xl max-w-3xl opacity-95">
            Creating opportunities for differently-abled individuals through
            employment, para-sports, and accessible education.
          </p>
        </div>
      </section>

      {/* About the Project */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#333333] mb-6 font-['Poppins']">
                About the Project
              </h2>
              <p className="text-[#666] mb-4 text-lg">
                Our Disability Inclusion program is built on the belief that
                everyone deserves the opportunity to thrive, regardless of
                their abilities. We create inclusive spaces where
                differently-abled individuals can access employment, education,
                and sports opportunities.
              </p>
              <p className="text-[#666] mb-4 text-lg">
                The Love Candle project is one of our flagship initiatives,
                providing meaningful employment and training to
                differently-abled individuals. Through this program, we've
                created a sustainable model that empowers while generating
                income.
              </p>
              <p className="text-[#666] text-lg">
                Our vision extends beyond accommodation – we're building a world
                where inclusion is the norm, not the exception.
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#333333] mb-4 font-['Poppins']">
                The Love Candle Story
              </h3>
              <p className="text-[#666] mb-4">
                Love Candle was born from a simple idea: create beautiful,
                handcrafted candles while providing employment opportunities for
                differently-abled individuals. Today, it's a symbol of
                empowerment, inclusion, and hope.
              </p>
              <Link
                to="/shop"
                className="inline-block bg-[#009966] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#007a4d] transition-colors"
              >
                Shop Love Candle →
              </Link>
            </div>
          </div>

          {/* Key Programs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#333333] mb-8 text-center font-['Poppins']">
              Key Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FFF4CC] rounded-lg p-6">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-[#333333] mb-3 font-['Poppins']">
                  Employment
                </h3>
                <p className="text-[#666]">
                  Creating job opportunities and providing skills training for
                  sustainable employment.
                </p>
              </div>
              <div className="bg-[#FFF4CC] rounded-lg p-6">
                <div className="text-4xl mb-4">🏃</div>
                <h3 className="text-xl font-bold text-[#333333] mb-3 font-['Poppins']">
                  Para-sports
                </h3>
                <p className="text-[#666]">
                  Supporting athletes with disabilities through training,
                  equipment, and competition opportunities.
                </p>
              </div>
              <div className="bg-[#FFF4CC] rounded-lg p-6">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-xl font-bold text-[#333333] mb-3 font-['Poppins']">
                  Accessible Education
                </h3>
                <p className="text-[#666]">
                  Ensuring education is accessible to all through adaptive
                  learning methods and inclusive classrooms.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Counters */}
          <div className="bg-[#009966] text-white rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center font-['Poppins']">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">People Trained</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10,000+</div>
                <div className="text-lg opacity-90">Love Candles Made</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Para-sports Athletes</div>
              </div>
            </div>
          </div>

          {/* Need Help Section */}
          <section id="need-help" className="mb-16">
            <DisabilityInclusionForm />
          </section>

          {/* Accessibility Commitment */}
          <div className="bg-[#F5F5F5] rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-6 text-center font-['Poppins']">
              Our Accessibility Commitment
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-[#666] mb-4 text-lg">
                At Pankhon Ki Udaan, we are committed to ensuring that our
                programs, events, and digital platforms are accessible to
                everyone. We continuously work to:
              </p>
              <ul className="space-y-3 text-[#666] text-lg">
                <li className="flex items-start">
                  <span className="text-[#009966] mr-2">✓</span>
                  <span>
                    Provide accessible venues and facilities for all events
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#009966] mr-2">✓</span>
                  <span>
                    Offer sign language interpretation and assistive
                    technologies
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#009966] mr-2">✓</span>
                  <span>
                    Ensure our website and digital content meet WCAG
                    accessibility standards
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#009966] mr-2">✓</span>
                  <span>
                    Train our team in inclusive practices and disability
                    awareness
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <section className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] rounded-lg p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4 font-['Poppins']">
                Join Us in Creating Inclusion
              </h2>
              <p className="text-lg mb-6 opacity-95">
                Volunteer, donate, or partner with us to expand our impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-involved"
                  className="bg-[#FF8C00] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#e67d00] transition-colors"
                >
                  Volunteer
                </Link>
                <Link
                  to="/donate"
                  className="bg-white text-[#0066CC] px-6 py-3 rounded-md font-semibold hover:bg-[#F5F5F5] transition-colors"
                >
                  Donate
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default DisabilityInclusion;

