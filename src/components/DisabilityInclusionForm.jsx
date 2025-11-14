import React, { useState } from "react";
import { API_ENDPOINTS } from "../config/api.js";

const DisabilityInclusionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    contactNumber: "",
    email: "",
    supportType: "",
    message: "",
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
      const response = await fetch(API_ENDPOINTS.DISABILITY_INCLUSION, {
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
            age: "",
            contactNumber: "",
            email: "",
            supportType: "",
            message: "",
          });
        }, 3000);
      } else {
        alert(data.message || 'Failed to submit request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit request. Please check your connection and try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#333333] mb-2 font-['Poppins']">
        Do You Need Support?
      </h2>
      <p className="text-[#666] mb-6">
        If you or someone you know is differently-abled and seeking help, fill
        out the form below. Our Udaan Inclusion Team will reach out to you.
      </p>
      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Thank you! We've received your request. Our team will contact you
          soon.
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009966] focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Age *
            </label>
            <input
              type="number"
              id="age"
              name="age"
              required
              min="1"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009966] focus:border-transparent"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009966] focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009966] focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="supportType"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Type of Support Needed *
            </label>
            <select
              id="supportType"
              name="supportType"
              required
              value={formData.supportType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009966] focus:border-transparent"
            >
              <option value="">Select support type</option>
              <option value="employment">Employment</option>
              <option value="training">Training</option>
              <option value="education">Education</option>
              <option value="sports">Sports</option>
              <option value="medical">Medical</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Short Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#009966] focus:border-transparent"
              placeholder="Please tell us about your needs..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#009966] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#007a4d] transition-colors"
          >
            Reach Out to Udaan
          </button>
        </form>
      )}
    </div>
  );
};

export default DisabilityInclusionForm;

