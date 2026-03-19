import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactOptions = [
    { icon: Phone, title: 'Call Us', detail: '+91 98765 43210', sub: 'Mon-Sat (9am - 7pm)' },
    { icon: Mail, title: 'Email Us', detail: 'info@educationpoint.com', sub: 'Response within 24h' },
    { icon: MapPin, title: 'Visit Us', detail: '123 Education Hub, Delhi', sub: 'Near knowledge metro' },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Contact Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Get in Touch"
            title="We'd Love to Hear from You"
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {contactOptions.map((opt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 flex items-center gap-6 group hover:bg-primary transition-colors duration-300"
              >
                <div className="bg-blue-100 p-4 rounded-2xl group-hover:bg-white/20 transition-colors">
                  <opt.icon className="text-primary group-hover:text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary group-hover:text-white mb-1">{opt.title}</h3>
                  <div className="text-gray-900 group-hover:text-white font-black text-xl">{opt.detail}</div>
                  <p className="text-gray-500 group-hover:text-white/60 text-sm mt-1">{opt.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8"
                  >
                    <CheckCircle size={48} />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-primary mb-4">Message Sent!</h3>
                  <p className="text-gray-600 max-w-sm">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                    Send us a Message
                    <div className="w-10 h-1 bg-secondary rounded-full"></div>
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-primary/60 mb-2 uppercase tracking-wide">Full Name</label>
                        <input
                          required
                          type="text"
                          className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all outline-none text-primary font-medium"
                          placeholder="Your Name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-primary/60 mb-2 uppercase tracking-wide">Email Address</label>
                        <input
                          required
                          type="email"
                          className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all outline-none text-primary font-medium"
                          placeholder="name@email.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-primary/60 mb-2 uppercase tracking-wide">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all outline-none text-primary font-medium"
                          placeholder="+91 XXXXX XXXXX"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-primary/60 mb-2 uppercase tracking-wide">Subject</label>
                        <select
                          className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all outline-none text-primary font-medium appearance-none"
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        >
                          <option value="">Select Topic</option>
                          <option value="admission">Admission Inquiry</option>
                          <option value="course">Course Details</option>
                          <option value="complaint">Feedback/Complaint</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary/60 mb-2 uppercase tracking-wide">Your Message</label>
                      <textarea
                        rows="5"
                        required
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all outline-none text-primary font-medium resize-none"
                        placeholder="How can we help you?"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      ></textarea>
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full py-5 rounded-2xl font-black text-xl shadow-primary/20">
                      Send Message <Send size={20} className="ml-2" />
                    </Button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Map and Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[450px] border-8 border-white">
                <iframe
                  title="Education Point Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0123456789!2d77.1234567!3d28.6543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd123456789%3A0xabcdef123456789!2sDelhi!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              
              <div className="bg-primary text-white p-10 rounded-[2.5rem]">
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  Our Headquarters
                  <div className="w-10 h-1 bg-secondary rounded-full"></div>
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-secondary shrink-0" size={24} />
                    <p className="text-lg opacity-90">123, Education Hub, Knowledge Square, Sector 15, Delhi, 110001, India</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="text-secondary shrink-0" size={24} />
                    <p className="text-lg opacity-90">Open: Monday to Saturday (9:00 AM - 7:00 PM)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
