import React, { useState } from 'react';
import { X, CheckCircle2, Utensils, Clock, MessageSquare } from 'lucide-react';

import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/cateringData';

interface TasteSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedMenu?: string;
}

export const TasteSessionModal: React.FC<TasteSessionModalProps> = ({
  isOpen,
  onClose,
  preselectedMenu = 'Grand Wedding Feast'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2');
  const [menu, setMenu] = useState(preselectedMenu);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) return;

    const ref = `TFS-TST-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#C5A059', '#101E15']
      });
    } catch {
      // ignore
    }
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
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">Exclusive Experience</span>
              <h3 className="font-heading text-xl font-bold text-white">Book a Taste Session</h3>
              <p className="text-xs text-stone-400">Taste our culinary craftsmanship before your big day</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 94432 09523"

                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Attendees (Max 4)</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="2">2 Persons (Bride & Groom / Hosts)</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons (Family Group)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Preferred Menu Lineup</label>
                <select
                  value={menu}
                  onChange={(e) => setMenu(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059]"
                >
                  <option value="Grand Wedding Feast">Grand Wedding Feast (Biryani + Curries + Starters)</option>
                  <option value="Biryani Specials">Seeraga Samba Dum Biryani Lineup</option>
                  <option value="Pure Veg Traditional">Pure Veg Traditional Banana Leaf Spread</option>
                  <option value="Tandoori & Grills">Live Tandoori, Grills & Kebabs</option>
                  <option value="Cocktail & Hi-Tea">Cocktail Appetizers & Mocktails</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Any Specific Dishes / Notes</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Would love to taste the mutton chukka, fish fry, and elaneer payasam."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0B140E] font-bold text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md"
                >
                  Confirm Taste Session Booking
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-stone-500 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>Hosted at our Ramanpudur, Nagercoil tasting studio or at your location.</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">Booking Received</span>
                <h4 className="font-heading text-xl font-bold text-stone-900 mt-1">Taste Session Scheduled!</h4>
                <p className="text-xs text-stone-500 mt-1">Booking Reference: <strong className="text-stone-800">{bookingRef}</strong></p>
              </div>

              <div className="bg-[#F9F6F0] p-4 rounded-xl border border-stone-200 text-left text-xs space-y-2 text-stone-700">
                <div className="flex justify-between">
                  <span className="text-stone-500">Host Name:</span>
                  <span className="font-medium text-stone-900">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Contact:</span>
                  <span className="font-medium text-stone-900">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Date:</span>
                  <span className="font-medium text-stone-900">{date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Menu to Sample:</span>
                  <span className="font-medium text-[#9A7629]">{menu}</span>
                </div>
              </div>

              <p className="text-xs text-stone-600">
                Our Executive Chef will reach out within 2 hours to confirm your time slot and menu curation.
              </p>

              <div className="flex gap-2">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi The Five Star Catering, I booked a Taste Session for ${name} on ${date} (Ref: ${bookingRef}). Please confirm the timing.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#20ba59]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to WhatsApp</span>
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
