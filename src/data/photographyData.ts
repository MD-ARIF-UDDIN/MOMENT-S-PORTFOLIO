export interface PhotoWork {
  id: string;
  title: string;
  category: "weddings" | "editorial" | "portraits" | "events" | "commercial" | "family" | "maternity" | "outdoor";
  categoryLabel: string;
  image: string;
  alt: string;
  aspectRatio: "portrait" | "landscape" | "square";
  client: string;
  location: string;
  year: string;
  story: string;
  cameraSettings?: {
    camera?: string;
    lens?: string;
    aperture?: string;
    shutter?: string;
    iso?: string;
  };
  featured: boolean;
  facebookUrl?: string;
}

export interface DetailedService {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  startingPrice: string;
  duration: string;
  deliverables: string[];
  features: string[];
  sampleImages: string[];
}

export interface ClientAlbum {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  coverImage: string;
  photoCount: number;
  category: string;
  facebookUrl?: string;
  images: string[];
  description?: string;
}

export interface FilmWork {
  id: string;
  title: string;
  coupleOrClient: string;
  duration: string;
  location: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  event: string;
  avatar: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  specialty?: string;
  bio?: string;
  gear?: string;
  experience?: string;
}

export interface ServicePackage {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  price: string;
  coverage: string;
  turnaround: string;
  deliverables: string[];
  popular?: boolean;
}

export interface AdditionalService {
  name: string;
  price: string;
  note?: string;
}

export const WEDDING_PACKAGES: ServicePackage[] = [
  {
    id: "pkg-wedding-silver",
    category: "Wedding Photography & Cinematography",
    title: "Silver Package",
    subtitle: "Ideal for intimate ceremonies and half-day celebrations.",
    price: "৳25,000",
    coverage: "Up to 4 Hours",
    turnaround: "Standard Delivery",
    deliverables: [
      "1 Professional Photographer",
      "1 Professional Cinematographer",
      "1 Day coverage (up to 4 hours)",
      "Edited high-resolution photos",
      "Highlight video (3–5 minutes)",
      "Digital delivery via private link"
    ]
  },
  {
    id: "pkg-wedding-gold",
    category: "Wedding Photography & Cinematography",
    title: "Gold Package",
    subtitle: "Complete wedding day coverage with cinematic highlight film.",
    price: "৳40,000",
    coverage: "Up to 6 Hours",
    turnaround: "Priority Delivery",
    popular: true,
    deliverables: [
      "1 Professional Photographer",
      "2 Professional Cinematographers",
      "Up to 6 hours full event coverage",
      "300+ Individually edited photos",
      "Cinematic highlight film (5–7 minutes)",
      "Dedicated couple portrait session",
      "Private online client gallery"
    ]
  },
  {
    id: "pkg-wedding-platinum",
    category: "Wedding Photography & Cinematography",
    title: "Platinum Package",
    subtitle: "The ultimate royal wedding coverage with dual camera teams.",
    price: "৳65,000",
    coverage: "Up to 8 Hours",
    turnaround: "Express Delivery",
    deliverables: [
      "2 Professional Master Photographers",
      "2 Professional Cinematographers",
      "Up to 8 hours comprehensive coverage",
      "500+ Individually edited photos",
      "Cinematic wedding film (8–12 minutes)",
      "Teaser video (30–60 seconds for social media)",
      "Premium fine-art color grading",
      "Dedicated couple portrait session"
    ]
  }
];

export const HOLUD_PACKAGES: ServicePackage[] = [
  {
    id: "pkg-holud-essential",
    category: "Gaye Holud Packages",
    title: "Holud Essential",
    subtitle: "Essential photo and video coverage for vibrant Gaye Holud events.",
    price: "৳18,000",
    coverage: "4 Hours Coverage",
    turnaround: "Standard Delivery",
    deliverables: [
      "1 Professional Photographer",
      "1 Professional Cinematographer",
      "4 Hours full event coverage",
      "Edited high-resolution photos",
      "Short highlight video"
    ]
  },
  {
    id: "pkg-holud-signature",
    category: "Gaye Holud Packages",
    title: "Holud Signature",
    subtitle: "Comprehensive coverage capturing performances, family, and candid laughter.",
    price: "৳30,000",
    coverage: "6 Hours Coverage",
    turnaround: "Priority Delivery",
    popular: true,
    deliverables: [
      "1 Professional Photographer",
      "2 Professional Cinematographers",
      "6 Hours comprehensive coverage",
      "Candid documentary photography",
      "Cinematic Gaye Holud film",
      "Social media teaser video"
    ]
  },
  {
    id: "pkg-holud-royal",
    category: "Gaye Holud Packages",
    title: "Holud Royal",
    subtitle: "Grand festive celebration coverage with dual photo and video units.",
    price: "৳45,000",
    coverage: "8 Hours Coverage",
    turnaround: "Priority Delivery",
    deliverables: [
      "2 Professional Photographers",
      "2 Professional Cinematographers",
      "8 Hours full event coverage",
      "Premium highlight film",
      "Teaser video",
      "Dedicated couple portraits"
    ]
  }
];

export const ENGAGEMENT_PACKAGES: ServicePackage[] = [
  {
    id: "pkg-couple-mini",
    category: "Engagement & Couple Packages",
    title: "Couple Mini",
    subtitle: "Quick outdoor or studio portrait session for couples.",
    price: "৳5,000",
    coverage: "1 Hour Session",
    turnaround: "5 Business Days",
    deliverables: [
      "1 Hour dedicated portrait coverage",
      "30+ Individually edited high-res photos",
      "Online private download gallery"
    ]
  },
  {
    id: "pkg-engagement-basic",
    category: "Engagement & Couple Packages",
    title: "Engagement Basic",
    subtitle: "Photo & video team for ring ceremony or intimate engagement event.",
    price: "৳12,000",
    coverage: "3 Hours Coverage",
    turnaround: "7 Business Days",
    deliverables: [
      "1 Professional Photographer",
      "1 Professional Cinematographer",
      "3 Hours event coverage",
      "Curated edited high-resolution gallery"
    ]
  },
  {
    id: "pkg-engagement-premium",
    category: "Engagement & Couple Packages",
    title: "Engagement Premium",
    subtitle: "Extended engagement celebration with multi-camera highlight film.",
    price: "৳22,000",
    coverage: "4 Hours Coverage",
    turnaround: "Priority Delivery",
    popular: true,
    deliverables: [
      "1 Professional Photographer",
      "2 Professional Cinematographers",
      "4 Hours full event coverage",
      "Cinematic highlight film",
      "Edited high-resolution photos"
    ]
  }
];

