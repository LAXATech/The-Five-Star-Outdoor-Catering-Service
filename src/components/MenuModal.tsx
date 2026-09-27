import React from 'react';
import { X, CheckCircle2, Sparkles, Utensils, Award } from 'lucide-react';
import type { MenuItem } from '../types';


interface MenuModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onSelectMenu: (menu: MenuItem) => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ item, onClose, onSelectMenu }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col">
        {/* Header with image */}
        <div className="relative h-48 sm:h-56 w-full shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B140E] via-[#0B140E]/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close menu modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#C5A059] text-[#0B140E] text-[10px] font-bold uppercase tracking-wider">
                {item.cuisineType}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">
                {item.name}
              </h3>
              <p className="text-xs text-stone-300 font-medium">{item.tagline}</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider text-stone-300 block">Starting From</span>
              <span className="text-xl sm:text-2xl font-bold text-[#DFBE72]">₹{item.pricePerPlate}</span>
              <span className="text-xs text-stone-400"> / plate</span>
            </div>
          </div>
        </div>

        {/* Scrollable Course Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-stone-700 text-sm">
          <p className="text-stone-600 leading-relaxed italic bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/60">
            "{item.description}"
          </p>

          <div className="space-y-5">
            {item.courses.welcomeDrinks && item.courses.welcomeDrinks.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  Welcome Drinks & Refreshments
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.courses.welcomeDrinks.map((dish, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs text-stone-800 font-medium">
                      {dish}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {item.courses.starters && item.courses.starters.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5 mb-2">
                  <Utensils className="w-3.5 h-3.5 text-[#C5A059]" />
                  Starters & Finger Delicacies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.courses.starters.map((dish, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs text-stone-800 font-medium">
                      {dish}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {item.courses.mains && item.courses.mains.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5 mb-2">
                  <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                  Signature Main Courses
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.courses.mains.map((dish, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-stone-50 border border-stone-150 text-xs text-stone-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{dish}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {item.courses.riceAndBiryani && item.courses.riceAndBiryani.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Rice & Dum Biryanis
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.courses.riceAndBiryani.map((dish, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
                      {dish}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {item.courses.liveStalls && item.courses.liveStalls.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#9A7629] mb-2">
                  Interactive Live Food Stalls Included
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.courses.liveStalls.map((dish, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/40 text-xs text-stone-900 font-semibold">
                      🔥 {dish}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {item.courses.desserts && item.courses.desserts.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Artisanal Desserts & Sweets
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.courses.desserts.map((dish, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs text-stone-800">
                      {dish}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-4">
          <p className="text-xs text-stone-500 hidden sm:block">
            * Customizations available upon consultation.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onSelectMenu(item);
                onClose();
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0B140E] font-bold text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md"
            >
              Inquire This Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
