import React from "react";

const Donate = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#FF8C00] to-[#e67d00] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
            Donate
          </h1>
          <p className="text-xl max-w-3xl opacity-95">
            Your donation empowers dreams and enables inclusion. Every
            contribution makes a difference.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F5F5] rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-6 text-center font-['Poppins']">
              Make a Donation
            </h2>
            <p className="text-[#666] text-center mb-8">
              Choose an amount or enter a custom amount. All donations are
              tax-deductible.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[500, 1000, 2500, 5000].map((amount) => (
                <button
                  key={amount}
                  className="bg-white border-2 border-[#0066CC] text-[#0066CC] px-6 py-4 rounded-md font-semibold hover:bg-[#0066CC] hover:text-white transition-colors"
                >
                  ₹{amount}
                </button>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#333333] mb-2">
                Custom Amount
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
              />
            </div>

            <button className="w-full bg-[#FF8C00] text-white px-6 py-4 rounded-md font-semibold hover:bg-[#e67d00] transition-colors text-lg">
              Donate Now
            </button>

            <p className="text-sm text-[#666] text-center mt-6">
              Your donation will be processed securely. Thank you for your
              support!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;

