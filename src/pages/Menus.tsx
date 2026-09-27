import React, { useState } from 'react';
import { 
  FileDown, 
  Calculator, 
  Check, 
  ArrowRight, 
  SlidersHorizontal
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { CostEstimatorCard } from '../components/CostEstimatorCard';
import { SIGNATURE_MENUS, PACKAGES } from '../data/cateringData';
import type { MenuItem, PackageTier } from '../types';


interface MenusProps {
  onOpenMenu: (menu: MenuItem) => void;
  onOpenMenuDeck: () => void;
  onSelectPackage: (pkg: PackageTier) => void;
  onRequestQuote: (initialData?: any) => void;
}

export const Menus: React.FC<MenusProps> = ({
  onOpenMenu,
  onOpenMenuDeck,
  onSelectPackage,
  onRequestQuote
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Menus' },
    { id: 'grand-wedding', label: 'Grand Wedding Feast' },
    { id: 'biryani', label: 'Biryani Specials' },
    { id: 'pure-veg', label: 'Pure Veg Traditional' },
    { id: 'cocktail-tea', label: 'Cocktail & Hi-Tea' },
  ];

  const tiers = [
    { id: 'all', label: 'All Tiers' },
    { id: 'Silver', label: 'Silver' },
    { id: 'Gold', label: 'Gold' },
    { id: 'Platinum', label: 'Platinum' },
  ];

  const filteredMenus = SIGNATURE_MENUS.filter((item) => {
    const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchTier = selectedTier === 'all' || item.tier === selectedTier;
    return matchCategory && matchTier;
  });

  return (
    <div className="pt-16 sm:pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 sm:py-28 bg-[#0B140E] overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80"
            alt="Catering buffet spread"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B140E] via-[#0B140E]/80 to-[#0B140E]/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#C5A059]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#DFBE72] font-semibold">
              The Five Star Experience
            </span>
            <span className="h-px w-6 bg-[#C5A059]"></span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-normal tracking-tight mb-4">
            Menus & Packages
          </h1>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Curated menus for every occasion. Choose from our signature packages or create a custom menu tailored to your family traditions.
          </p>
        </div>
      </section>

      {/* 2. FILTERING AND MENU CARDS GRID */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Pills & Tier Selector */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-stone-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0B140E] text-[#C5A059] shadow-md border border-[#0B140E]'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Tier Filter */}
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="font-semibold uppercase tracking-wider">Tier:</span>
            <div className="flex gap-1.5">
              {tiers.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTier(t.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
                    selectedTier === t.id
                      ? 'bg-[#C5A059]/20 text-[#8C6A23] border-[#C5A059] font-bold'
                      : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenus.map((menu) => (
            <div
              key={menu.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E8E2D5] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={menu.image}
                  alt={menu.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#0B140E]/85 backdrop-blur-xs text-[#DFBE72] text-[10px] font-bold uppercase tracking-wider border border-[#C5A059]/30">
                    {menu.cuisineType}
                  </span>
                  {menu.isPopular && (
                    <span className="px-2.5 py-1 rounded-full bg-[#C5A059] text-[#0B140E] text-[10px] font-bold uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-stone-900 group-hover:text-[#9A7629] transition-colors">
                    {menu.name}
                  </h3>
                  <p className="text-xs text-[#9A7629] font-medium mt-1">
                    {menu.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-3">
                    {menu.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 pt-3 border-t border-stone-150 flex flex-wrap gap-1.5">
                    {menu.courses.liveStalls && (
                      <span className="text-[10px] bg-amber-50 text-amber-900 px-2 py-0.5 rounded-md font-medium border border-amber-200">
                        Live Counters Included
                      </span>
                    )}
                    <span className="text-[10px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md">
                      Free Setup Support
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-semibold">
                      Starting From
                    </span>
                    <span className="text-lg font-bold text-stone-900">
                      ₹{menu.pricePerPlate}
                    </span>
                    <span className="text-xs text-stone-500"> / per plate</span>
                  </div>

                  <button
                    onClick={() => onOpenMenu(menu)}
                    className="px-5 py-2.5 rounded-xl bg-[#0B140E] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0B140E] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                  >
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SAMPLE PACKAGES SECTION */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#E2DAD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Tiered Offerings"
            title="Choose Your Package"
            subtitle="Thoughtfully structured catering packages crafted for seamless execution and transparent budgeting."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.isPopular
                    ? 'bg-[#0B140E] text-white shadow-2xl ring-2 ring-[#C5A059] md:-translate-y-2'
                    : 'bg-white text-stone-900 border border-[#E8E2D5] shadow-lg'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0B140E] text-[11px] font-bold uppercase tracking-widest shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-heading text-2xl font-bold ${pkg.isPopular ? 'text-white' : 'text-stone-900'}`}>
                      {pkg.name}
                    </h3>
                  </div>

                  <p className={`text-xs font-medium ${pkg.isPopular ? 'text-[#DFBE72]' : 'text-[#9A7629]'}`}>
                    {pkg.tagline}
                  </p>

                  <div className="my-6 pb-6 border-b border-stone-200/40">
                    <span className="text-[10px] uppercase tracking-wider block opacity-70">
                      Starting Price
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className={`text-3xl font-heading font-bold ${pkg.isPopular ? 'text-[#DFBE72]' : 'text-stone-900'}`}>
                        ₹{pkg.pricePerPlate}
                      </span>
                      <span className={`text-xs ${pkg.isPopular ? 'text-stone-400' : 'text-stone-500'}`}>
                        / per plate
                      </span>
                    </div>
                    <p className={`text-[11px] mt-2 ${pkg.isPopular ? 'text-stone-400' : 'text-stone-500'}`}>
                      Ideal for: {pkg.idealFor}
                    </p>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${pkg.isPopular ? 'text-stone-300' : 'text-stone-700'}`}>
                      Included in Package:
                    </span>
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pkg.isPopular ? 'bg-[#C5A059]/20 text-[#DFBE72]' : 'bg-amber-100 text-amber-800'
                        }`}>
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className={pkg.isPopular ? 'text-stone-300' : 'text-stone-600'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                      pkg.isPopular
                        ? 'bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38F36] text-[#0B140E] hover:brightness-105 active:scale-95 shadow-lg'
                        : 'bg-[#0B140E] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0B140E]'
                    }`}
                  >
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DUAL INTERACTIVE BANNER CARDS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card: Download Menu Deck */}
          <div className="bg-white p-7 sm:p-9 rounded-3xl border border-[#E8E2D5] shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#9A7629] flex items-center justify-center border border-amber-200">
                <FileDown className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-stone-900">
                Download Our Full Menu Deck
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Get the complete seasonal menu catalog featuring 50+ dishes, live stall additions, pricing, and dietary options.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenMenuDeck}
                className="w-full py-3.5 rounded-xl bg-[#0B140E] hover:bg-stone-900 text-[#C5A059] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Menu Deck (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Card: Cost Estimator Trigger */}
          <div className="bg-gradient-to-br from-[#0B140E] to-[#142318] p-7 sm:p-9 rounded-3xl text-white shadow-xl flex flex-col justify-between border border-[#C5A059]/30">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/20 text-[#DFBE72] flex items-center justify-center">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                Calculate Your Event Cost
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                Use our interactive catering estimator below to get an instant cost range based on your exact guest count and food preferences.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#cost-estimator-section"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0B140E] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:brightness-105 active:scale-95 text-center shadow-lg"
              >
                <span>Use Cost Estimator</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EMBEDDED COST ESTIMATOR SECTION */}
      <section id="cost-estimator-section" className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostEstimatorCard
          onInquire={(details) => onRequestQuote(details)}
        />
      </section>
    </div>
  );
};
