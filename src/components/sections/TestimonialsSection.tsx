import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const TestimonialsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <section className="section-padding bg-navy relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-gold rounded-full" />
      </div>

      <div className="container-kits relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-gold/70 text-xs font-nav tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-gold/40" />
            Student Voices
            <span className="w-8 h-px bg-gold/40" />
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-3">
            What Our Students Say
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-center"
              >
                {/* Large quote mark */}
                <Quote className="text-gold/40 mx-auto mb-6" size={48} />

                <blockquote className="font-body text-white/85 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Attribution */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-600 flex items-center justify-center font-heading font-bold text-navy text-xl">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-white text-base">{testimonial.name}</p>
                    {testimonial.programme && (
                      <p className="text-gold/70 text-sm font-nav">{testimonial.programme}</p>
                    )}
                    {testimonial.batch && (
                      <p className="text-white/40 text-xs font-nav">Batch of {testimonial.batch}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`w-2 h-2 transition-all duration-300 ${i === current ? 'bg-gold scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                    style={{ borderRadius: '1px' }}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
