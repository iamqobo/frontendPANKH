import React, { useState } from "react";
import { API_ENDPOINTS } from "../config/api.js";

const UdaanTalkForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    mobileNumber: "",
    college: "",
    department: "",
    participationType: "",
    topic: "",
    description: "",
    preferredLanguage: [],
    spokenBefore: "",
    whyParticipate: "",
    mediaConsent: false,
    declaration: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(API_ENDPOINTS.UDAAN_TALK, {
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
            dateOfBirth: "",
            gender: "",
            email: "",
            mobileNumber: "",
            college: "",
            department: "",
            participationType: "",
            topic: "",
            description: "",
            preferredLanguage: [],
            spokenBefore: "",
            whyParticipate: "",
            mediaConsent: false,
            declaration: false,
          });
        }, 3000);
      } else {
        alert(data.message || 'Failed to submit registration. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit registration. Please check your connection and try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#333333] mb-2 font-['Poppins']">
        Register for Udaan Talk
      </h2>
      <p className="text-[#666] mb-6">
        Join us for "Talk Like TED" event as a Speaker or Audience member.
      </p>
      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Thank you! Your registration has been received. We'll contact you
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-[#333333] mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Gender *
            </label>
            <select
              id="gender"
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Mobile Number *
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              required
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="college"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              College / School / Organization *
            </label>
            <input
              type="text"
              id="college"
              name="college"
              required
              value={formData.college}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Department / Course / Year
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">
              Participation Type *
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="participationType"
                  value="speaker"
                  required
                  checked={formData.participationType === "speaker"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Speaker
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="participationType"
                  value="audience"
                  required
                  checked={formData.participationType === "audience"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Audience
              </label>
            </div>
          </div>

          {formData.participationType === "speaker" && (
            <>
              <div>
                <label
                  htmlFor="topic"
                  className="block text-sm font-medium text-[#333333] mb-2"
                >
                  Topic / Title of Talk *
                </label>
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  required={formData.participationType === "speaker"}
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-[#333333] mb-2"
                >
                  Short Description (2-3 lines) *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required={formData.participationType === "speaker"}
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                ></textarea>
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">
              Preferred Language *
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="preferredLanguage"
                  value="hindi"
                  checked={formData.preferredLanguage.includes("hindi")}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData({
                      ...formData,
                      preferredLanguage: formData.preferredLanguage.includes(
                        value
                      )
                        ? formData.preferredLanguage.filter((lang) => lang !== value)
                        : [...formData.preferredLanguage, value],
                    });
                  }}
                  className="mr-2"
                />
                Hindi
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="preferredLanguage"
                  value="english"
                  checked={formData.preferredLanguage.includes("english")}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData({
                      ...formData,
                      preferredLanguage: formData.preferredLanguage.includes(
                        value
                      )
                        ? formData.preferredLanguage.filter((lang) => lang !== value)
                        : [...formData.preferredLanguage, value],
                    });
                  }}
                  className="mr-2"
                />
                English
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="preferredLanguage"
                  value="both"
                  checked={formData.preferredLanguage.includes("both")}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData({
                      ...formData,
                      preferredLanguage: formData.preferredLanguage.includes(
                        value
                      )
                        ? formData.preferredLanguage.filter((lang) => lang !== value)
                        : [...formData.preferredLanguage, value],
                    });
                  }}
                  className="mr-2"
                />
                Both
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="spokenBefore"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Have you spoken before? *
            </label>
            <select
              id="spokenBefore"
              name="spokenBefore"
              required
              value={formData.spokenBefore}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="whyParticipate"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Why do you want to participate? *
            </label>
            <textarea
              id="whyParticipate"
              name="whyParticipate"
              required
              rows="4"
              value={formData.whyParticipate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
            ></textarea>
          </div>

          <div>
            <label className="flex items-start">
              <input
                type="checkbox"
                name="mediaConsent"
                required
                checked={formData.mediaConsent}
                onChange={handleChange}
                className="mr-2 mt-1"
              />
              <span className="text-sm text-[#666]">
                I consent to the use of my image and voice in media coverage
                and promotional materials *
              </span>
            </label>
          </div>

          <div>
            <label className="flex items-start">
              <input
                type="checkbox"
                name="declaration"
                required
                checked={formData.declaration}
                onChange={handleChange}
                className="mr-2 mt-1"
              />
              <span className="text-sm text-[#666]">
                I declare that all information provided is true and accurate *
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0066CC] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0052a3] transition-colors"
          >
            Register for Udaan Talk
          </button>
        </form>
      )}
    </div>
  );
};

export default UdaanTalkForm;

