import { ArrowRight, Sparkles } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0,
        delayChildren: 0,
      },
    },
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="hero"
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.div
          variants={boxVariants}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
          <span className="text-sm font-medium text-blue-200">
            Powered by GPT-4 Technology
          </span>
        </motion.div>

        <motion.h1
          variants={boxVariants}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight"
        >
          Write Smarter,
          <br />
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            Not Harder
          </span>
        </motion.h1>

        <motion.p
          variants={boxVariants}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          ScriptFlow AI transforms your ideas into compelling content. From blog
          posts to marketing copy, create professional-grade writing in seconds
          with the power of artificial intelligence.
        </motion.p>

        <motion.div
          variants={boxVariants}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/25 flex items-center">
            Start Writing for Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-400 hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
            Watch Demo
          </button>
        </motion.div>

        <motion.div
          variants={boxVariants}
          transition={{ duration: 0.5 }}
          className="mt-12 text-sm text-gray-400"
        >
          No credit card required • 2,000 free words • Cancel anytime
        </motion.div>
      </div>
    </motion.section>
  );
}
