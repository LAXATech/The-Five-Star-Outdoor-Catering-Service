import React, { useState } from 'react';
import { Calculator, Users, HelpCircle, Check, ArrowRight, PhoneCall } from 'lucide-react';

import { BUSINESS_INFO } from '../data/cateringData';

interface CostEstimatorProps {
  onInquire?: (estimateDetails: {
    eventType: string;
    guests: number;
    menuType: string;
    serviceType: string;
    budgetRange: string;
  }) => void;
  isModal?: boolean;
}

export const CostEstimatorCard: React.FC<CostEstimatorProps> = ({ onInquire, isModal = false }) => {
  const [eventType, setEventType] = useState('Wedding');
  const [guests, setGuests] = useState(350);
  const [menuType, setMenuType] = useState<'veg' | 'non-veg' | 'grand' | 'platinum'>('grand');
  const [serviceType, setServiceType] = useState<'buffet' | 'seated' | 'live-counters' | 'full-service'>('live-counters');

  const menuPricing = {
    'veg': { name: 'Pure Veg Traditional', minRate: 280, maxRate: 350 },
    'non-veg': { name: 'Non-Veg Classic (Biryani)', minRate: 400, maxRate: 480 },
    'grand': { name: 'Grand Wedding Feast', minRate: 600, maxRate: 720 },
    'platinum': { name: 'Platinum Luxury Multi-Cuisine', minRate: 850, maxRate: 1050 },
  };

  const serviceMultipliers = {
    'buffet': 1.0,
    'seated': 0.95,
    'live-counters': 1.15,
    'full-service': 1.25,
  };

  const selectedMenu = menuPricing[menuType];
  const multiplier = serviceMultipliers[serviceType];

  const totalMin = Math.round((guests * selectedMenu.minRate * multiplier) / 1000) * 1000;
  const totalMax = Math.round((guests * selectedMenu.maxRate * multiplier) / 1000) * 1000;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const budgetDisplay = `${formatCurrency(totalMin)} – ${formatCurrency(totalMax)}`;

  const handleInquireClick = () => {
    if (onInquire) {
      onInquire({
        eventType,
        guests,
        menuType: selectedMenu.name,
        serviceType: serviceType.replace('-', ' '),
        budgetRange: budgetDisplay,
      });
    } else {
      // Direct WhatsApp redirect with populated quote query
      const text = encodeURIComponent(
        `Hello The Five Star Catering, I would like to inquire about an estimate for my event:\n\n• Event: ${eventType}\n• Guests: ${guests}\n• Menu: ${selectedMenu.name}\n• Service: ${serviceType}\n• Estimated Range: ${budgetDisplay}\n\nPlease share the final package options.`
      );
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`, '_blank');
    }
  };

  return (
    <div className={`bg-white rounded-3xl border border-[#E8E2D5] overflow-hidden luxury-shadow ${isModal ? 'p-6' : 'p-6 sm:p-10'}`}>
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-200">
        <div className="w-12 h-12 rounded-2xl bg-[#0B140E] text-[#C5A059] flex items-center justify-center shadow-md">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-stone-900">
            Interactive Event Cost Estimator
          </h3>
          <p className="text-xs sm:text-sm text-stone-500">
            Get an instant preliminary estimate tailored to your guest count & banquet style
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Event Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
              1. Event Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {['Wedding', 'Birthday', 'Engagement', 'Corporate', 'Festival'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setEventType(type)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all text-center border cursor-pointer ${
                    eventType === type
                      ? 'bg-[#0B140E] text-[#C5A059] border-[#0B140E] shadow-sm'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Number of Guests */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                2. Number of Guests
              </label>
              <div className="flex items-center gap-2">
                <span className="font-heading text-lg font-bold text-[#0B140E]">
                  {guests}
                </span>
                <span className="text-xs text-stone-500">Guests</span>
              </div>
            </div>

            <input
              type="range"
              min="100"
              max="1500"
              step="25"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
            />

            {/* Quick preset buttons */}
            <div className="flex flex-wrap gap-2 mt-2.5">
              {[150, 300, 500, 800, 1200].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setGuests(preset)}
                  className={`text-[11px] py-1 px-2.5 rounded-lg border transition-colors ${
                    guests === preset
                      ? 'bg-[#C5A059]/15 text-[#9A7629] border-[#C5A059] font-semibold'
                      : 'bg-stone-50 text-stone-500 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {preset} pax
                </button>
              ))}
            </div>
          </div>

          {/* Menu Preference */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
              3. Menu Preference
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: 'veg', title: 'Pure Veg Traditional', range: '₹280 – ₹350 / plate' },
                { id: 'non-veg', title: 'Non-Veg Biryani Special', range: '₹400 – ₹480 / plate' },
                { id: 'grand', title: 'Grand Wedding Feast', range: '₹600 – ₹720 / plate' },
                { id: 'platinum', title: 'Platinum Luxury', range: '₹850 – ₹1050 / plate' },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMenuType(m.id as any)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    menuType === m.id
                      ? 'bg-[#0B140E] text-white border-[#0B140E] ring-2 ring-[#C5A059]/40'
                      : 'bg-stone-50 text-stone-800 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">{m.title}</span>
                    {menuType === m.id && <Check className="w-3.5 h-3.5 text-[#C5A059]" />}
                  </div>
                  <span className={`text-[11px] block mt-0.5 ${menuType === m.id ? 'text-[#C5A059]' : 'text-stone-500'}`}>
                    {m.range}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Service Style */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
              4. Dining & Service Style
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'buffet', label: 'Buffet Service' },
                { id: 'seated', label: 'Banana Leaf Seated' },
                { id: 'live-counters', label: 'Live Counters + Buffet' },
                { id: 'full-service', label: 'Full VIP Service' },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setServiceType(s.id as any)}
                  className={`py-2 px-2 rounded-xl text-center text-xs font-medium border transition-all ${
                    serviceType === s.id
                      ? 'bg-[#C5A059] text-[#0B140E] font-bold border-[#C5A059] shadow-sm'
                      : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Card (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-[#0B140E] via-[#101E15] to-[#0B140E] text-white p-6 sm:p-7 rounded-2xl border border-[#C5A059]/30 relative overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">
                Estimated Budget
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#C5A059]/20 text-[#DFBE72] text-[10px] font-bold">
                Preliminary Quote
              </span>
            </div>

            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {budgetDisplay}
              </div>
              <p className="text-xs text-stone-400 mt-1">
                Approx. ₹{Math.round((totalMin / guests))} – ₹{Math.round((totalMax / guests))} per guest
              </p>
            </div>

            {/* Quick summary specs */}
            <div className="space-y-2 py-3 border-y border-stone-800 text-xs text-stone-300">
              <div className="flex justify-between">
                <span className="text-stone-400">Selected Event:</span>
                <span className="font-medium text-white">{eventType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Guest Count:</span>
                <span className="font-medium text-white">{guests} Persons</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Cuisine Package:</span>
                <span className="font-medium text-[#DFBE72]">{selectedMenu.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Dining Style:</span>
                <span className="font-medium text-white capitalize">{serviceType.replace('-', ' ')}</span>
              </div>
            </div>

            {/* Important Disclaimer as required */}
            <div className="p-3 rounded-xl bg-stone-900/90 border border-stone-800 text-[11px] text-stone-400 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-stone-200">Note:</strong> Final pricing depends on menu selection, venue, service requirements and event date.
              </p>
            </div>
          </div>

          <div className="pt-6 space-y-2.5">
            <button
              type="button"
              onClick={handleInquireClick}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38F36] hover:brightness-105 active:scale-95 text-[#0B140E] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>Inquire About This Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="w-full py-2.5 rounded-xl border border-stone-800 hover:border-[#C5A059]/40 text-stone-300 hover:text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Discuss with Chef: {BUSINESS_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
