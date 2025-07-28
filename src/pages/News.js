import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const articles = [
  { 
    title: "Annual Youth Leadership Camp 2024", 
    date: "2024-06-01", 
    category: "Youth", 
    content: "Join our transformative annual youth camp designed to develop leadership skills, cultural awareness, and personal growth. Experience traditional values in a modern setting with workshops, outdoor activities, and mentorship programs.",
    image: "🏕️",
    readTime: "3 min read"
  },
  { 
    title: "Community Service Drive - Building Together", 
    date: "2024-05-15", 
    category: "Service", 
    content: "Participate in our upcoming community service initiatives focused on environmental conservation, elderly care, and educational support. Together, we can make a meaningful impact in our local communities.",
    image: "🤝",
    readTime: "2 min read"
  },
  { 
    title: "Diwali Festival Celebrations 2024", 
    date: "2024-04-10", 
    category: "Festivals", 
    content: "Celebrate the festival of lights with us! Join our grand Diwali celebrations featuring traditional performances, cultural exhibitions, delicious food, and community bonding activities for all ages.",
    image: "🪔",
    readTime: "4 min read"
  },
  { 
    title: "Digital Satsang Series Launch", 
    date: "2024-03-20", 
    category: "Digital", 
    content: "Introducing our new digital satsang series - weekly online sessions featuring spiritual discussions, meditation practices, and cultural learning opportunities accessible from anywhere in the world.",
    image: "💻",
    readTime: "2 min read"
  },
  { 
    title: "Family Values Workshop Series", 
    date: "2024-02-28", 
    category: "Family", 
    content: "Strengthen family bonds through our comprehensive workshop series covering communication, traditional values, parenting in modern times, and creating harmonious family environments.",
    image: "👨‍👩‍👧‍👦",
    readTime: "5 min read"
  },
  { 
    title: "International Yoga Day Celebration", 
    date: "2024-06-21", 
    category: "Health", 
    content: "Join us for a special International Yoga Day celebration featuring group yoga sessions, meditation workshops, wellness talks, and healthy lifestyle demonstrations for holistic well-being.",
    image: "🧘‍♀️",
    readTime: "3 min read"
  }
];

const categories = ["All", ...Array.from(new Set(articles.map(a => a.category)))];

const categoryColors = {
  "Youth": "from-green-500 to-emerald-600",
  "Service": "from-blue-500 to-cyan-600",
  "Festivals": "from-orange-500 to-red-600",
  "Digital": "from-purple-500 to-indigo-600",
  "Family": "from-pink-500 to-rose-600",
  "Health": "from-teal-500 to-green-600"
};

const News = () => {
  const [filter, setFilter] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const filtered = filter === "All" ? articles : articles.filter(a => a.category === filter);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-6">
            News & Updates
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay connected with our latest activities, events, and community initiatives. 
            Discover how we're building stronger communities together.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === cat 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((article, idx) => (
              <motion.article
                key={`${filter}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                {/* Article Header */}
                <div className={`h-32 bg-gradient-to-r ${categoryColors[article.category] || 'from-gray-500 to-gray-600'} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 text-4xl">{article.image}</div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm opacity-90">{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {article.readTime}
                    </span>
                    <motion.span 
                      className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Read more →
                    </motion.span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Newsletter Signup */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, event updates, and community stories directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-48 bg-gradient-to-r ${categoryColors[selectedArticle.category]} relative`}>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-6xl mb-2">{selectedArticle.image}</div>
                  <h2 className="text-2xl font-bold">{selectedArticle.title}</h2>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                  <span>{new Date(selectedArticle.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{selectedArticle.category}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedArticle.content}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default News;