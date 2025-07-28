// Contact Component - Provides contact form and location information
// Features form validation, submission handling, and embedded Google Maps
import React, { useState } from "react";

const Contact = () => {
  // State Management
  const [form, setForm] = useState({ name: "", email: "", content: "" }); // Form data storage
  const [submitted, setSubmitted] = useState(false); // Tracks form submission status

  // Form Event Handlers
  
  // Handle input field changes - Updates form state with new values
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission - Prevents default behavior and shows success message
  const handleSubmit = e => {
    e.preventDefault(); // Prevent page reload
    setSubmitted(true); // Show success message
  };

  return (
    // Main Contact Section - Full-screen layout with light background
    <section className="min-h-screen bg-gray-50 py-12">
      {/* Content Container - Two-column grid layout for form and map */}
      <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Contact Form Section */}
        <div>
          {/* Page Title - Large blue heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-6">Contact Us</h2>
          {/* Conditional Rendering - Show success message or contact form */}
          {submitted ? (
            // Success Message - Displayed after form submission
            <div className="p-6 bg-green-100 rounded-lg text-green-800">Thanks for reaching out to us! We will revert back to you soon.</div>
          ) : (
            // Contact Form - Input fields for user information and message
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name Input Field - Required text input */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {/* Email Input Field - Required email validation */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              {/* Content Textarea - Multi-line text input for detailed content */}
              <textarea
                name="content"
                placeholder="Your Content"
                value={form.content}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={5}
                required
              />
              {/* Submit Button - Triggers form submission with hover effects */}
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Send Message</button>
            </form>
          )}
        </div>
        {/* Right Column - Google Maps Integration */}
        <div className="w-full h-72 md:h-full rounded-lg overflow-hidden">
          {/* Contact Information Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">hssthai@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">083-610-1526</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Hindu Swayamsevak Sangh Thailand<br/>Baan Suan Sukhumvit Condominium<br/>On Nut 46, On Nut, Suan Luang<br/>Bangkok 10250</p>
                </div>
              </div>
            </div>
            
            {/* Location Map */}
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-green-100 via-blue-50 to-blue-100 relative">
              {/* Map Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-blue-200"></div>
                {/* Grid lines to simulate map */}
                <div className="absolute inset-0 opacity-30">
                  <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div key={i} className="border border-gray-300 border-opacity-50"></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Location Marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* Marker Pin */}
                  <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg relative z-10">
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-600"></div>
                  </div>
                  {/* Pulse Animation */}
                  <div className="absolute top-0 left-0 w-8 h-8 bg-red-600 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              
              {/* Location Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-95 rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">HSS Thailand</h4>
                    <p className="text-gray-600 text-xs">On Nut, Suan Luang, Bangkok 10250</p>
                  </div>
                  <a 
                    href="https://maps.google.com/maps?q=On+Nut,+Suan+Luang,+Bangkok+10250,+Thailand" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-auto bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition"
                  >
                    View Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;