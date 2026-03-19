import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Clock, ArrowRight, CheckCircle2, Star, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';
import CourseCard from '../components/ui/CourseCard';

const Home = () => {
  const features = [
    {
      title: 'Expert Faculty',
      description: 'Learn from highly qualified and experienced teachers who are masters in their fields.',
      icon: Users,
    },
    {
      title: 'Personalized Learning',
      description: 'We focus on individual growth with small batch sizes and dedicated doubt sessions.',
      icon: Zap,
    },
    {
      title: 'Modern Infrastructure',
      description: 'Fully equipped classrooms with digital aids and a library of extensive resources.',
      icon: Award,
    },
    {
      title: 'Flexible Batches',
      description: 'Choose timings that suit your schedule with morning and evening sessions.',
      icon: Clock,
    },
  ];

  const topCourses = [
    {
      title: 'Class 9th & 10th Boards',
      description: 'Comprehensive preparation for CBSE/ICSE board exams with mock tests and foundation building.',
      duration: '1 Year',
      students: '480+',
      price: '₹5,999',
      icon: BookOpen,
    },
    {
      title: 'Commerce (11th & 12th)',
      description: 'Expert coaching for Accounts, Business Studies, and Economics with result-oriented approach.',
      duration: '1 Year',
      students: '330+',
      price: '₹7,999',
      icon: Zap,
    },
    {
      title: 'University Entrance Prep',
      description: 'Specialized coaching for Jamia (JMI), AMU, BHU, and JNU Entrance examinations.',
      duration: '6 Months',
      students: '600+',
      price: '₹6,499',
      icon: Award,
    },
  ];


  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 gradient-bg">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-light rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-white/10 text-secondary-light rounded-full text-sm font-semibold tracking-wide border border-white/20 mb-6 backdrop-blur-sm">
                #1 Coaching Institute in the City
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                Welcome to <br />
                <span className="text-secondary drop-shadow-lg">Education Point</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-xl leading-relaxed">
                Your path to success starts here. We provide world-class education with a focus on conceptual clarity and competitive excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="group">
                  Enroll Now
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                  Explore Courses
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-8 text-white">
                <div>
                  <div className="text-3xl font-bold">10k+</div>
                  <div className="text-sm text-blue-200">Total Students</div>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-sm text-blue-200">Expert Faculty</div>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm text-blue-200">Success Rate</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                  alt="Students studying"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100"
              >
                <div className="bg-green-100 p-2 rounded-lg"><Star className="text-green-600" /></div>
                <div>
                  <div className="text-sm font-bold text-gray-800">4.9/5 Rating</div>
                  <div className="text-xs text-gray-500">From 2k+ Students</div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100"
              >
                <div className="bg-blue-100 p-2 rounded-lg"><CheckCircle2 className="text-blue-600" /></div>
                <div>
                  <div className="text-sm font-bold text-gray-800">Verified Quality</div>
                  <div className="text-xs text-gray-500">Certified Institute</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Why Choose Education Point"
            title="We Provide the Best for Your Child"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary-dark font-bold uppercase tracking-widest text-sm">Our Featured Courses</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-2">Explore Our Trending Coaching Programs</h2>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All Courses
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
          
          <div className="mt-12 flex justify-center md:hidden">
            <Button variant="outline" className="w-full">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Stats / CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12"></div>
        
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight"
          >
            Ready to shape your future with Education Point?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
          >
            Join thousands of successful students and start your journey today with our expert guidance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Button size="lg" variant="secondary" className="px-12 text-xl font-bold py-6">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-12 py-6">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
