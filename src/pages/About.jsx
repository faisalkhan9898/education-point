import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const About = () => {
  const values = [
    {
      title: 'Our Mission',
      description: 'To provide high-quality education that simplifies complex concepts and builds a strong foundation for every student.',
      icon: Target,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Our Vision',
      description: 'To become the leading coaching institute recognized for academic excellence and the success of our students in competitive exams.',
      icon: Eye,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      title: 'Our Goal',
      description: 'To empower 100,000 students by 2030 with the knowledge and skills required to excel in their chosen career paths.',
      icon: Award,
      color: 'bg-green-100 text-green-600',
    },
  ];

  const teachers = [
    {
      name: 'Dr. Ramesh Kumar',
      role: 'Physics Expert',
      exp: '15+ Years',
      img: 'https://images.unsplash.com/photo-1544717297-fa154da09f9d?q=80&w=2070&auto=format&fit=crop',
    },
    {
      name: 'Ms. Sneha Sharma',
      role: 'Mathematics Specialist',
      exp: '10+ Years',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    },
    {
      name: 'Mr. Amit Verma',
      role: 'Chemistry Guru',
      exp: '12+ Years',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    },
    {
      name: 'Dr. Priya Singh',
      role: 'Biology Mentor',
      exp: '8+ Years',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
  ];

  return (
    <div className="pt-20">
      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-2xl -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                alt="About Education Point"
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-3xl shadow-xl z-20 hidden md:block">
                <div className="text-4xl font-bold mb-1">15+</div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Years of Excellence</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary-dark font-bold uppercase tracking-widest text-sm">Know More About Us</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-2 mb-6">Empowering Minds Since 2008</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Education Point was founded with a single mission: to provide quality education that is accessible and effective. Over the past 15 years, we have grown from a small coaching center into a premier institute known for our result-oriented approach.
              </p>
              <div className="space-y-4">
                {[
                  'Qualified & Experienced Faculty',
                  'State-of-the-Art Digital Classrooms',
                  'Comprehensive Study Material',
                  'Individual Attention to Every Student',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-secondary-dark shrink-0" size={24} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${v.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <v.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  "{v.description}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Meet Our Experts"
            title="The Guiding Stars of Education Point"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-3xl mb-4 relative shadow-xl">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-medium mb-1">{t.exp} Experience</p>
                      <button className="text-xs uppercase tracking-widest font-bold border-b border-white hover:text-secondary hover:border-secondary transition-colors">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary-dark transition-colors">{t.name}</h3>
                  <p className="text-gray-500 font-medium">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
