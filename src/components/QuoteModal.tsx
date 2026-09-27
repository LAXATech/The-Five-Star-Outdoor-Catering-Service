import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Phone, Calendar, Users, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/cateringData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    eventType?: string;
    guests?: number;
    menuType?: string;
    packageName?: string;
  };
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialData = {}
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState(initialData.eventType || 'Weddings & Receptions');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState(initialData.guests ? String(initialData.guests) : '350');
  const [venue, setVenue] = useState('Nagercoil');
  const [foodPreference, setFoodPreference] = useState(initialData.menuType || 'Grand Wedding Feast (Non-Veg & Veg)');
  const [serviceType, setServiceType] = useState('Live Counters & Buffet');
  const [notes, setNotes] = useState(initialData.packageName ? `Interested in ${initialData.packageName}.` : '');
  const [submitted, setSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !eventDate) return;

    const id = `TFS-QT-${Math.floor(10000 + Math.random() * 90000)}`;
    setQuoteId(id);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#C5A059', '#101E15', '#25D366']
      });
    } catch {
      // ignore
    }
  };

  const getWhatsAppSummary = () => {
    const text = `*New Catering Enquiry — The Five Star*\n` +
      `Quote ID: ${quoteId}\n` +
      `Name: ${fullName}\n` +
      `Phone: ${phone}\n` +
      `Event: ${eventType}\n` +
      `Date: ${eventDate}\n` +
      `Guests: ${guestCount}\n` +
      `Venue: ${venue}\n` +
      `Menu Preference: ${foodPreference}\n` +
      `Service: ${serviceType}\n` +
      (notes ? `Notes: ${notes}\n` : '');
    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#0B140E] p-5 sm:p-6 text-white shrink-0 relative border-b border-[#C5A059]/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
                The Five Star • Nagercoil
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Request a Custom Catering Quote
              </h3>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anandha Krishnan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 94432 09523"

                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@gmail.com (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Event Type *
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Weddings & Receptions">Weddings & Receptions</option>
                    <option value="Engagements & Betrothals">Engagements & Betrothals</option>
                    <option value="Parties & Birthdays">Parties & Birthdays</option>
                    <option value="Corporate Events & Seminars">Corporate Events & Seminars</option>
                    <option value="Festivals & Community Feasts">Festivals & Community Feasts</option>
                    <option value="Housewarming & Private Dinners">Housewarming & Private Dinners</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                    Guest Count *
                  </label>
                  <input
                    type="number"
                    min="50"
                    max="3000"
                    required
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    Venue / City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramanpudur, Nagercoil"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Food Preference
                  </label>
                  <select
                    value={foodPreference}
                    onChange={(e) => setFoodPreference(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Grand Wedding Feast (Non-Veg & Veg)">Grand Wedding Feast (Non-Veg & Veg)</option>
                    <option value="Authentic Dum Biryani Specials">Authentic Dum Biryani Specials</option>
                    <option value="100% Pure Veg Traditional Banana Leaf">100% Pure Veg Traditional Banana Leaf</option>
                    <option value="Tandoori & Live Grills Buffet">Tandoori & Live Grills Buffet</option>
                    <option value="Cocktail & Hi-Tea Fusion">Cocktail & Hi-Tea Fusion</option>
                    <option value="Custom Bespoke Menu">Custom Bespoke Menu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Dining Style
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Live Counters & Buffet">Live Counters & Buffet</option>
                    <option value="Traditional Banana Leaf Seated">Traditional Banana Leaf Seated</option>
                    <option value="Standard Buffet Dining">Standard Buffet Dining</option>
                    <option value="Full VIP Royal Service">Full VIP Royal Service</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Additional Details & Custom Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about special dishes, live stall preferences, budget target, or timing requirements..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38F36] text-[#0B140E] font-bold text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry & Get Estimate</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                <span>⚡ Instant callback within 2 hours</span>
                <span>FSSAI Certified • Since 2013</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">Quote Request Received</span>
                <h4 className="font-heading text-2xl font-bold text-stone-900 mt-1">Thank You, {fullName}!</h4>
                <p className="text-xs text-stone-500 mt-1">
                  Reference ID: <strong className="text-stone-800">{quoteId}</strong>
                </p>
              </div>

              <div className="bg-[#F9F6F0] p-4 rounded-2xl border border-stone-200 text-left text-xs space-y-2 text-stone-700 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-stone-500">Event & Date:</span>
                  <span className="font-semibold text-stone-900">{eventType} • {eventDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Guests & Location:</span>
                  <span className="font-semibold text-stone-900">{guestCount} Guests • {venue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Selected Preference:</span>
                  <span className="font-semibold text-[#9A7629]">{foodPreference}</span>
                </div>
              </div>

              <p className="text-xs text-stone-600 max-w-sm mx-auto">
                Our catering manager is reviewing your requirements and preparing a customized menu breakdown with pricing.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md mx-auto">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${getWhatsAppSummary()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#20ba59] shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send to WhatsApp</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-stone-900 text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-stone-800"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call Us Now</span>
                </a>
              </div>

              <div>
                <button
                  onClick={onClose}
                  className="text-xs text-stone-500 hover:text-stone-800 underline"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
