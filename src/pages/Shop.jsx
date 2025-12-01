import React from "react";

const products = [
  {
    id: 1,
    name: "Love Candle",
    price: 299,
    desc: "Handcrafted scented candle made with care.",
    img: "https://i2.pickpik.com/photos/131/147/647/heart-candle-flame-love-preview.jpg&fit=crop&w=800"
  },
  {
    id: 2,
    name: "Decorated Diyas",
    price: 149,
    desc: "Beautifully hand-painted diyas for all occasions.",
    img: "https://images.unsplash.com/photo-1603373325673-7f1c9dc62574?auto=format&fit=crop&w=800"
  },
  {
    id: 3,
    name: "Handmade Jute Bag",
    price: 399,
    desc: "Eco-friendly jute bag crafted by skilled artisans.",
    img: "https://images.unsplash.com/photo-1590874137136-62f325f52f43?auto=format&fit=crop&w=800"
  },
  {
    id: 4,
    name: "Organic Herbal Soap",
    price: 199,
    desc: "Chemical-free herbal bath soap made organically.",
    img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800"
  },
  {
    id: 5,
    name: "Fabric Painted T-Shirt",
    price: 499,
    desc: "Unique artwork hand-painted on cotton t-shirts.",
    img: "https://images.unsplash.com/photo-1592878893446-3f3c5f5236e9?auto=format&fit=crop&w=800"
  },
  {
    id: 6,
    name: "Decorative Wall Art",
    price: 799,
    desc: "Beautiful canvas artwork created with passion.",
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=800"
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#009966] to-[#007a4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
            Shop
          </h1>
          <p className="text-xl max-w-3xl opacity-95">
            Beautiful items lovingly crafted by differently-abled individuals.
            Every product supports empowerment and inclusion.
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
              Love Candle is more than a product — it's a mission. Every candle
              is handcrafted by differently-abled individuals who gain purpose,
              employment, and confidence through this initiative. Your purchase
              lights up more than homes — it lights up lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-[#F5F5F5] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333333] mb-2 font-['Poppins']">
                    {item.name}
                  </h3>
                  <p className="text-[#666] mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#009966]">
                      ₹{item.price}
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
