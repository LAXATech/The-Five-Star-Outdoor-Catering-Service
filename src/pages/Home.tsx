import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  UtensilsCrossed, 
  Users, 
  ChefHat, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { CountUp } from '../components/CountUp';
import { 
  BUSINESS_INFO, 
  TRUST_STATS, 
  CORE_SERVICES, 
  SIGNATURE_MENUS, 
  TESTIMONIALS 
} from '../data/cateringData';
import type { MenuItem } from '../types';



interface HomeProps {
  onRequestQuote: (initial?: any) => void;
  onOpenMenu: (menu: MenuItem) => void;
}

export const Home: React.FC<HomeProps> = ({ onRequestQuote, onOpenMenu }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const scrollMenuPrev = () => {
    setCarouselIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollMenuNext = () => {
    setCarouselIndex((prev) => Math.min(SIGNATURE_MENUS.length - 1, prev + 1));
  };

  const currentTestimonial = TESTIMONIALS[activeTestimonial];

  return (
    <div className="pt-16 sm:pt-20">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center bg-[#0B140E] overflow-hidden">
        {/* Background Image with dark luxury overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=85"
            alt="Outdoor wedding catering feast in Nagercoil"
            className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
            loading="eager"
          />
          {/* Subtle multi-layer dark luxury gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B140E] via-[#0B140E]/75 to-[#0B140E]/60" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B140E]/40 to-[#0B140E]/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 mb-6 backdrop-blur-sm animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#DFBE72] font-semibold">
              The Five Star Outdoor Catering Service
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-normal tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
            Crafting Unforgettable Feasts <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-serif">for Every Occasion</span> <br className="hidden sm:inline" />
            in Nagercoil & Beyond.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-stone-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            From intimate family gatherings to grand weddings, we bring exceptional food, thoughtful service and memorable experiences to every celebration.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => onRequestQuote()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38F36] text-[#0B140E] font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(197,160,89,0.5)] hover:brightness-105 active:scale-95 transition-all cursor-pointer shadow-lg"
            >
              Request a Quote
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hello The Five Star Catering, I would like to enquire about catering for my upcoming event.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. TRUST STATISTICS BAR */}
      <section className="relative z-20 -mt-8 sm:-mt-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E8E2D5] shadow-xl p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
            {TRUST_STATS.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center ${i > 0 ? 'pt-4 sm:pt-0' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 text-[#C5A059] flex items-center justify-center mb-3">
                  {stat.icon === 'Calendar' && <Calendar className="w-5 h-5 text-[#C5A059]" />}
                  {stat.icon === 'UtensilsCrossed' && <UtensilsCrossed className="w-5 h-5 text-[#C5A059]" />}
                  {stat.icon === 'Users' && <Users className="w-5 h-5 text-[#C5A059]" />}
                  {stat.icon === 'ChefHat' && <ChefHat className="w-5 h-5 text-[#C5A059]" />}
                </div>
                <CountUp
                  end={stat.numericValue}
                  suffix={stat.suffix}
                  useSeparator={stat.useSeparator}
                  duration={2000}
                  className="text-3xl sm:text-4xl font-heading font-bold text-[#0B140E] tracking-tight"
                />
                <span className="text-xs sm:text-sm font-semibold text-stone-800 mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-stone-500 mt-0.5 max-w-[180px]">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 3. SERVICES SECTION */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Services"
          subtitle="Everything you need for a memorable celebration, handled with care."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8E2D5] luxury-shadow luxury-card-hover flex flex-col"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B140E]/80 backdrop-blur-sm text-[#DFBE72] text-[10px] font-bold uppercase tracking-wider border border-[#C5A059]/30">
                  {service.category}
                </span>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-stone-900 group-hover:text-[#9A7629] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-150 flex items-center justify-between">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9A7629] group-hover:text-[#0B140E] transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <button
                    onClick={() => onRequestQuote({ eventType: service.title })}
                    className="text-[11px] text-stone-400 hover:text-stone-700 underline"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SIGNATURE MENUS CAROUSEL */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#E2DAD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-6 bg-[#C5A059]"></span>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9A7629]">
                  Culinary Craftsmanship
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-normal text-stone-900">
                Signature Menus
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-1">
                A taste of our culinary excellence.
              </p>
            </div>

            {/* Carousel navigation controls */}
            <div className="flex items-center gap-2 mt-4 sm:mt-0">
              <button
                onClick={scrollMenuPrev}
                disabled={carouselIndex === 0}
                className="w-10 h-10 rounded-full border border-stone-300 bg-white text-stone-700 hover:bg-[#0B140E] hover:text-[#C5A059] hover:border-[#0B140E] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Previous menu"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollMenuNext}
                disabled={carouselIndex >= SIGNATURE_MENUS.length - 3}
                className="w-10 h-10 rounded-full border border-stone-300 bg-white text-stone-700 hover:bg-[#0B140E] hover:text-[#C5A059] hover:border-[#0B140E] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Next menu"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cards Carousel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIGNATURE_MENUS.slice(carouselIndex, carouselIndex + 3).map((menu) => (
              <div
                key={menu.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D5] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={menu.image}
                    alt={menu.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0B140E]/85 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-bold text-[#DFBE72] uppercase tracking-wider">
                    {menu.cuisineType}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-stone-900 group-hover:text-[#9A7629] transition-colors">
                      {menu.name}
                    </h3>
                    <p className="text-xs text-[#9A7629] font-medium mt-0.5">{menu.tagline}</p>
                    <p className="text-xs text-stone-600 line-clamp-2 mt-2 leading-relaxed">
                      {menu.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-150 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase">Starting from</span>
                      <span className="text-sm font-bold text-stone-900">₹{menu.pricePerPlate}</span>
                      <span className="text-[11px] text-stone-500"> / plate</span>
                    </div>

                    <button
                      onClick={() => onOpenMenu(menu)}
                      className="px-4 py-2 rounded-xl bg-[#0B140E] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0B140E] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      View Menu
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/menus"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-800 text-stone-900 hover:bg-stone-900 hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Explore All 50+ Menu Delicacies & Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Testimonial review cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-px w-6 bg-[#C5A059]"></span>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9A7629]">
                  Client Praise
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-normal text-stone-900">
                What Our Clients Say
              </h2>
              <p className="text-stone-500 text-sm mt-1">
                Real stories. Heavy celebrations across Nagercoil and Kanyakumari.
              </p>
            </div>

            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-[#E8E2D5] shadow-lg relative min-h-[260px] flex flex-col justify-between">
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-stone-700 text-base sm:text-lg leading-relaxed italic font-heading">
                  "{currentTestimonial.review}"
                </blockquote>
              </div>

              <div className="pt-6 border-t border-stone-150 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {currentTestimonial.image && (
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#C5A059]"
                    />
                  )}
                  <div>
                    <h4 className="font-heading font-bold text-stone-900 text-base">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-xs text-[#9A7629] font-medium">
                      {currentTestimonial.eventType} • {currentTestimonial.location}
                    </p>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-9 h-9 rounded-full border border-stone-300 bg-stone-50 hover:bg-[#0B140E] hover:text-[#C5A059] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-9 h-9 rounded-full border border-stone-300 bg-stone-50 hover:bg-[#0B140E] hover:text-[#C5A059] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-stone-500">
              <span className="flex items-center gap-1 font-semibold text-stone-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> 1,000+ Verified Celebrations
              </span>
              <span>•</span>
              <span>4.9 / 5 Average Client Rating</span>
            </div>
          </div>

          {/* Right: Feature Image with badge (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-300 max-h-[460px]">
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80"
                alt="Good Food Brings People Together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0B140E]/85 backdrop-blur-md border border-[#C5A059]/30 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
                  The Five Star Philosophy
                </span>
                <p className="font-heading text-lg font-bold text-white mt-0.5">
                  "Good Food Brings People Together"
                </p>
                <p className="text-xs text-stone-300 mt-1">
                  Serving traditional delicacies with modern hospitality in Nagercoil since 2013.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FULL-WIDTH BANNER CTA */}
      <section className="relative py-20 bg-[#0B140E] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80"
            alt="Wedding buffet catering background"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B140E] via-[#0B140E]/90 to-[#0B140E]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#C5A059]"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DFBE72]">
              Start Your Plan
            </span>
            <span className="h-px w-6 bg-[#C5A059]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal tracking-tight mb-4">
            Let's Make Your Event Special!
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8 font-light">
            Share your requirements with us and we'll help you plan the perfect catering experience. From guest estimation to customized live counters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onRequestQuote()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38F36] text-[#0B140E] font-bold text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              Request a Quote
            </button>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent('Hello The Five Star Catering, I would like to inquire about wedding catering.')}`}
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
