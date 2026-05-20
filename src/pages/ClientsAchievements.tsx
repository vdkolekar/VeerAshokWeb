import React from 'react';
import { SectionHeader } from '../components/UIBase';
import { CLIENTS_DATA, ACHIEVEMENTS_DATA } from '../constants/data';
import { Trophy, Briefcase } from 'lucide-react';

export const ClientsPage = () => (
  <div className="pt-24 min-h-screen">
    <section className="section-padding container">
      <SectionHeader subheading="Our Network" heading="Trusted Industrial Partners" centered />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {CLIENTS_DATA.map((client) => (
          <div key={client.id} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center group hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
              <Briefcase className="text-gray-300 group-hover:text-primary" />
            </div>
            <h3 className="text-navy font-bold mb-2">{client.name}</h3>
            <span className="text-primary text-xs font-bold uppercase tracking-widest">{client.category}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export const AchievementsPage = () => (
  <div className="pt-24 min-h-screen bg-navy text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
    <section className="section-padding container relative z-10">
      <SectionHeader subheading="Our Milestone" heading="Legacy of Excellence" dark centered />
      <div className="max-w-4xl mx-auto space-y-12">
        {ACHIEVEMENTS_DATA.map((item, index) => (
          <div key={item.id} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-shrink-0 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-3xl font-black">
              <Trophy />
            </div>
            <div className={`flex-grow p-8 bg-white/5 rounded-2xl border border-white/10 ${index % 2 === 1 ? 'text-right' : 'text-left'}`}>
              <span className="text-primary font-bold text-xl mb-2 block">{item.year}</span>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);
