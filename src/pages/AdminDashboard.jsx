import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { API_ENDPOINTS } from '../config/api.js';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState('events');
  
  // Events state
  const [events, setEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [showEventModal, setShowEventModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [eventFormData, setEventFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    imageUrl: '',
    registrationLink: '',
  });

  // Media state
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [articleFormData, setArticleFormData] = useState({
    title: '',
    category: 'News Article',
    description: '',
    content: '',
    imageUrl: '',
    author: 'Pankho Ki Udaan Team',
    publishedDate: new Date().toISOString().split('T')[0],
    externalLink: '',
    isPublished: true,
  });

  const API_BASE = API_ENDPOINTS.EVENTS?.replace('/api/events', '');
  const token = localStorage.getItem('admin_token');

  // Events functions
  useEffect(() => {
    if (activeTab === 'events') {
      fetchEvents();
    } else if (activeTab === 'media') {
      fetchArticles();
    }
  }, [activeTab]);

  const fetchEvents = async () => {
    try {
      setEventsLoading(true);
      const response = await fetch(`${API_BASE}/api/events`);
      const data = await response.json();
      if (data.success) {
        setEvents(data.events);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setEventsLoading(false);
    }
  };

  const fetchArticles = async () => {
    try {
      setArticlesLoading(true);
      const response = await fetch(`${API_BASE}/api/media/admin/all`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setArticles(data.articles);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setArticlesLoading(false);
    }
  };

  // Event handlers
  const handleEventSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingEvent
        ? `${API_BASE}/api/events/${editingEvent._id}`
        : `${API_BASE}/api/events`;
      
      const method = editingEvent ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(eventFormData),
      });

      const data = await response.json();
      if (data.success) {
        setShowEventModal(false);
        setEditingEvent(null);
        setEventFormData({
          title: '',
          description: '',
          date: '',
          location: '',
          imageUrl: '',
          registrationLink: '',
        });
        fetchEvents();
      } else {
        alert(data.message || 'Failed to save event');
      }
    } catch (error) {
      console.error('Error saving event:', error);
      alert('Failed to save event. Please try again.');
    }
  };

  const handleEventEdit = (event) => {
    setEditingEvent(event);
    setEventFormData({
      title: event.title,
      description: event.description,
      date: event.date.split('T')[0],
      location: event.location,
      imageUrl: event.imageUrl || '',
      registrationLink: event.registrationLink || '',
    });
    setShowEventModal(true);
  };

  const handleEventDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this event?')) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/events/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        fetchEvents();
      } else {
        alert(data.message || 'Failed to delete event');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete event. Please try again.');
    }
  };

  // Article handlers
  const handleArticleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingArticle
        ? `${API_BASE}/api/media/${editingArticle._id}`
        : `${API_BASE}/api/media`;
      
      const method = editingArticle ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(articleFormData),
      });

      const data = await response.json();
      if (data.success) {
        setShowArticleModal(false);
        setEditingArticle(null);
        setArticleFormData({
          title: '',
          category: 'News Article',
          description: '',
          content: '',
          imageUrl: '',
          author: 'Pankho Ki Udaan Team',
          publishedDate: new Date().toISOString().split('T')[0],
          externalLink: '',
          isPublished: true,
        });
        fetchArticles();
      } else {
        alert(data.message || 'Failed to save article');
      }
    } catch (error) {
      console.error('Error saving article:', error);
      alert('Failed to save article. Please try again.');
    }
  };

  const handleArticleEdit = (article) => {
    setEditingArticle(article);
    setArticleFormData({
      title: article.title,
      category: article.category,
      description: article.description,
      content: article.content,
      imageUrl: article.imageUrl || '',
      author: article.author || 'Pankho Ki Udaan Team',
      publishedDate: new Date(article.publishedDate).toISOString().split('T')[0],
      externalLink: article.externalLink || '',
      isPublished: article.isPublished,
    });
    setShowArticleModal(true);
  };

  const handleArticleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this article?')) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/media/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        fetchArticles();
      } else {
        alert(data.message || 'Failed to delete article');
      }
    } catch (error) {
      console.error('Error deleting article:', error);
      alert('Failed to delete article. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 font-['Poppins']">
              Admin Dashboard
            </h1>
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('events')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'events'
                  ? 'border-[#0066CC] text-[#0066CC]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveTab('media')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'media'
                  ? 'border-[#0066CC] text-[#0066CC]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Media Articles
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Events Tab */}
        {activeTab === 'events' && (
          <>
            <div className="mb-6">
              <button
                onClick={() => {
                  setEditingEvent(null);
                  setEventFormData({
                    title: '',
                    description: '',
                    date: '',
                    location: '',
                    imageUrl: '',
                    registrationLink: '',
                  });
                  setShowEventModal(true);
                }}
                className="bg-[#0066CC] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#0052a3] transition-colors"
              >
                + Add New Event
              </button>
            </div>

            {eventsLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066CC] mx-auto"></div>
              </div>
            ) : (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {events.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                          No events found. Add your first event!
                        </td>
                      </tr>
                    ) : (
                      events.map((event) => (
                        <tr key={event._id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{event.title}</div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">{event.description}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(event.date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.location}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button onClick={() => handleEventEdit(event)} className="text-[#0066CC] hover:text-[#0052a3] mr-4">Edit</button>
                            <button onClick={() => handleEventDelete(event._id)} className="text-red-600 hover:text-red-900">Delete</button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {/* Media Tab */}
        {activeTab === 'media' && (
          <>
            <div className="mb-6">
              <button
                onClick={() => {
                  setEditingArticle(null);
                  setArticleFormData({
                    title: '',
                    category: 'News Article',
                    description: '',
                    content: '',
                    imageUrl: '',
                    author: 'Pankho Ki Udaan Team',
                    publishedDate: new Date().toISOString().split('T')[0],
                    externalLink: '',
                    isPublished: true,
                  });
                  setShowArticleModal(true);
                }}
                className="bg-[#0066CC] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#0052a3] transition-colors"
              >
                + Add New Article
              </button>
            </div>

            {articlesLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066CC] mx-auto"></div>
              </div>
            ) : (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Published</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {articles.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                          No articles found. Add your first article!
                        </td>
                      </tr>
                    ) : (
                      articles.map((article) => (
                        <tr key={article._id}>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{article.title}</div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">{article.description}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{article.category}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${article.isPublished ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {article.isPublished ? 'Published' : 'Draft'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(article.publishedDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button onClick={() => handleArticleEdit(article)} className="text-[#0066CC] hover:text-[#0052a3] mr-4">Edit</button>
                            <button onClick={() => handleArticleDelete(article._id)} className="text-red-600 hover:text-red-900">Delete</button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>

      {/* Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">{editingEvent ? 'Edit Event' : 'Add New Event'}</h3>
              <form onSubmit={handleEventSubmit} className="space-y-4">
                <div><label className="block text-sm font-medium text-gray-700">Title *</label>
                  <input type="text" required value={eventFormData.title} onChange={(e) => setEventFormData({ ...eventFormData, title: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC]" />
                </div>
                <div><label className="block text-sm font-medium text-gray-700">Description *</label>
                  <textarea required rows="3" value={eventFormData.description} onChange={(e) => setEventFormData({ ...eventFormData, description: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC]" />
                </div>
                <div><label className="block text-sm font-medium text-gray-700">Date *</label>
                  <input type="date" required value={eventFormData.date} onChange={(e) => setEventFormData({ ...eventFormData, date: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC]" />
                </div>
                <div><label className="block text-sm font-medium text-gray-700">Location</label>
                  <input type="text" value={eventFormData.location} onChange={(e) => setEventFormData({ ...eventFormData, location: e.target.value })} placeholder="TBA" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC]" />
                </div>
                <div><label className="block text-sm font-medium text-gray-700">Image URL</label>
                  <input type="url" value={eventFormData.imageUrl} onChange={(e) => setEventFormData({ ...eventFormData, imageUrl: e.target.value })} placeholder="https://..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC]" />
                </div>
                <div><label className="block text-sm font-medium text-gray-700">Registration Link</label>
                  <input type="url" value={eventFormData.registrationLink} onChange={(e) => setEventFormData({ ...eventFormData, registrationLink: e.target.value })} placeholder="https://..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC]" />
                </div>
                <div className="flex justify-end space-x-3">
                  <button type="button" onClick={() => { setShowEventModal(false); setEditingEvent(null); }} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-[#0066CC] text-white rounded-md hover:bg-[#0052a3]">{editingEvent ? 'Update' : 'Create'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Article Modal */}
      {showArticleModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-10 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white max-h-[90vh] overflow-y-auto">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">{editingArticle ? 'Edit Article' : 'Add New Article'}</h3>
              <form onSubmit={handleArticleSubmit} className="space-y-4">
                <div><label className="block text-sm font-medium text-gray-700">Title *</label>
                  <input type="text" required value={articleFormData.title} onChange={(e) => setArticleFormData({ ...articleFormData, title: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700">Category *</label>
                    <select required value={articleFormData.category} onChange={(e) => setArticleFormData({ ...articleFormData, category: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC]">
                      <option>News Article</option>
                      <option>Press Release</option>
                      <option>Blog Post</option>
                      <option>Event Coverage</option>
                      <option>Success Story</option>
                    </select>
                  </div>
                  <div><label className="block text-sm font-medium text-gray-700">Published Date *</label>
                    <input type="date" required value={articleFormData.publishedDate} onChange={(e) => setArticleFormData({ ...articleFormData, publishedDate: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC]" />
                  </div>
                </div>
                <div><label className="block text-sm font-medium text-gray-700">Description *</label>
                  <textarea required rows="3" value={articleFormData.description} onChange={(e) => setArticleFormData({ ...articleFormData, description: e.target.value })} placeholder="Brief description (max 500 characters)" maxLength={500} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC]" />
                </div>
                <div><label className="block text-sm font-medium text-gray-700">Content *</label>
                  <textarea required rows="10" value={articleFormData.content} onChange={(e) => setArticleFormData({ ...articleFormData, content: e.target.value })} placeholder="Full article content..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700">Author</label>
                    <input type="text" value={articleFormData.author} onChange={(e) => setArticleFormData({ ...articleFormData, author: e.target.value })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC]" />
                  </div>
                  <div><label className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input type="url" value={articleFormData.imageUrl} onChange={(e) => setArticleFormData({ ...articleFormData, imageUrl: e.target.value })} placeholder="https://..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC]" />
                  </div>
                </div>
                <div><label className="block text-sm font-medium text-gray-700">External Link</label>
                  <input type="url" value={articleFormData.externalLink} onChange={(e) => setArticleFormData({ ...articleFormData, externalLink: e.target.value })} placeholder="https://..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0066CC] focus:border-[#0066CC]" />
                </div>
                <div><label className="flex items-center"><input type="checkbox" checked={articleFormData.isPublished} onChange={(e) => setArticleFormData({ ...articleFormData, isPublished: e.target.checked })} className="mr-2" /> Published</label></div>
                <div className="flex justify-end space-x-3">
                  <button type="button" onClick={() => { setShowArticleModal(false); setEditingArticle(null); }} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-[#0066CC] text-white rounded-md hover:bg-[#0052a3]">{editingArticle ? 'Update' : 'Create'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
