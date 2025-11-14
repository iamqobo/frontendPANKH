import React, { useState } from "react";
import { API_ENDPOINTS } from "../config/api.js";

const PodcastGuestForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    guestName: "",
    topic: "",
    whyMatters: "",
    bioLink: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(API_ENDPOINTS.PODCAST_GUEST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            fullName: "",
            email: "",
            contactNumber: "",
            guestName: "",
            topic: "",
            whyMatters: "",
            bioLink: "",
          });
        }, 3000);
      } else {
        alert(data.message || 'Failed to submit suggestion. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit suggestion. Please check your connection and try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#333333] mb-2 font-['Poppins']">
        Guest Suggestion / Collaboration
      </h2>
      <p className="text-[#666] mb-6">
        Know someone with an inspiring story? Want to be a guest yourself? Fill
        out the form below.
      </p>
      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Thank you! We've received your suggestion. We'll review it and get
          back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Email ID *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Contact Number *
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              required
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="guestName"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Guest Name / Suggestion *
            </label>
            <input
              type="text"
              id="guestName"
              name="guestName"
              required
              value={formData.guestName}
              onChange={handleChange}
              placeholder="Name of the guest or yourself"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="topic"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Topic or Story Idea *
            </label>
            <input
              type="text"
              id="topic"
              name="topic"
              required
              value={formData.topic}
              onChange={handleChange}
              placeholder="What would you/they like to talk about?"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="whyMatters"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Why do you think this story matters? *
            </label>
            <textarea
              id="whyMatters"
              name="whyMatters"
              required
              rows="4"
              value={formData.whyMatters}
              onChange={handleChange}
              placeholder="Tell us why this story is important and should be shared..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="bioLink"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Attach Bio / Link (optional)
            </label>
            <input
              type="url"
              id="bioLink"
              name="bioLink"
              value={formData.bioLink}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF8C00] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#e67d00] transition-colors"
          >
            Submit Suggestion
          </button>
        </form>
      )}
    </div>
  );
};

export default PodcastGuestForm;

