import React, { useState } from 'react';
import { Play, Maximize2, ArrowRight } from 'lucide-react';
import { LightboxModal } from '../components/LightboxModal';
import { GALLERY_ITEMS, INSTAGRAM_POSTS, BUSINESS_INFO } from '../data/cateringData';


export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'buffets', label: 'Buffets' },
    { id: 'live-stalls', label: 'Live Stalls' },
    { id: 'fruit-carvings', label: 'Fruit Carvings' },
    { id: 'food-plating', label: 'Food Plating' },
    { id: 'outdoor-setup', label: 'Outdoor Setup' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'videos', label: 'Videos' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="pt-16 sm:pt-20">
      {/* 1. HERO */}
      <section className="relative py-24 sm:py-28 bg-[#0B140E] overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80"
            alt="The Five Star past events gallery"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B140E] via-[#0B140E]/80 to-[#0B140E]/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#C5A059]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#DFBE72] font-semibold">
              Visual Portfolio
            </span>
            <span className="h-px w-6 bg-[#C5A059]"></span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-normal tracking-tight mb-4">
            Gallery & Past Events
          </h1>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            A glimpse of our culinary artistry, live counters, and memorable celebrations across Tamil Nadu and Kerala.
          </p>
        </div>
      </section>

      {/* 2. GALLERY GRID WITH TABS */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-[#0B140E] text-[#C5A059] shadow-md border border-[#0B140E]'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#E8E2D5] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {item.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#C5A059]/90 text-[#0B140E] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                )}

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#C5A059]/30 text-[#DFBE72] text-[10px] font-bold uppercase tracking-wider mb-1.5 backdrop-blur-xs">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 line-clamp-1 mt-1 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INSTAGRAM FEED BANNER */}
      <section className="py-16 bg-[#0B140E] text-white border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white shadow-md">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Follow Us on Instagram
                </h3>
                <p className="text-xs text-[#DFBE72]">@thefivestar_catering</p>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-[#C5A059] text-[#DFBE72] hover:bg-[#C5A059] hover:text-[#0B140E] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <span>View More Photos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden aspect-square border border-stone-800"
              >
                <img
                  src={post.image}
                  alt="The Five Star Instagram photo"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-3">
                  <span>❤️ {post.likes}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
