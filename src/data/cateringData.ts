import type {
  ServiceItem,
  MenuItem,
  PackageTier,
  TestimonialItem,
  GalleryItem,
  EventTypeItem
} from '../types';


export const BUSINESS_INFO = {
  name: "The Five Star",
  category: "Outdoor Catering Service",
  tagline: "Crafting Unforgettable Feasts for Every Occasion in Nagercoil & Beyond",
  establishedYear: 2013,
  primaryPhone: "+91 94432 09523",
  secondaryPhone: "+91 94432 09523",
  whatsappNumber: "919443209523",

  email: "info@thefivestarcatering.in",
  address: "Ramanpudur Main Road, Near Vadasery, Nagercoil, Kanyakumari District, Tamil Nadu - 629001",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.4398188167664!2d77.42629477587895!3d8.188734001928424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f136e4f32a75%3A0x6b8bc14f6b2ea9e0!2sNagercoil%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  locations: [
    "Nagercoil",
    "Ramanpudur",
    "Vadasery",
    "Kanyakumari District",
    "Nearby Kerala regions (Trivandrum & Neyyattinkara)"
  ],
  socials: {
    instagram: "https://instagram.com/thefivestar_catering",
    facebook: "https://facebook.com/thefivestarcatering",
    youtube: "https://youtube.com/@thefivestarcatering"
  }
};

export const TRUST_STATS = [
  {
    value: "10+",
    numericValue: 10,
    suffix: "+",
    useSeparator: false,
    label: "Years in Business",
    description: "Serving authentic flavors since 2013",
    icon: "Calendar"
  },
  {
    value: "1000+",
    numericValue: 1000,
    suffix: "+",
    useSeparator: false,
    label: "Events Served",
    description: "Weddings, receptions & celebrations",
    icon: "UtensilsCrossed"
  },
  {
    value: "1,000+",
    numericValue: 1000,
    suffix: "+",
    useSeparator: true,
    label: "Max Capacity",
    description: "Seamless catering for 50 to 1,500+ guests",
    icon: "Users"
  },
  {
    value: "50+",
    numericValue: 50,
    suffix: "+",
    useSeparator: false,
    label: "Menu Options",
    description: "Wide culinary variety & live stalls",
    icon: "ChefHat"
  }
];


export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "weddings-receptions",
    title: "Weddings & Receptions",
    category: "Signature Occasions",
    shortDesc: "Grand feasts for your special day.",
    description: "Complete royal catering experiences for Tamil Nadu and Kerala weddings. From morning auspicious tiffin to the grand afternoon banana-leaf banquet and lavish evening buffet with live interactive food stalls.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    features: ["Grand Multi-Course Buffet", "Traditional Banana Leaf Seating", "Live Dosa & Appam Counters", "Dessert & Ice Cream Stations"],
    link: "/services"
  },
  {
    id: "parties-birthdays",
    title: "Parties & Birthdays",
    category: "Social Celebrations",
    shortDesc: "Joyful moments, delicious bites.",
    description: "Vibrant menus designed for birthday bashes, anniversary milestones, housewarmings, and family reunions with custom finger foods, live chaat stalls, mocktail bars, and comforting mains.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    features: ["Custom Themed Menus", "Interactive Chaat & Pani Puri Bars", "Kids Friendly Delicacies", "Barbeque & Tandoor Live Grills"],
    link: "/services"
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    category: "Corporate & Institutional",
    shortDesc: "Professional catering, on time.",
    description: "Punctual, hygienic, and tastefully curated catering for executive meetings, annual conferences, corporate retreats, and institutional gatherings across Kanyakumari and IT corridors.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    features: ["Hi-Tea & Premium Snacks", "Executive Box Lunches", "Continental & Pan-Indian Buffets", "FSSAI Compliant Packaging"],
    link: "/services"
  }
];

