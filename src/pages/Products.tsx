import React from 'react';
import * as Icons from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { SectionHeader } from '../components/UIBase';
import { SERVICES_DATA, PRODUCTS_DATA } from '../constants/data';
import { Gift } from 'lucide-react';

export const ServicesPage = () => (
  <div className="pt-24 min-h-screen">
    {/* Main Services Grid */}
    <section className="section-padding container">
      <SectionHeader subheading="Our Services" heading="Industrial Services Catalog" centered />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.filter(s => s.id !== '5').map((service) => {
          const IconComp = (Icons as any)[service.icon];
          return (
            <div key={service.id} className="bg-white p-10 rounded-xl hover:shadow-xl transition-all border-l-4 border-primary group">
              <div className="mb-6 p-4 bg-primary/5 rounded-lg inline-block group-hover:bg-primary group-hover:text-white transition-colors">
                {IconComp && <IconComp size={32} />}
              </div>
              <h3 className="text-navy font-bold text-xl mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>

    {/* Featured Gifting Section (Moved to Services) */}
    <section className="bg-navy py-24 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeader subheading="Featured Service" heading="Corporate Gifting Solutions" dark />
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our premier corporate gifting service specializes in custom printing, logo embossing, and tailored structural packaging prototypes. 
              We help you create memorable corporate impressions with high-quality manufactured goods.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white/5 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="text-xs text-white/30 font-bold">Prototype {i}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
            <Gift className="text-primary mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-6">Gifting Capabilities</h3>
            <ul className="space-y-4">
              {['Logo Embossing', 'Custom Structural Packaging', 'Bulk Volume Supply', 'Technical Layout Production'].map((feat) => (
                <li key={feat} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-gray-300">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const ManufacturingPage = () => (
  <div className="pt-24 min-h-screen">
    <section className="section-padding container">
      <SectionHeader subheading="Manufacturing" heading="In-House Capabilities" centered />
      <div className="grid md:grid-cols-3 gap-10">
        {PRODUCTS_DATA.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <div className="h-64 bg-gray-50 flex items-center justify-center border-b border-gray-100">
              <span className="text-gray-300 text-xs font-bold uppercase tracking-widest">{product.name} Mockup</span>
            </div>
            <div className="p-8 flex-grow">
              <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">{product.category}</span>
              <h3 className="text-navy font-bold text-2xl mb-4">{product.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{product.description}</p>
              <button className="flex items-center text-primary font-bold text-sm hover:translate-x-2 transition-transform">
                Request Bulk Spec Sheet <ChevronRight size={18} className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);
