"use client";

import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  url,
  image,
  index = 0,
}: ProjectProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 sm:p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 overflow-hidden relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 rounded-2xl"></div>
      
      <div className="relative z-10">
        {image && (
          <div className="mb-5 overflow-hidden rounded-xl bg-gray-100 dark:bg-slate-700">
            <img src={image} alt={title} className="w-full h-40 sm:h-48 object-contain transform group-hover:scale-105 transition-transform duration-300" />
          </div>
        )}
        
        {!image && (
          <div className="mb-5 h-40 sm:h-48 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-600 dark:to-indigo-700 rounded-xl flex items-center justify-center">
            <span className="text-4xl sm:text-5xl">🚀</span>
          </div>
        )}
        
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
          
          <div className="pt-3 flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-2 transition-all duration-300">
            <span>View Project</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
