import React from 'react'

const Resources = () => {
  const resourceCategories = [
    {
      id: 1,
      title: "Annual Reports",
      description: "Download our annual reports to see our impact, financial transparency, and program outcomes.",
      icon: "📊",
      items: [
        "Annual Report 2023",
        "Annual Report 2022",
        "Financial Statements",
        "Impact Assessment"
      ]
    },
    {
      id: 2,
      title: "Research & Publications",
      description: "Access our research papers, studies, and publications on global development issues.",
      icon: "📚",
      items: [
        "Child Protection Studies",
        "Water & Sanitation Research",
        "Education Impact Reports",
        "Economic Development Papers"
      ]
    },
    {
      id: 3,
      title: "Media Resources",
      description: "Press releases, media kits, photos, and videos for journalists and media professionals.",
      icon: "📰",
      items: [
        "Press Releases",
        "Media Kit",
        "Photo Gallery",
        "Video Library"
      ]
    },
    {
      id: 4,
      title: "Educational Materials",
      description: "Resources for teachers, students, and educators to learn about global issues.",
      icon: "🎓",
      items: [
        "Lesson Plans",
        "Educational Videos",
        "Activity Sheets",
        "Curriculum Guides"
      ]
    },
    {
      id: 5,
      title: "Volunteer Resources",
      description: "Information and guides for volunteers and supporters who want to get involved.",
      icon: "🤝",
      items: [
        "Volunteer Handbook",
        "Fundraising Guide",
        "Event Planning Kit",
        "Advocacy Toolkit"
      ]
    },
    {
      id: 6,
      title: "Policy & Advocacy",
      description: "Policy briefs, position papers, and advocacy resources on key development issues.",
      icon: "⚖️",
      items: [
        "Policy Briefs",
        "Position Papers",
        "Advocacy Campaigns",
        "Legislative Updates"
      ]
    }
  ]

  const quickLinks = [
    "How We Use Your Donations",
    "Frequently Asked Questions",
    "Privacy Policy",
    "Terms of Service",
    "Contact Us",
    "Careers"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Resources
          </h1>
          <p className="text-white text-xl max-w-3xl mx-auto opacity-95">
            Access reports, publications, educational materials, and more to learn about our work and impact
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {category.items.map((item, index) => (
                    <li key={index} className="text-gray-700 flex items-center">
                      <span className="text-orange-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                  View All →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Quick Links
            </h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions and important information
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="bg-gray-50 hover:bg-orange-50 border border-gray-200 rounded-lg p-4 text-center font-medium text-gray-700 hover:text-orange-500 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter to receive the latest updates, stories, and resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources

