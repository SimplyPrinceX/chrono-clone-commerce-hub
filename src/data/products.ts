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
    brand: "Rolex",
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
      "https://images.unsplash.com/photo-1627662168806-efa33a7cda86?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612454773739-25a58238d887?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    isNewArrival: false,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Seamaster Professional",
    brand: "Omega",
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
      movement: "Omega Co-Axial Master Chronometer Calibre 8800",
      dial: "Blue",
      bracelet: "Stainless steel",
      water_resistance: "300 meters / 1000 feet"
    },
    images: [
      "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548171632-c668abbf39d4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: true
  },
  {
    id: 3,
    name: "Grand Chronograph",
    brand: "TAG Heuer",
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
      "https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1639037949517-b137202d0955?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    isNewArrival: false,
    isBestSeller: false
  },
  {
    id: 4,
    name: "Elegant Diamond",
    brand: "Cartier",
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
      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1619947486526-b9dd1fb79ad0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false
  },
  {
    id: 5,
    name: "Slim Automatic",
    brand: "Patek Philippe",
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
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583312708610-fe16a34b0826?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1709744331583-1e52343a1fc4?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: false,
    isNewArrival: false,
    isBestSeller: false
  },
  {
    id: 7,
    name: "Pilot's Chronograph",
    brand: "IWC",
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
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606736649348-3b11672e73aa?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    isNewArrival: false,
    isBestSeller: false
  },
  {
    id: 8,
    name: "Ceramic Tourbillon",
    brand: "Hublot",
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
      "https://images.unsplash.com/photo-1615138348058-fa7283161fcd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614703275013-fd9a795ae2b4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false
  },
  {
    id: 9,
    name: "Dive Master",
    brand: "Omega",
    category: "men",
    price: 8500,
    description: "The legendary Omega dive watch, trusted by dive professionals and style enthusiasts alike.",
    features: [
      "Co-axial escapement",
      "Wave-patterned dial",
      "Date window at 6 o'clock",
      "Helium escape valve",
      "Anti-magnetic to 15,000 gauss"
    ],
    specifications: {
      case: "Stainless steel, 42mm",
      movement: "Omega Master Chronometer Calibre 8800",
      dial: "Deep ocean blue ceramic",
      bracelet: "Stainless steel with fine adjustment",
      water_resistance: "300 meters / 1000 feet"
    },
    images: [
      "https://images.unsplash.com/photo-1580287017983-f87a392cf661?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602005809076-d3b10dad8312?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false
  },
  {
    id: 10,
    name: "Nautilus Limited",
    brand: "Patek Philippe",
    category: "men",
    price: 89999,
    description: "Limited-edition Patek Philippe Nautilus with exclusive embossed dial and features.",
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
      "https://images.unsplash.com/photo-1650925735028-b73bc9e9063a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621370115429-cf6c8f4e0f54?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615838574155-8c693cd96808?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false
  },
  {
    id: 11,
    name: "Royal Oak Offshore",
    brand: "Audemars Piguet",
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
      "https://images.unsplash.com/photo-1596893522033-60a6b80f1c24?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1639662546615-3e62d188d21a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626113151297-025de5ffd85e?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false
  },
  {
    id: 12,
    name: "Big Bang Unico",
    brand: "Hublot",
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
      movement: "Hublot UNICO HUB1280, Self-winding chronograph",
      dial: "Skeletonized",
      bracelet: "Black structured rubber with deployant buckle",
      water_resistance: "100 meters / 330 feet"
    },
    images: [
      "https://images.unsplash.com/photo-1645366745115-4cb5dd4ac47e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1705273690533-7fa9a2083157?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1677128412284-b7d12f6a8bc3?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false
  },
  {
    id: 13,
    name: "Speedmaster Moonwatch",
    brand: "Omega",
    category: "men",
    price: 7200,
    description: "The legendary watch that went to the moon, featuring precision chronograph functionality and timeless design.",
    features: [
      "Manual-winding movement",
      "Triple-register chronograph",
      "Tachymeter scale on bezel",
      "Hesalite crystal",
      "Small seconds sub-dial"
    ],
    specifications: {
      case: "Stainless steel, 42mm",
      movement: "Omega Calibre 1861, Manual-winding",
      dial: "Black with luminous markers",
      bracelet: "Stainless steel",
      water_resistance: "50 meters / 167 feet"
    },
    images: [
      "https://images.unsplash.com/photo-1614750443302-4b3741f85c24?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1632498301446-5f3f8d94b7ed?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    isNewArrival: false,
    isBestSeller: true
  },
  {
    id: 14,
    name: "Datejust 41",
    brand: "Rolex",
    category: "men",
    price: 12500,
    description: "The classic Rolex Datejust with fluted bezel and jubilee bracelet, a timeless symbol of style and achievement.",
    features: [
      "Chronometer certified movement",
      "Cyclops lens over date",
      "Waterproof Oyster case",
      "Self-winding perpetual movement",
      "Superlative chronometer certification"
    ],
    specifications: {
      case: "Stainless steel and white gold, 41mm",
      movement: "Calibre 3235, Automatic",
      dial: "Sunburst blue",
      bracelet: "Jubilee, Stainless steel",
      water_resistance: "100 meters / 330 feet"
    },
    images: [
      "https://images.unsplash.com/photo-1684142589680-e9b0e9da6daf?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609609128691-99f27fb83314?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592857029495-ef57a8f2bf34?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: true
  },
  {
    id: 15,
    name: "Heritage Chronograph",
    brand: "Tudor",
    category: "men",
    price: 5200,
    originalPrice: 5800,
    description: "Vintage-inspired chronograph with modern technical specifications and exceptional quality.",
    features: [
      "Column-wheel chronograph mechanism",
      "Screw-down pushers",
      "Bi-directional rotating bezel",
      "70-hour power reserve",
      "Date function"
    ],
    specifications: {
      case: "Stainless steel, 41mm",
      movement: "Manufacture Calibre MT5813, Automatic",
      dial: "Panda with black sub-dials on white background",
      bracelet: "Stainless steel with rivet design",
      water_resistance: "200 meters / 660 feet"
    },
    images: [
      "https://images.unsplash.com/photo-1655664910813-6fdeefd0b9d7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1648183185045-7a52f84c2ef4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1638516532584-4708a49da3af?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false
  },
  {
    id: 16,
    name: "Santos de Cartier",
    brand: "Cartier",
    category: "men",
    price: 8400,
    description: "Iconic square watch design with modern engineering and the unmistakable Cartier aesthetic.",
    features: [
      "QuickSwitch strap change system",
      "SmartLink size adjustment",
      "Seven-sided crown with sapphire",
      "Screwed-down bezel",
      "Sword-shaped hands with luminescence"
    ],
    specifications: {
      case: "Stainless steel, 39.8mm",
      movement: "Calibre 1847 MC, Automatic",
      dial: "Silvered opaline",
      bracelet: "Stainless steel with QuickSwitch system",
      water_resistance: "100 meters / 330 feet"
    },
    images: [
      "https://images.unsplash.com/photo-1625592526284-06c17c81a237?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622435012548-13a9a97c2470?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1669118041111-f240c48dc164?q=80&w=1000&auto=format&fit=crop"
    ],
    inStock: true,
    isNewArrival: false,
    isBestSeller: true
  }
];

export const brands = [
  { id: 1, name: "Rolex", count: 12, image: "https://images.unsplash.com/photo-1627662168806-efa33a7cda86?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "Omega", count: 15, image: "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, name: "TAG Heuer", count: 10, image: "https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "Cartier", count: 8, image: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, name: "Patek Philippe", count: 6, image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1000&auto=format&fit=crop" },
  { id: 7, name: "IWC", count: 7, image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1000&auto=format&fit=crop" },
  { id: 8, name: "Hublot", count: 5, image: "https://images.unsplash.com/photo-1615138348058-fa7283161fcd?q=80&w=1000&auto=format&fit=crop" },
  { id: 9, name: "Audemars Piguet", count: 4, image: "https://images.unsplash.com/photo-1596893522033-60a6b80f1c24?q=80&w=1000&auto=format&fit=crop" },
  { id: 10, name: "Tudor", count: 5, image: "https://images.unsplash.com/photo-1655664910813-6fdeefd0b9d7?q=80&w=1000&auto=format&fit=crop" }
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
