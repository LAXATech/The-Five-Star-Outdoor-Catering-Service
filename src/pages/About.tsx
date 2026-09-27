import React from 'react';
import { 
  Award, 
  Utensils, 
  HeartHandshake, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { 
  COMPANY_VALUES, 
  CULINARY_TEAM 
} from '../data/cateringData';


export const About: React.FC = () => {
  const getValueIcon = (title: string) => {
    switch (title) {
      case 'Quality Food': return <Utensils className="w-6 h-6 text-[#C5A059]" />;
      case 'Customer Satisfaction': return <HeartHandshake className="w-6 h-6 text-[#C5A059]" />;
      case 'Professional Service': return <Clock className="w-6 h-6 text-[#C5A059]" />;
      case 'Tradition & Innovation': return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
      default: return <Award className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* 1. HERO */}
      <section className="relative py-24 sm:py-28 bg-[#0B140E] overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1600&q=80"
            alt="Chefs preparing catering banquet"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B140E] via-[#0B140E]/80 to-[#0B140E]/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#C5A059]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#DFBE72] font-semibold">
              Our Heritage & Passion
            </span>
            <span className="h-px w-6 bg-[#C5A059]"></span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-normal tracking-tight mb-4">
            About Us
          </h1>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Tradition, Taste and Trust Since 2013.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY (TWO COLUMNS) */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#C5A059]"></span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9A7629]">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-normal text-stone-900 tracking-tight leading-tight">
              A Legacy of Uncompromising Flavours in Nagercoil.
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              The Five Star Outdoor Catering Service was founded in 2013 with a simple vision — to bring people together through exceptional food and warm hospitality. What started as a dedicated catering service in Nagercoil has grown into a trusted household name across Ramanpudur, Vadasery, and the greater Kanyakumari district, serving hundreds of happy families and institutions across Tamil Nadu and Kerala borders.
            </p>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              From our signature Seeraga Samba Dum Biryani cooked with farm-raised meats and traditional slow-fire coal dum, to elaborate 24-dish pure vegetarian banana-leaf saapadu and theatrical live counter setups, every single celebration is treated with royal attention.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-stone-200">
              <div>
                <span className="font-heading text-2xl font-bold text-[#0B140E]">2013</span>
                <p className="text-xs text-stone-500">Established Year</p>
              </div>
              <div>
                <span className="font-heading text-2xl font-bold text-[#0B140E]">1,000+</span>
                <p className="text-xs text-stone-500">Events Executed</p>
              </div>
              <div>
                <span className="font-heading text-2xl font-bold text-[#0B140E]">50–1,500</span>
                <p className="text-xs text-stone-500">Guest Capacity</p>
              </div>
            </div>
          </div>

          {/* Right: Feature Image & Floating Stat Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
                alt="Outdoor catering banquet"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>

            {/* Floating Luxury Stat Card matching reference */}
            <div className="mt-4 sm:-mt-16 sm:ml-8 relative z-10 bg-[#0B140E] p-6 rounded-2xl border border-[#C5A059]/40 text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#DFBE72]">Since 2013</h4>
                  <p className="text-[11px] text-stone-400">Years of Culinary Excellence</p>
                </div>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Over a decade of crafting memories across Nagercoil, Ramanpudur, Vadasery, Kanyakumari and nearby Kerala regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CULINARY TEAM */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#E2DAD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Master Craftsmen"
            title="Our Culinary Team"
            subtitle="Our chefs bring decades of experience in regional, traditional and international cuisines, ensuring every dish is prepared with care, consistency and freshness."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CULINARY_TEAM.map((chef, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#E8E2D5] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 w-full overflow-hidden bg-stone-100">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold text-[#DFBE72]">
                    {chef.experience}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-stone-900">
                    {chef.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#9A7629] mt-0.5">
                    {chef.role}
                  </p>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Specialty: {chef.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QUALITY & HYGIENE SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8E2D5] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-800">
                  Safety First
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-stone-900">
                Quality & Hygiene Standards
              </h2>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                We believe exceptional taste starts with impeccable hygiene. Our modern central prep kitchen strictly aligns with FSSAI hygiene guidelines, maintaining sanitized workstations, temperature-monitored holding, and certified food-grade transport containers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {[
                  "100% Fresh Farm Ingredients & Cold-Pressed Oils",
                  "Multi-Stage RO Purified Cooking & Drinking Water",
                  "Steam-Sanitized Brass & Stainless Steel Chafing Vessels",
                  "Trained Uniformed Banquet Captains & Masked Food Handlers",
                  "Zero Recycled Cooking Fats or Harmful Additives",
                  "Strict On-Time Setup & Post-Event Clean Site Guarantee"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FSSAI Badge Showcase matching reference */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-stone-50 rounded-2xl border border-stone-200 text-center">
              <div className="text-3xl font-extrabold tracking-tighter text-[#0B140E] font-sans border-b-2 border-orange-500 pb-1 mb-2">
                <span className="text-orange-500">f</span><span className="text-green-700">ssai</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                Food Safety Compliant
              </span>
              <p className="text-[11px] text-stone-500 mt-1 max-w-[200px]">
                Rigorous adherence to Food Safety and Standards Authority of India hygiene protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR VALUES (4 CARDS) */}
      <section className="py-20 bg-[#F4EFE6] border-t border-[#E2DAD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Pillars"
            title="Our Values"
            subtitle="The core tenets that guide every banquet, recipe, and celebration we host."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_VALUES.map((val, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-3xl border border-[#E8E2D5] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-5 group-hover:bg-[#0B140E] transition-colors">
                    {getValueIcon(val.title)}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-stone-900 group-hover:text-[#9A7629] transition-colors">
                    {val.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#9A7629] block mt-0.5 mb-2">
                    {val.subtitle}
                  </span>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
