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
      "https://p1.liveauctioneers.com/5584/131790/66973302_1_x.jpg?auto=webp&format=pjpg&quality=50&version=1543359129",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=1000&auto=format&fit=crop",
      
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
      "https://twobrokewatchsnobs.com/wp-content/uploads/2020/02/Omega-Seamaster-Professional-300M-Review-2254.50.00-Image-3-scaled.jpg"
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
      "https://shine-watches.com/wp-content/uploads/2022/07/Tag-Heuer-Carrera-Calibre-17-bracelet-600x600.jpg",

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
      "https://5.imimg.com/data5/SELLER/Default/2023/8/332086398/YF/VB/UJ/150266763/cr2-500x500.png",
      "https://5.imimg.com/data5/SELLER/Default/2023/8/332086398/YF/VB/UJ/150266763/cr2-500x500.png",
      "https://5.imimg.com/data5/SELLER/Default/2023/8/332086398/YF/VB/UJ/150266763/cr2-500x500.png"
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
      "https://almawatches.com/cdn/shop/products/DSC_6352_1024x1024@2x.jpg?v=1644489415",
      "https://almawatches.com/cdn/shop/products/DSC_6352_1024x1024@2x.jpg?v=1644489415",
      "https://almawatches.com/cdn/shop/products/DSC_6352_1024x1024@2x.jpg?v=1644489415"
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
      "https://timeandtidewatches.com/wp-content/uploads/2021/03/IWC-IW388102-16657.jpg",
      "https://timeandtidewatches.com/wp-content/uploads/2021/03/IWC-IW388102-16657.jpg",
      "https://timeandtidewatches.com/wp-content/uploads/2021/03/IWC-IW388102-16657.jpg"
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
      "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2024-08/Spirit-of-Big-Bang-Tourbillon-5-Day-Power-Reserve-White-Ceramic-PR-shot.jpg?itok=VHIV22JI",
      "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2024-08/Spirit-of-Big-Bang-Tourbillon-5-Day-Power-Reserve-White-Ceramic-PR-shot.jpg?itok=VHIV22JI",
      "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2024-08/Spirit-of-Big-Bang-Tourbillon-5-Day-Power-Reserve-White-Ceramic-PR-shot.jpg?itok=VHIV22JI"
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
      "https://barrelsandbalance.com/wp-content/uploads/2024/12/image-10.png",
      "https://barrelsandbalance.com/wp-content/uploads/2024/12/image-10.png",
      "https://barrelsandbalance.com/wp-content/uploads/2024/12/image-10.png"
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
      "https://www.patek.com/resources/img/launch_2021_nautilus/nautilus2021_2_1920.jpg",
      "https://www.patek.com/resources/img/launch_2021_nautilus/nautilus2021_2_1920.jpg",
      "https://www.patek.com/resources/img/launch_2021_nautilus/nautilus2021_2_1920.jpg"
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
      "https://images.secondmovement.com/media/catalog/product/cache/105b3c9229095e8c1e373d2e9464b4da/a/u/audemars-piguet-royal-oak-offshore-26420ro-oo-a002ca-01-multiple-1.jpg",
      "https://images.secondmovement.com/media/catalog/product/cache/105b3c9229095e8c1e373d2e9464b4da/a/u/audemars-piguet-royal-oak-offshore-26420ro-oo-a002ca-01-multiple-1.jpg",
      "https://images.secondmovement.com/media/catalog/product/cache/105b3c9229095e8c1e373d2e9464b4da/a/u/audemars-piguet-royal-oak-offshore-26420ro-oo-a002ca-01-multiple-1.jpg"
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
      "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/h/u/hublot-big-bang-421-ox-1180-rx-multiple-3.jpg",
      "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/h/u/hublot-big-bang-421-ox-1180-rx-multiple-3.jpg",
      "https://content.thewosgroup.com/productimage/17170852/17170852_3.jpg?impolicy=hero&imwidth=700"
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
      "https://www.omegawatches.com/media/catalog/category/img-SPMoonwatchCal3861-imgSearch2.jpg",
      "https://www.omegawatches.com/media/catalog/category/img-SPMoonwatchCal3861-imgSearch2.jpg",
      "https://www.omegawatches.com/media/catalog/category/img-SPMoonwatchCal3861-imgSearch2.jpg"
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
      "https://www.swisswatchexpo.com/thewatchclub/wp-content/uploads/2021/03/rolex-datejust-41-styles.png",
      "https://www.swisswatchexpo.com/thewatchclub/wp-content/uploads/2021/03/rolex-datejust-41-styles.png",
      "https://www.swisswatchexpo.com/thewatchclub/wp-content/uploads/2021/03/rolex-datejust-41-styles.png"
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
      "https://monochrome-watches.com/wp-content/uploads/2016/11/tudor_heritage_chrono_70330n.jpg",
      "https://monochrome-watches.com/wp-content/uploads/2016/11/tudor_heritage_chrono_70330n.jpg",
      "https://monochrome-watches.com/wp-content/uploads/2016/11/tudor_heritage_chrono_70330n.jpg"
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
      "https://i0.wp.com/cdn.luxuo.com/2024/08/Cartier-Resized-Image-01.jpg?resize=1200%2C957&ssl=1",
      "https://i0.wp.com/cdn.luxuo.com/2024/08/Cartier-Resized-Image-01.jpg?resize=1200%2C957&ssl=1",
      "https://i0.wp.com/cdn.luxuo.com/2024/08/Cartier-Resized-Image-01.jpg?resize=1200%2C957&ssl=1"
    ],
    inStock: true,
    isNewArrival: false,
    isBestSeller: true
  }
];

export const brands = [
  { id: 1, name: "Rolex", count: 2, image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "Omega", count: 3, image: "https://www.watchtime.com/wp-content/uploads/2022/01/Omega_Speedmaster_Moonwatch_MC_FI.jpg" },
  { id: 3, name: "TAG Heuer", count: 1, image: "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw8b8385d0/TAG_Heuer_Carrera/CBS2211.FC6545/CBS2211.FC6545_USP2.jpg" },
  { id: 4, name: "Cartier", count: 2, image: "https://images.watchfinder.co.uk/images/watchfinderimages/media/articles/thumb-2024-02-12-12-06-58-811.jpg" },
  { id: 5, name: "Patek Philippe", count: 1, image: "https://www.swisswatchexpo.com/thewatchclub/wp-content/uploads/2024/06/Patek-Philippe-Ultimate-Guide.jpg" },
  { id: 7, name: "IWC", count: 1, image: "https://www.watchswiss.com/wp-content/uploads/2022/03/The-Watches-of-Switzerland-Pocket-Guide-to-IWC_0000_iw344202mobile5to93.jpg" },
  { id: 8, name: "Hublot", count: 1, image: "https://revolutionwatch.com/wp-content/uploads/2024/12/01-Hublot-Samuel-Ross-2024.jpg" },
  { id: 9, name: "Audemars Piguet", count: 1, image: "https://blog.europeanwatch.com/blog/wp-content/uploads/2024/08/1Z2A6835-2-scaled.jpg" },
  { id: 10, name: "Tudor", count: 1, image: "https://watchesbysjx.com/wp-content/uploads/2024/04/Tudor-Black-Bay-41-black-bezel-profile.jpg" }
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