export const SERVICE_CAPABILITIES = [
  {
    id: "outdoor-setup",
    title: "Outdoor Setup",
    desc: "Tents, stages, dining areas and elegant table setups designed for open lawns, wedding halls, and beachside venues.",
    icon: "Tent"
  },
  {
    id: "live-food-stalls",
    title: "Live Food Stalls",
    desc: "Dosa, parotta, chaat, live barbecue grills, pasta counters, and dessert live stations with master culinary chefs.",
    icon: "Flame"
  },
  {
    id: "professional-staff",
    title: "Professional Staff",
    desc: "Uniformed master chefs, warm banquet captains, hygienic servers, and trained supervisors for seamless hospitality.",
    icon: "Users"
  },
  {
    id: "equipment-logistics",
    title: "Equipment & Logistics",
    desc: "Premium brass & stainless chafing dishes, fine bone china crockery, polished cutlery, and insulated food transport.",
    icon: "Sparkles"
  },
  {
    id: "hygiene-safety",
    title: "Hygiene & Safety",
    desc: "FSSAI aligned food preparation, reverse osmosis water purification, sanitised prep environments, and fresh farm produce.",
    icon: "ShieldCheck"
  },
  {
    id: "custom-menu-planning",
    title: "Custom Menu Planning",
    desc: "100% bespoke menus tailored to your guest preferences, community traditions, regional taste, and budget limits.",
    icon: "FileSpreadsheet"
  }
];

export const EVENT_TYPES: EventTypeItem[] = [
  {
    id: "weddings",
    title: "Weddings & Receptions",
    tagline: "Grand celebrations",
    description: "From muhurtham breakfast to grand evening reception buffets with 40+ delicacies.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "engagements",
    title: "Engagements & Betrothals",
    tagline: "Elegant & intimate",
    description: "Curated feasts for rings exchange, traditional nadaswaram ceremonies, and family gatherings.",
    image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "birthdays",
    title: "Birthdays & Anniversaries",
    tagline: "Fun for all ages",
    description: "Delicious finger bites, mocktails, rich biryanis, and custom dessert counters.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "corporate",
    title: "Corporate Events & Seminars",
    tagline: "Professional & punctual",
    description: "Flawless hospitality for executive conclaves, dealer meets, and corporate annual days.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "festivals",
    title: "Festivals & Community Feasts",
    tagline: "Traditional & authentic",
    description: "Special Onam Sadya, Pongal feasts, church festivals, and community banquets for 1,500+ guests.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80"
  }
];

