import React, { useState } from 'react';
import { MessageCircle, Phone, X, Check, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cateringData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = "Hello The Five Star Catering, I would like to enquire about catering for my upcoming event.";
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-2xl bg-white shadow-2xl border border-stone-200 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-[#0B140E] p-4 text-white flex items-center justify-between border-b border-[#C5A059]/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#0B140E] rounded-full" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm text-[#DFBE72]">The Five Star Catering</h4>
                <p className="text-[11px] text-stone-300">Nagercoil • Online for Inquiries</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
              aria-label="Close chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#F9F6F0] space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-stone-200 text-xs text-stone-700 space-y-1">
              <p className="font-medium text-stone-900">Vanakkam! Welcome to The Five Star Catering 🙏</p>
              <p>Planning a wedding, reception, birthday, or corporate event? Our event managers are ready to assist you with custom menus and quick quotes.</p>
              <div className="flex items-center justify-end gap-1 text-[10px] text-stone-400 pt-1">
                <span>Just now</span>
                <Check className="w-3 h-3 text-[#25D366]" />
              </div>
            </div>

            <div className="bg-[#EFE9DC] p-2.5 rounded-lg border border-[#DECDB3] text-[11px] text-stone-600">
              <span className="font-semibold text-stone-800">Ready message:</span>
              <p className="italic text-stone-600 mt-0.5">"{defaultMessage}"</p>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-3 bg-white border-t border-stone-100 flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Open in WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors"
              title="Call directly"
              aria-label="Call directly"
            >
              <Phone className="w-4 h-4 text-stone-700" />
            </a>
          </div>
        </div>
      )}

      {/* Main floating button */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
          <MessageCircle className="w-7 h-7 fill-white" />
        </button>

        {!isOpen && (
          <div className="hidden md:flex absolute right-16 top-1/2 -translate-y-1/2 bg-[#0B140E] text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap border border-[#C5A059]/30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Chat with us on WhatsApp
          </div>
        )}
      </div>
    </div>
  );
};
