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
      "photo-1539874754764-5a96559165b0",
      "photo-1548169874-53e85f753f1e",
      "photo-1541778480-81fae9959b9e"
    ],
    inStock: true,
    isNewArrival: false,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Diver Pro",
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
      "photo-1547996160-81dfa63595aa",
      "photo-1612817159949-195b6eb9e31a",
      "photo-1618220048045-10a6dbdf83e0"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: true
  },
  {
    id: 3,
    name: "Grand Chronograph",
    brand: "Tag Heuer",
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
      "photo-1522312346375-d1a52e2b99b3",
      "photo-1542496658-e33a6d0d50f6",
      "photo-1524592094857-4a99389care0"
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
      "photo-1434056886845-dac89ffe9b56",
      "photo-1508685096489-7aacd43bd3b1",
      "photo-1533139502658-0198f920d8e8"
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
      "photo-1523170335258-f5ed11844a49",
      "photo-1508057198894-247b23fe5ade",
      "photo-1533302658793-3a3ccc89882f"
    ],
    inStock: false,
    isNewArrival: false,
    isBestSeller: false
  },
  {
    id: 6,
    name: "Smart Chronometer",
    brand: "Apple",
    category: "unisex",
    price: 799,
    description: "Advanced smart watch combining traditional watchmaking aesthetics with cutting-edge technology.",
    features: [
      "Always-on Retina display",
      "ECG app and blood oxygen sensor",
      "Fitness and sleep tracking",
      "Water resistant for swimming",
      "GPS and cellular connectivity"
    ],
    specifications: {
      case: "Titanium, 45mm",
      movement: "Digital",
      dial: "LTPO OLED Always-On Retina display",
      bracelet: "Titanium link bracelet",
      water_resistance: "50 meters / 164 feet"
    },
    images: [
      "photo-1579586337278-3befd40fd17a",
      "photo-1434494878577-86c23bcb06b9",
      "photo-1434494783526-8317a275791e"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: true
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
      "photo-1524592094857-4a99389care0",
      "photo-1508685096489-7aacd43bd3b1",
      "photo-1542496658-e33a6d0d50f6"
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
      "photo-1491336477066-31156b5e4f35",
      "photo-1542496658-e33a6d0d50f6",
      "photo-1508057198894-247b23fe5ade"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false
  },
  {
    id: 9,
    name: "Seamaster Professional",
    brand: "Omega",
    category: "men",
    price: 8500,
    description: "The legendary Omega Seamaster Professional, trusted by dive professionals and style enthusiasts alike.",
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
      "photo-1547996160-81dfa63595aa",
      "photo-1618220048045-10a6dbdf83e0",
      "photo-1582152629442-4a864303fb96"
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
      "Original Gerald Genta design",
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
      "photo-1548169874-53e85f753f1e",
      "photo-1523170335258-f5ed11844a49",
      "photo-1539874754764-5a96559165b0"
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
      "photo-1523170335258-f5ed11844a49",
      "photo-1508057198894-247b23fe5ade",
      "photo-1548169874-53e85f753f1e"
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
      "photo-1633285859883-a327851da7eb",
      "photo-1491336477066-31156b5e4f35",
      "photo-1508057198894-247b23fe5ade"
    ],
    inStock: true,
    isNewArrival: true,
    isBestSeller: false
  }
];

export const brands = [
  { id: 1, name: "Rolex", count: 12, image: "photo-1663012517424-297aacd937ff" },
  { id: 2, name: "Omega", count: 18, image: "photo-1582152629442-4a864303fb96" },
  { id: 3, name: "Tag Heuer", count: 15, image: "photo-1651984910098-9ab7a3561982" },
  { id: 4, name: "Cartier", count: 10, image: "photo-1595923533867-5f24da64e61a" },
  { id: 5, name: "Patek Philippe", count: 6, image: "photo-1548169874-53e85f753f1e" },
  { id: 6, name: "Apple", count: 5, image: "photo-1579586337278-3befd40fd17a" },
  { id: 7, name: "IWC", count: 9, image: "photo-1524592094857-4a99389care0" },
  { id: 8, name: "Hublot", count: 7, image: "photo-1633285859883-a327851da7eb" },
  { id: 9, name: "Audemars Piguet", count: 8, image: "photo-1523170335258-f5ed11844a49" }
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
