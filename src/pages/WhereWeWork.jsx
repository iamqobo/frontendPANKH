import React from 'react'

const WhereWeWork = () => {
  const regions = [
    {
      id: 1,
      name: "Africa",
      countries: 25,
      children: "1.2M",
      description: "Working across Sub-Saharan Africa to improve health, education, and economic opportunities.",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80"
    },
    {
      id: 2,
      name: "Asia",
      countries: 15,
      children: "1.5M",
      description: "Supporting communities in South and Southeast Asia with education, clean water, and disaster response.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80"
    },
    {
      id: 3,
      name: "Latin America",
      countries: 12,
      children: "800K",
      description: "Empowering children and families through education, health programs, and economic development.",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80"
    },
    {
      id: 4,
      name: "Middle East & Eastern Europe",
      countries: 8,
      children: "500K",
      description: "Providing emergency relief and long-term development support in conflict-affected regions.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Where We Work
          </h1>
          <p className="text-white text-xl max-w-3xl mx-auto opacity-95">
            We're active in nearly 100 countries, working with local communities to create lasting change
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">37,000+</div>
              <div className="text-gray-600 font-medium">Staff Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Global Presence
            </h2>
            <p className="text-gray-600 text-lg">
              Explore the regions where we're making an impact
            </p>
          </div>

          <div className="space-y-12">
            {regions.map((region) => (
              <div key={region.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={region.image} 
                      alt={region.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-3xl font-bold text-black mb-4">
                      {region.name}
                    </h3>
                    <div className="flex gap-6 mb-4">
                      <div>
                        <div className="text-2xl font-bold text-orange-500">{region.countries}</div>
                        <div className="text-sm text-gray-600">Countries</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-500">{region.children}</div>
                        <div className="text-sm text-gray-600">Children Served</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {region.description}
                    </p>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded font-semibold hover:bg-orange-600 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Global Impact Map
          </h2>
          <p className="text-gray-600 mb-8">
            Click on any region to learn more about our work there
          </p>
          <div className="bg-white rounded-lg shadow-md p-12">
            <div className="text-gray-400 text-lg">
              Interactive map coming soon
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhereWeWork

