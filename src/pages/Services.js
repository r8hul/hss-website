// Services Component - Displays HSS Thailand's programs and activities
// Uses Framer Motion for animations and interactive card layouts
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  // State Management
  const [activeCard, setActiveCard] = useState(null); // Tracks which service card is currently hovered
  const [selectedProgram, setSelectedProgram] = useState(null); // Tracks selected program for detailed view

  // Animation Variants for Framer Motion
  
  // Container animation - Staggers children animations for smooth entrance
  const containerVariants = {
    hidden: { opacity: 0 }, // Start invisible
    visible: {
      opacity: 1, // Fade in
      transition: {
        staggerChildren: 0.15, // Delay between each child animation
        delayChildren: 0.1 // Initial delay before children start animating
      }
    }
  };

  // Card animation variants - Controls individual service card animations
  const cardVariants = {
    hidden: { 
      opacity: 0, // Start invisible
      y: 60, // Start below final position
      scale: 0.8 // Start smaller
    },
    visible: { 
      opacity: 1, // Fade in
      y: 0, // Move to final position
      scale: 1, // Scale to normal size
      transition: {
        type: "spring", // Spring animation for natural feel
        stiffness: 120, // Spring stiffness
        damping: 20 // Spring damping
      }
    },
    hover: {
      scale: 1.03, // Slightly larger on hover
      y: -8, // Lift up on hover
      transform: "translateY(0px)", // Reset any transforms
      transition: {
        type: "spring",
        stiffness: 400, // Faster spring for hover
        damping: 25
      }
    }
  };

  // Icon animation variants - Controls service icon animations
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 }, // Start small and rotated
    visible: { 
      scale: 1, // Scale to normal
      rotate: 0, // Rotate to normal position
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.15, // Larger on hover
      rotate: 360, // Full rotation on hover
      transition: { duration: 0.4 }
    }
  };

  // Programs Data Array - Configuration for all HSS Thailand service offerings
  // Each program object contains styling, content, and feature information
  const programs = [
    {
      // Shakhas Program - Core weekly training sessions
      id: 'shakhas', // Unique identifier for program
      title: 'Shakhas – Weekly Training for Holistic Development',
      icon: '🧘', // Emoji icon for visual representation
      color: 'orange', // Primary color theme
      gradient: 'from-orange-500 to-red-500', // Gradient for text and accents
      bgGradient: 'from-white to-orange-50', // Background gradient for card
      borderColor: 'border-orange-100', // Border color for card
      description: 'Structured weekly gatherings for discipline, unity, and inner strength development.',
      // Core activities offered in Shakhas
      features: [
        'Yoga & Surya Namaskar for physical fitness',
        'Games (Kridā) for teamwork and coordination',
        'Group chanting & patriotic songs',
        'Bauddhik sessions on culture and values',
        'Prarthana for spiritual grounding'
      ],
      // Different types of Shakhas for various demographics
      specialTypes: [
        'Bālak Shakha (Children)',
        'Yuva Shakha (Youth)',
        'Mahila Shakha (Women)',
        'Parivārik Shakha (Family)'
      ]
    },
    {
      // Cultural Festivals Program - Celebrating traditions and unity
      id: 'festivals',
      title: 'Cultural & National Festivals – Unity in Diversity',
      icon: '🎭', // Theater mask representing cultural performances
      color: 'yellow',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-white to-yellow-50',
      borderColor: 'border-yellow-100',
      description: 'Festivals celebrated with devotion and educational value, teaching traditions and meanings.',
      // Major festivals and celebrations organized
      features: [
        'Raksha Bandhan for universal brotherhood',
        'Ganesh Utsav with eco-conscious practices',
        'Makar Sankranti with charity activities',
        'Diwali & Holi community celebrations',
        'Thai national holidays participation'
      ],
      // Activities during festival celebrations
      activities: [
        'Cultural performances by youth',
        'Bhajan sessions and spiritual talks',
        'Food distribution and social service',
        'Cross-cultural Thai-Indian harmony'
      ]
    },
    {
      // Youth Development Program - Leadership and skill building
      id: 'youth',
      title: 'Youth Empowerment & Leadership Programs',
      icon: '🌟', // Star representing excellence and achievement
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-white to-green-50',
      borderColor: 'border-green-100',
      description: 'Platforms for youth to take initiative, express ideas, and become value-based leaders.',
      // Core youth development activities
      features: [
        'Vivekananda Youth Leadership Camps',
        'Public speaking and debate workshops',
        'Team-building retreats',
        'Tech & career orientation sessions',
        'Volunteer training programs',
        'NGO internship opportunities'
      ],
      // External representation and networking opportunities
      representation: [
        'National & international seminars',
        'Inter-organizational meets',
        'Cultural exchange programs'
      ]
    },
    {
      // Community Service Program - Social contribution and seva
      id: 'service',
      title: 'Community Service (Sevā) – Giving Back to Society',
      icon: '🤝', // Handshake representing cooperation and service
      color: 'blue',
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-white to-blue-50',
      borderColor: 'border-blue-100',
      description: 'Practical service emphasizing real growth through contributing to society.',
      // Types of community service activities
      features: [
        'Blood donation camps',
        'Food & clothing drives',
        'Senior citizen support visits',
        'Post-disaster relief activities',
        'Community clean-up campaigns',
        'Environmental awareness workshops'
      ],
      // Important principle of service
      note: 'Seva is done without discrimination, partnering with local organizations.'
    }
  ];

  return (
    // Main Services Section - Full-screen container with gradient background
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements - Floating geometric shapes for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        {/* First floating orb - Moves in figure-8 pattern with rotation */}
        <motion.div
          animate={{
            x: [0, 120, 0], // Horizontal movement
            y: [0, -80, 0], // Vertical movement
            rotate: [0, 180, 360] // Full rotation cycle
          }}
          transition={{
            duration: 25, // 25-second cycle
            repeat: Infinity, // Continuous animation
            ease: "linear" // Constant speed
          }}
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full"
        />
        {/* Second floating orb - Different movement pattern and timing */}
        <motion.div
          animate={{
            x: [0, -100, 0], // Opposite horizontal movement
            y: [0, 120, 0], // Different vertical movement
            rotate: [360, 180, 0] // Reverse rotation
          }}
          transition={{
            duration: 30, // 30-second cycle for variation
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-r from-indigo-200/20 to-blue-200/20 rounded-full"
        />
      </div>

      {/* Main Content Container - Centered content with proper z-index */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Title and description with entrance animations */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }} // Start above and invisible
          animate={{ opacity: 1, y: 0 }} // Slide down and fade in
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-center mb-20"
        >
          {/* Decorative Element - Animated line above title */}
          <motion.div
            initial={{ scale: 0 }} // Start scaled down
            animate={{ scale: 1 }} // Scale to normal size
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }} // Delayed entrance
            className="inline-block mb-8"
          >
            {/* Gradient line decoration */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto mb-6 rounded-full" />
          </motion.div>
          {/* Main Page Title - Large gradient text */}
          <h2 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-10 tracking-tight">
            Our Programs
          </h2>
          {/* Page Description - Explains HSS Thailand's program philosophy */}
          <motion.p 
            initial={{ opacity: 0 }} // Start invisible
            animate={{ opacity: 1 }} // Fade in
            transition={{ delay: 0.5, duration: 0.8 }} // Delayed fade-in
            className="text-xl md:text-2xl text-gray-700 max-w-6xl mx-auto leading-relaxed font-light"
          >
            At HSS Thailand, our programs are designed to nurture well-rounded individuals who are physically strong, intellectually sharp, socially responsible, and spiritually grounded. These initiatives engage individuals and families of all age groups, helping them grow personally while contributing to society.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setActiveCard(program.id)}
              onHoverEnd={() => setActiveCard(null)}
              onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
              className={`relative bg-gradient-to-br ${program.bgGradient} rounded-3xl p-8 border-2 ${program.borderColor} cursor-pointer transition-all duration-300 group overflow-hidden`}
            >
              {/* Animated Background Glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: activeCard === program.id ? 0.1 : 0,
                  scale: activeCard === program.id ? 1.2 : 0.8
                }}
                className={`absolute inset-0 bg-gradient-to-r ${program.gradient} rounded-3xl opacity-10`}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className={`text-6xl mb-4 p-4 rounded-2xl bg-gradient-to-r ${program.gradient} bg-opacity-10`}
                  >
                    {program.icon}
                  </motion.div>
                  <motion.div
                    animate={{ rotate: selectedProgram === program.id ? 180 : 0 }}
                    className="text-2xl text-gray-400 group-hover:text-gray-600 transition-colors"
                  >
                    ↓
                  </motion.div>
                </div>
                
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent mb-4 leading-tight`}>
                  {program.title}
                </h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <AnimatePresence>
                  {selectedProgram === program.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div>
                        <h4 className={`font-semibold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent mb-3`}>
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {program.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center text-gray-600"
                            >
                              <span className={`w-2 h-2 bg-gradient-to-r ${program.gradient} rounded-full mr-3 flex-shrink-0`} />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      {program.specialTypes && (
                        <div>
                          <h4 className={`font-semibold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent mb-3`}>
                            Special Types:
                          </h4>
                          <ul className="space-y-2">
                            {program.specialTypes.map((type, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 + 0.2 }}
                                className="flex items-center text-gray-600"
                              >
                                <span className={`w-2 h-2 bg-gradient-to-r ${program.gradient} rounded-full mr-3 flex-shrink-0`} />
                                {type}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {program.activities && (
                        <div>
                          <h4 className={`font-semibold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent mb-3`}>
                            Activities:
                          </h4>
                          <ul className="space-y-2">
                            {program.activities.map((activity, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 + 0.3 }}
                                className="flex items-center text-gray-600"
                              >
                                <span className={`w-2 h-2 bg-gradient-to-r ${program.gradient} rounded-full mr-3 flex-shrink-0`} />
                                {activity}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {program.representation && (
                        <div>
                          <h4 className={`font-semibold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent mb-3`}>
                            Representation:
                          </h4>
                          <ul className="space-y-2">
                            {program.representation.map((rep, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 + 0.4 }}
                                className="flex items-center text-gray-600"
                              >
                                <span className={`w-2 h-2 bg-gradient-to-r ${program.gradient} rounded-full mr-3 flex-shrink-0`} />
                                {rep}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {program.note && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className={`mt-4 p-4 bg-gradient-to-r ${program.gradient} bg-opacity-10 rounded-xl border border-opacity-20`}
                        >
                          <p className="text-gray-700 italic text-sm">
                            {program.note}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
        {/* Additional Programs Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6"
            >
              Additional Programs
            </motion.h3>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Family & Sanskar Programs",
                icon: "👨‍👩‍👧‍👦",
                color: "purple",
                description: "Strengthening family bonds through value-based activities and cultural learning."
              },
              {
                title: "Educational Outreach",
                icon: "📚",
                color: "indigo",
                description: "Preserving heritage while engaging with the modern world through education."
              },
              {
                title: "Digital Engagement",
                icon: "💻",
                color: "blue",
                description: "Leveraging technology for remote participation and global collaboration."
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br from-white to-${program.color}-50 p-8 rounded-2xl border border-${program.color}-100 hover:scale-105 transition-all duration-300`}
              >
                <div className={`text-4xl mb-4 p-3 bg-gradient-to-r from-${program.color}-500 to-${program.color}-600 bg-opacity-10 rounded-xl inline-block`}>
                  {program.icon}
                </div>
                <h4 className={`text-xl font-bold text-${program.color}-600 mb-3`}>
                  {program.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;