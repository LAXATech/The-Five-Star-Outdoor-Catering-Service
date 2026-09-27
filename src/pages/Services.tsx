import React from 'react';
import { 
  Tent, 
  Flame, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  FileSpreadsheet, 
  ArrowRight, 
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { BUSINESS_INFO, EVENT_TYPES, SERVICE_CAPABILITIES } from '../data/cateringData';

interface ServicesProps {
  onRequestQuote: (initialData?: any) => void;
}

export const Services: React.FC<ServicesProps> = ({ onRequestQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tent': return <Tent className="w-6 h-6 text-[#C5A059]" />;
      case 'Flame': return <Flame className="w-6 h-6 text-[#C5A059]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#C5A059]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#C5A059]" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6 text-[#C5A059]" />;
      default: return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* 1. HERO */}
      <section className="relative py-24 sm:py-28 bg-[#0B140E] overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80"
            alt="Outdoor catering banquet service"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B140E] via-[#0B140E]/80 to-[#0B140E]/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#C5A059]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#DFBE72] font-semibold">
              Comprehensive Banquet Solutions
            </span>
            <span className="h-px w-6 bg-[#C5A059]"></span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-normal tracking-tight mb-4">
            Our Services
          </h1>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            More than just food — we handle everything so you can enjoy your special day with complete peace of mind.
          </p>
        </div>
      </section>

      {/* 2. WHAT'S INCLUDED — 6 SERVICE CARDS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Turnkey Catering"
          title="What's Included"
          subtitle="From venue setup and live cooking stalls to spotless cleanup, our team manages the entire banquet ecosystem."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="bg-white rounded-3xl p-8 border border-[#E8E2D5] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-6 group-hover:bg-[#0B140E] transition-colors">
                  {getIcon(cap.icon)}
                </div>

                <h3 className="font-heading text-xl font-bold text-stone-900 group-hover:text-[#9A7629] transition-colors mb-2">
                  {cap.title}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-150 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Five Star Guarantee
                </span>
                <span className="text-[11px] uppercase tracking-wider text-stone-400">Included</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EVENT TYPES WE CATER TO */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#E2DAD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Specialized Feasts"
            title="Event Types We Cater To"
            subtitle="Whether it's an intimate celebration of 50 or a majestic convention of 1,500+, our experienced catering captains deliver flawlessness."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENT_TYPES.map((ev) => (
              <div
                key={ev.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D5] shadow-md hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[11px] font-bold uppercase tracking-wider text-[#DFBE72]">
                    {ev.tagline}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-stone-900 group-hover:text-[#9A7629] transition-colors">
                      {ev.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed mt-1.5">
                      {ev.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-150 flex items-center justify-between">
                    <button
                      onClick={() => onRequestQuote({ eventType: ev.title })}
                      className="text-xs font-bold uppercase tracking-wider text-[#9A7629] hover:text-[#0B140E] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-[10px] text-stone-400">Custom Menus</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BANNER CTA */}
      <section className="py-20 bg-[#0B140E] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#C5A059]"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DFBE72]">
              Seamless Dining Management
            </span>
            <span className="h-px w-6 bg-[#C5A059]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-normal tracking-tight mb-4">
            Let's Make Your Event Special!
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8 font-light">
            Share your requirements and get a customized catering plan with transparent pricing and menu tastings.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onRequestQuote()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38F36] text-[#0B140E] font-bold text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              Request a Quote
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hello The Five Star Catering, I would like to inquire about event catering services in Nagercoil.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
