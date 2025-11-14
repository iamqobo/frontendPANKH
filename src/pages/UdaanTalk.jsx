import React from "react";
import UdaanTalkForm from "../components/UdaanTalkForm";

const UdaanTalk = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
            Udaan Talk
          </h1>
          <p className="text-xl max-w-3xl opacity-95">
            Talk Like TED – A platform for young minds to share ideas, inspire
            change, and empower voices.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#333333] mb-6 font-['Poppins']">
                About Udaan Talk
              </h2>
              <p className="text-[#666] mb-4 text-lg">
                Udaan Talk is our flagship program that provides a platform for
                students, young professionals, and changemakers to share their
                ideas and stories. Inspired by TED Talks, we create spaces
                where voices can be heard and ideas can inspire action.
              </p>
              <p className="text-[#666] mb-4 text-lg">
                Whether you're a speaker with a powerful message or an audience
                member eager to learn and be inspired, Udaan Talk welcomes you.
                Our events bring together diverse perspectives on empowerment,
                inclusion, innovation, and social change.
              </p>
              <p className="text-[#666] text-lg">
                Join us in creating a community where every voice matters and
                every idea has the power to transform.
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#333333] mb-4 font-['Poppins']">
                Event Highlights
              </h3>
              <ul className="space-y-3 text-[#666]">
                <li className="flex items-start">
                  <span className="text-[#0066CC] mr-2">✓</span>
                  <span>Inspiring talks from diverse speakers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0066CC] mr-2">✓</span>
                  <span>Networking opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0066CC] mr-2">✓</span>
                  <span>Interactive Q&A sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0066CC] mr-2">✓</span>
                  <span>Certificate of participation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Registration Form */}
          <div>
            <UdaanTalkForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UdaanTalk;

