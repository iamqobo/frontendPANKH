import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINTS } from '../config/api.js';

const Article = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  const fetchArticle = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_ENDPOINTS.MEDIA}/${slug}`);
      const data = await response.json();

      if (data.success) {
        setArticle(data.article);
      } else {
        setError(data.message || 'Article not found');
      }
    } catch (error) {
      console.error('Error fetching article:', error);
      setError('Failed to load article');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066CC] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">{error || 'The article you are looking for does not exist.'}</p>
          <Link
            to="/media"
            className="inline-block bg-[#0066CC] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0052a3] transition-colors"
          >
            Back to Media
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/media"
            className="inline-block mb-6 text-white hover:text-gray-200 transition-colors"
          >
            ← Back to Media
          </Link>
          <span className="text-[#FF8C00] text-sm font-semibold block mb-4">
            {article.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
            <span>By {article.author}</span>
            <span>•</span>
            <span>{new Date(article.publishedDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            {article.views > 0 && (
              <>
                <span>•</span>
                <span>{article.views} views</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.imageUrl && (
            <div className="mb-8">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 font-medium">
              {article.description}
            </p>
            
            <div 
              className="text-gray-700 leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }}
            />
          </div>

          {article.externalLink && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">External Link</h3>
              <a
                href={article.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0066CC] hover:text-[#0052a3] font-semibold"
              >
                Read full article → {article.externalLink}
              </a>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/media"
              className="inline-block bg-[#0066CC] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0052a3] transition-colors"
            >
              ← Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;

