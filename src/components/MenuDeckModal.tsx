import React, { useState } from 'react';
import { X, FileDown, CheckCircle2, Download, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/cateringData';

interface MenuDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuDeckModal: React.FC<MenuDeckModalProps> = ({ isOpen, onClose }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [name, setName] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#C5A059', '#132219', '#FFFFFF']
      });
    } catch {
      // ignore
    }

    setDownloaded(true);

    // Create an elegant printable summary text / simulated download
    const menuContent = `
======================================================
THE FIVE STAR OUTDOOR CATERING SERVICE — NAGERCOIL
Complete Seasonal Menu Deck & Event Packages
======================================================
Established: 2013 | Nagercoil, Tamil Nadu
Phone: ${BUSINESS_INFO.primaryPhone} / ${BUSINESS_INFO.secondaryPhone}
Email: ${BUSINESS_INFO.email}
Address: ${BUSINESS_INFO.address}

SIGNATURE MENUS:
------------------------------------------------------
1. GRAND WEDDING FEAST (From ₹650 / plate)
   - Multi-course traditional & continental selection
   - 5 Star Seeraga Samba Dum Biryani (Mutton/Chicken)
   - Chettinad Kozhi Curry, Nagercoil Fish Fry
   - 2 Live counters: Madurai Kal Dosa, Tandoor Grills
   - Elaneer Payasam & Gulab Jamun

2. BIRYANI SPECIALS (From ₹350 / plate)
   - Authentic Seeraga Samba Mutton / Chicken Dum Biryani
   - Nagercoil Chicken 65, Pepper Chukka
   - Bread Halwa with Roasted Nuts, Pineapple Kesari

3. PURE VEG TRADITIONAL BANANA LEAF (From ₹280 / plate)
   - 24-item traditional Elai Saapadu
   - Nagercoil Theeyal, Arachuvitta Sambar, Avial, Mysore Rasam
   - Ada Pradhaman, Tirunelveli Ghee Halwa, Paal Payasam

4. PACKAGES:
   - Silver (₹450/p) - 2 Mains + 2 Sides + Dessert
   - Gold (₹680/p) - 4 Mains + 3 Sides + 2 Live Counters (Most Popular)
   - Platinum (₹850/p) - Multi-cuisine + 4 Live Counters + Full Floor Management

* Customizations, food tasting sessions & venue inspection available upon request.
======================================================
Thank you for downloading! Our team will contact you shortly.
    `.trim();

    const blob = new Blob([menuContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'The_Five_Star_Catering_Full_Menu_Deck.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#0B140E] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center">
              <FileDown className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">Free Instant Deck</span>
              <h3 className="font-heading text-xl font-bold text-white">Download Our Full Menu Deck</h3>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!downloaded ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Receive our comprehensive 2026 catering catalog featuring complete dish lineups, seasonal pricing, live stall menus, and venue package details.
              </p>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vignesh Sundar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-800 text-sm focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Email or WhatsApp Number *</label>
                <input
                  type="text"
                  required
                  placeholder="name@example.com or +91 94432 09523"

                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-800 text-sm focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0B140E] font-bold text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Menu Deck (PDF)</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-stone-400">
                🔒 We respect your privacy. No spam guaranteed.
              </p>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-heading text-xl font-bold text-stone-900">Download Started!</h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-sm mx-auto">
                  Thank you {name || 'valued patron'}! Your complete Five Star catering menu deck has been downloaded.
                </p>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                Want a personalized copy or customized estimate sent to WhatsApp?
              </div>

              <div className="flex gap-2">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi The Five Star Catering, I just downloaded the Menu Deck for ${name}. Please share customized pricing options.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#20ba59]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="py-2.5 px-5 rounded-xl border border-stone-300 text-stone-700 font-semibold text-xs hover:bg-stone-100"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
