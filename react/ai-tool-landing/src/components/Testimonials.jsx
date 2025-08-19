import { Star } from "lucide-react";
import React, { useState } from "react";
import { useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Content Marketing Manager",
    company: "TechCorp",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b631?w=100&h=100&fit=crop&crop=face",
    content:
      "ScriptFlow AI has transformed our content creation process. We're producing 3x more high-quality content in half the time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Freelance Writer",
    company: "Independent",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content:
      "The AI understands context incredibly well. It's like having a writing partner that never gets tired and always delivers.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Creative Director",
    company: "BrandStudio",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content:
      "From blog posts to ad copy, ScriptFlow AI adapts to any writing style. It's become indispensable for our agency.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    role: "Startup Founder",
    company: "InnovateLab",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content:
      "As a non-native English speaker, ScriptFlow AI helps me write with confidence. The quality is consistently excellent.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="testimonials" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000`}
          >
            Loved by
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              {" "}
              Thousands of Writers
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-gray-800/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-700/50 max-w-4xl mx-auto">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <div className="font-semibold text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-blue-500" : "bg-gray-600"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
