import { Shield, Award, CheckCircle, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, staggerItem } from '@/components/animation/ScrollReveal';

const certifications = [
  {
    icon: Shield,
    name: 'ISO 13485',
    description: 'International quality management for medical devices—your guarantee of excellence',
  },
  {
    icon: Award,
    name: 'CE Marked',
    description: 'European compliance and safety certification—trusted across continents',
  },
  {
    icon: FileCheck,
    name: 'FDA Registered',
    description: 'FDA registered and approved—meeting the world\'s highest standards',
  },
  {
    icon: CheckCircle,
    name: 'GMP Certified',
    description: 'Good Manufacturing Practices—ensuring quality from production to delivery',
  },
];

export function CertificationsSection() {
  return (
    <section className="py-16 md:py-20 section-khaki">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Your Assurance of Excellence</h2>
          <p className="text-muted-foreground text-lg">Certified quality you can trust for every patient, every time</p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={staggerItem}
              className="bg-card p-6 rounded-xl text-center hover:shadow-card transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <cert.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
