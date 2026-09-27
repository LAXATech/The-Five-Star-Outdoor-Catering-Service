export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string;
  image: string;
  features?: string[];
  link?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'all' | 'grand-wedding' | 'biryani' | 'pure-veg' | 'cocktail-tea';
  tagline: string;
  description: string;
  pricePerPlate: number;
  image: string;
  tier: 'Silver' | 'Gold' | 'Platinum' | 'Custom';
  cuisineType: string;
  isPopular?: boolean;
  courses: {
    welcomeDrinks?: string[];
    starters?: string[];
    mains?: string[];
    riceAndBiryani?: string[];
    breads?: string[];
    liveStalls?: string[];
    desserts?: string[];
  };
}

export interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  pricePerPlate: number;
  isPopular?: boolean;
  features: string[];
  idealFor: string;
  includedItems: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  eventType: string;
  location: string;
  rating: number;
  review: string;
  guestCount?: number;
  date?: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'buffets' | 'live-stalls' | 'fruit-carvings' | 'food-plating' | 'outdoor-setup' | 'desserts' | 'videos';
  categoryLabel: string;
  image: string;
  caption: string;
  aspect?: string;
  isVideo?: boolean;
}

export interface EventTypeItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
}

export interface CostEstimateParams {
  eventType: string;
  guestCount: number;
  menuType: 'pure-veg' | 'non-veg' | 'grand-feast' | 'platinum-luxury';
  serviceType: 'buffet' | 'seated-leaf' | 'live-counters' | 'full-service';
}
