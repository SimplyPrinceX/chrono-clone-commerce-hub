
export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  specifications: {
    case: string;
    movement: string;
    dial: string;
    bracelet: string;
    water_resistance: string;
  };
  images: string[];
  inStock: boolean;
  isNewArrival: boolean;
  isBestSeller: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Automatic",
    brand: "Chronova",
    category: "men",
    price: 8999,
    description: "A timeless classic that embodies luxury and precision. The perfect statement piece for any occasion.",
    features: [
      "Automatic self-winding movement",
      "Scratch-resistant sapphire crystal",
      "Waterproof to 100 meters",
      "Date function",
      "Luminous hands and hour markers"
    ],
    specifications: {
      case: "Stainless steel, 41mm",
      movement: "Calibre 3235, Automatic",
      dial: "Black",
      bracelet: "Oyster, Stainless steel",
      water_resistance: "100 meters / 330 feet"
    },
    images: [
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
      "https://images.pexels.com/photos/9979925/pexels-photo-9979925.jpeg",
      "https://images.pexels.com/photos/9981851/pexels-photo-9981851.jpeg"
    ],
    inStock: true,
    isNewArrival: false,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Diver Pro",
    brand: "Chronova",
    category: "men",
    price: 6499,
    description: "Professional diving watch with exceptional underwater capabilities and timeless design.",
    features: [
      "Professional dive watch",
      "Helium escape valve",
      "Unidirectional rotating bezel",
      "Super-LumiNova on hands and markers",
      "Extendable diver bracelet"
    ],
    specifications: {
      case: "Stainless steel, 42mm",
      movement: "Chronova Co-Axial Master Chronometer Calibre 8800",
      dial: "Blue",
      bracelet: "Stainless steel",
      water_resistance: "300 meters / 1000 feet"
    },
    images: [
      "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg",
      "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg",
      "https://images.pexels.com/photos/9981590/pexels-photo-9981590.jpeg"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: true
  },
  {
    id: 3,
    name: "Grand Chronograph",
    brand: "Chronova",
    category: "men",
    price: 4299,
    originalPrice: 4899,
    description: "Precision chronograph with racing heritage, combining sporty aesthetics with technical excellence.",
    features: [
      "Chronograph with 30-minute and 12-hour counters",
      "Tachymeter scale on bezel",
      "Date window at 3 o'clock",
      "Sapphire crystal with anti-reflective treatment",
      "Transparent case back"
    ],
    specifications: {
      case: "Stainless steel, 44mm",
      movement: "Calibre 16 Automatic",
      dial: "Black with red accents",
      bracelet: "Perforated leather",
      water_resistance: "100 meters / 330 feet"
    },
    images: [
      "https://images.pexels.com/photos/47339/mechanics-movement-feinmechanik-wrist-watch-47339.jpeg",
      "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg",
      "https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg"
    ],
    inStock: true,
    isNewArrival: false,
    isBestSeller: false
  },
  {
    id: 4,
    name: "Elegant Diamond",
    brand: "Chronova",
    category: "women",
    price: 12999,
    description: "Exquisite timepiece adorned with diamonds, embodying feminine elegance and sophisticated craftsmanship.",
    features: [
      "Diamond-set bezel",
      "Mother-of-pearl dial",
      "Blue sapphire crown",
      "Alligator leather strap",
      "Swiss quartz movement"
    ],
    specifications: {
      case: "18K rose gold, 36mm, diamond-set",
      movement: "Quartz",
      dial: "Mother-of-pearl with diamond hour markers",
      bracelet: "Blue alligator leather",
      water_resistance: "30 meters / 100 feet"
    },
    images: [
      "https://images.pexels.com/photos/9978722/pexels-photo-9978722.jpeg",
      "https://images.pexels.com/photos/9978676/pexels-photo-9978676.jpeg",
      "https://images.pexels.com/photos/9978727/pexels-photo-9978727.jpeg"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false
  },
  {
    id: 5,
    name: "Slim Automatic",
    brand: "Chronova",
    category: "men",
    price: 24999,
    description: "Ultra-thin automatic watch representing the pinnacle of watchmaking art and elegance.",
    features: [
      "Ultra-thin design",
      "Hand-finished movement",
      "18K gold applied hour markers",
      "Alligator leather strap with fold-over clasp",
      "Sapphire crystal case back"
    ],
    specifications: {
      case: "18K white gold, 39mm",
      movement: "Calibre 240, Ultra-thin automatic",
      dial: "Opaline silver",
      bracelet: "Black alligator leather",
      water_resistance: "30 meters / 100 feet"
    },
    images: [
      "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg",
      "https://images.pexels.com/photos/1034065/pexels-photo-1034065.jpeg",
      "https://images.pexels.com/photos/859895/pexels-photo-859895.jpeg"
    ],
    inStock: false,
    isNewArrival: false,
    isBestSeller: false
  },
  {
    id: 7,
    name: "Pilot's Chronograph",
    brand: "Chronova",
    category: "men",
    price: 7999,
    description: "Aviator-inspired chronograph with heritage design elements and precision mechanics.",
    features: [
      "Flyback chronograph function",
      "Day and date display",
      "Soft-iron inner case for magnetic field protection",
      "Screw-in crown",
      "Calfskin strap with folding clasp"
    ],
    specifications: {
      case: "Stainless steel, 43mm",
      movement: "Calibre 79320, Automatic chronograph",
      dial: "Black with luminous numerals",
      bracelet: "Brown calfskin leather",
      water_resistance: "60 meters / 200 feet"
    },
    images: [
      "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg",
      "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
      "https://images.pexels.com/photos/2494607/pexels-photo-2494607.jpeg"
    ],
    inStock: true,
    isNewArrival: false,
    isBestSeller: false
  },
  {
    id: 8,
    name: "Ceramic Tourbillon",
    brand: "Chronova",
    category: "men",
    price: 18999,
    description: "Bold statement piece featuring a tourbillon movement and innovative ceramic construction.",
    features: [
      "Visible tourbillon at 6 o'clock",
      "Power reserve indicator",
      "Scratch-resistant ceramic case",
      "Skeleton dial",
      "Limited edition of 500 pieces"
    ],
    specifications: {
      case: "Black ceramic, 45mm",
      movement: "HUB6010 manual-winding tourbillon",
      dial: "Openworked",
      bracelet: "Black rubber with ceramic inserts",
      water_resistance: "30 meters / 100 feet"
    },
    images: [
      "https://images.pexels.com/photos/9981590/pexels-photo-9981590.jpeg",
      "https://images.pexels.com/photos/266666/pexels-photo-266666.jpeg",
      "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false
  },
  {
    id: 9,
    name: "Seamaster Professional",
    brand: "Chronova",
    category: "men",
    price: 8500,
    description: "The legendary Chronova Seamaster Professional, trusted by dive professionals and style enthusiasts alike.",
    features: [
      "Co-axial escapement",
      "Wave-patterned dial",
      "Date window at 6 o'clock",
      "Helium escape valve",
      "Anti-magnetic to 15,000 gauss"
    ],
    specifications: {
      case: "Stainless steel, 42mm",
      movement: "Chronova Master Chronometer Calibre 8800",
      dial: "Deep ocean blue ceramic",
      bracelet: "Stainless steel with fine adjustment",
      water_resistance: "300 meters / 1000 feet"
    },
    images: [
      "https://images.pexels.com/photos/128206/pexels-photo-128206.jpeg",
      "https://images.pexels.com/photos/266666/pexels-photo-266666.jpeg",
      "https://images.pexels.com/photos/9981590/pexels-photo-9981590.jpeg"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false
  },
  {
    id: 10,
    name: "Nautilus Limited",
    brand: "Chronova",
    category: "men",
    price: 89999,
    description: "Limited-edition Chronova Nautilus with exclusive embossed dial and features.",
    features: [
      "Limited production of 500 pieces worldwide",
      "Original design",
      "Horizontally embossed dial",
      "Integrated bracelet design",
      "Transparent sapphire caseback showing calibre 324 S C"
    ],
    specifications: {
      case: "Platinum, 40mm",
      movement: "Calibre 324 S C, Self-winding",
      dial: "Blue with horizontal embossing",
      bracelet: "Integrated platinum bracelet",
      water_resistance: "120 meters / 394 feet"
    },
    images: [
      "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg",
      "https://images.pexels.com/photos/9979952/pexels-photo-9979952.jpeg",
      "https://images.pexels.com/photos/277321/pexels-photo-277321.jpeg"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false
  },
  {
    id: 11,
    name: "Royal Oak Offshore",
    brand: "Chronova",
    category: "men",
    price: 45000,
    description: "Bold, muscular evolution of the iconic Royal Oak, embodying sporting luxury and precision engineering.",
    features: [
      "In-house automatic movement",
      "Oversized 44mm case",
      "Iconic octagonal bezel with exposed screws",
      "Grande Tapisserie pattern dial",
      "Integrated rubber strap"
    ],
    specifications: {
      case: "Stainless steel and ceramic, 44mm",
      movement: "Calibre 3126/3840, Self-winding",
      dial: "Black Grande Tapisserie pattern",
      bracelet: "Black rubber with steel folding clasp",
      water_resistance: "100 meters / 330 feet"
    },
    images: [
      "https://images.pexels.com/photos/705868/pexels-photo-705868.jpeg",
      "https://images.pexels.com/photos/392034/pexels-photo-392034.jpeg",
      "https://images.pexels.com/photos/277321/pexels-photo-277321.jpeg"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false
  },
  {
    id: 12,
    name: "Big Bang Unico",
    brand: "Chronova",
    category: "men",
    price: 35000,
    description: "Revolutionary fusion of materials with skeleton dial and in-house movement, making a bold statement.",
    features: [
      "Unico in-house movement",
      "Innovative materials fusion",
      "Flyback chronograph function",
      "Column-wheel chronograph mechanism",
      "Interchangeable strap system"
    ],
    specifications: {
      case: "King Gold and ceramic, 44mm",
      movement: "Chronova UNICO HUB1280, Self-winding chronograph",
      dial: "Skeletonized",
      bracelet: "Black structured rubber with deployant buckle",
      water_resistance: "100 meters / 330 feet"
    },
    images: [
      "https://images.pexels.com/photos/691640/pexels-photo-691640.jpeg",
      "https://images.pexels.com/photos/157646/watch-work-detail-brass-157646.jpeg",
      "https://images.pexels.com/photos/1262699/pexels-photo-1262699.jpeg"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false
  }
];

export const brands = [
  { id: 1, name: "Classic Collection", count: 12, image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" },
  { id: 2, name: "Sport Collection", count: 15, image: "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg" },
  { id: 3, name: "Chronograph Collection", count: 10, image: "https://images.pexels.com/photos/47339/mechanics-movement-feinmechanik-wrist-watch-47339.jpeg" },
  { id: 4, name: "Women's Collection", count: 8, image: "https://images.pexels.com/photos/9978722/pexels-photo-9978722.jpeg" },
  { id: 5, name: "Luxury Collection", count: 6, image: "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg" },
  { id: 7, name: "Pilot Collection", count: 7, image: "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg" },
  { id: 8, name: "Ceramic Collection", count: 5, image: "https://images.pexels.com/photos/9981590/pexels-photo-9981590.jpeg" },
  { id: 9, name: "Heritage Collection", count: 4, image: "https://images.pexels.com/photos/705868/pexels-photo-705868.jpeg" }
];

export const categories = [
  { id: 1, name: "Men's Watches", count: 24, slug: "men" },
  { id: 2, name: "Women's Watches", count: 18, slug: "women" },
  { id: 3, name: "Smart Watches", count: 12, slug: "smart" },
  { id: 4, name: "Luxury Watches", count: 9, slug: "luxury" },
  { id: 5, name: "Sports Watches", count: 15, slug: "sports" },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByBrand = (brand: string): Product[] => {
  return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNewArrival);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.isBestSeller);
};

export const getRelatedProducts = (productId: number, count: number = 4): Product[] => {
  const currentProduct = getProductById(productId);
  
  if (!currentProduct) return [];
  
  const sameBrand = products.filter(p => p.brand === currentProduct.brand && p.id !== productId);
  const sameCategory = products.filter(p => p.category === currentProduct.category && p.brand !== currentProduct.brand && p.id !== productId);
  
  // Combine and shuffle to get random selection
  const combined = [...sameBrand, ...sameCategory];
  const shuffled = combined.sort(() => 0.5 - Math.random());
  
  return shuffled.slice(0, count);
};