export const SIGNATURE_MENUS: MenuItem[] = [
  {
    id: "grand-wedding-feast",
    name: "Grand Wedding Feast",
    category: "grand-wedding",
    tagline: "Traditional + Continental + Live Counters",
    description: "The pinnacle of our catering craftsmanship. A lavish multi-course feast featuring welcome refreshments, starters, opulent mains, live counters, and artisanal desserts.",
    pricePerPlate: 650,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80",
    tier: "Gold",
    cuisineType: "Traditional & Multi-Cuisine",
    isPopular: true,
    courses: {
      welcomeDrinks: ["Virgin Mint Mojito", "Tender Coconut Water with Pulp", "Rose Milk Elixir"],
      starters: ["Mutton Sukka Crostini", "Golden Dragon Prawns", "Crispy Paneer Thread Kebab", "Baby Corn Salt & Pepper"],
      mains: ["Five Star Dum Biryani (Mutton/Chicken)", "Chettinad Kozhi Curry", "Nagercoil Fish Fry", "Malabar Parotta", "Kadai Paneer", "Dal Tadka"],
      riceAndBiryani: ["Fragrant Seeraga Samba Dum Biryani", "Ghee Rice with Cashews", "Curd Rice with Pomegranate"],
      breads: ["Butter Naan", "Tandoori Roti", "Fluffy Bun Parotta"],
      liveStalls: ["Madurai Kal Dosa Counter (5 varieties)", "Tandoori Chicken Skewers", "Live Ice Cream Cold Stone"],
      desserts: ["Warm Elaneer Payasam", "Gulab Jamun with Rabdi", "Assorted Pastry & Fruit Platter"]
    }
  },
  {
    id: "biryani-specials",
    name: "Biryani Specials",
    category: "biryani",
    tagline: "Chicken | Mutton | Seafood",
    description: "Slow-cooked dum biryani prepared using aged seeraga samba and basmati rice, tender farm-fresh meats, and our proprietary roasted spices handed down since 2013.",
    pricePerPlate: 350,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80",
    tier: "Silver",
    cuisineType: "Authentic Dum Biryani",
    isPopular: true,
    courses: {
      welcomeDrinks: ["Nannari Sarbath with Chia", "Sweet Lime Punch"],
      starters: ["Chicken 65 (Nagercoil Spiced)", "Pepper Mutton Chukka", "Egg Varuval"],
      mains: ["Special Mutton Dum Biryani", "Tender Chicken Dum Biryani", "Egg Masala"],
      riceAndBiryani: ["Authentic Dum Biryani", "Steamed White Rice"],
      breads: ["Rumali Roti / Coin Parotta"],
      liveStalls: ["Chicken Tikka Live Grill", "Tandoori Leg Kebab"],
      desserts: ["Bread Halwa with Roasted Nuts", "Pineapple Kesari", "Beetroot Kheer"]
    }
  },
  {
    id: "pure-veg-traditional",
    name: "Pure Veg Traditional",
    category: "pure-veg",
    tagline: "Elai Saapadu | South Indian | North Indian",
    description: "Authentic multi-course banana-leaf feast prepared in a 100% vegetarian pure kitchen. Traditional delicacies prepared with pure cow ghee and freshly hand-ground masalas.",
    pricePerPlate: 280,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=700&q=80",
    tier: "Silver",
    cuisineType: "100% Pure Vegetarian",
    courses: {
      welcomeDrinks: ["Panakam with Dry Ginger", "Buttermilk with Curry Leaves & Hing"],
      starters: ["Medu Vada with Coconut Chutney", "Paneer 65", "Crispy Gobi Manchurian"],
      mains: ["Nagercoil Theeyal", "Arachuvitta Sambar", "Mysore Rasam", "Urulai Roast", "Avial with Coconut Oil", "Kootu", "Puli Kuzhambu"],
      riceAndBiryani: ["Ponni Steamed Rice", "Bisibelebath", "Lemon Sevai", "Curd Rice"],
      breads: ["Poori with Aloo Masala", "Chapathi with Kurma"],
      liveStalls: ["Crispy Podi Dosa & Ghee Roast Counter", "Pani Puri & Bhel Live Counter"],
      desserts: ["Ada Pradhaman / Payasam", "Tirunelveli Ghee Halwa", "Paal Payasam", "Pazham & Appam"]
    }
  },
  {
    id: "cocktail-hi-tea",
    name: "Cocktail & Hi-Tea",
    category: "cocktail-tea",
    tagline: "Snacks | Mocktails | Desserts",
    description: "An elegant spread for evening receptions, betrothals, and corporate cocktail soirees featuring hand-crafted finger appetizers, artisanal mocktails, and decadent mini desserts.",
    pricePerPlate: 250,
    image: "https://images.unsplash.com/photo-1505253758473-96b46deae03c?auto=format&fit=crop&w=700&q=80",
    tier: "Silver",
    cuisineType: "Fusion & Appetizers",
    courses: {
      welcomeDrinks: ["Blue Curacao Fizz", "Watermelon Basil Cooler", "Espresso Cold Coffee"],
      starters: ["Crispy Chicken Tartlets", "Cheesy Jalapeno Poppers", "Paneer Skewers with Mint Dip", "Fish Fingers with Tartar Sauce"],
      mains: ["Mini Veg & Chicken Sliders", "Penne Alfredo Pasta Live", "Cocktail Samosas"],
      riceAndBiryani: ["Mini Fried Rice with Chilli Chicken Bowls"],
      breads: ["Garlic Breadsticks", "Lavash with Hummus"],
      liveStalls: ["Italian Pasta Station", "Live Waffle & Pancake Counter"],
      desserts: ["Chocolate Mousse Shooters", "Red Velvet Cupcakes", "Mini Walnut Brownie Bites"]
    }
  },
  {
    id: "tandoori-grills",
    name: "Tandoori & Grills",
    category: "grand-wedding",
    tagline: "Live BBQ | Kebabs | Sizzlers",
    description: "Charcoal-grilled succulent meats, spicy seafood marinades, and chargrilled paneer prepared fresh before your guests in our outdoor clay ovens.",
    pricePerPlate: 420,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80",
    tier: "Gold",
    cuisineType: "Tandoor & Barbeque",
    courses: {
      welcomeDrinks: ["Spiced Kokum Cooler", "Green Apple Mojito"],
      starters: ["Tandoori Murgh Full", "Seekh Kebab", "Pahari Paneer Tikka", "Hariyali Fish Tikka"],
      mains: ["Butter Chicken Punjabi", "Dal Makhani Slow Cooked", "Chicken Tikka Masala"],
      riceAndBiryani: ["Jeera Rice", "Kashmiri Pulao"],
      breads: ["Garlic Naan", "Cheese Kulcha", "Lachha Paratha"],
      liveStalls: ["Open Charcoal BBQ Grill", "Live Rumali Roti Flipping"],
      desserts: ["Kesar Phirni in Earthen Pots", "Hot Shahi Tukda"]
    }
  },
  {
    id: "seafood-specialties",
    name: "Seafood Specialties",
    category: "grand-wedding",
    tagline: "Fresh Coastal Catch | Kanyakumari Style",
    description: "Freshly sourced Arabian Sea and Indian Ocean catch cooked with rich coconut, roasted shallots, and spicy pepper masala native to coastal Kanyakumari.",
    pricePerPlate: 520,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80",
    tier: "Gold",
    cuisineType: "Coastal Kanyakumari Special",
    courses: {
      welcomeDrinks: ["Aam Panna", "Fresh Tender Coconut"],
      starters: ["Tawa Vanjaram Fish Fry", "Nethili Fry (Crispy Anchovy)", "Karuvadu Thokku Tartlets", "Golden Crab Lollipops"],
      mains: ["Nagercoil Meen Kuzhambu (Seer Fish)", "Malabar Prawn Roast", "Crab Masala Chettinad"],
      riceAndBiryani: ["Coastal Prawn Biryani", "Steamed Matta Rice"],
      breads: ["Kerala Appam", "Idiyappam with Coconut Milk"],
      liveStalls: ["Live Tawa Fish Fry Counter", "Live Dosa with Fish Curry"],
      desserts: ["Caramel Custard", "Elaneer Souffle"]
    }
  }
];

