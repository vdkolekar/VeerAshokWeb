import React from 'react';
import { HomeHero, HomeMetrics } from '../components/sections/HomeSections';
import { SectionHeader, PrimaryButton } from '../components/UIBase';

export const HomePage = () => (
  <div className="flex flex-col min-h-screen">
    <HomeHero />
    <HomeMetrics />
    
    <section className="section-padding container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader subheading="Welcome" heading="Excellence in Industrial Solutions" />
          <p className="text-gray-600 mb-8 leading-relaxed">
            Veer Ashok Group is a leader in providing comprehensive industrial services and manufacturing solutions. 
            From our strategic hubs in Pune, we serve a diverse range of industries with quality products and professional services.
          </p>
          <PrimaryButton title="Our Services" href="/services" className="mr-4" />
        </div>
        <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center">
          <span className="text-gray-400 font-bold uppercase tracking-widest">Industrial Overview Visual</span>
        </div>
      </div>
    </section>
  </div>
);

export const AboutPage = () => (
  <div className="pt-24 min-h-screen">
    <section className="section-padding container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader subheading="About Us" heading="A Strong Pune Industrial Footprint" />
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Veer Ashok Group of Companies has established itself as a cornerstone of industrial support in the Pune region. 
              With a deep understanding of local manufacturing needs, we provide end-to-end solutions that keep enterprises running smoothly.
            </p>
            <p>
              Our twin infrastructure deployment points ensure maximum reach and efficiency:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-navy p-6 rounded-lg">
                <h4 className="text-primary font-bold mb-2">Chakan Hub</h4>
                <p className="text-white text-sm opacity-80">Primary Manufacturing & Distribution Facility</p>
              </div>
              <div className="bg-navy p-6 rounded-lg">
                <h4 className="text-primary font-bold mb-2">Wagholi Center</h4>
                <p className="text-white text-sm opacity-80">Logistics & Administrative Operations</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 rounded-2xl h-[500px] flex items-center justify-center relative overflow-hidden group">
          <span className="text-gray-400 font-bold group-hover:scale-110 transition-transform uppercase tracking-widest">Facility Visual</span>
        </div>
      </div>
    </section>
  </div>
);
