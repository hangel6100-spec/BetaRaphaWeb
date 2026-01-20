import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '5000+', label: 'Products Available' },
  { value: '50+', label: 'Countries Served' },
  { value: '10K+', label: 'Healthcare Partners' },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-16 bg-primary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="stat-number mb-2">{stat.value}</p>
              <p className="text-sage/90 text-sm md:text-base font-medium tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
