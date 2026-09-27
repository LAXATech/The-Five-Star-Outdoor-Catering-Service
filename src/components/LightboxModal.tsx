import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import type { GalleryItem } from '../types';


interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fadeIn p-4 sm:p-6">
      {/* Top Close Bar */}
      <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-white z-20">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
            The Five Star Gallery
          </span>
          <span className="text-stone-500 text-xs">•</span>
          <span className="text-xs text-stone-400">
            {currentIndex + 1} of {items.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-stone-900/80 hover:bg-[#C5A059] text-stone-300 hover:text-[#0B140E] flex items-center justify-center transition-all z-20 cursor-pointer shadow-lg"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-stone-900/80 hover:bg-[#C5A059] text-stone-300 hover:text-[#0B140E] flex items-center justify-center transition-all z-20 cursor-pointer shadow-lg"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
        <div className="relative overflow-hidden rounded-2xl max-h-[70vh] shadow-2xl border border-stone-800">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full max-h-[70vh] object-contain transition-all duration-300"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C5A059]/20 text-[#DFBE72] text-[10px] font-bold uppercase tracking-wider mb-1.5">
            <Tag className="w-3 h-3" />
            <span>{currentItem.categoryLabel}</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 leading-relaxed">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
