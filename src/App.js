// Main App component for HSS Thailand website
// This is the root component that handles navigation, audio controls, and overall layout
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For smooth animations and transitions
import Home from './pages/Home'; // Main home page component
import './index.css'; // Global styles and Tailwind CSS

/**
 * App Component - Root component of HSS Thailand website
 * Purpose: Provides main navigation, background audio controls, and page layout
 * Features: Responsive navigation, accessibility support, audio player, footer
 */
function App() {
  // State to track background audio playback status
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  /**
   * Toggle background audio playback
   * Purpose: Allows users to play/stop background music for enhanced experience
   */
  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };
  
  // Navigation menu items configuration
  // Purpose: Defines the main navigation structure for the website
  const navItems = [
    { id: 'about', label: 'About' }, // About us section
    { id: 'services', label: 'Programs' }, // Community programs and services
    { id: 'contact', label: 'Contact' } // Contact information and form
  ];

  return (
    <div className="relative">
      {/* Skip Navigation Link - Accessibility Feature */}
      {/* Purpose: Allows keyboard users to skip directly to main content */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-all duration-200"
        tabIndex="0"
      >
        Skip to main content
      </a>
      {/* Background Audio Player */}
      {/* Purpose: Provides ambient background music for enhanced user experience */}
      {/* Hidden iframe that plays YouTube audio when activated */}
      {isAudioPlaying && (
        <iframe
          src="https://www.youtube.com/embed/eLYlxyc7qmM?autoplay=1&loop=1&playlist=eLYlxyc7qmM&controls=0&showinfo=0&rel=0&modestbranding=1"
          allow="autoplay; encrypted-media"
          className="fixed top-0 left-0 w-0 h-0 opacity-0 pointer-events-none"
          title="Background Audio"
        />
      )}
      
      {/* Audio Control Button */}
      {/* Purpose: Floating action button to control background music */}
      {/* Features: Accessible, responsive, with visual feedback */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4 rounded-full hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
        title={isAudioPlaying ? 'Stop Background Music' : 'Play Background Music'}
        aria-label={isAudioPlaying ? 'Stop Background Music' : 'Play Background Music'}
        aria-pressed={isAudioPlaying}
      >
        {isAudioPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      
      {/* Main Navigation Bar */}
      {/* Purpose: Sticky navigation with glassmorphism effect and responsive design */}
      <nav className="backdrop-blur-lg bg-gradient-to-r from-orange-900/90 to-orange-700/90 sticky top-0 z-50 transition-all duration-500 border-b border-orange-500/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            {/* Purpose: Brand identity with animated logo and organization name */}
            <motion.a 
              href="#home"
              className="group flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="HSS Thailand Home"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                <span className="text-white font-bold text-xl">🕉</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-amber-200 group-hover:from-orange-200 group-hover:to-white transition-all duration-500">
                  HSS Thailand
                </span>
                <span className="text-xs text-orange-200/80 font-medium tracking-wider uppercase">
                  Hindu Swayamsevak Sangh
                </span>
              </div>
            </motion.a>
            
            {/* Desktop Navigation Menu */}
            {/* Purpose: Animated navigation links with glassmorphism effects */}
            {/* Features: Hover animations, shimmer effects, gradient backgrounds */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative group px-8 py-4 text-white/95 hover:text-white font-bold text-base tracking-wide transition-all duration-500 overflow-hidden"
                  aria-label={`Navigate to ${item.label} section`}
                  whileHover={{ 
                    y: -3,
                    scale: 1.05,
                    rotateX: 5
                  }}
                  whileTap={{ 
                    y: 0,
                    scale: 0.98
                  }}
                  initial={{ opacity: 0, y: -30, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                >
                  {/* Main Background with Glassmorphism */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 via-orange-400/20 to-red-500/30 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl"
                    initial={{ scale: 0, opacity: 0, rotate: -10 }}
                    whileHover={{ 
                      scale: 1, 
                      opacity: 1, 
                      rotate: 0,
                      boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.5)"
                    }}
                    transition={{ 
                      duration: 0.4,
                      type: "spring",
                      stiffness: 300
                    }}
                  />
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"
                    initial={{ x: '-100%', opacity: 0 }}
                    whileHover={{ 
                      x: '100%', 
                      opacity: 1,
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                  />
                  
                  {/* Text with Enhanced Typography */}
                  <motion.span 
                    className="relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-amber-200 group-hover:from-white group-hover:via-orange-50 group-hover:to-white drop-shadow-lg"
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(255, 255, 255, 0.8)"
                    }}
                  >
                    {item.label}
                  </motion.span>
                  
                  {/* Animated Underline */}
                  <motion.div
                    className="absolute bottom-1 left-1/2 w-0 h-1 bg-gradient-to-r from-orange-300 via-red-400 to-amber-300 rounded-full shadow-lg"
                    whileHover={{ 
                      width: '90%', 
                      x: '-50%',
                      boxShadow: "0 0 20px rgba(251, 146, 60, 0.8)"
                    }}
                    transition={{ 
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200
                    }}
                  />
                  
                  {/* Corner Accents */}
                  <motion.div
                    className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-br from-orange-300 to-red-400 rounded-full opacity-0"
                    whileHover={{ 
                      opacity: 1,
                      scale: [1, 1.5, 1],
                      transition: { duration: 0.6, repeat: Infinity }
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1 left-1 w-2 h-2 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full opacity-0"
                    whileHover={{ 
                      opacity: 1,
                      scale: [1, 1.5, 1],
                      transition: { duration: 0.6, repeat: Infinity, delay: 0.2 }
                    }}
                  />
                </motion.a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            {/* Purpose: Hamburger menu for mobile devices */}
            {/* Note: Currently shows button only - mobile menu implementation can be added */}
            <motion.button
              className="md:hidden p-2 text-white hover:text-orange-200 transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
              aria-label="Open mobile navigation menu"
              aria-expanded="false"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </nav>
      
      {/* Main Content Area */}
      {/* Purpose: Contains the primary page content with smooth scrolling */}
      <main id="main-content" className="scroll-smooth" role="main">
        <Home /> {/* Home page component with all sections */}
      </main>
      
      {/* Website Footer */}
      {/* Purpose: Contains organization info, quick links, contact details, and credits */}
      <footer className="bg-gradient-to-br from-orange-900 via-red-900 to-amber-900 text-white py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Organization Information Section */}
            {/* Purpose: Displays HSS Thailand branding and mission statement */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">🕉</span>
                </div>
                <h3 className="text-xl font-bold text-orange-100">HSS Thailand</h3>
              </div>
              <p className="text-orange-200 text-sm leading-relaxed">
                Hindu Swayamsevak Sangh Thailand - Building a cohesive and culturally vibrant society through selfless service.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center">
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-amber-200 to-red-200 mb-6"
              >
                Quick Links
              </motion.h4>
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative group"
                  >
                    <motion.a
                      href={`#${item.id}`}
                      className="relative block p-3 rounded-xl backdrop-blur-lg bg-gradient-to-r from-white/5 to-orange-500/10 border border-white/10 text-orange-200 hover:text-white transition-all duration-300 text-sm font-medium overflow-hidden group"
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                        boxShadow: "0 10px 25px rgba(251, 146, 60, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Glass Effect Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-red-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"
                        initial={{ x: '-100%', opacity: 0 }}
                        whileHover={{ 
                          x: '100%', 
                          opacity: 1,
                          transition: { duration: 0.6, ease: "easeInOut" }
                        }}
                      />
                      
                      {/* Icon and Text */}
                      <div className="relative z-10 flex items-center justify-center space-x-2">
                        <motion.span 
                          className="text-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.id === 'about' && '📖'}
                          {item.id === 'services' && '🎯'}
                          {item.id === 'contact' && '📞'}
                        </motion.span>
                        <span className="group-hover:text-white transition-colors duration-300">
                          {item.label}
                        </span>
                      </div>
                      
                      {/* Animated Border */}
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 rounded-full"
                        whileHover={{ 
                          width: '80%', 
                          x: '-50%',
                          boxShadow: "0 0 10px rgba(251, 146, 60, 0.8)"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Corner Glow Effects */}
                      <div className="absolute top-1 right-1 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-1 left-1 w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative Element */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-6 w-16 h-1 bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 mx-auto rounded-full shadow-lg"
              />
            </div>
            
            {/* Social Media & Contact */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-orange-100 mb-4">Connect With Us</h4>
              <div className="flex justify-center md:justify-end space-x-4 mb-4">
                <motion.a
                  href="https://www.facebook.com/100067159560733/about/?_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title="Follow us on Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
                
                <motion.a
                  href="mailto:info@hssthailand.org"
                  className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title="Send us an email"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="tel:+66123456789"
                  className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title="Call us"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.a>
              </div>
              <p className="text-orange-200 text-sm">
                Follow us for updates and events
              </p>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-orange-700/50 pt-6 text-center">
            <p className="text-orange-200 text-sm">
              © {new Date().getFullYear()} HSS Thailand. All rights reserved. | 
              <span className="text-orange-300"> Building Unity Through Service</span>
            </p>
            <p className="text-orange-300/80 text-xs mt-2">
              Designed and developed by Dr. Gaurav Kumar Gupta.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
 }
 
 export default App;
