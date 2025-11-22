import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_ENDPOINTS } from "../config/api.js";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.EVENTS);
      const data = await response.json();
      if (data.success) {
        setEvents(data.events);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Poppins']">
            Events
          </h1>
          <p className="text-xl max-w-3xl opacity-95">
            Join us for upcoming events, workshops, and gatherings.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              to="/programs/udaan-talk"
              className="inline-block bg-[#0066CC] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0052a3] transition-colors mb-4"
            >
              Register for Udan Talk →
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066CC] mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading events...</p>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No upcoming events at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-[#F5F5F5] rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-[#FF8C00] text-sm font-semibold mb-2">
                    Upcoming Event
                  </div>
                  <h3 className="text-2xl font-bold text-[#333333] mb-3 font-['Poppins']">
                    {event.title}
                  </h3>
                  <p className="text-[#666] mb-4">
                    Date: {new Date(event.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })} | Location: {event.location}
                  </p>
                  <p className="text-[#666] mb-4">
                    {event.description}
                  </p>
                  {event.registrationLink ? (
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0066CC] font-semibold hover:text-[#0052a3] transition-colors"
                    >
                      Learn More →
                    </a>
                  ) : (
                    <span className="text-[#0066CC] font-semibold">Learn More →</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;

