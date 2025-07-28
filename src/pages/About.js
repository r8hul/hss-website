// About.js - About page component for HSS Thailand website
// This component displays the organization's mission, vision, and core values
// Features animated sections with glassmorphism effects and interactive cards

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Animation variants for container elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

// Animation variants for individual card items
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

// Animation variants for general items
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10
    }
  }
};

// About component - Main component for the About page
const About = () => {
  // State to track which card is currently being hovered for interactive effects
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Main About Section - Organization information with animated background */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            
            <motion.h1 
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
            </motion.h1>
            
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
            {/* Mission Card - Displays organization's mission with hover effects */}
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
              {/* Hover background effect - Glass effect layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-emerald-400/15 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl" />
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75" />
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
              
              {/* Card content container */}
              <div className="relative z-10">
                {/* Card header with icon and title */}
                <div className="flex items-center mb-8">
                  {/* Mission icon with rotation animation on hover */}
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-2xl">🌱</span>
                  </motion.div>
                  {/* Mission title */}
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Our Mission</h3>
                </div>
                
                {/* Mission description */}
                <p className="text-white/90 text-lg leading-relaxed mb-6 font-medium">
                  To inspire selfless service and promote universal human values such as compassion, integrity, discipline, and mutual respect. We believe that individual transformation through consistent learning and action leads to the transformation of society at large.
                </p>
                
                {/* Animated progress bar that responds to hover state */}
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

            {/* Vision Card - Displays organization's vision with animation variants and hover effects */}
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
              {/* Hover background effect - Glass effect layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-400/15 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl" />
              
              {/* Floating Particles */}
              <div className="absolute top-6 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75" />
              <div className="absolute bottom-4 right-6 w-1 h-1 bg-indigo-400 rounded-full animate-pulse" />
              
              {/* Card content container */}
              <div className="relative z-10">
                {/* Card header with icon and title */}
                <div className="flex items-center mb-8">
                  {/* Vision icon with reverse rotation animation on hover */}
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl"
                    whileHover={{ rotate: -360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-2xl">👁️</span>
                  </motion.div>
                  {/* Vision title */}
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Our Vision</h3>
                </div>
                
                {/* Vision description */}
                <p className="text-white/90 text-lg leading-relaxed mb-6 font-medium">
                  A harmonious and empowered society rooted in strong character, inclusive leadership, cultural awareness, and collective responsibility. We envision a world where every individual contributes positively to their community and lives with purpose, dignity, and service.
                </p>
                
                {/* Animated progress bar with initial width of 0 and animated width based on hover state */}
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
    </div>
  );
};

export default About;