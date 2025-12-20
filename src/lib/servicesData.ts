import { 
  Clapperboard, 
  MonitorPlay, 
  Crown, 
  Zap, 
  Play, 
  Aperture, 
  Mic, 
  Users, 
  Handshake, 
  Palette 
} from "lucide-react";
import reel1 from "@/assets/gallery/reel1.jpg";
import reel2 from "@/assets/gallery/reel2.jpg";
import reel3 from "@/assets/gallery/reel3.jpg";
import reel4 from "@/assets/gallery/reel4.jpg";
import reel5 from "@/assets/gallery/reel5.jpg";
import reel6 from "@/assets/gallery/reel6.jpg";

export interface ServiceData {
  id: string;
  title: string;
  tag: string;
  description: string;
  longDescription: string;
  heroImage: string;
  sampleWorks: string[];
  features: string[];
  pricing: {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
  }[];
  iconComponent: React.ComponentType;
  route: string;
}

// Sample works using gallery images
const galleryImages = [
  reel1,
  reel2,
  reel3,
  reel4,
  reel5,
  reel6,
];

export const servicesData: ServiceData[] = [
  {
    id: "media-prod",
    title: "Media Production",
    tag: "Full Spectrum",
    description: "Comprehensive production ecosystems. We handle the entire lifecycle from storyboard conceptualization, logistics, and principal photography to high-end VFX, color grading, and final broadcast mastering.",
    longDescription: "Our Media Production service is a complete end-to-end solution for all your content needs. We combine creative vision with technical expertise to deliver broadcast-quality productions. From initial concept development through post-production, our team ensures every frame meets the highest standards. We specialize in narrative storytelling, commercial content, and documentary-style productions that captivate audiences and drive engagement.",
    heroImage: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2560&auto=format&fit=crop",
    sampleWorks: galleryImages,
    features: [
      "End-to-end production management",
      "Professional cinematography",
      "Advanced VFX and post-production",
      "Color grading and mastering",
      "Multi-camera setups",
      "Professional audio engineering",
      "Script development and storyboarding",
      "Location scouting and management",
      "Equipment rental coordination",
      "Final delivery in multiple formats"
    ],
    pricing: [
      {
        name: "Starter",
        price: "25,000",
        description: "Basic Production",
        features: [
          "Half-day shoot (4 hours)",
          "Single camera setup",
          "Basic editing",
          "1080p delivery",
          "2 rounds of revisions",
          "Standard color grading"
        ]
      },
      {
        name: "Professional",
        price: "75,000",
        description: "Full Production",
        features: [
          "Full-day shoot (8 hours)",
          "Multi-camera setup",
          "Advanced editing & VFX",
          "4K delivery",
          "Unlimited revisions",
          "Professional color grading",
          "Audio mixing & mastering",
          "Motion graphics",
          "Script development"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: "150,000",
        description: "Premium Production",
        features: [
          "Multi-day production",
          "Cinema camera package",
          "Full VFX pipeline",
          "8K delivery available",
          "Dedicated project manager",
          "Premium color grading",
          "Dolby audio mastering",
          "Custom motion graphics",
          "Full script development",
          "Location scouting included"
        ]
      }
    ],
    iconComponent: Clapperboard,
    route: "/services/media-production"
  },
  {
    id: "youtube",
    title: "YouTube Architecture",
    tag: "Growth Engine",
    description: "Data-driven long-form content strategies. We engineer high-retention videos with optimized pacing, click-through-rate focused thumbnails, and SEO to trigger algorithmic discovery and sustainable channel dominance.",
    longDescription: "YouTube Architecture is our specialized service designed to build and grow your YouTube channel systematically. We analyze your niche, competitor landscape, and audience behavior to create content that performs. Our approach combines strategic planning, SEO optimization, and data-driven content creation to maximize watch time, engagement, and subscriber growth. We handle everything from content strategy to thumbnail design and metadata optimization.",
    heroImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2000&auto=format&fit=crop",
    sampleWorks: galleryImages,
    features: [
      "Channel strategy development",
      "SEO-optimized content creation",
      "Thumbnail design & A/B testing",
      "Video optimization for algorithm",
      "Analytics & performance tracking",
      "Content calendar planning",
      "Title & description optimization",
      "Engagement strategy development",
      "Community management",
      "Monetization optimization"
    ],
    pricing: [
      {
        name: "Growth",
        price: "15,000",
        description: "Monthly Package",
        features: [
          "4 videos per month",
          "SEO optimization",
          "Thumbnail design",
          "Title & description",
          "Basic analytics report",
          "Content calendar"
        ]
      },
      {
        name: "Scale",
        price: "35,000",
        description: "Monthly Package",
        features: [
          "8 videos per month",
          "Full SEO optimization",
          "A/B tested thumbnails",
          "Advanced analytics",
          "Content strategy",
          "Community management",
          "Engagement optimization"
        ],
        popular: true
      },
      {
        name: "Dominate",
        price: "65,000",
        description: "Monthly Package",
        features: [
          "12+ videos per month",
          "Complete channel management",
          "Premium thumbnail designs",
          "Deep analytics & insights",
          "Strategic content planning",
          "Full community management",
          "Monetization optimization",
          "Dedicated account manager"
        ]
      }
    ],
    iconComponent: MonitorPlay,
    route: "/services/youtube-architecture"
  },
  {
    id: "wedding",
    title: "Wedding Cinema",
    tag: "Documentary",
    description: "Transforming your special day into a cinematic masterpiece. We utilize non-intrusive storytelling techniques to capture raw, candid emotions, delivering a timeless narrative of your union.",
    longDescription: "Wedding Cinema is our artisanal approach to wedding videography. We believe your wedding day deserves more than just documentation—it deserves cinematic storytelling. Our team captures the authentic moments, emotions, and details that make your day unique. Using documentary-style techniques, we create films that you'll treasure forever, blending beautiful cinematography with genuine emotion to tell your love story.",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop",
    sampleWorks: galleryImages,
    features: [
      "Cinematic wedding films",
      "Multiple camera angles",
      "Drone footage included",
      "Same-day highlight reel",
      "Full ceremony & reception coverage",
      "Professional color grading",
      "Custom soundtrack options",
      "Photo & video package available",
      "Pre-wedding consultation",
      "Multiple delivery formats"
    ],
    pricing: [
      {
        name: "Essential",
        price: "45,000",
        description: "Basic Package",
        features: [
          "6 hours coverage",
          "2 videographers",
          "Highlight reel (3-5 min)",
          "Full ceremony video",
          "1080p delivery",
          "Basic color grading"
        ]
      },
      {
        name: "Premium",
        price: "85,000",
        description: "Complete Package",
        features: [
          "Full day coverage (12 hours)",
          "3 videographers",
          "Cinematic highlight reel (5-7 min)",
          "Full ceremony & reception",
          "Drone footage",
          "4K delivery",
          "Professional color grading",
          "Same-day highlight reel",
          "Custom soundtrack"
        ],
        popular: true
      },
      {
        name: "Luxury",
        price: "150,000",
        description: "Ultimate Package",
        features: [
          "Full day + pre-wedding",
          "4 videographers",
          "Multiple cinematic films",
          "Complete coverage",
          "Premium drone footage",
          "8K delivery available",
          "Premium color grading",
          "Multiple same-day reels",
          "Custom soundtracks",
          "Photo + video package",
          "Dedicated coordinator"
        ]
      }
    ],
    iconComponent: Crown,
    route: "/services/wedding-cinema"
  },
  {
    id: "reels",
    title: "Instant Viral Reels",
    tag: "Real-Time",
    description: "The speed of culture. We shoot, edit, and deliver high-impact short-form content within hours of the event, ensuring you capitalize on trending moments and maximize engagement while the hype is alive.",
    longDescription: "In today's fast-paced social media landscape, timing is everything. Our Instant Viral Reels service delivers high-quality, engaging short-form content within hours of your event. We capture the energy, edit on-the-go, and deliver content that's ready to post immediately. Perfect for events, launches, and time-sensitive moments where you need to strike while the iron is hot.",
    heroImage: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2000&auto=format&fit=crop",
    sampleWorks: galleryImages,
    features: [
      "Same-day delivery",
      "Trending audio integration",
      "Multiple format exports",
      "On-site editing available",
      "Social media optimization",
      "Hashtag research & strategy",
      "Engagement-optimized cuts",
      "Multiple reel variations",
      "Quick turnaround guarantee",
      "Platform-specific formatting"
    ],
    pricing: [
      {
        name: "Quick",
        price: "8,000",
        description: "Single Event",
        features: [
          "2-hour coverage",
          "3 reels delivered",
          "Same-day delivery",
          "Basic editing",
          "Trending audio",
          "1080p export"
        ]
      },
      {
        name: "Rapid",
        price: "15,000",
        description: "Full Event",
        features: [
          "4-hour coverage",
          "6 reels delivered",
          "Same-day delivery",
          "Advanced editing",
          "Trending audio & effects",
          "Multiple format exports",
          "Hashtag strategy"
        ],
        popular: true
      },
      {
        name: "Instant",
        price: "25,000",
        description: "Premium Event",
        features: [
          "Full day coverage",
          "10+ reels delivered",
          "On-site editing",
          "Premium effects",
          "All format exports",
          "Complete hashtag strategy",
          "Engagement optimization",
          "Multiple variations"
        ]
      }
    ],
    iconComponent: Zap,
    route: "/services/instant-reels"
  },
  {
    id: "content",
    title: "Social Engine",
    tag: "Daily Output",
    description: "Your dedicated in-house media team. We provide a consistent stream of high-quality photos, videos, and graphics to maintain brand presence and keep your audience engaged daily.",
    longDescription: "Social Engine is your complete content solution for maintaining a strong, consistent presence across all social platforms. We act as your in-house creative team, producing daily content that keeps your audience engaged and your brand top-of-mind. From photos to videos to graphics, we handle everything so you can focus on your business while we handle your content.",
    heroImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
    sampleWorks: galleryImages,
    features: [
      "Daily content creation",
      "Multi-platform optimization",
      "Photo & video production",
      "Graphic design included",
      "Content calendar management",
      "Trend research & integration",
      "Brand consistency",
      "Analytics & reporting",
      "Community engagement",
      "Hashtag strategy"
    ],
    pricing: [
      {
        name: "Starter",
        price: "20,000",
        description: "Monthly Package",
        features: [
          "15 posts per month",
          "Mix of photos & videos",
          "Basic graphics",
          "Content calendar",
          "Platform optimization",
          "Monthly analytics"
        ]
      },
      {
        name: "Professional",
        price: "45,000",
        description: "Monthly Package",
        features: [
          "30 posts per month",
          "Premium content mix",
          "Advanced graphics",
          "Full content calendar",
          "All platform optimization",
          "Trend integration",
          "Weekly analytics",
          "Community management"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: "85,000",
        description: "Monthly Package",
        features: [
          "60+ posts per month",
          "Premium content production",
          "Custom graphics & animations",
          "Strategic content calendar",
          "Full platform management",
          "Real-time trend integration",
          "Daily analytics",
          "Full community management",
          "Dedicated content manager"
        ]
      }
    ],
    iconComponent: Play,
    route: "/services/social-engine"
  },
  {
    id: "cinematic",
    title: "Cinematic Commercials",
    tag: "High-Fidelity",
    description: "Elevate your brand perception with commercial-grade visuals. We utilize cinema cameras, professional lighting, and elite color grading to create visually stunning narratives that resonate with premium audiences.",
    longDescription: "Cinematic Commercials are our premium offering for brands that want to make a statement. We combine the artistry of cinema with commercial messaging to create ads that don't just sell—they inspire. Using professional cinema cameras, advanced lighting techniques, and meticulous color grading, we produce commercials that elevate your brand and create lasting impressions.",
    heroImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop",
    sampleWorks: galleryImages,
    features: [
      "Cinema camera production",
      "Professional lighting design",
      "Elite color grading",
      "Motion graphics & VFX",
      "Professional talent coordination",
      "Location scouting",
      "Script development",
      "Multiple cut variations",
      "Broadcast-ready delivery",
      "Multi-format exports"
    ],
    pricing: [
      {
        name: "Standard",
        price: "50,000",
        description: "Single Commercial",
        features: [
          "1-day shoot",
          "Cinema camera",
          "Professional lighting",
          "Basic VFX",
          "Color grading",
          "2 cut variations",
          "1080p & 4K delivery"
        ]
      },
      {
        name: "Premium",
        price: "125,000",
        description: "Premium Commercial",
        features: [
          "2-day shoot",
          "Premium cinema package",
          "Advanced lighting",
          "Advanced VFX",
          "Elite color grading",
          "Multiple cut variations",
          "Motion graphics",
          "Talent coordination",
          "4K & 8K delivery"
        ],
        popular: true
      },
      {
        name: "Luxury",
        price: "250,000",
        description: "Ultimate Commercial",
        features: [
          "Multi-day production",
          "Top-tier cinema package",
          "Cinematic lighting design",
          "Full VFX pipeline",
          "Premium color grading",
          "Unlimited variations",
          "Custom motion graphics",
          "Full talent & location",
          "Complete script development",
          "All format delivery"
        ]
      }
    ],
    iconComponent: Aperture,
    route: "/services/cinematic-commercials"
  },
  {
    id: "podcast",
    title: "Podcast Production",
    tag: "Multi-Cam",
    description: "Professional studio setups for thought leaders. We offer 4K multi-camera recording, crystal-clear audio engineering, and micro-content clipping services to maximize your show's reach across all platforms.",
    longDescription: "Podcast Production is our comprehensive solution for podcasters who want to elevate their content. We provide professional studio setups with multi-camera recording, pristine audio engineering, and content repurposing services. Whether you're recording in-studio or remotely, we ensure your podcast looks and sounds professional while helping you maximize reach through strategic content distribution.",
    heroImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2000&auto=format&fit=crop",
    sampleWorks: galleryImages,
    features: [
      "Multi-camera 4K recording",
      "Professional audio engineering",
      "Studio or remote setup",
      "Live streaming capability",
      "Micro-content clipping",
      "Thumbnail design",
      "Show notes & transcripts",
      "Distribution management",
      "Analytics tracking",
      "Post-production editing"
    ],
    pricing: [
      {
        name: "Basic",
        price: "12,000",
        description: "Per Episode",
        features: [
          "2-camera setup",
          "Audio recording",
          "Basic editing",
          "Thumbnail design",
          "1080p delivery",
          "Show notes"
        ]
      },
      {
        name: "Professional",
        price: "25,000",
        description: "Per Episode",
        features: [
          "Multi-camera 4K setup",
          "Professional audio",
          "Advanced editing",
          "Micro-content clips (3)",
          "Premium thumbnails",
          "Show notes & transcripts",
          "Distribution support",
          "4K delivery"
        ],
        popular: true
      },
      {
        name: "Premium",
        price: "45,000",
        description: "Per Episode",
        features: [
          "Full multi-cam 4K",
          "Elite audio engineering",
          "Premium editing",
          "Multiple micro-content clips",
          "Custom thumbnails",
          "Full show notes & transcripts",
          "Complete distribution",
          "Live streaming",
          "Analytics dashboard",
          "Dedicated producer"
        ]
      }
    ],
    iconComponent: Mic,
    route: "/services/podcast-production"
  },
  {
    id: "events",
    title: "Event Experience",
    tag: "On-Ground",
    description: "Holistic event coverage. From corporate summits to music festivals, we ensure every angle is captured and the event flow is documented seamlessly for future marketing assets.",
    longDescription: "Event Experience is our comprehensive event coverage service. We understand that events are more than just gatherings—they're experiences that need to be captured and shared. Our team documents every important moment, from keynotes to networking, ensuring you have professional content for post-event marketing, social media, and future promotions.",
    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop",
    sampleWorks: galleryImages,
    features: [
      "Multi-angle coverage",
      "Live streaming capability",
      "Same-day highlights",
      "Photo & video package",
      "Drone footage",
      "Interview capture",
      "Social media content",
      "Post-event deliverables",
      "Brand integration",
      "Multiple format delivery"
    ],
    pricing: [
      {
        name: "Essential",
        price: "30,000",
        description: "Half-Day Event",
        features: [
          "4-hour coverage",
          "2 videographers",
          "Photo & video",
          "Highlight reel",
          "Basic editing",
          "1080p delivery"
        ]
      },
      {
        name: "Complete",
        price: "65,000",
        description: "Full-Day Event",
        features: [
          "Full day coverage",
          "3 videographers",
          "Photo & video package",
          "Same-day highlights",
          "Drone footage",
          "Live streaming",
          "Advanced editing",
          "4K delivery"
        ],
        popular: true
      },
      {
        name: "Premium",
        price: "120,000",
        description: "Multi-Day Event",
        features: [
          "Multi-day coverage",
          "4+ videographers",
          "Complete photo & video",
          "Multiple highlight reels",
          "Premium drone footage",
          "Live streaming & recording",
          "Premium editing",
          "Social media content",
          "Post-event deliverables",
          "Dedicated coordinator"
        ]
      }
    ],
    iconComponent: Users,
    route: "/services/event-experience"
  },
  {
    id: "brand-collab",
    title: "Brand Partnerships",
    tag: "Strategy",
    description: "Bridging the gap between creators and commerce. We structure high-ROI campaigns that align brand values with authentic creator voices to drive conversion.",
    longDescription: "Brand Partnerships is our strategic service connecting brands with the right creators. We don't just facilitate partnerships—we architect campaigns that drive real results. Our team identifies the perfect creator-brand matches, structures campaigns that feel authentic, and ensures measurable ROI through strategic planning and execution.",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop",
    sampleWorks: galleryImages,
    features: [
      "Creator-brand matching",
      "Campaign strategy development",
      "Content creation coordination",
      "ROI tracking & analytics",
      "Contract negotiation support",
      "Campaign management",
      "Performance reporting",
      "Relationship management",
      "Multi-platform campaigns",
      "Long-term partnership building"
    ],
    pricing: [
      {
        name: "Starter",
        price: "40,000",
        description: "Single Campaign",
        features: [
          "Creator matching",
          "Campaign strategy",
          "Content coordination",
          "Basic analytics",
          "Performance report"
        ]
      },
      {
        name: "Professional",
        price: "85,000",
        description: "Multi-Campaign",
        features: [
          "Multiple creator matching",
          "Advanced strategy",
          "Full content coordination",
          "Detailed analytics",
          "ROI tracking",
          "Campaign management",
          "Performance optimization"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: "150,000",
        description: "Full Partnership",
        features: [
          "Unlimited creator access",
          "Strategic partnership development",
          "Complete campaign management",
          "Advanced analytics & insights",
          "Full ROI optimization",
          "Long-term relationship building",
          "Multi-platform campaigns",
          "Dedicated account manager"
        ]
      }
    ],
    iconComponent: Handshake,
    route: "/services/brand-partnerships"
  },
  {
    id: "creative-collab",
    title: "Creative Labs",
    tag: "Experimental",
    description: "Pushing boundaries with artistic collaborations. We merge diverse styles and mediums to create avant-garde projects that challenge norms.",
    longDescription: "Creative Labs is our experimental space where art meets innovation. We collaborate with diverse creators, artists, and brands to push creative boundaries and create truly unique content. This service is for those who want to break the mold, experiment with new formats, and create work that stands out in a crowded digital landscape.",
    heroImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop",
    sampleWorks: galleryImages,
    features: [
      "Artistic collaboration",
      "Experimental formats",
      "Cross-medium projects",
      "Creative direction",
      "Unique visual styles",
      "Innovation-focused",
      "Custom concept development",
      "Multi-artist projects",
      "Avant-garde production",
      "Portfolio-building content"
    ],
    pricing: [
      {
        name: "Explorer",
        price: "35,000",
        description: "Single Project",
        features: [
          "Creative collaboration",
          "Concept development",
          "Basic production",
          "Unique styling",
          "Portfolio piece"
        ]
      },
      {
        name: "Innovator",
        price: "75,000",
        description: "Premium Project",
        features: [
          "Multi-artist collaboration",
          "Advanced concept development",
          "Premium production",
          "Experimental formats",
          "Custom visual style",
          "Multiple deliverables",
          "Portfolio showcase"
        ],
        popular: true
      },
      {
        name: "Pioneer",
        price: "150,000",
        description: "Ultimate Project",
        features: [
          "Full creative team",
          "Complete concept development",
          "Luxury production",
          "Cutting-edge formats",
          "Custom everything",
          "Multiple portfolio pieces",
          "Full campaign development",
          "Dedicated creative director"
        ]
      }
    ],
    iconComponent: Palette,
    route: "/services/creative-labs"
  }
];

