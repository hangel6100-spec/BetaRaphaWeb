import { ShieldCheck, Truck, HeartHandshake, Award, Clock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, staggerItem } from '@/components/animation/ScrollReveal';

const features = [
  {
    icon: ShieldCheck,
    title: 'Quality Assured',
    description: 'ISO 13485 certified quality—every product tested, every standard met, every time.',
  },
  {
    icon: Truck,
    title: 'Reliable Distribution',
    description: 'Reliable delivery across Canada and beyond—when you need us, we\'re there.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description: 'Your dedicated healthcare supply partner, always ready to support your success.',
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: '20+ years of trusted partnerships with healthcare leaders across the globe.',
  },
  {
    icon: Clock,
    title: 'Always Available',
    description: 'Always in stock. Always available. Always reliable—even in emergencies.',
  },
  {
    icon: Globe,
    title: 'Worldwide Compliance',
    description: 'Global certifications. Local expertise. International standards.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 section-sage">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-coffee font-medium mb-3 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Healthcare Professionals Choose RaphaMed
          </h2>
          <p className="text-muted-foreground text-lg">
            We believe quality medical supplies strengthen the hands of those who care. Every product, 
            every partnership, every delivery reflects our commitment to excellence.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="bg-card p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