export const ADDITIONAL_SERVICES: AdditionalService[] = [
  {
    name: "Extra coverage (per hour)",
    price: "৳2,000–3,500",
    note: "Per hour rate for extended ceremony or reception coverage"
  },
  {
    name: "Cinematic teaser",
    price: "৳3,000–5,000",
    note: "30–60 second vertical / widescreen teaser for social media"
  },
  {
    name: "Drone coverage*",
    price: "৳5,000–10,000",
    note: "*Subject to permissions and weather conditions"
  },
  {
    name: "Premium wedding album",
    price: "৳5,000–12,000",
    note: "Custom handcrafted flush-mount layflat heirloom album"
  },
  {
    name: "Full event video edit",
    price: "৳5,000–10,000",
    note: "Full chronological documentary edit of the entire ceremony"
  },
  {
    name: "Same-day short reel",
    price: "৳3,000–5,000",
    note: "Fast-turnaround vertical reel delivered for immediate sharing"
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  ...WEDDING_PACKAGES,
  ...HOLUD_PACKAGES,
  ...ENGAGEMENT_PACKAGES
];


export const DETAILED_SERVICES: DetailedService[] = [
  {
    id: "service-wedding",
    slug: "wedding-photography",
    title: "Wedding Photography",
    shortDesc: "From intimate ceremonies to grand celebrations, capturing every candid emotion and detail.",
    fullDesc: "We provide comprehensive documentary and fine-art wedding coverage. We observe unobtrusively during vows, prep, and reception, followed by relaxed portrait sessions in golden hour light.",
    image: "/works/antu-nandita-wedding-embrace.jpg",
    startingPrice: "৳25,000",
    duration: "Up to 8 Hours Coverage",
    deliverables: [
      "Two professional cinematographic photographers",
      "600+ high-resolution individually edited images",
      "Private online gallery with download access",
      "Full personal printing and usage rights",
      "48-hour sneak peek gallery of 30 highlight photos"
    ],
    features: ["Pre-wedding timeline consultation", "Drone aerial photography where permitted", "Italian leather album design available"],
    sampleImages: [
      "/works/antu-nandita-wedding-portrait.jpg",
      "/works/bridal-runway-entrance.jpg",
      "/works/red-velvet-bridal-stage.jpg"
    ]
  },
  {
    id: "service-commercial",
    slug: "commercial-photography",
    title: "Commercial Photography",
    shortDesc: "Elevate your brand with striking commercial imagery for advertising and digital campaigns.",
    fullDesc: "Tailored visual campaigns for fashion labels, cosmetics, architectural developments, and lifestyle brands. We provide tethered monitor reviews on set for creative directors.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
    startingPrice: "৳20,000",
    duration: "Half or Full Day",
    deliverables: [
      "Lead commercial photographer and lighting technician",
      "Full commercial advertising and digital marketing license",
      "High-resolution master retouched campaign hero shots",
      "Color grading matched to brand style guides"
    ],
    features: ["Live tethered display review", "On-location studio lighting setups", "Rapid turnaround for PR"],
    sampleImages: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "service-birthday",
    slug: "birthday-photography",
    title: "Birthday & Milestone Photography",
    shortDesc: "Capturing childhood birthdays, anniversaries, and family celebrations with joy and vibrancy.",
    fullDesc: "Preserve the genuine excitement of milestone birthdays, from 1st birthdays and sweet sixteens to 50th anniversaries. We capture cake cuttings, guest candids, and family groupings.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85",
    startingPrice: "৳8,000",
    duration: "2 - 3 Hours",
    deliverables: [
      "Full coverage of venue, decor, and candid moments",
      "120+ retouched high-resolution digital files",
      "Online gallery with 1-click family downloads",
      "Delivery within 5 business days"
    ],
    features: ["Natural candid approach", "Family group portraits", "Same-week delivery"],
    sampleImages: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "service-newborn",
    slug: "newborn-photography",
    title: "Newborn Photography",
    shortDesc: "Gentle and intimate sessions capturing those precious first moments of your baby's life.",
    fullDesc: "In-home or studio newborn sessions conducted with extreme patience and gentle safety protocols. We photograph quiet sleeping moments, tiny details, and tender interactions with parents.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=85",
    startingPrice: "৳6,000",
    duration: "2 - 3 Hours (Flexible for feedings)",
    deliverables: [
      "Warm, temperature-regulated posing setup",
      "35 beautifully retouched fine-art portraits",
      "Parent and sibling inclusion at no extra fee",
      "Private proofing gallery within 48 hours"
    ],
    features: ["Baby-led pacing", "Neutral organic wraps and props", "Heirloom print options"],
    sampleImages: [
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "service-maternity",
    slug: "maternity-photography",
    title: "Maternity Photography",
    shortDesc: "Celebrate the beauty and quiet strength of motherhood during this special chapter.",
    fullDesc: "Maternity photoshoots designed to make expectant mothers feel radiant, comfortable, and elegant. Conducted in studio with directional light or outdoors in scenic nature at golden hour.",
    image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=1200&q=85",
    startingPrice: "৳7,000",
    duration: "90 Minutes",
    deliverables: [
      "Up to 3 outfit changes",
      "25 retouched high-resolution images",
      "Partner and children included",
      "Online selection gallery"
    ],
    features: ["Wardrobe guidance", "Studio & outdoor options", "Combined newborn package discount"],
    sampleImages: [
      "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "service-family",
    slug: "family-photoshoot",
    title: "Family Photoshoots",
    shortDesc: "Timeless portraits celebrating family bonds, genuine laughter, and shared warmth.",
    fullDesc: "Say goodbye to stiff, robotic family photos. We direct gentle prompts and candid games in scenic parklands, beaches, or your home to capture authentic connection.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=85",
    startingPrice: "৳8,000",
    duration: "1 - 2 Hours",
    deliverables: [
      "Full family coverage plus individual portraits of children",
      "40 high-resolution retouched digital images",
      "Full printing rights for holiday cards and wall art",
      "Turnaround within 5 business days"
    ],
    features: ["Outdoor location recommendations", "Styling palette advice", "All immediate family members included"],
    sampleImages: [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "service-outdoor",
    slug: "outdoor-photoshoot",
    title: "Outdoor Couple Photoshoot",
    shortDesc: "Romantic couple sessions in scenic natural landscapes, historic cities, and beaches.",
    fullDesc: "Whether for engagement announcements, anniversaries, or pre-wedding sessions, we explore natural light, open horizons, and architectural streets to document your connection.",
    image: "/works/rural-paddy-field-romance.jpg",
    startingPrice: "৳5,000",
    duration: "2 Hours (Sunset / Golden Hour)",
    deliverables: [
      "2 scenic locations within session area",
      "40 signature color-graded images",
      "High-resolution digital downloads",
      "Delivery within 7 business days"
    ],
    features: ["Golden hour timing", "Posing guidance for natural movement", "Print release included"],
    sampleImages: [
      "/works/rural-paddy-field-romance.jpg",
      "/works/antar-trisha-beach-embrace.png"
    ]
  },
  {
    id: "service-model",
    slug: "model-photography",
    title: "Model & Fashion Photography",
    shortDesc: "Comp cards, lookbooks, and high-fashion editorial portraits for signed talent and agencies.",
    fullDesc: "We provide high-fashion directional lighting, precise posing instruction, and skin texture-preserving retouching to craft agency-ready comp cards and brand lookbooks.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
    startingPrice: "৳10,000",
    duration: "4 - 5 Hours",
    deliverables: [
      "Up to 4 complete outfit changes",
      "30 fully retouched portfolio images",
      "Comp card layout design files ready for agency submission",
      "Tethered live monitor review on set"
    ],
    features: ["Agency standard formatting", "Studio and urban outdoor backdrops", "Direct movement coaching"],
    sampleImages: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

export interface ShowcasePhoto {
  id: string;
  image: string;
  alt: string;
  aspectRatio: "landscape" | "portrait";
  caption?: string;
  facebookUrl?: string;
}

export const PHOTOGRAPHY_SHOWCASE_PHOTOS: ShowcasePhoto[] = [
  {
    id: "photo-bridal-runway",
    image: "/works/bridal-runway-entrance.jpg",
    alt: "Grand bridal runway entrance in white lehenga with red veil bride by Moment's",
    aspectRatio: "landscape",
    caption: "Bridal Grand Entrance"
  },
  {
    id: "photo-rural-romance",
    image: "/works/rural-paddy-field-romance.jpg",
    alt: "Playful rural romance in green paddy field by coconut tree with village children by Moment's",
    aspectRatio: "landscape",
    caption: "Rural Love Story"
  },
  {
    id: "photo-purple-pearl",
    image: "/works/purple-pearl-portrait.jpg",
    alt: "Traditional portrait in deep purple velvet with pearl border dupatta by Moment's",
    aspectRatio: "landscape",
    caption: "Royal Elegance"
  },
  {
    id: "photo-red-velvet-stage",
    image: "/works/red-velvet-bridal-stage.jpg",
    alt: "Bridal stage portrait in crimson velvet lehenga with gold floral backdrop by Moment's",
    aspectRatio: "landscape",
    caption: "Bridal Elegance"
  },
  {
    id: "photo-coral-benarasi",
    image: "/works/coral-gold-benarasi-bride.jpg",
    alt: "Smiling bride in coral gold Benarasi saree with gold jewelry by Moment's",
    aspectRatio: "landscape",
    caption: "Golden Smiles"
  },
  {
    id: "photo-antu-nandita-embrace",
    image: "/works/antu-nandita-wedding-embrace.jpg",
    alt: "Antu and Nandita traditional wedding embrace by Moment's",
    aspectRatio: "portrait",
    caption: "Traditional Wedding Vows",
    facebookUrl: "https://www.facebook.com/share/19bJBAMXip/"
  },
  {
    id: "photo-antu-nandita-portrait",
    image: "/works/antu-nandita-wedding-portrait.jpg",
    alt: "Antu and Nandita intimate wedding glance by Moment's",
    aspectRatio: "portrait",
    caption: "Intimate Gaze",
    facebookUrl: "https://www.facebook.com/share/19bJBAMXip/"
  },
  {
    id: "photo-antu-nandita-solo",
    image: "/works/antu-nandita-bride-solo.jpg",
    alt: "Nandita solo bride in royal crimson attire by Moment's",
    aspectRatio: "portrait",
    caption: "Royal Bengali Bride",
    facebookUrl: "https://www.facebook.com/share/19bJBAMXip/"
  },
  {
    id: "photo-antar-trisha-embrace",
    image: "/works/antar-trisha-beach-embrace.png",
    alt: "Antar and Trisha sunset beach embrace by Moment's",
    aspectRatio: "portrait",
    caption: "Seaside Sunset Romance",
    facebookUrl: "https://www.facebook.com/share/1E95Tga73T/"
  },
  {
    id: "photo-antar-trisha-run",
    image: "/works/antar-trisha-beach-run.png",
    alt: "Antar and Trisha joyful beach run by Moment's",
    aspectRatio: "portrait",
    caption: "Joy Along the Coast",
    facebookUrl: "https://www.facebook.com/share/1E95Tga73T/"
  },
  {
    id: "photo-pink-veil-kiss",
    image: "/works/pink-veil-forehead-kiss.png",
    alt: "Tender forehead kiss with blush pink veil by Moment's",
    aspectRatio: "portrait",
    caption: "Tender Forehead Kiss",
    facebookUrl: "https://www.facebook.com/share/153nTNQ24pR/"
  },
  {
    id: "photo-pink-veil-rose",
    image: "/works/pink-veil-rose-bouquet.png",
    alt: "Smiling bride holding red roses with pink veil by Moment's",
    aspectRatio: "portrait",
    caption: "Crimson Rose Bouquet",
    facebookUrl: "https://www.facebook.com/share/153nTNQ24pR/"
  },
  {
    id: "photo-pink-veil-hands",
    image: "/works/pink-veil-holding-hands.jpg",
    alt: "Couple walking hand in hand along shaded lane by Moment's",
    aspectRatio: "portrait",
    caption: "Hand in Hand Walk",
    facebookUrl: "https://www.facebook.com/share/153nTNQ24pR/"
  },
  {
    id: "photo-miton-moni-portrait",
    image: "/works/miton-moni-portrait.png",
    alt: "Miton and Moni outdoor portrait by Moment's",
    aspectRatio: "portrait",
    caption: "Timeless Connection"
  },
  {
    id: "photo-miton-moni-tea",
    image: "/works/miton-moni-tea-garden.jpg",
    alt: "Romantic tea garden photoshoot by Moment's",
    aspectRatio: "portrait",
    caption: "Tea Garden Serenity"
  }
];

export const CLIENT_ALBUMS: ClientAlbum[] = [
  {
    id: "album-antu-nandita",
    title: "Antu X Nandita",
    subtitle: "Wedding Ceremony",
    date: "2025",
    location: "Chattogram, Bangladesh",
    coverImage: "/works/antu-nandita-wedding-embrace.jpg",
    photoCount: 3,
    category: "Wedding Ceremony",
    facebookUrl: "https://www.facebook.com/share/19bJBAMXip/",
    description: "A breathtaking traditional Bengali wedding celebration capturing tender emotional glances, royal crimson attire, and timeless vows.",
    images: [
      "/works/antu-nandita-wedding-embrace.jpg",
      "/works/antu-nandita-wedding-portrait.jpg",
      "/works/antu-nandita-bride-solo.jpg"
    ]
  },
  {
    id: "album-antar-trisha",
    title: "Antar X Trisha",
    subtitle: "Pre-Wedding at the Beach",
    date: "2025",
    location: "Chattogram Beach, Bangladesh",
    coverImage: "/works/antar-trisha-beach-embrace.png",
    photoCount: 4,
    category: "Pre-Wedding",
    facebookUrl: "https://www.facebook.com/share/1E95Tga73T/",
    description: "A breathtaking golden-hour pre-wedding session capturing raw romance, gentle ocean breezes, and heartfelt candid laughter along the coastline.",
    images: [
      "/works/antar-trisha-beach-embrace.png",
      "/works/antar-trisha-beach-run.png",
      "/works/antar-trisha-beach-portrait.png",
      "/works/antar-trisha-beach-walk.png"
    ]
  },
  {
    id: "album-blush-romance",
    title: "Blush Pink Romance",
    subtitle: "Wedding Portraiture Session",
    date: "2025",
    location: "Chattogram, Bangladesh",
    coverImage: "/works/pink-veil-forehead-kiss.png",
    photoCount: 3,
    category: "Wedding Ceremony",
    facebookUrl: "https://www.facebook.com/share/153nTNQ24pR/",
    description: "An ethereal and tender wedding editorial featuring delicate blush pink bridal veils, soft floral arrangements, and pure emotional intimacy.",
    images: [
      "/works/pink-veil-forehead-kiss.png",
      "/works/pink-veil-rose-bouquet.png",
      "/works/pink-veil-holding-hands.jpg"
    ]
  },
  {
    id: "album-miton-moni",
    title: "Miton X Moni",
    subtitle: "Pre-Wedding & Romance Stories",
    date: "2025",
    location: "Tea Garden & Bridge, Chattogram",
    coverImage: "/works/miton-moni-portrait.png",
    photoCount: 3,
    category: "Pre-Wedding",
    facebookUrl: "https://www.facebook.com/Moments7775",
    description: "Lush green tea gardens and serene bridge walks frame this timeless outdoor pre-wedding romantic journey.",
    images: [
      "/works/miton-moni-portrait.png",
      "/works/miton-moni-bridge.png",
      "/works/miton-moni-tea-garden.jpg"
    ]
  }
];

export const FILMS_DATA: FilmWork[] = [
  {
    id: "film-antar-trisha",
    title: "Antar X Trisha Pre-Wedding",
    coupleOrClient: "Antar & Trisha · Pre-Wedding Cinema",
    duration: "Shahariar Siddiq & Rafi",
    location: "Chattogram, Bangladesh",
    thumbnail: "/works/antar-trisha.jpg",
    videoUrl: "https://www.facebook.com/share/v/1DtdhF6dEJ/",
    description: "Cinematic pre-wedding film capturing the romantic journey of Antar and Trisha. Cinematography and process by Shahariar Siddiq, drone cinematography by Rafi, Copyright Moment's."
  },
  {
    id: "film-sakib-juhi",
    title: "Sakib X Juhi Wedding Ceremony",
    coupleOrClient: "Sakib & Juhi · Wedding Highlights",
    duration: "Shahariar Siddiq",
    location: "Chattogram, Bangladesh",
    thumbnail: "/works/sakib-juhi.jpg",
    videoUrl: "https://www.facebook.com/share/v/195Ks46KbJ/",
    description: "Official royal wedding ceremony film of Sakib and Juhi. Heartfelt vows, timeless bridal elegance, and cinematic moments captured by Shahariar Siddiq for Moment's."
  },
  {
    id: "film-javed-afrin",
    title: "জাবেদ ও আফরিনের আকদ (Javed X Afrin)",
    coupleOrClient: "Javed & Afrin · আকদ অনুষ্ঠান",
    duration: "Shahariar Siddiq",
    location: "Chattogram, Bangladesh",
    thumbnail: "/works/javed-afrin.jpg",
    videoUrl: "https://www.facebook.com/share/v/19nFbqPLjn/",
    description: "Sacred Akdh ceremony celebration of Javed and Afrin. Traditional Islamic nuptials, heartfelt blessings, and cinematic moments captured by Shahariar Siddiq for Moment's."
  },
  {
    id: "film-emotional-bidai",
    title: "Most Emotional Bidai — প্রগতি নার্সিং কলেজ",
    coupleOrClient: "294K+ Views · 15K Reactions",
    duration: "Documentary Film",
    location: "Chattogram, Bangladesh",
    thumbnail: "/works/emotional-bidai.jpg",
    videoUrl: "https://www.facebook.com/share/v/1LsRyZSUQW/",
    description: "Viral emotional farewell (বিদায়) ceremony documentation at Progati Nursing College, Chattogram. Over 294,000 views and 15,000 reactions on Facebook. Production by Moment's."
  },
  {
    id: "film-commercial-smart-polymer",
    title: "Smart Polymer Industries Ltd.",
    coupleOrClient: "Smart Group · Commercial Film",
    duration: "Shahariar Siddiq",
    location: "Commercial Cinema",
    thumbnail: "/works/smart-polymer.jpg",
    videoUrl: "https://www.facebook.com/share/v/1CZ2WxGLEK/",
    description: "Official industrial commercial cinema production for Smart Polymer Industries Ltd. (Smart Group). Cinematography by Shahariar Siddiq, Copyright Moment's."
  },
  {
    id: "film-samrat-tahia",
    title: "Samrat X Tahia Wedding Ceremony",
    coupleOrClient: "Samrat & Tahia",
    duration: "Wedding Ceremony",
    location: "Chattogram, Bangladesh",
    thumbnail: "/works/samrat-tahia.jpg",
    videoUrl: "https://www.facebook.com/share/v/1EP8DgQEsu/",
    description: "Cinematic royal wedding ceremony highlight of Samrat & Tahia, documenting emotional vows, royal bridal elegance, and grand reception cinema."
  },
  {
    id: "film-samrat-holud",
    title: "Samrat On Fire — Gaye Holud",
    coupleOrClient: "Samrat · Holud Night",
    duration: "Gaye Holud Film",
    location: "Chattogram, Bangladesh",
    thumbnail: "/works/samrat-holud.jpg",
    videoUrl: "https://www.facebook.com/share/v/1DwaCvLbEP/",
    description: "High-energy Gaye Holud celebration with traditional dances, vibrant yellow tones, and energetic celebration cinema."
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-shahariar-siddiq",
    name: "SHAHARIAR SIDDIQ",
    role: "Founder & Director",
    specialty: "Cinematography, Wedding Direction & Master Editing",
    bio: "Founder of Moment's Photography & Cinematography. Passionately pursuing the art of capturing moments that tell stories and evoke emotions since 2019.",
    image: "/al-shahriar-babu.png",
    gear: "Cinema Production Rig",
    experience: "Since 2019"
  },
  {
    id: "team-anik-das",
    name: "Anik Das",
    role: "Chief Cinematographer",
    image: "/team/anik-das.jpg"
  },
  {
    id: "team-belal-mahmud",
    name: "Belal Mahmud",
    role: "Chief Photographer",
    image: "/team/belal-mahmud.jpg"
  },
  {
    id: "team-sk-abdullah",
    name: "SK ABDULLAH",
    role: "Cinematographer",
    image: "/team/sk-abdullah.jpg"
  },
  {
    id: "team-mahmudul-hasan-toha",
    name: "Mahmudul Hasan Toha",
    role: "Assistant Cinematographer",
    image: "/team/mahmudul-hasan-toha.jpg"
  },
  {
    id: "team-akibul-islam-abir",
    name: "Akibul Islam Abir",
    role: "Office Manager & Photographer",
    image: "/team/akibul-islam-abir.jpg"
  }
];

export const PHOTOGRAPHY_WORKS: PhotoWork[] = [
  {
    id: "work-antu-nandita-embrace",
    title: "Antu X Nandita — Royal Wedding Embrace",
    category: "weddings",
    categoryLabel: "Wedding Ceremony",
    image: "/works/antu-nandita-wedding-embrace.jpg",
    alt: "Antu and Nandita royal wedding ceremony embrace with traditional mukut and crimson lehenga by Moment's",
    aspectRatio: "portrait",
    client: "Antu & Nandita",
    location: "Chattogram, Bangladesh",
    year: "2025",
    story: "A heartfelt embrace highlighting the bride leaning gently against the groom in ivory and crimson royal Bengali wedding attire.",
    featured: true,
    facebookUrl: "https://www.facebook.com/share/19bJBAMXip/"
  },
  {
    id: "work-antu-nandita-portrait",
    title: "Antu X Nandita — Gaze of Forever",
    category: "weddings",
    categoryLabel: "Wedding Ceremony",
    image: "/works/antu-nandita-wedding-portrait.jpg",
    alt: "Antu and Nandita intimate wedding glance portrait with traditional jewellery and mukut",
    aspectRatio: "portrait",
    client: "Antu & Nandita",
    location: "Chattogram, Bangladesh",
    year: "2025",
    story: "Intimate close-up documenting the loving, tender glance shared between newlyweds during their traditional ceremony.",
    featured: true,
    facebookUrl: "https://www.facebook.com/share/19bJBAMXip/"
  },
  {
    id: "work-antu-nandita-solo",
    title: "Nandita — The Royal Bengali Bride",
    category: "weddings",
    categoryLabel: "Bridal Portrait",
    image: "/works/antu-nandita-bride-solo.jpg",
    alt: "Nandita solo bridal portrait in crimson velvet lehenga holding peacock feather by Moment's",
    aspectRatio: "portrait",
    client: "Nandita",
    location: "Chattogram, Bangladesh",
    year: "2025",
    story: "Magnificent bridal solo portrait featuring rich crimson velvet, traditional gold jewelry, and a peacock feather detail.",
    featured: true,
    facebookUrl: "https://www.facebook.com/share/19bJBAMXip/"
  },
  {
    id: "work-pink-veil-forehead-kiss",
    title: "Tender Forehead Kiss — Wedding Portrait",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/works/pink-veil-forehead-kiss.png",
    alt: "Groom tenderly kissing bride on forehead with pink veil and gold jewelry by Moment's",
    aspectRatio: "portrait",
    client: "Wedding Session",
    location: "Chattogram, Bangladesh",
    year: "2025",
    story: "An emotionally resonant portrait capturing the gentle intimacy and devotion between newlyweds amidst soft woodland light.",
    featured: true,
    facebookUrl: "https://www.facebook.com/share/153nTNQ24pR/"
  },
  {
    id: "work-pink-veil-rose-bouquet",
    title: "Blush Veil & Red Rose Bouquet",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/works/pink-veil-rose-bouquet.png",
    alt: "Smiling bride holding red roses with pink veil and groom in background by Moment's",
    aspectRatio: "portrait",
    client: "Wedding Session",
    location: "Chattogram, Bangladesh",
    year: "2025",
    story: "Radiant bride holding a vibrant crimson rose bouquet, with soft flowing pink veil and groom smiling in the soft-focus background.",
    featured: true,
    facebookUrl: "https://www.facebook.com/share/153nTNQ24pR/"
  },
  {
    id: "work-pink-veil-holding-hands",
    title: "Side by Side in Harmony",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "/works/pink-veil-holding-hands.jpg",
    alt: "Couple holding hands along shaded lane in pink saree and white punjabi by Moment's",
    aspectRatio: "portrait",
    client: "Wedding Session",
    location: "Chattogram, Bangladesh",
    year: "2025",
    story: "Full-length portrait documenting serene companionship, traditional elegance in blush pink and ivory white.",
    featured: true,
    facebookUrl: "https://www.facebook.com/share/153nTNQ24pR/"
  },
  {
    id: "work-antar-trisha-beach-embrace",
    title: "Antar X Trisha — Eternal Embrace",
    category: "weddings",
    categoryLabel: "Pre-Wedding",
    image: "/works/antar-trisha-beach-embrace.png",
    alt: "Antar and Trisha romantic beach embrace photoshoot by Moment's",
    aspectRatio: "portrait",
    client: "Antar & Trisha",
    location: "Chattogram Sea Beach, Bangladesh",
    year: "2025",
    story: "Tender pre-wedding moment captured on the sea beach. Soft natural overcast light, vibrant red silk gown, and authentic intimacy.",
    featured: true,
    facebookUrl: "https://www.facebook.com/share/1E95Tga73T/"
  },
  {
    id: "work-antar-trisha-beach-run",
    title: "Antar X Trisha — Seaside Chase",
    category: "weddings",
    categoryLabel: "Pre-Wedding",
    image: "/works/antar-trisha-beach-run.png",
    alt: "Antar running after Trisha on the beach in red flowing dress",
    aspectRatio: "portrait",
    client: "Antar & Trisha",
    location: "Chattogram Sea Beach, Bangladesh",
    year: "2025",
    story: "Playful candid laughter along the shores as the bride runs gracefully in a sweeping crimson train with the groom pursuing.",
    featured: true,
    facebookUrl: "https://www.facebook.com/share/1E95Tga73T/"
  },
  {
    id: "work-antar-trisha-beach-portrait",
    title: "Antar X Trisha — Radiant Joy",
    category: "weddings",
    categoryLabel: "Pre-Wedding",
    image: "/works/antar-trisha-beach-portrait.png",
    alt: "Close-up portrait of Trisha smiling radiantly with Antar and flower bouquet",
    aspectRatio: "portrait",
    client: "Antar & Trisha",
    location: "Chattogram Sea Beach, Bangladesh",
    year: "2025",
    story: "A heartfelt close-up portrait radiating pure joy, natural smiles, and floral accents against the tranquil ocean breeze.",
    featured: true,
    facebookUrl: "https://www.facebook.com/share/1E95Tga73T/"
  },
  {
    id: "work-antar-trisha-beach-walk",
    title: "Antar X Trisha — Coastal Stroll",
    category: "weddings",
    categoryLabel: "Pre-Wedding",
    image: "/works/antar-trisha-beach-walk.png",
    alt: "Antar and Trisha walking across expansive sandy beach",
    aspectRatio: "landscape",
    client: "Antar & Trisha",
    location: "Chattogram Sea Beach, Bangladesh",
    year: "2025",
    story: "Wide cinematic perspective capturing the vastness of the shoreline and the couple strolling side-by-side in harmony.",
    featured: true,
    facebookUrl: "https://www.facebook.com/share/1E95Tga73T/"
  },
  {
    id: "work-sakib-juhi",
    title: "Sakib X Juhi — Wedding Ceremony",
    category: "weddings",
    categoryLabel: "Wedding Ceremony",
    image: "/works/sakib-juhi.jpg",
    alt: "Sakib and Juhi royal wedding ceremony photography by Moment's",
    aspectRatio: "portrait",
    client: "Sakib & Juhi",
    location: "Chattogram, Bangladesh",
    year: "2025",
    story: "Royal wedding ceremony moments documenting heartfelt family vows, exquisite bridal details, and celebration grandeur.",
    cameraSettings: {
      camera: "Cinema Rig",
      lens: "85mm f/1.4",
      aperture: "f/1.8",
      shutter: "1/500s",
      iso: "200"
    },
    featured: true
  },
  {
    id: "work-javed-afrin",
    title: "জাবেদ ও আফরিনের আকদ (Javed X Afrin)",
    category: "weddings",
    categoryLabel: "Akdh Ceremony",
    image: "/works/javed-afrin.jpg",
    alt: "Javed and Afrin Akdh ceremony celebration by Moment's",
    aspectRatio: "portrait",
    client: "Javed & Afrin",
    location: "Chattogram, Bangladesh",
    year: "2025",
    story: "Sacred Akdh wedding ceremony capturing candid joy, traditional Islamic vows, and heartfelt family blessings.",
    cameraSettings: {
      camera: "Cinema Rig",
      lens: "50mm f/1.2",
      aperture: "f/1.4",
      shutter: "1/640s",
      iso: "160"
    },
    featured: true
  },
  {
    id: "work-emotional-bidai",
    title: "Most Emotional Bidai — প্রগতি নার্সিং কলেজ",
    category: "events",
    categoryLabel: "Documentary Film",
    image: "/works/emotional-bidai.jpg",
    alt: "Most Emotional Bidai farewell at Progati Nursing College Chattogram",
    aspectRatio: "portrait",
    client: "Progati Nursing College · 294K+ Views",
    location: "Chattogram, Bangladesh",
    year: "2025",
    story: "Viral emotional farewell ceremony capturing heartfelt tears, embraces, and unforgettable milestone memories with over 294,000 views on Facebook.",
    cameraSettings: {
      camera: "Cinema Rig",
      lens: "35mm f/1.4",
      aperture: "f/2.0",
      shutter: "1/400s",
      iso: "400"
    },
    featured: true
  },
  {
    id: "work-samrat-holud",
    title: "Samrat On Fire — Gaye Holud",
    category: "weddings",
    categoryLabel: "Gaye Holud",
    image: "/works/samrat-holud.jpg",
    alt: "Samrat Gaye Holud celebration by Moment's",
    aspectRatio: "portrait",
    client: "Samrat",
    location: "Chattogram, Bangladesh",
    year: "2025",
    story: "Electrifying Gaye Holud celebration filled with traditional yellow accents, heartfelt dances, and dynamic celebrations.",
    cameraSettings: {
      camera: "Cinema Rig",
      lens: "35mm f/1.4",
      aperture: "f/1.8",
      shutter: "1/500s",
      iso: "400"
    },
    featured: true
  },
  {
    id: "work-samrat-tahia",
    title: "Samrat X Tahia — Wedding Ceremony",
    category: "weddings",
    categoryLabel: "Wedding Ceremony",
    image: "/works/samrat-tahia.jpg",
    alt: "Samrat and Tahia royal wedding ceremony by Moment's",
    aspectRatio: "portrait",
    client: "Samrat & Tahia",
    location: "Chattogram, Bangladesh",
    year: "2025",
    story: "A regal wedding ceremony documenting emotional family traditions, royal bridal attire, and timeless cinematic elegance.",
    cameraSettings: {
      camera: "Cinema Rig",
      lens: "85mm f/1.4",
      aperture: "f/1.8",
      shutter: "1/500s",
      iso: "200"
    },
    featured: true
  },
  {
    id: "work-miton-moni-portrait",
    title: "Miton X Moni — Sunset Embrace",
    category: "weddings",
    categoryLabel: "Pre-Wedding",
    image: "/works/miton-moni-portrait.png",
    alt: "Intimate close-up portrait of Miton and Moni with golden sunset backlight",
    aspectRatio: "portrait",
    client: "Miton & Moni",
    location: "Banskhali, Chattogram",
    year: "2025",
    story: "Tender sunset embrace highlighting soft natural flare, authentic emotion, and timeless color grading.",
    cameraSettings: {
      camera: "Sony A7 IV",
      lens: "50mm f/1.2 GM",
      aperture: "f/1.4",
      shutter: "1/1600s",
      iso: "100"
    },
    featured: true
  },
  {
    id: "work-miton-moni-tea-garden",
    title: "Miton X Moni — Tea Garden Romance",
    category: "weddings",
    categoryLabel: "Pre-Wedding",
    image: "/works/miton-moni-tea-garden.jpg",
    alt: "Miton and Moni walking through lush tea garden estate",
    aspectRatio: "landscape",
    client: "Miton & Moni",
    location: "Tea Gardens, Bangladesh",
    year: "2025",
    story: "A serene romantic stroll captured amidst lush emerald green tea gardens and soft morning light.",
    cameraSettings: {
      camera: "Sony A7 IV",
      lens: "85mm f/1.4 GM",
      aperture: "f/1.8",
      shutter: "1/1000s",
      iso: "100"
    },
    featured: true
  },
  {
    id: "work-miton-moni-bridge",
    title: "Miton X Moni — Hand in Hand on Bridge",
    category: "weddings",
    categoryLabel: "Pre-Wedding",
    image: "/works/miton-moni-bridge.png",
    alt: "Miton and Moni walking hand in hand across red-railed river bridge",
    aspectRatio: "landscape",
    client: "Miton & Moni",
    location: "Chattogram, Bangladesh",
    year: "2025",
    story: "Cinematic wide perspective capturing the couple hand-in-hand against the expansive bridge and open horizon.",
    cameraSettings: {
      camera: "Sony A7 IV",
      lens: "35mm f/1.4 GM",
      aperture: "f/2.8",
      shutter: "1/800s",
      iso: "100"
    },
    featured: true
  },
  {
    id: "work-commercial-smart-polymer",
    title: "Smart Polymer Industries Ltd.",
    category: "commercial",
    categoryLabel: "Commercial Film",
    image: "/works/smart-polymer.jpg",
    alt: "Smart Polymer Industries Ltd. commercial production by Moment's",
    aspectRatio: "portrait",
    client: "Smart Group",
    location: "Commercial Production",
    year: "2025",
    story: "Official industrial commercial cinema production for Smart Polymer Industries Ltd. (Smart Group). Cinematographer: Shahariar Siddiq. Copyright Moment's.",
    cameraSettings: {
      camera: "Cinema Rig",
      lens: "Cinema Primes",
      aperture: "f/2.0",
      shutter: "1/50s",
      iso: "800"
    },
    featured: true
  },
  {
    id: "wedding-lake-como",
    title: "Lake Como Villa Ceremony",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    alt: "Wedding couple at Lake Como villa during sunset",
    aspectRatio: "portrait",
    client: "Julian & Elena",
    location: "Lake Como, Italy",
    year: "2025",
    story: "Outdoor ceremony and sunset portraits along the lake shore.",
    cameraSettings: {
      camera: "Leica SL2",
      lens: "50mm f/1.4",
      aperture: "f/1.6",
      shutter: "1/800s",
      iso: "100"
    },
    featured: true
  },
  {
    id: "model-editorial-vogue",
    title: "Studio Fashion Series",
    category: "editorial",
    categoryLabel: "Model & Fashion",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
    alt: "Fashion model studio portrait with directional lighting",
    aspectRatio: "portrait",
    client: "Aura Models",
    location: "Paris, France",
    year: "2025",
    story: "Agency portfolio and comp card updates using directional lighting.",
    cameraSettings: {
      camera: "Hasselblad H6D",
      lens: "100mm f/2.2",
      aperture: "f/2.8",
      shutter: "1/250s",
      iso: "64"
    },
    featured: true
  },
  {
    id: "wedding-tuscan-sunset",
    title: "Tuscany Vineyard Wedding",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
    alt: "Wedding couple in Tuscan vineyard",
    aspectRatio: "landscape",
    client: "Marco & Sophia",
    location: "Florence, Italy",
    year: "2025",
    story: "Candid moments under golden hour light in the olive groves.",
    cameraSettings: {
      camera: "Sony A1",
      lens: "35mm f/1.4 GM",
      aperture: "f/1.8",
      shutter: "1/1600s",
      iso: "125"
    },
    featured: true
  },
  {
    id: "model-runway-paris",
    title: "Autumn Lookbook Shoot",
    category: "editorial",
    categoryLabel: "Model & Fashion",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85",
    alt: "Fashion model in designer coat",
    aspectRatio: "portrait",
    client: "Maison Label",
    location: "Milan, Italy",
    year: "2024",
    story: "Street style and movement tests for seasonal collection.",
    cameraSettings: {
      camera: "Canon R5",
      lens: "85mm f/1.2L",
      aperture: "f/1.4",
      shutter: "1/1000s",
      iso: "200"
    },
    featured: true
  },
  {
    id: "portrait-artisan-soul",
    title: "Natural Light Portrait",
    category: "portraits",
    categoryLabel: "Portrait",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=85",
    alt: "Natural light headshot portrait",
    aspectRatio: "square",
    client: "Editorial Series",
    location: "London, UK",
    year: "2024",
    story: "Window light portrait session focusing on clean tones.",
    cameraSettings: {
      camera: "Leica M11",
      lens: "50mm f/0.95",
      aperture: "f/1.2",
      shutter: "1/500s",
      iso: "160"
    },
    featured: false
  },
  {
    id: "commercial-luxury-perfume",
    title: "Beauty & Cosmetic Campaign",
    category: "commercial",
    categoryLabel: "Commercial",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=85",
    alt: "Close-up beauty and makeup commercial photography",
    aspectRatio: "landscape",
    client: "L'Etoile Cosmetics",
    location: "New York, USA",
    year: "2025",
    story: "Commercial product and model campaign for digital and print media.",
    cameraSettings: {
      camera: "Phase One IQ4",
      lens: "120mm Macro",
      aperture: "f/8.0",
      shutter: "1/200s",
      iso: "50"
    },
    featured: true
  },
  {
    id: "service-family-sample",
    title: "Warm Family Afternoon",
    category: "family",
    categoryLabel: "Family",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=85",
    alt: "Family walking together in natural sunlight",
    aspectRatio: "landscape",
    client: "The Harrison Family",
    location: "Hudson Valley, NY",
    year: "2025",
    story: "Candid afternoon session with children and grandparents.",
    cameraSettings: {
      camera: "Sony A7R V",
      lens: "35mm f/1.4 GM",
      aperture: "f/2.0",
      shutter: "1/1000s",
      iso: "100"
    },
    featured: true
  },
  {
    id: "service-maternity-sample",
    title: "Golden Hour Motherhood",
    category: "maternity",
    categoryLabel: "Maternity",
    image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=1600&q=85",
    alt: "Maternity portrait at sunset in meadow",
    aspectRatio: "portrait",
    client: "Rachel S.",
    location: "Hamptons, NY",
    year: "2025",
    story: "Outdoor sunset session celebrating expectant motherhood.",
    cameraSettings: {
      camera: "Canon R5",
      lens: "85mm f/1.2L",
      aperture: "f/1.4",
      shutter: "1/1250s",
      iso: "100"
    },
    featured: true
  },
  {
    id: "event-gala-night",
    title: "Opera Gala Reception",
    category: "events",
    categoryLabel: "Events",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85",
    alt: "Evening event reception photography",
    aspectRatio: "landscape",
    client: "Arts Society",
    location: "Vienna, Austria",
    year: "2024",
    story: "Documenting guest arrivals, speeches, and dinner reception.",
    cameraSettings: {
      camera: "Sony A7R V",
      lens: "24-70mm f/2.8 GM II",
      aperture: "f/2.8",
      shutter: "1/320s",
      iso: "1600"
    },
    featured: false
  },
  {
    id: "wedding-sunset-kiss",
    title: "Santorini Cliffside Elopement",
    category: "weddings",
    categoryLabel: "Wedding",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
    alt: "Elopement portrait on cliff overlooking the ocean",
    aspectRatio: "portrait",
    client: "Liam & Scarlett",
    location: "Santorini, Greece",
    year: "2025",
    story: "Private two-person ceremony and portrait session during sunset.",
    cameraSettings: {
      camera: "Canon R5",
      lens: "50mm f/1.2L",
      aperture: "f/1.4",
      shutter: "1/2000s",
      iso: "100"
    },
    featured: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Moment's captured our wedding in Italy flawlessly. They were calm, organized, and the photos look natural rather than posed.",
    author: "Elena & Julian",
    role: "Wedding Clients",
    event: "Lake Como Wedding",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "test-2",
    quote: "We hired Moment's for our agency new faces shoot. Clean lighting, great direction with new models, and fast turnaround on the edits.",
    author: "Camille D.",
    role: "Agency Director",
    event: "Model Portfolio Session",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "test-3",
    quote: "Professional from start to finish. The team made our family photoshoot relaxed and the printed albums look incredible.",
    author: "Marcus S.",
    role: "Family Client",
    event: "Family & Portrait Session",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5
  }
];

export const COMPANY_INFO = {
  name: "Moment's",
  legalName: "Moment's Photography & Cinematography",
  tagline: "Weddings • Stories • Lifetime",
  description: "Moment's Photography & Cinematography captures weddings, Gaye Holud celebrations, and engagement stories with timeless honesty and cinema-grade craft.",
  headquarters: "Laxmi Square, Ground Floor, #Shop no-92, Banskhali, Bangladesh, 4390",
  email: "alshahriar.7775@gmail.com",
  phone: "01643-666825",
  whatsappNumber: "+8801643666825",
  whatsappUrl: "https://wa.me/8801643666825?text=Hello%20Moment's%20Photography,%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20booking.",
  facebookUrl: "https://www.facebook.com/Moments7775",
  stats: [
    { label: "Weddings Documented", value: "350+" },
    { label: "Model & Editorial Shoots", value: "280+" },
    { label: "Years Experience", value: "10+" },
    { label: "Client Rating", value: "5.0 ★" }
  ]
};
