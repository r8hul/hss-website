// Donation Component - Handles donation form and payment processing
// Features animated UI, preset donation amounts, payment method selection, and impact visualization
import React, { useState } from "react";
import { motion } from "framer-motion";

const Donation = () => {
  // State Management
  const [form, setForm] = useState({ name: "", email: "", amount: "" }); // Donation form data
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

  // Preset donation amounts in Thai Baht for quick selection
  const donationAmounts = [500, 1000, 2500, 5000];

  return (
    // Main Donation Section - Full-screen layout with warm gradient background
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Content Container - Centered layout with maximum width constraint */}
      <div className="max-w-4xl mx-auto">
        {/* Header Section - Page title and mission description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} // Start invisible and below final position
          animate={{ opacity: 1, y: 0 }} // Fade in and move to final position
          transition={{ duration: 0.8 }} // Smooth animation timing
          className="text-center mb-12"
        >
          {/* Main Page Title - Large gradient text */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 mb-6">
            Support Our Mission
          </h2>
          {/* Mission Description - Explains the impact of donations */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Your generous contribution helps us build stronger communities, empower youth, and preserve cultural values for future generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-800">Make a Donation</h3>
            </div>
            
            {submitted ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl text-center"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-2">Thank You!</h4>
                <p className="text-green-700">Your generous donation has been received. Together, we're making a difference!</p>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Donation Amount (THB)</label>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    {donationAmounts.map(amount => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setForm({...form, amount: amount.toString()})}
                        className={`py-2 px-4 rounded-lg border transition-all duration-200 ${
                          form.amount === amount.toString() 
                            ? 'bg-yellow-500 text-white border-yellow-500' 
                            : 'bg-white text-gray-700 border-gray-300 hover:border-yellow-400'
                        }`}
                      >
                        ฿{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    name="amount"
                    placeholder="Custom amount"
                    value={form.amount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    required
                    min="1"
                  />
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">How to Donate</h4>
                  <p className="text-blue-700 text-sm mb-3">Please contact us directly to make your donation:</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="font-medium text-blue-800 w-16">Email:</span>
                      <span className="text-blue-700">hssthai@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-blue-800 w-16">Phone:</span>
                      <span className="text-blue-700">083-610-1526</span>
                    </div>
                  </div>
                </div>
                
                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 hover:scale-105"
                >
                  Donate Now
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold text-gray-800">Your Impact</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 font-bold text-sm">฿500</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Support a Child</h4>
                    <p className="text-gray-600 text-sm">Provides materials for one child's shakha activities for a month</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-600 font-bold text-sm">฿1K</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Youth Program</h4>
                    <p className="text-gray-600 text-sm">Sponsors leadership workshop for 10 youth participants</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-600 font-bold text-sm">฿2.5K</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Community Event</h4>
                    <p className="text-gray-600 text-sm">Helps organize a cultural festival for the community</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-orange-600 font-bold text-sm">฿5K</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Service Project</h4>
                    <p className="text-gray-600 text-sm">Funds a complete community service initiative</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-800 mb-3">Why Donate?</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm">Build stronger communities through cultural programs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm">Empower youth with leadership skills and values</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm">Support families in preserving cultural heritage</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-sm">Enable community service and disaster relief efforts</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-2xl border border-gray-200 p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Every Contribution Matters</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your support enables us to continue our mission of building character, fostering unity, and serving society. Together, we create lasting positive change in our communities.
          </p>
          <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Secure Payment
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Tax Deductible
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donation;