import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_ENDPOINTS } from "../config/api.js";

const Media = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["All", "News Article", "Press Release", "Blog Post", "Event Coverage", "Success Story"];

  useEffect(() => {
    fetchArticles();
  }, [selectedCategory]);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const category = selectedCategory === "All" || !selectedCategory ? "" : selectedCategory;
      const url = category 
        ? `${API_ENDPOINTS.MEDIA}?category=${encodeURIComponent(category)}`
        : API_ENDPOINTS.MEDIA;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.success) {
        setArticles(data.articles);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
            Media & Press
          </h1>
          <p className="text-xl max-w-3xl opacity-95">
            News, updates, and stories from Pankh Ki Udaan Foundation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === "All" ? "" : category)}
                className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                  (category === "All" && !selectedCategory) || selectedCategory === category
                    ? "bg-[#0066CC] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066CC] mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading articles...</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div
                  key={article._id}
                  className="bg-[#F5F5F5] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {article.imageUrl ? (
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="h-48 bg-[#333333]"></div>
                  )}
                  <div className="p-6">
                    <span className="text-[#FF8C00] text-sm font-semibold">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#333333] mt-2 mb-3 font-['Poppins']">
                      {article.title}
                    </h3>
                    <p className="text-[#666] mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    <div className="text-xs text-gray-500 mb-4">
                      {new Date(article.publishedDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <Link
                      to={`/media/${article.slug}`}
                      className="text-[#0066CC] font-semibold hover:text-[#0052a3] transition-colors inline-block"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Media;

