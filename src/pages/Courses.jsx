import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, GraduationCap, School, BookOpen, Star, Filter, Calculator, Briefcase, Globe } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import CourseCard from '../components/ui/CourseCard';

const Courses = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Class 6-10', 'Commerce (11-12)', 'University Entrance'];

  const courses = [
    // Class 6-10
    {
      title: 'Class 6th to 8th - Foundation',
      category: 'Class 6-10',
      description: 'Strengthening core concepts in Mathematics, Science, and English for middle school students.',
      duration: '1 Year',
      students: '250+',
      price: '₹3,499',
      icon: School,
    },
    {
      title: 'Class 9th & 10th - Board Prep',
      category: 'Class 6-10',
      description: 'Comprehensive coaching for CBSE/ICSE board exams with special focus on Science and Math.',
      duration: '1 Year',
      students: '480+',
      price: '₹5,999',
      icon: BookOpen,
    },
    
    // Commerce 11-12
    {
      title: 'Class 11th Commerce',
      category: 'Commerce (11-12)',
      description: 'Introduction to Accounting, Business Studies, and Economics with practical case studies.',
      duration: '1 Year',
      students: '150+',
      price: '₹7,999',
      icon: Calculator,
    },
    {
      title: 'Class 12th Commerce Boards',
      category: 'Commerce (11-12)',
      description: 'Intensive prep for Board exams including Accounts, BST, Eco and Applied Mathematics.',
      duration: '1 Year',
      students: '180+',
      price: '₹8,499',
      icon: Briefcase,
    },

    // University Entrances
    {
      title: 'Jamia Entrance (JMI)',
      category: 'University Entrance',
      description: 'Specialized coaching for Jamia Millia Islamia school and UG entrance examinations.',
      duration: '6 Months',
      students: '300+',
      price: '₹6,999',
      icon: GraduationCap,
    },
    {
      title: 'AMU Entrance Prep',
      category: 'University Entrance',
      description: 'Focused modules for Aligarh Muslim University (AMU) admission tests for various streams.',
      duration: '6 Months',
      students: '280+',
      price: '₹6,999',
      icon: Star,
    },
    {
      title: 'BHU Entrance coaching',
      category: 'University Entrance',
      description: 'Expert guidance for Banaras Hindu University admission tests across all major UG courses.',
      duration: '4 Months',
      students: '220+',
      price: '₹5,999',
      icon: Filter,
    },
    {
      title: 'JNU Entrance (JNUEE)',
      category: 'University Entrance',
      description: 'Exclusive preparation for Jawaharlal Nehru University entrance exams with a focus on Humanities.',
      duration: '4 Months',
      students: '140+',
      price: '₹5,999',
      icon: Globe,
    },
  ];

  const filteredCourses = filter === 'All' 
    ? courses 
    : courses.filter(c => c.category === filter);

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Diverse Programs"
            title="Courses Tailored for Your Goals"
          />

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 shadow-sm ${
                  filter === c 
                    ? 'bg-primary text-white shadow-xl scale-105' 
                    : 'bg-white text-gray-500 hover:bg-primary-light hover:text-primary'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Weekly Mock Tests', val: 'YES' },
              { label: 'Study Material', val: 'FREE' },
              { label: 'Doubt Sessions', val: '24/7' },
              { label: 'Success rate', val: '95%+' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-primary text-sm font-bold uppercase tracking-widest mb-1">{item.label}</div>
                <div className="text-3xl font-black text-secondary-dark">{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
