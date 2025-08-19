import { Bot, Check, Shield, Sparkles, Users, Zap } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const features = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Advanced AI Writing",
    description:
      "Powered by cutting-edge language models that understand context, tone, and style preferences.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description:
      "Generate high-quality content in seconds. From headlines to full articles, we've got you covered.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description:
      "Work together seamlessly with real-time editing, comments, and brand voice consistency.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Privacy First",
    description:
      "Your data stays secure. Enterprise-grade encryption and compliance with global privacy standards.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "50+ Templates",
    description:
      "From social media posts to technical documentation, choose from our extensive template library.",
  },
  {
    icon: <Check className="w-8 h-8" />,
    title: "Grammar & Style",
    description:
      "Built-in grammar checking and style suggestions ensure your content is always polished and professional.",
  },
];

export default function Features() {
  const container = {
    hidden: {},
    visible: {
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
      variants={container}
      initial="hidden"
      animate="visible"
      id="features"
      className="py-20 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            variants={boxVariants}
            transition={{ duration: 0.5 }}
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000`}
          >
            Everything You Need to
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              {" "}
              Create Amazing Content
            </span>
          </motion.h2>
          <motion.p
            variants={boxVariants}
            transition={{ duration: 0.5 }}
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200`}
          >
            Our AI-powered platform combines cutting-edge technology with
            intuitive design to help you write better, faster, and more
            effectively.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              variants={boxVariants}
              transition={{ duration: 0.5 }}
              key={index}
              className={`group bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
