import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Image as ImageIcon } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const Gallery = () => {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1523050335392-93851089b329?q=80&w=2070&auto=format&fit=crop', title: 'Modern Classroom', category: 'Campus' },
    { id: 2, src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop', title: 'Group Study Session', category: 'Students' },
    { id: 3, src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop', title: 'Digital Lab', category: 'Campus' },
    { id: 4, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop', title: 'Discussion Room', category: 'Students' },
    { id: 5, src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop', title: 'Annual Function', category: 'Events' },
    { id: 6, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop', title: 'Physics Workshop', category: 'Events' },
    { id: 7, src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop', title: 'Teacher Training', category: 'Events' },
    { id: 8, src: 'https://images.unsplash.com/photo-1491845339675-238fee775ed9?q=80&w=2070&auto=format&fit=crop', title: 'Library Stacks', category: 'Campus' },
    { id: 9, src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop', title: 'Coding Bootcamp', category: 'Students' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pt-20 bg-white">
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Moments at Education Point"
            title="A Glimpse into Our Learning Environment"
          />

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg break-inside-avoid"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-secondary-dark text-xs font-bold uppercase tracking-widest">{img.category}</span>
                    <h3 className="text-primary font-bold text-lg">{img.title}</h3>
                    <div className="mt-2 flex items-center text-primary/60 text-sm">
                      <Maximize2 size={16} className="mr-2" />
                      Click to expand
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-10 right-10 text-white hover:text-secondary-dark z-10 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={40} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl shadow-primary/20"
              />
              <div className="mt-6 text-center text-white">
                <h3 className="text-2xl font-bold mb-1">{selectedImage.title}</h3>
                <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty state visual */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ImageIcon size={32} />
          </div>
          <h2 className="text-2xl font-bold text-primary mb-4">Want to see more?</h2>
          <p className="text-gray-500 mb-8">Visit our campus today for a guided tour and see our state-of-the-art facilities in person.</p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
            Schedule a Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
