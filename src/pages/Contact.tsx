import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/cateringData';


export const Contact: React.FC = () => {
  // Quote Form State
  const [quoteName, setQuoteName] = useState('');
  const [quotePhone, setQuotePhone] = useState('');
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quoteEventType, setQuoteEventType] = useState('Weddings & Receptions');
  const [quoteDate, setQuoteDate] = useState('');
  const [quoteGuests, setQuoteGuests] = useState('400');
  const [quoteVenue, setQuoteVenue] = useState('Nagercoil');
  const [quoteFoodPref, setQuoteFoodPref] = useState('Grand Wedding Feast');
  const [quoteServiceType, setQuoteServiceType] = useState('Live Counters & Buffet');
  const [quoteNotes, setQuoteNotes] = useState('');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');

  // Taste Session State
  const [tasteName, setTasteName] = useState('');
  const [tastePhone, setTastePhone] = useState('');
  const [tasteDate, setTasteDate] = useState('');
  const [tasteMenu, setTasteMenu] = useState('Grand Wedding Feast');
  const [tasteNotes, setTasteNotes] = useState('');
  const [tasteSubmitted, setTasteSubmitted] = useState(false);
  const [tasteRef, setTasteRef] = useState('');

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteName || !quotePhone || !quoteDate) return;

    const ref = `TFS-QT-${Math.floor(10000 + Math.random() * 90000)}`;
    setQuoteRef(ref);
    setQuoteSubmitted(true);

    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#C5A059', '#101E15']
      });
    } catch {
      // ignore
    }
  };

  const handleTasteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tasteName || !tastePhone || !tasteDate) return;

    const ref = `TFS-TST-${Math.floor(1000 + Math.random() * 9000)}`;
    setTasteRef(ref);
    setTasteSubmitted(true);

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#C5A059', '#25D366']
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* 1. HERO */}
      <section className="relative py-24 sm:py-28 bg-[#0B140E] overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80"
            alt="The Five Star Contact & Bookings"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B140E] via-[#0B140E]/80 to-[#0B140E]/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#C5A059]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#DFBE72] font-semibold">
              Personalized Hospitality
            </span>
            <span className="h-px w-6 bg-[#C5A059]"></span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-normal tracking-tight mb-4">
            Get a Quote / Contact Us
          </h1>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            We'd love to be part of your special day. Reach out to us for bookings, inquiries or custom menu requests.
          </p>
        </div>
      </section>

      {/* 2. THREE-COLUMN CONTACT SECTION (Matching reference) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMN 1: CONTACT INFORMATION & MAP (3.5 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-7 rounded-3xl border border-[#E8E2D5] shadow-lg space-y-6">
              <div>
                <h3 className="font-heading text-xl font-bold text-stone-900 mb-1">
                  Contact Information
                </h3>
                <p className="text-xs text-stone-500">
                  Direct lines to our catering desk in Nagercoil.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#C5A059] flex items-center justify-center shrink-0 border border-amber-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">Phone</span>
                    <a href={`tel:${BUSINESS_INFO.primaryPhone.replace(/\s+/g, '')}`} className="font-semibold text-stone-900 hover:text-[#C5A059]">
                      {BUSINESS_INFO.primaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">WhatsApp</span>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-700 hover:underline"
                    >
                      {BUSINESS_INFO.primaryPhone} (Direct Chat)
                    </a>
                  </div>
                </div>


                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#C5A059] flex items-center justify-center shrink-0 border border-amber-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">Email</span>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="font-medium text-stone-800 hover:text-[#C5A059]">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#C5A059] flex items-center justify-center shrink-0 border border-amber-200">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">Location</span>
                    <p className="font-medium text-stone-800 leading-snug">
                      Ramanpudur, Nagercoil, Kanyakumari District, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Preview */}
              <div className="pt-2">
                <div className="relative rounded-2xl overflow-hidden border border-stone-200 h-44 shadow-inner">
                  <iframe
                    src={BUSINESS_INFO.mapEmbedUrl}
                    title="The Five Star Location Nagercoil"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>

                <a
                  href="https://maps.google.com/?q=Nagercoil+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full py-2 px-3 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: SEND US A MESSAGE / QUOTE FORM (4.5 Cols) */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-3xl border border-[#E8E2D5] shadow-lg">
            <div className="mb-5 pb-4 border-b border-stone-150">
              <span className="text-[10px] uppercase tracking-widest text-[#9A7629] font-bold">
                Detailed Quotation
              </span>
              <h3 className="font-heading text-2xl font-bold text-stone-900">
                Send Us a Message
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Fill out your celebration details for an itemized estimate.
              </p>
            </div>

            {!quoteSubmitted ? (
              <form onSubmit={handleQuoteSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Manikandan V"
                    value={quoteName}
                    onChange={(e) => setQuoteName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 94432 09523"

                      value={quotePhone}
                      onChange={(e) => setQuotePhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      value={quoteEmail}
                      onChange={(e) => setQuoteEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                    />

                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Event Type *</label>
                    <select
                      value={quoteEventType}
                      onChange={(e) => setQuoteEventType(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Weddings & Receptions">Weddings & Receptions</option>
                      <option value="Engagements & Betrothals">Engagements & Betrothals</option>
                      <option value="Parties & Birthdays">Parties & Birthdays</option>
                      <option value="Corporate Events">Corporate Events</option>
                      <option value="Festivals & Banquets">Festivals & Banquets</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Date of Event *</label>
                    <input
                      type="date"
                      required
                      value={quoteDate}
                      onChange={(e) => setQuoteDate(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Guest Count *</label>
                    <input
                      type="number"
                      min="50"
                      max="2500"
                      required
                      value={quoteGuests}
                      onChange={(e) => setQuoteGuests(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Venue / City</label>
                    <input
                      type="text"
                      placeholder="e.g. Nagercoil / Vadasery"
                      value={quoteVenue}
                      onChange={(e) => setQuoteVenue(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Food Preference</label>
                    <select
                      value={quoteFoodPref}
                      onChange={(e) => setQuoteFoodPref(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Grand Wedding Feast">Grand Wedding Feast</option>
                      <option value="Biryani Specials">Authentic Dum Biryani</option>
                      <option value="Pure Veg Traditional">Pure Veg Banana Leaf</option>
                      <option value="Tandoori & Live BBQ">Tandoori & Live BBQ</option>
                      <option value="Custom Fusion">Custom Fusion</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Service Type</label>
                    <select
                      value={quoteServiceType}
                      onChange={(e) => setQuoteServiceType(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Live Counters & Buffet">Live Counters & Buffet</option>
                      <option value="Traditional Banana Leaf">Traditional Banana Leaf</option>
                      <option value="Buffet Only">Buffet Only</option>
                      <option value="Full VIP Service">Full VIP Service</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">Additional Details</label>
                  <textarea
                    rows={2}
                    placeholder="Specific dietary needs, timings, or live stall requests..."
                    value={quoteNotes}
                    onChange={(e) => setQuoteNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-stone-800 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0B140E] font-bold text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-stone-900">Enquiry Sent!</h4>
                  <p className="text-xs text-stone-500 mt-1">Reference: <strong className="text-stone-800">{quoteRef}</strong></p>
                </div>
                <p className="text-xs text-stone-600">
                  Thank you {quoteName}! Our banquet director will call you shortly to discuss your custom proposal.
                </p>
                <button
                  onClick={() => setQuoteSubmitted(false)}
                  className="px-4 py-2 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* COLUMN 3: BOOK A TASTE SESSION CARD (4 Cols) */}
          <div className="lg:col-span-3 bg-gradient-to-br from-[#0B140E] to-[#122016] text-white p-7 rounded-3xl border border-[#C5A059]/30 shadow-xl space-y-5">
            <div className="border-b border-stone-800 pb-4">
              <span className="text-[10px] uppercase tracking-widest text-[#DFBE72] font-bold">
                Experience Before Booking
              </span>
              <h3 className="font-heading text-xl font-bold text-white mt-1">
                Book a Taste Session
              </h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Want to taste our finest delicacies first? Schedule a personalized tasting session with our chefs.
              </p>
            </div>

            {!tasteSubmitted ? (
              <form onSubmit={handleTasteSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-stone-300 mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={tasteName}
                    onChange={(e) => setTasteName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-900/90 border border-stone-700 text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 94432 09523"

                    value={tastePhone}
                    onChange={(e) => setTastePhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-900/90 border border-stone-700 text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={tasteDate}
                    onChange={(e) => setTasteDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-900/90 border border-stone-700 text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 mb-1">Preferred Menu</label>
                  <select
                    value={tasteMenu}
                    onChange={(e) => setTasteMenu(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-900/90 border border-stone-700 text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Grand Wedding Feast">Grand Wedding Feast</option>
                    <option value="Biryani Specials">Seeraga Samba Dum Biryani</option>
                    <option value="Pure Veg Traditional">Pure Veg Banana Leaf Saapadu</option>
                    <option value="Live Tandoori & Grills">Live Tandoori & Grills</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 mb-1">Message</label>
                  <textarea
                    rows={2}
                    placeholder="Any specific requests?"
                    value={tasteNotes}
                    onChange={(e) => setTasteNotes(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-stone-900/90 border border-stone-700 text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0B140E] font-bold text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 text-[#DFBE72] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-lg font-bold text-white">Tasting Booked!</h4>
                <p className="text-xs text-stone-400">Ref: {tasteRef}</p>
                <p className="text-xs text-stone-300">
                  Our chef will coordinate the menu sampling for {tasteName}.
                </p>
                <button
                  onClick={() => setTasteSubmitted(false)}
                  className="text-xs text-[#DFBE72] underline mt-2"
                >
                  Book another session
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