export const PACKAGES: PackageTier[] = [
  {
    id: "silver",
    name: "Silver Package",
    tagline: "Simple, Elegant, Delicious.",
    pricePerPlate: 450,
    isPopular: false,
    idealFor: "Family gatherings, intimate betrothals, and birthday parties (50-200 guests)",
    includedItems: "Veg / Non-Veg options, 2 Mains + 2 Sides + Dessert",
    features: [
      "Veg / Non-Veg options tailored to your guest profile",
      "2 Main Courses + 2 Traditional Accompaniments",
      "Choice of Seeraga Samba Biryani or Steamed Rice spread",
      "1 Artisanal Dessert + 1 Welcome Beverage",
      "Standard Chafing Dishes & Quality Crockery",
      "Dedicated Service Staff & Cleanup Support"
    ]
  },
  {
    id: "gold",
    name: "Gold Package",
    tagline: "More Choices, More Flavors.",
    pricePerPlate: 680,
    isPopular: true,
    idealFor: "Weddings, grand receptions, and milestone celebrations (150-1,000 guests)",
    includedItems: "4 Mains + 3 Sides + Dessert + 2 Live Counters",
    features: [
      "Lavish Multi-Cuisine Veg & Non-Veg selection",
      "4 Signature Mains + 3 Sides + 2 Fresh Breads",
      "2 Interactive Live Food Counters (Dosa / BBQ / Chaat)",
      "Mutton / Chicken Dum Biryani cooked on site",
      "2 Welcome Drinks + 2 Traditional Sweets + Ice Cream",
      "Royal Brass & Stainless Buffet Station Setup",
      "Banquet Captain, Uniformed Waiters & Kitchen Crew",
      "Full Table Decor & Pre-event Food Tasting for 2"
    ]
  },
  {
    id: "platinum",
    name: "Platinum Package",
    tagline: "The Complete Celebration.",
    pricePerPlate: 850,
    isPopular: false,
    idealFor: "Ultra-luxury weddings, VIP receptions, and high-profile corporate galas (300-1,500+ guests)",
    includedItems: "Multi-cuisine Menu, Premium Live Counters (4), Welcome Drinks + Mocktails",
    features: [
      "Unlimited Multi-Cuisine Extravaganza (South, North, Coastal & Continental)",
      "6 Premium Mains including Jumbo Prawns, Mutton Chukka & Paneer Tikka",
      "4 Dedicated Live Interactive Stalls (Tandoor, Dosa, Pasta & Dessert Bar)",
      "Exotic Fruit Carvings & Themed Buffet Counter Presentation",
      "Designer Mocktail Bar with Flair Bartenders",
      "Premium Imported Ceramic & Golden Cutlery Crockery",
      "Comprehensive Event Dining Management & Floor Supervisors",
      "Complimentary VIP Family Lounge Tasting Session for 4"
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "priya-arjun",
    name: "Priya & Arjun",
    eventType: "Wedding Reception",
    location: "Nagercoil (Grand Palace Hall)",
    rating: 5,
    guestCount: 850,
    date: "January 2026",
    review: "The Five Star team made our wedding reception truly unforgettable! The mutton biryani was fragrant and melt-in-the-mouth, and the live dosa counter was a huge hit among our guests from Chennai and Kerala. Impeccable cleanliness, warm hospitality, and not a single delay. Highly recommended!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "sundar-rajan",
    name: "Dr. Sundar Rajan",
    eventType: "Silver Jubilee Celebration",
    location: "Kanyakumari Beach Resort",
    rating: 5,
    guestCount: 450,
    date: "December 2025",
    review: "We engaged The Five Star for my parents' 50th wedding anniversary. From the welcome tender coconut punch to the Elaneer Payasam, everything was prepared with authentic Nagercoil touch. Their supervisor handled the dining flow without a hitch. Five stars in every sense!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "karthik-deepa",
    name: "Karthik & Deepa",
    eventType: "Betrothal & Seated Feast",
    location: "Vadasery, Nagercoil",
    rating: 5,
    guestCount: 300,
    date: "November 2025",
    review: "Our betrothal demanded a traditional pure vegetarian banana-leaf saapadu. The Five Star team served 24 authentic varieties with genuine smile and prompt refills. All our relatives appreciated the quality of the ghee and sambar.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "infosys-alumni",
    name: "Malarvizhi & Rajesh",
    eventType: "Outdoor Lawn Reception",
    location: "Trivandrum Highway, Nagercoil",
    rating: 5,
    guestCount: 600,
    date: "October 2025",
    review: "The live counters, especially the tandoori kebabs and hot jalebis with rabdi, created an extraordinary ambiance on our lawn. The presentation with warm lighting was straight out of a royal wedding. Thank you Five Star!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Wedding Buffet Setup",
    category: "buffets",
    categoryLabel: "Buffets",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80",
    caption: "Grand evening outdoor buffet setup with golden ambient lighting and brass chafers for 800+ guests in Nagercoil."
  },
  {
    id: "gal-2",
    title: "Live Dosa Counter",
    category: "live-stalls",
    categoryLabel: "Live Stalls",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80",
    caption: "Master chef preparing crispy Madurai ghee roast & podi dosa live on polished cast iron tawa."
  },
  {
    id: "gal-3",
    title: "Mutton Dum Biryani",
    category: "food-plating",
    categoryLabel: "Food Plating",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80",
    caption: "Fragrant seeraga samba mutton biryani garnished with fried onions, boiled egg, and roasted cashews."
  },
  {
    id: "gal-4",
    title: "Artisanal Fruit Carving",
    category: "fruit-carvings",
    categoryLabel: "Fruit Carvings",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
    caption: "Intricate floral watermelon & tropical fruit centerpiece carved by our in-house artist."
  },
  {
    id: "gal-5",
    title: "Outdoor Lawn Setup",
    category: "outdoor-setup",
    categoryLabel: "Outdoor Setup",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
    caption: "Elegant canopied outdoor dining pavilion with round tables and bespoke floral arrangements."
  },
  {
    id: "gal-6",
    title: "Royal Dessert Counter",
    category: "desserts",
    categoryLabel: "Desserts",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=900&q=80",
    caption: "Assorted Indian sweets, warm Elaneer Payasam, gulab jamuns, and chilled pastry desserts."
  },
  {
    id: "gal-7",
    title: "Corporate Hi-Tea Spread",
    category: "buffets",
    categoryLabel: "Buffets",
    image: "https://images.unsplash.com/photo-1505253758473-96b46deae03c?auto=format&fit=crop&w=900&q=80",
    caption: "Contemporary finger appetizers, mini sandwiches, gourmet tea & coffee bar for an executive conference."
  },
  {
    id: "gal-8",
    title: "Gourmet Plating Artistry",
    category: "food-plating",
    categoryLabel: "Food Plating",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80",
    caption: "Head chef finishing a signature appetizer plate with micro-greens and tamarind reduction."
  },
  {
    id: "gal-9",
    title: "Traditional Banana Leaf Feast",
    category: "food-plating",
    categoryLabel: "Food Plating",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=900&q=80",
    caption: "Authentic South Indian 24-dish Elai Saapadu served on fresh plantain leaf."
  },
  {
    id: "gal-10",
    title: "Live Barbeque & Tandoor",
    category: "live-stalls",
    categoryLabel: "Live Stalls",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=900&q=80",
    caption: "Charcoal live skewers of succulent malai tikka and tandoori prawns."
  },
  {
    id: "gal-11",
    title: "Evening Wedding Canopy",
    category: "outdoor-setup",
    categoryLabel: "Outdoor Setup",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80",
    caption: "Illuminated fairy light canopy with draped fabric for open-air reception dinner."
  },
  {
    id: "gal-12",
    title: "Wedding Highlights Reel",
    category: "videos",
    categoryLabel: "Videos",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80",
    caption: "Behind the scenes: 1,200 guest catering execution in Ramanpudur, Nagercoil.",
    isVideo: true
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "insta-1",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80",
    likes: "1.4k",
    comments: "84"
  },
  {
    id: "insta-2",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80",
    likes: "2.1k",
    comments: "112"
  },
  {
    id: "insta-3",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=400&q=80",
    likes: "940",
    comments: "47"
  },
  {
    id: "insta-4",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=400&q=80",
    likes: "1.8k",
    comments: "93"
  },
  {
    id: "insta-5",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80",
    likes: "3.2k",
    comments: "156"
  }
];

export const COMPANY_VALUES = [
  {
    title: "Quality Food",
    subtitle: "Fresh Ingredients",
    desc: "We source farm-fresh produce daily, pure cold-pressed oils, and farm-reared meats with zero artificial preservatives.",
    icon: "Utensils"
  },
  {
    title: "Customer Satisfaction",
    subtitle: "Your Happiness Matters",
    desc: "Our priority is turning your special occasion into memories your guests reminisce about for years to come.",
    icon: "HeartHandshake"
  },
  {
    title: "Professional Service",
    subtitle: "On Time, Every Time",
    desc: "Rigorous event planning, punctual setups, disciplined banquet captains, and courteous staff at every station.",
    icon: "Clock"
  },
  {
    title: "Tradition & Innovation",
    subtitle: "The Best of Both Worlds",
    desc: "Deeply rooted in authentic Tamil & Travancore culinary heritage, combined with modern live stall dining trends.",
    icon: "Sparkles"
  }
];

export const CULINARY_TEAM = [
  {
    name: "Master Chef Shanmugam",
    role: "Head Executive Chef",
    experience: "25+ Years Experience",
    specialty: "Seeraga Samba Dum Biryani & Traditional Banquets",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Chef Rajendran",
    role: "South Indian Master",
    experience: "18+ Years Experience",
    specialty: "Authentic Pure Veg Sadya & Banana Leaf Feasts",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Chef Anthony",
    role: "Tandoor & Live Grills Specialist",
    experience: "14+ Years Experience",
    specialty: "Mughlai, Barbeque & Live Counter Theatrics",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=500&q=80"
  }
];
