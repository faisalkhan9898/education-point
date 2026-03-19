import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight } from 'lucide-react';
import Button from './Button';

const CourseCard = ({ title, description, duration, students, price, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      <div className="h-48 bg-primary-light/10 flex items-center justify-center p-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          {Icon && <Icon className="text-primary w-12 h-12" />}
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-2 text-sm">
          {description || "Master the concepts with our expert-led sessions designed for clarity and excellence."}
        </p>
        
        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-1.5">
              <Clock size={16} className="text-secondary-dark" />
              <span>{duration || "6 Months"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users size={16} className="text-secondary-dark" />
              <span>{students || "100+"} Students</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-50">
            <span className="text-2xl font-bold text-primary">{price || "₹4,999"}</span>
            <Button size="sm" className="rounded-xl px-4 py-2">
              Enroll <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
