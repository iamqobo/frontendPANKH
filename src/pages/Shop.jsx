import React from "react";

const Shop = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#009966] to-[#007a4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
            Shop
          </h1>
          <p className="text-xl max-w-3xl opacity-95">
            Beautiful things made with love by differently-abled
            individuals. Every purchase supports empowerment and inclusion.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-6 font-['Poppins']">
              The Love Candle Story
            </h2>
            <p className="text-[#666] text-lg max-w-3xl">
              Love Candle is more than just a product – it's a symbol of
              empowerment, inclusion, and hope. Each candle is handcrafted by
              differently-abled individuals who have found purpose, employment,
              and community through this initiative. When you purchase a Love
              Candle, you're not just buying a beautiful product – you're
              supporting a movement that lights lives beyond limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-[#F5F5F5] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-64 bg-[#333333]"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-2 font-['Poppins']">
                    Love Candle {item}
                  </h3>
                  <p className="text-[#666] mb-4">
                    Handcrafted with love and care. Supports empowerment and
                    inclusion.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#009966]">
                      ₹299
                    </span>
                    <button className="bg-[#009966] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#007a4d] transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;

