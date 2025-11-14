import React from 'react'

const OurWork = () => {
  const programs = [
    {
      id: 1,
      title: "Child Sponsorship",
      description: "Connect with a child in need and provide them with access to education, healthcare, and opportunities for a better future.",
      icon: "👶",
      stats: "3M+ Children Sponsored"
    },
    {
      id: 2,
      title: "Clean Water & Sanitation",
      description: "Building wells, installing water systems, and promoting hygiene practices to ensure communities have access to clean water.",
      icon: "💧",
      stats: "3.2M People Gained Clean Water"
    },
    {
      id: 3,
      title: "Education",
      description: "Supporting schools, providing learning materials, and training teachers to improve educational outcomes for children.",
      icon: "📚",
      stats: "500K+ Children in Education Programs"
    },
    {
      id: 4,
      title: "Health & Nutrition",
      description: "Improving maternal and child health through nutrition programs, healthcare access, and disease prevention.",
      icon: "🏥",
      stats: "2M+ People Served"
    },
    {
      id: 5,
      title: "Economic Development",
      description: "Empowering communities through microfinance, vocational training, and sustainable livelihood programs.",
      icon: "💼",
      stats: "1M+ Families Empowered"
    },
    {
      id: 6,
      title: "Emergency Response",
      description: "Rapid response to natural disasters, conflicts, and crises to provide immediate relief and long-term recovery.",
      icon: "🚨",
      stats: "170 Emergency Responses"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Work
          </h1>
          <p className="text-white text-xl max-w-3xl mx-auto opacity-95">
            We work in partnership with communities to address the root causes of poverty and injustice, creating lasting change for children and their families.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                <div className="text-orange-500 font-semibold text-sm">
                  {program.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Approach
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We believe in sustainable, community-led development that creates lasting change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Community Partnership</h3>
              <p className="text-gray-600">We work alongside communities, respecting local knowledge and empowering local leadership.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Focused Impact</h3>
              <p className="text-gray-600">We concentrate on areas where we can make the greatest difference for children and families.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Measurable Results</h3>
              <p className="text-gray-600">We track our progress and measure outcomes to ensure we're making a real difference.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurWork

