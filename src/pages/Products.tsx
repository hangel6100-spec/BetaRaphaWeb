import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';
import surgicalImg from '@/assets/product-surgical.jpg';
import ppeImg from '@/assets/product-ppe.jpg';
import woundImg from '@/assets/product-wound.jpg';
import ivImg from '@/assets/product-iv.jpg';
import consumablesImg from '@/assets/product-consumables.jpg';
import sterilizationImg from '@/assets/product-sterilization.jpg';
import scalpelImg from '@/assets/product-scalpel.jpg';
import gownsImg from '@/assets/product-gowns.jpg';
import bandagesImg from '@/assets/product-bandages.jpg';
import syringesImg from '@/assets/product-syringes.jpg';
import swabsImg from '@/assets/product-swabs.jpg';
import disinfectantImg from '@/assets/product-disinfectant.jpg';
import glovesImg from '@/assets/product-gloves.jpg';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'surgical', name: 'Surgical Supplies' },
  { id: 'ppe', name: 'PPE' },
  { id: 'wound-care', name: 'Wound Care' },
  { id: 'iv-therapy', name: 'IV Therapy' },
  { id: 'consumables', name: 'Consumables' },
  { id: 'sterilization', name: 'Sterilization' },
];

const products = [
  {
    id: 1,
    name: 'Surgical Gloves - Latex Free',
    category: 'surgical',
    description: 'Powder-free, latex-free surgical gloves for sensitive procedures.',
    image: glovesImg,
    featured: true,
  },
  {
    id: 2,
    name: 'N95 Respirator Masks',
    category: 'ppe',
    description: 'NIOSH-approved N95 masks for maximum respiratory protection.',
    image: ppeImg,
    featured: true,
  },
  {
    id: 3,
    name: 'Advanced Wound Dressing Kit',
    category: 'wound-care',
    description: 'Complete wound care kit with antimicrobial dressings.',
    image: woundImg,
    featured: true,
  },
  {
    id: 4,
    name: 'IV Catheter Set',
    category: 'iv-therapy',
    description: 'Sterile IV catheter sets with safety features.',
    image: ivImg,
    featured: false,
  },
  {
    id: 5,
    name: 'Examination Gloves - Nitrile',
    category: 'consumables',
    description: 'High-quality nitrile gloves for general medical use.',
    image: consumablesImg,
    featured: true,
  },
  {
    id: 6,
    name: 'Sterilization Pouches',
    category: 'sterilization',
    description: 'Self-sealing pouches for steam and EO sterilization.',
    image: sterilizationImg,
    featured: false,
  },
  {
    id: 7,
    name: 'Surgical Scalpel Blades',
    category: 'surgical',
    description: 'Precision stainless steel scalpel blades, various sizes.',
    image: scalpelImg,
    featured: false,
  },
  {
    id: 8,
    name: 'Isolation Gowns',
    category: 'ppe',
    description: 'Level 3 isolation gowns for fluid resistance.',
    image: gownsImg,
    featured: false,
  },
  {
    id: 9,
    name: 'Adhesive Bandages',
    category: 'wound-care',
    description: 'Flexible fabric bandages for minor wounds.',
    image: bandagesImg,
    featured: false,
  },
  {
    id: 10,
    name: 'Syringes - Luer Lock',
    category: 'iv-therapy',
    description: 'Sterile disposable syringes with luer lock tips.',
    image: syringesImg,
    featured: true,
  },
  {
    id: 11,
    name: 'Cotton Swabs - Medical Grade',
    category: 'consumables',
    description: 'Sterile cotton swabs for specimen collection.',
    image: swabsImg,
    featured: false,
  },
  {
    id: 12,
    name: 'Surface Disinfectant',
    category: 'sterilization',
    description: 'Hospital-grade surface disinfectant spray.',
    image: disinfectantImg,
    featured: true,
  },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-sage font-medium mb-3 block">Our Solutions</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive Medical Supply Solutions
            </h1>
            <p className="text-xl text-sage/90">
              From emergency response to routine patient care, RaphaMed provides the medical supplies 
              your team depends on—every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Search & Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-sage/30 text-ebony hover:bg-sage/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-8">
            Showing {filteredProducts.length} products
            {activeCategory !== 'all' && ` in ${categories.find(c => c.id === activeCategory)?.name}`}
          </p>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group product-card bg-card rounded-xl overflow-hidden border border-border shadow-card"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.featured && (
                    <span className="absolute top-3 left-3 bg-coffee text-white text-xs font-medium px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <span className="text-xs text-coffee font-medium uppercase tracking-wide">
                    {categories.find(c => c.id === product.category)?.name}
                  </span>
                  <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-coffee transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-sm font-medium text-coffee hover:gap-2 transition-all"
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  handleCategoryChange('all');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 section-sage">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience the RaphaMed Difference?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our team help you find the perfect medical supply solutions for your facility. 
            We offer dedicated support and customized solutions.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
