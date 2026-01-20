import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="bg-charcoal rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-sage rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Experience the RaphaMed Difference?
              </h2>
              <p className="text-sage/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Let's discuss how we can support your healthcare facility with premium medical supplies, 
                reliable delivery, and dedicated partnership.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 text-lg">
                  Contact Our Team
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn-outline inline-flex items-center justify-center gap-2 text-lg">
                  <Phone className="w-5 h-5" />
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
