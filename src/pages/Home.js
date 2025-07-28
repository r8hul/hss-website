// Home Page Component for HSS Thailand Website
// Purpose: Main landing page with hero section, programs, videos, and donation features
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // For smooth animations and transitions

/**
 * Home Component - Main landing page of HSS Thailand website
 * Purpose: Showcases organization's mission, programs, videos, and donation options
 * Features: Interactive animations, responsive design, video gallery, donation system
 */
const Home = () => {
  // State management for interactive features
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // Track mouse for interactive effects
  const [isHovered, setIsHovered] = useState(null); // Track which element is being hovered
  const [activeCard, setActiveCard] = useState(null); // Track active program card
  const [selectedProgram, setSelectedProgram] = useState(null); // Track selected program for modal
  const [showPaymentMethods, setShowPaymentMethods] = useState(false); // Toggle payment methods display

  // Mouse tracking effect for interactive background elements
  // Purpose: Creates dynamic visual effects that follow user's mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove); // Cleanup on unmount
  }, []);

  // Animation variants for container elements
  // Purpose: Defines staggered animations for child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3, // Delay before children start animating
        staggerChildren: 0.2 // Time between each child animation
      }
    }
  };

  // Animation variants for individual items
  // Purpose: Smooth slide-up animation with spring physics
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Start below and transparent
    visible: {
      y: 0, // Move to original position
      opacity: 1, // Fade in
      transition: {
        type: "spring", // Spring animation for natural feel
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Animation variants for card elements
  // Purpose: Card entrance and hover animations with scaling and movement
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, // Start below viewport
      scale: 0.9 // Start slightly smaller
    },
    visible: { 
      opacity: 1, 
      y: 0, // Move to original position
      scale: 1, // Scale to full size
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.02, // Slightly larger on hover
      y: -5, // Lift up on hover
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Animation variants for button elements
  // Purpose: 3D button effects with scaling and rotation on interaction
  const buttonVariants = {
    rest: { scale: 1, rotateY: 0 }, // Default state
    hover: { 
      scale: 1.05, // Slightly larger on hover
      rotateY: 5, // 3D rotation effect
      transition: {
        type: "spring",
        stiffness: 400, // Fast response
        damping: 10
      }
    },
    tap: { scale: 0.95 } // Pressed state - slightly smaller
  };

  // Navigation buttons configuration for hero section
  // Purpose: Main call-to-action buttons with distinct styling and purposes
  const buttons = [
    { 
      text: "About Us", 
      path: "#about", 
      gradient: "from-orange-600 via-orange-700 to-red-800", // Orange gradient theme
      icon: "👥", // People icon for community
      description: "Learn our story" // Brief description for accessibility
    },
    { 
      text: "Our Programs", 
      path: "#services", 
      gradient: "from-amber-600 via-orange-700 to-orange-800", // Amber gradient theme
      icon: "🎯", // Target icon for goals/programs
      description: "Explore initiatives"
    },
    { 
      text: "Donate", 
      path: "#donate", 
      gradient: "from-red-500 via-orange-600 to-yellow-700", // Warm gradient for donation
      icon: "💝", // Gift icon for donation
      description: "Support our cause"
    }
  ];

  // Programs and services offered by HSS Thailand
  // Purpose: Comprehensive list of community programs with detailed descriptions
  const programs = [
    {
      id: 'shakhas', // Unique identifier for routing and state management
      title: 'Shakhas – Weekly Training for Holistic Development',
      icon: '🧘', // Meditation icon representing spiritual practice
      gradient: 'from-orange-500 to-red-500', // Visual theme for this program
      description: 'Structured weekly gatherings for discipline, unity, and inner strength development.',
      features: [ // Detailed list of activities included in this program
        'Yoga & Surya Namaskar for physical fitness',
        'Games (Kridā) for teamwork and coordination',
        'Group chanting & patriotic songs',
        'Bauddhik sessions on culture and values',
        'Prarthana for spiritual grounding'
      ]
    },
    {
      id: 'festivals', // Cultural festivals program identifier
      title: 'Cultural & National Festivals – Unity in Diversity',
      icon: '🎭', // Theater mask representing cultural celebrations
      gradient: 'from-yellow-500 to-orange-500', // Warm festive colors
      description: 'Festivals celebrated with devotion and educational value, teaching traditions and meanings.',
      features: [ // Major festivals and celebrations organized
        'Raksha Bandhan for universal brotherhood',
        'Ganesh Utsav with eco-conscious practices',
        'Makar Sankranti with charity activities',
        'Diwali & Holi community celebrations',
        'Thai national holidays participation'
      ]
    },
    {
      id: 'youth', // Youth development program identifier
      title: 'Youth Empowerment & Leadership Programs',
      icon: '🌟', // Star icon representing excellence and aspiration
      gradient: 'from-orange-500 to-amber-500', // Energetic youth-focused colors
      description: 'Platforms for youth to take initiative, express ideas, and become value-based leaders.',
      features: [ // Leadership development activities
        'Vivekananda Youth Leadership Camps',
        'Public speaking and debate workshops',
        'Team-building retreats',
        'Tech & career orientation sessions',
        'Volunteer training programs'
      ]
    },
    {
      id: 'service', // Community service program identifier
      title: 'Community Service (Sevā) – Giving Back to Society',
      icon: '🤝', // Handshake icon representing community cooperation
      gradient: 'from-red-500 to-orange-500', // Service-oriented warm colors
      description: 'Practical service emphasizing real growth through contributing to society.',
      features: [ // Various community service activities
        'Blood donation camps',
        'Food & clothing drives',
        'Senior citizen support visits',
        'Post-disaster relief activities',
        'Community clean-up campaigns'
      ]
    }
  ];

  return (
    // Main container with gradient background for the entire page
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Hero Section - Full-screen landing area with animated background */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-amber-900">
        {/* Animated Background Layer - Contains all background visual effects */}
        <div className="absolute inset-0">
          {/* Base gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/20 to-amber-900/20"></div>
          
          {/* Floating Particles - Creates 20 animated particles for dynamic background */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              // Random movement animation for each particle
              animate={{
                x: [0, Math.random() * 100 - 50], // Horizontal movement
                y: [0, Math.random() * 100 - 50], // Vertical movement
                opacity: [0, 1, 0] // Fade in and out effect
              }}
              transition={{
                duration: Math.random() * 3 + 2, // Random duration between 2-5 seconds
                repeat: Infinity, // Continuous animation
                delay: Math.random() * 2 // Random start delay
              }}
              style={{
                left: `${Math.random() * 100}%`, // Random horizontal position
                top: `${Math.random() * 100}%` // Random vertical position
              }}
            />
          ))}
          
          {/* Interactive Mouse Follower - Large circular element that follows mouse cursor */}
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-orange-400/5 to-red-400/5 pointer-events-none"
            animate={{
              x: mousePosition.x - 192, // Center the circle on mouse X position
              y: mousePosition.y - 192  // Center the circle on mouse Y position
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }} // Smooth spring animation
          />
        </div>

        {/* Main Content Container - Centered content with staggered animations */}
        <motion.div 
          variants={containerVariants} // Uses container animation variants for staggered children
          initial="hidden" // Start in hidden state
          animate="visible" // Animate to visible state
          className="max-w-7xl text-center p-8 relative z-10" // Positioned above background elements
        >
          {/* Main Heading Section - Organization title with decorative elements */}
          <motion.div variants={itemVariants} className="mb-8">
            {/* Primary Heading - Large responsive title with hover effect */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 relative"
              whileHover={{ scale: 1.02 }} // Slight scale increase on hover
            >
              {/* Gradient text effect for visual appeal */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-amber-300">
                Welcome to HSS Thailand
              </span>
            </motion.h1>
            
            {/* Decorative Line - Animated underline that grows from center */}
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"
              initial={{ width: 0 }} // Start with no width
              animate={{ width: 128 }} // Animate to full width (32 * 4 = 128px)
              transition={{ delay: 1, duration: 0.8 }} // Delayed animation for dramatic effect
            />
          </motion.div>
          
          {/* Description Section - Mission statement with highlighted keywords */}
          <motion.p 
            variants={itemVariants} // Uses item animation variants
            className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-16 max-w-4xl mx-auto px-4 leading-relaxed font-light"
          >
            {/* Highlighted key phrases with different colors for emphasis */}
            <span className="text-orange-300 font-medium">Socio-cultural, voluntary organization</span> inspired by the ethos of 
            <span className="text-amber-300 font-medium"> selfless service</span> and 
            <span className="text-red-300 font-medium">universal values</span>.
          </motion.p>
        
        {/* Action Buttons Section - Interactive navigation buttons with hover effects */}
        <motion.div 
          variants={itemVariants} // Uses item animation variants for entrance
          className="flex flex-wrap gap-8 justify-center"
        >
          {/* Map through buttons array to create interactive navigation elements */}
          {buttons.map((button, index) => (
            <motion.a
              key={index}
              href={button.path} // Navigation path from button configuration
              variants={buttonVariants} // Custom button animation variants
              initial="rest" // Start in rest state
              whileHover="hover" // Animate to hover state on mouse enter
              whileTap="tap" // Animate to tap state on click
              onHoverStart={() => setIsHovered(index)} // Track which button is hovered
              onHoverEnd={() => setIsHovered(null)} // Clear hover state
              className={`group relative px-8 py-6 bg-gradient-to-r ${button.gradient} rounded-2xl overflow-hidden transform-gpu perspective-1000`}
            >
              {/* Button Background Effect - Overlay that appears on hover */}
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ scale: 0, opacity: 0 }} // Start invisible and scaled down
                animate={{ 
                  scale: isHovered === index ? 1 : 0, // Scale up when hovered
                  opacity: isHovered === index ? 1 : 0 // Fade in when hovered
                }}
                transition={{ duration: 0.3 }} // Smooth transition
              />
              
              {/* Button Content - Icon, text, and description */}
              <div className="relative z-10 flex flex-col items-center space-y-2">
                {/* Animated Icon - Rotates 360 degrees on hover */}
                <motion.span 
                  className="text-4xl"
                  animate={{ rotateY: isHovered === index ? 360 : 0 }} // 3D rotation effect
                  transition={{ duration: 0.6 }}
                >
                  {button.icon}
                </motion.span>
                {/* Button Label - Main text */}
                <span className="text-white font-bold text-lg">{button.text}</span>
                {/* Button Description - Appears on hover with slide-up animation */}
                <motion.span 
                  className="text-white/80 text-sm"
                  initial={{ opacity: 0, y: 10 }} // Start below and invisible
                  animate={{ 
                    opacity: isHovered === index ? 1 : 0, // Fade in on hover
                    y: isHovered === index ? 0 : 10 // Slide up on hover
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {button.description}
                </motion.span>
              </div>
              
              {/* Shine Effect - Animated light sweep across button on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-100%' }} // Start off-screen left
                animate={{ x: isHovered === index ? '100%' : '-100%' }} // Sweep across on hover
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          ))}
        </motion.div>
        
        {/* Scroll Indicator - Animated prompt to encourage scrolling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} // Start below and invisible
            animate={{ opacity: 1, y: 0 }} // Fade in and slide up
            transition={{ delay: 2, duration: 0.8 }} // Delayed appearance after other elements
            className="mt-20"
          >
            {/* Bouncing Animation Container */}
            <motion.div
              animate={{ y: [0, 10, 0] }} // Continuous up-down bouncing motion
              transition={{ duration: 2, repeat: Infinity }} // Infinite loop every 2 seconds
              className="flex flex-col items-center text-white/60"
            >
              {/* Scroll instruction text */}
              <span className="text-sm mb-2">Scroll to explore</span>
              {/* Down arrow icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Organization information with animated background */}
      <section id="about" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements - Floating gradient orbs for visual depth */}
        <div className="absolute inset-0">
          {/* Top-left floating orb */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse" />
          {/* Bottom-right floating orb with delay */}
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          {/* Center floating orb with different delay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-red-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="w-32 h-2 bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 mx-auto mb-6 rounded-full shadow-lg" />
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-xl animate-bounce" />
              </div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-300 to-amber-300 mb-10 tracking-tight relative"
            >
              <span className="relative inline-block">
                ✨ About Us
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-red-400/20 blur-2xl rounded-full"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 max-w-6xl mx-auto shadow-2xl"
            >
              <div className="space-y-8 text-white">
                <motion.p 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="text-xl md:text-2xl font-semibold leading-relaxed text-center"
                >
                  Hindu Swayamsevak Sangh (HSS) Thailand is a voluntary, non-profit organization that works toward building a cohesive and culturally vibrant society through the principles of selfless service (seva), community harmony, and value-based education.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"
                />
                
                <motion.p 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="text-lg md:text-xl leading-relaxed text-center text-gray-200"
                >
                  Inspired by time-tested Indian traditions and values, HSS Thailand aims to nurture responsible citizens who are grounded in character and motivated by service. We engage individuals of all ages in weekly shakhas, cultural celebrations, leadership workshops, youth camps, and social service projects.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Mission and Vision Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24"
          >
            {/* Mission Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50
              }}
              onHoverStart={() => setActiveCard('mission')}
              onHoverEnd={() => setActiveCard(null)}
              className="group relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-green-500/10 p-10 rounded-3xl border border-white/30 overflow-hidden cursor-pointer shadow-2xl hover:shadow-green-500/25 transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glass Effect Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-emerald-400/15 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl" />
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75" />
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-2xl">🌱</span>
                  </motion.div>
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Our Mission</h3>
                </div>
                
                <p className="text-white/90 text-lg leading-relaxed mb-6 font-medium">
                  To inspire selfless service and promote universal human values such as compassion, integrity, discipline, and mutual respect. We believe that individual transformation through consistent learning and action leads to the transformation of society at large.
                </p>
                
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ 
                    width: activeCard === 'mission' ? '100%' : '20%',
                    opacity: activeCard === 'mission' ? 1 : 0.6
                  }}
                  className="h-2 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full shadow-lg"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl" />
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: -5,
                z: 50
              }}
              onHoverStart={() => setActiveCard('vision')}
              onHoverEnd={() => setActiveCard(null)}
              className="group relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-blue-500/10 p-10 rounded-3xl border border-white/30 overflow-hidden cursor-pointer shadow-2xl hover:shadow-blue-500/25 transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glass Effect Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-400/15 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl" />
              
              {/* Floating Particles */}
              <div className="absolute top-6 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75" />
              <div className="absolute bottom-4 right-6 w-1 h-1 bg-indigo-400 rounded-full animate-pulse" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl"
                    whileHover={{ rotate: -360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-2xl">👁️</span>
                  </motion.div>
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Our Vision</h3>
                </div>
                
                <p className="text-white/90 text-lg leading-relaxed mb-6 font-medium">
                  A harmonious and empowered society rooted in strong character, inclusive leadership, cultural awareness, and collective responsibility. We envision a world where every individual contributes positively to their community and lives with purpose, dignity, and service.
                </p>
                
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ 
                    width: activeCard === 'vision' ? '100%' : '20%',
                    opacity: activeCard === 'vision' ? 1 : 0.6
                  }}
                  className="h-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full shadow-lg"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          </motion.div>



          {/* Global Movement Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-24"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.02, 
                rotateY: 2,
                z: 30
              }}
              className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-teal-500/10 p-10 rounded-3xl border border-white/30 overflow-hidden cursor-pointer shadow-2xl hover:shadow-teal-500/25 transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glass Effect Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-cyan-400/15 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl" />
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-75" />
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-2xl">🌏</span>
                  </motion.div>
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">A Global Movement</h3>
                </div>
                
                <p className="text-white/90 text-lg leading-relaxed font-medium">
                  HSS Thailand is part of a global network of Hindu Swayamsevak Sangh chapters active in over 40 countries. Each chapter operates autonomously while sharing a common goal: to promote human dignity, family values, cultural awareness, and responsible citizenship through seva (service), sanskar (values), and sangathan (unity).
                </p>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          </motion.div>

          {/* Core Values Section */}
          <motion.div 
            variants={itemVariants}
          >
            <motion.div 
              whileHover={{ 
                scale: 1.02, 
                rotateY: -2,
                z: 30
              }}
              className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-orange-500/10 p-10 rounded-3xl border border-white/30 overflow-hidden cursor-pointer shadow-2xl hover:shadow-orange-500/25 transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glass Effect Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-red-400/15 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl" />
              
              {/* Floating Particles */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-75" />
              <div className="absolute bottom-6 right-6 w-1 h-1 bg-red-400 rounded-full animate-pulse" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-2xl">🧭</span>
                  </motion.div>
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-300">Our Core Values</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Sewa (Service)', desc: 'Giving without expecting in return', icon: '🤲' },
                    { title: 'Sanskar (Values)', desc: 'Living by principles of discipline, humility, and self-control', icon: '⚖️' },
                    { title: 'Sangathan (Unity)', desc: 'Building strength through collective effort', icon: '🤝' },
                    { title: 'Leadership', desc: 'Empowering youth and adults to take initiative and lead with compassion', icon: '👑' },
                    { title: 'Cultural Awareness', desc: 'Honoring and promoting traditional wisdom and diversity', span: 'md:col-span-2', icon: '🎭' }
                  ].map((value, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, z: 20 }}
                      className={`group/card relative backdrop-blur-lg bg-gradient-to-br from-white/15 to-orange-400/15 p-6 rounded-xl border border-white/20 overflow-hidden cursor-pointer shadow-lg hover:shadow-orange-400/25 transition-all duration-300 ${value.span || ''}`}
                    >
                      {/* Card Glass Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-300/10 to-red-300/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-3">{value.icon}</span>
                          <h4 className="text-xl font-bold text-white">{value.title}</h4>
                        </div>
                        <p className="text-white/80 leading-relaxed">{value.desc}</p>
                      </div>
                      
                      {/* Card Decorative Elements */}
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-md" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Organization information with animated background */}
      <section id="about" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements - Floating gradient orbs for visual depth */}
        <div className="absolute inset-0">
          {/* Top-left floating orb */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse" />
          {/* Bottom-right floating orb with delay */}
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          {/* Center floating orb with different delay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-red-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="w-32 h-2 bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 mx-auto mb-6 rounded-full shadow-lg" />
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-xl animate-bounce" />
              </div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-300 to-amber-300 mb-10 tracking-tight relative"
            >
              <span className="relative inline-block">
                ✨ About Us
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-red-400/20 blur-2xl rounded-full"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 max-w-6xl mx-auto shadow-2xl"
            >
              <div className="space-y-8 text-white">
                <motion.p 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="text-xl md:text-2xl font-semibold leading-relaxed text-center"
                >
                  Hindu Swayamsevak Sangh (HSS) Thailand is a voluntary, non-profit organization that works toward building a cohesive and culturally vibrant society through the principles of selfless service (seva), community harmony, and value-based education.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"
                />
                
                <motion.p 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="text-lg md:text-xl leading-relaxed text-center text-gray-200"
                >
                  Inspired by time-tested Indian traditions and values, HSS Thailand aims to nurture responsible citizens who are grounded in character and motivated by service. We engage individuals of all ages in weekly shakhas, cultural celebrations, leadership workshops, youth camps, and social service projects.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Mission and Vision Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24"
          >
            {/* Mission Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50
              }}
              onHoverStart={() => setActiveCard('mission')}
              onHoverEnd={() => setActiveCard(null)}
              className="group relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-green-500/10 p-10 rounded-3xl border border-white/30 overflow-hidden cursor-pointer shadow-2xl hover:shadow-green-500/25 transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glass Effect Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-emerald-400/15 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl" />
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75" />
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-2xl">🌱</span>
                  </motion.div>
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Our Mission</h3>
                </div>
                
                <p className="text-white/90 text-lg leading-relaxed mb-6 font-medium">
                  To inspire selfless service and promote universal human values such as compassion, integrity, discipline, and mutual respect. We believe that individual transformation through consistent learning and action leads to the transformation of society at large.
                </p>
                
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ 
                    width: activeCard === 'mission' ? '100%' : '20%',
                    opacity: activeCard === 'mission' ? 1 : 0.6
                  }}
                  className="h-2 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full shadow-lg"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl" />
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: -5,
                z: 50
              }}
              onHoverStart={() => setActiveCard('vision')}
              onHoverEnd={() => setActiveCard(null)}
              className="group relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-blue-500/10 p-10 rounded-3xl border border-white/30 overflow-hidden cursor-pointer shadow-2xl hover:shadow-blue-500/25 transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glass Effect Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-400/15 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl" />
              
              {/* Floating Particles */}
              <div className="absolute top-6 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75" />
              <div className="absolute bottom-4 right-6 w-1 h-1 bg-indigo-400 rounded-full animate-pulse" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl"
                    whileHover={{ rotate: -360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-2xl">👁️</span>
                  </motion.div>
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Our Vision</h3>
                </div>
                
                <p className="text-white/90 text-lg leading-relaxed mb-6 font-medium">
                  A harmonious and empowered society rooted in strong character, inclusive leadership, cultural awareness, and collective responsibility. We envision a world where every individual contributes positively to their community and lives with purpose, dignity, and service.
                </p>
                
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ 
                    width: activeCard === 'vision' ? '100%' : '20%',
                    opacity: activeCard === 'vision' ? 1 : 0.6
                  }}
                  className="h-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full shadow-lg"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          </motion.div>

          {/* Global Movement Section */}
          <motion.div 
            variants={itemVariants}
            className="mb-24"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.02, 
                rotateY: 2,
                z: 30
              }}
              className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-teal-500/10 p-10 rounded-3xl border border-white/30 overflow-hidden cursor-pointer shadow-2xl hover:shadow-teal-500/25 transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glass Effect Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-cyan-400/15 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl" />
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-75" />
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-2xl">🌏</span>
                  </motion.div>
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">A Global Movement</h3>
                </div>
                
                <p className="text-white/90 text-lg leading-relaxed font-medium">
                  HSS Thailand is part of a global network of Hindu Swayamsevak Sangh chapters active in over 40 countries. Each chapter operates autonomously while sharing a common goal: to promote human dignity, family values, cultural awareness, and responsible citizenship through seva (service), sanskar (values), and sangathan (unity).
                </p>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          </motion.div>

          {/* Core Values Section */}
          <motion.div 
            variants={itemVariants}
          >
            <motion.div 
              whileHover={{ 
                scale: 1.02, 
                rotateY: -2,
                z: 30
              }}
              className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-orange-500/10 p-10 rounded-3xl border border-white/30 overflow-hidden cursor-pointer shadow-2xl hover:shadow-orange-500/25 transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glass Effect Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-red-400/15 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl" />
              
              {/* Floating Particles */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-75" />
              <div className="absolute bottom-6 right-6 w-1 h-1 bg-red-400 rounded-full animate-pulse" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-2xl">🧭</span>
                  </motion.div>
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-300">Our Core Values</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Sewa (Service)', desc: 'Giving without expecting in return', icon: '🤲' },
                    { title: 'Sanskar (Values)', desc: 'Living by principles of discipline, humility, and self-control', icon: '⚖️' },
                    { title: 'Sangathan (Unity)', desc: 'Building strength through collective effort', icon: '🤝' },
                    { title: 'Leadership', desc: 'Empowering youth and adults to take initiative and lead with compassion', icon: '👑' },
                    { title: 'Cultural Awareness', desc: 'Honoring and promoting traditional wisdom and diversity', span: 'md:col-span-2', icon: '🎭' }
                  ].map((value, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, z: 20 }}
                      className={`group/card relative backdrop-blur-lg bg-gradient-to-br from-white/15 to-orange-400/15 p-6 rounded-xl border border-white/20 overflow-hidden cursor-pointer shadow-lg hover:shadow-orange-400/25 transition-all duration-300 ${value.span || ''}`}
                    >
                      {/* Card Glass Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-300/10 to-red-300/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-3">{value.icon}</span>
                          <h4 className="text-xl font-bold text-white">{value.title}</h4>
                        </div>
                        <p className="text-white/80 leading-relaxed">{value.desc}</p>
                      </div>
                      
                      {/* Card Decorative Elements */}
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-md" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-8"
            >
              <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-4 rounded-full" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 mb-8 tracking-tight">
              Our Programs
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-light"
            >
              Comprehensive programs designed to foster personal growth, cultural awareness, and community service through structured activities and value-based education.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {programs.map((program, index) => (
              <motion.div 
                key={program.id}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setSelectedProgram(program.id)}
                onHoverEnd={() => setSelectedProgram(null)}
                className="group relative bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl border border-orange-100 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${program.gradient} rounded-2xl flex items-center justify-center mr-4 text-2xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {program.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      {program.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-orange-700 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center text-gray-600"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: selectedProgram === program.id ? '100%' : '0%' }}
                    className={`h-1 bg-gradient-to-r ${program.gradient} mt-6 rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-4 rounded-full" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 mb-8 tracking-tight">
              Contact Us
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Get in touch with us to learn more about our programs, volunteer opportunities, or to join our community.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl border border-orange-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">hssthai@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">083-610-1526</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Hindu Swayamsevak Sangh Thailand<br/>Baan Suan Sukhumvit Condominium<br/>On Nut 46, On Nut, Suan Luang<br/>Bangkok 10250</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
                  >
                    Send Message
                  </motion.button>
                </div>
                
                {/* Enhanced Interactive Location Map */}
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                   className="w-full h-72 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 via-blue-50 to-cyan-100 relative border-2 border-white/50 backdrop-blur-sm"
                 >
                   {/* Enhanced Map Background with Depth */}
                   <div className="absolute inset-0">
                     <div className="w-full h-full bg-gradient-to-br from-emerald-200 via-teal-100 to-blue-200 opacity-40"></div>
                     
                     {/* Topographic Lines */}
                     <div className="absolute inset-0 opacity-20">
                       <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                         <defs>
                           <pattern id="topo" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                             <circle cx="20" cy="20" r="15" fill="none" stroke="#059669" strokeWidth="0.5" opacity="0.6"/>
                             <circle cx="20" cy="20" r="8" fill="none" stroke="#0891b2" strokeWidth="0.3" opacity="0.4"/>
                           </pattern>
                         </defs>
                         <rect width="100%" height="100%" fill="url(#topo)"/>
                       </svg>
                     </div>
                     
                     {/* Street Grid */}
                     <div className="absolute inset-0 opacity-25">
                       <div className="grid grid-cols-10 grid-rows-8 h-full w-full">
                         {Array.from({ length: 80 }).map((_, i) => (
                           <div key={i} className="border border-gray-400 border-opacity-30"></div>
                         ))}
                       </div>
                     </div>
                     
                     {/* Floating Elements for Depth */}
                     <div className="absolute top-8 left-8 w-16 h-16 bg-green-300 rounded-full opacity-10 blur-xl animate-pulse"></div>
                     <div className="absolute bottom-12 right-12 w-20 h-20 bg-blue-300 rounded-full opacity-15 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                     <div className="absolute top-20 right-16 w-12 h-12 bg-teal-300 rounded-full opacity-12 blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
                   </div>
                   
                   {/* Enhanced Location Marker with 3D Effect */}
                   <motion.div 
                     initial={{ scale: 0, rotate: -180 }}
                     whileInView={{ scale: 1, rotate: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 200 }}
                     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                   >
                     <div className="relative">
                       {/* Multiple Pulse Rings */}
                       <div className="absolute top-0 left-0 w-12 h-12 bg-red-500 rounded-full animate-ping opacity-40" style={{animationDuration: '2s'}}></div>
                       <div className="absolute top-1 left-1 w-10 h-10 bg-orange-500 rounded-full animate-ping opacity-50" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
                       <div className="absolute top-2 left-2 w-8 h-8 bg-yellow-500 rounded-full animate-ping opacity-60" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
                       
                       {/* Enhanced Marker Pin */}
                       <motion.div 
                         whileHover={{ scale: 1.1, rotate: 5 }}
                         className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full border-4 border-white shadow-2xl relative z-20 cursor-pointer"
                       >
                         <div className="absolute inset-2 bg-gradient-to-br from-red-300 to-red-500 rounded-full flex items-center justify-center">
                           <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                             <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                           </svg>
                         </div>
                         <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-red-600 drop-shadow-lg"></div>
                       </motion.div>
                     </div>
                   </motion.div>
                   
                   {/* Enhanced Location Info Card */}
                   <motion.div 
                     initial={{ y: 50, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.5, duration: 0.6 }}
                     className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-white via-white to-orange-50 bg-opacity-98 rounded-xl p-4 shadow-2xl border border-white/60 backdrop-blur-lg"
                   >
                     <div className="flex items-center space-x-3">
                       <motion.div 
                         whileHover={{ rotate: 360 }}
                         transition={{ duration: 0.6 }}
                         className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
                       >
                         <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                         </svg>
                       </motion.div>
                       <div className="flex-1">
                         <h4 className="font-bold text-gray-800 text-base flex items-center space-x-2">
                           <span>🕉️</span>
                           <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">HSS Thailand</span>
                         </h4>
                         <p className="text-gray-600 text-sm font-medium">On Nut, Suan Luang, Bangkok 10250</p>
                         <p className="text-gray-500 text-xs mt-1">📍 Hindu Swayamsevak Sangh Thailand</p>
                       </div>
                       <motion.a 
                         href="https://maps.google.com/maps?q=On+Nut,+Suan+Luang,+Bangkok+10250,+Thailand" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         whileHover={{ scale: 1.05, y: -2 }}
                         whileTap={{ scale: 0.95 }}
                         className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                       >
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                         </svg>
                         <span>View Map</span>
                       </motion.a>
                     </div>
                   </motion.div>
                   
                   {/* Decorative Corner Elements */}
                   <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-60 animate-pulse"></div>
                   <div className="absolute top-2 left-2 w-2 h-2 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
                   <div className="absolute bottom-2 right-2 w-2 h-2 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
                 </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Our Frame Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-400/15 to-orange-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-red-400/10 to-pink-400/10 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-300 to-amber-300 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Our Frame
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Capturing moments of unity, service, and cultural celebration. Experience our journey through videos and images that showcase the spirit of HSS Thailand.
            </motion.p>
          </motion.div>

          {/* Video Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-red-200 text-center mb-12">
              📹 Featured Videos
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video Card 1 */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group relative backdrop-blur-2xl bg-gradient-to-br from-white/15 to-orange-500/15 p-6 rounded-3xl border border-white/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl mb-4 overflow-hidden border border-white/20">
                    <iframe 
                      className="w-full h-full rounded-2xl"
                      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100067159560733%2Fvideos%2F835822211039823%2F&show_text=false&width=560&t=0"
                      title="HSS Thailand Community Video"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">🎥 HSS Thailand Community</h4>
                  <p className="text-white/70 text-sm mb-4">Showcasing our vibrant community activities and cultural programs that bring people together.</p>
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>📅 Community Events</span>
                    <span>⏱️ Latest Updates</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-lg" />
              </motion.div>

              {/* Video Card 2 */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="group relative backdrop-blur-2xl bg-gradient-to-br from-white/15 to-blue-500/15 p-6 rounded-3xl border border-white/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl mb-4 overflow-hidden border border-white/20">
                    <iframe 
                      className="w-full h-full rounded-2xl"
                      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100067159560733%2Fvideos%2F575399997750181%2F&show_text=false&width=560&t=0"
                      title="HSS Thailand Community Activities"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">🎯 HSS Thailand Activities</h4>
                  <p className="text-white/70 text-sm mb-4">Showcasing our community engagement and cultural activities in Thailand.</p>
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>📅 Recent Activities</span>
                    <span>⏱️ Community Focus</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-lg" />
              </motion.div>

              {/* Video Card 3 */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group relative backdrop-blur-2xl bg-gradient-to-br from-white/15 to-green-500/15 p-6 rounded-3xl border border-white/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="aspect-video bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl mb-4 overflow-hidden border border-white/20">
                    <iframe 
                      className="w-full h-full rounded-2xl"
                      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F319431203827259&show_text=false&width=560&t=0"
                      title="HSS Thailand Featured Reel"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">🌟 Featured Content</h4>
                  <p className="text-white/70 text-sm mb-4">Highlighting our special moments and community spirit through engaging visual stories.</p>
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>📅 Featured Video</span>
                    <span>⏱️ Short Format</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-lg" />
              </motion.div>
            </div>
          </motion.div>



          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block backdrop-blur-2xl bg-gradient-to-r from-white/15 to-orange-500/15 p-8 rounded-3xl border border-white/30"
            >
              <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-300 mb-4">
                📱 Follow Us for More
              </h4>
              <p className="text-white/80 mb-6 max-w-md">
                Stay connected with HSS Thailand and never miss our latest activities, events, and community initiatives.
              </p>
              <motion.a
                href="https://www.facebook.com/100067159560733/about/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Visit Our Facebook Page</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    );
  };

export default Home;