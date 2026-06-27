const workers = [
  {
    id: 1,
    name: "John Juma",
    title: "Expert Plumber & Handyman",
    location: "Westlands, Nairobi",
    rating: 4.8,
    reviewsCount: 24,
    skills: ["Leak Repair", "Pipe Fitting", "Borehole Pumps", "Appliance Installation"],
    available: true,
    photo: null,
    priceEstimates: [
      { service: "Consultation & Inspection", cost: "Ksh 1,500" },
      { service: "Minor Repairs (per hour)", cost: "Ksh 1,000" },
      { service: "Major Installation Work", cost: "Ksh 3,500+" }
    ],
    reviews: [
      { id: 1, user: "Grace W.", rating: 5, text: "John arrived on time and fixed our kitchen sink perfectly. Fair pricing and professional!", date: "June 18, 2026" },
      { id: 2, user: "David O.", rating: 4, text: "Very knowledgeable. Cleared a major drainage blockage quickly.", date: "June 12, 2026" }
    ]
  },
  {
    id: 2,
    name: "Amina Hassan",
    title: "Certified Electrician",
    location: "Kilimani, Nairobi",
    rating: 4.9,
    reviewsCount: 31,
    skills: ["Wiring", "Circuit Breakers", "Solar Installation", "Security Lights"],
    available: true,
    photo: null,
    priceEstimates: [
      { service: "Inspection & Diagnosis", cost: "Ksh 1,000" },
      { service: "Wiring (per point)", cost: "Ksh 800" },
      { service: "Solar Panel Setup", cost: "Ksh 8,000+" }
    ],
    reviews: [
      { id: 1, user: "Peter M.", rating: 5, text: "Amina installed our solar lights perfectly. Very clean work.", date: "June 20, 2026" },
      { id: 2, user: "Fatuma A.", rating: 5, text: "Fixed our tripping circuit breaker within an hour. Highly recommend!", date: "June 10, 2026" }
    ]
  },
  {
    id: 3,
    name: "Samuel Kiprotich",
    title: "Professional Carpenter",
    location: "Kasarani, Nairobi",
    rating: 4.6,
    reviewsCount: 18,
    skills: ["Furniture Making", "Door Fitting", "Cabinets", "Wood Finishing"],
    available: false,
    photo: null,
    priceEstimates: [
      { service: "Consultation", cost: "Ksh 500" },
      { service: "Custom Furniture (per piece)", cost: "Ksh 5,000+" },
      { service: "Door & Frame Fitting", cost: "Ksh 2,500" }
    ],
    reviews: [
      { id: 1, user: "Nancy K.", rating: 5, text: "Built us a beautiful kitchen cabinet. Excellent craftsmanship!", date: "June 5, 2026" },
      { id: 2, user: "Brian O.", rating: 4, text: "Good work on our bedroom wardrobe. Took a bit longer than expected but worth it.", date: "May 28, 2026" }
    ]
  },
  {
    id: 4,
    name: "Mary Wanjiku",
    title: "House Painter & Decorator",
    location: "Ngong Road, Nairobi",
    rating: 4.7,
    reviewsCount: 22,
    skills: ["Interior Painting", "Exterior Painting", "Texture Walls", "Waterproofing"],
    available: true,
    photo: null,
    priceEstimates: [
      { service: "Per Room (interior)", cost: "Ksh 3,000" },
      { service: "Exterior (per sq metre)", cost: "Ksh 150" },
      { service: "Texture / Decorative Wall", cost: "Ksh 5,000+" }
    ],
    reviews: [
      { id: 1, user: "James N.", rating: 5, text: "Transformed our living room completely. Very neat and professional.", date: "June 15, 2026" },
      { id: 2, user: "Alice W.", rating: 4, text: "Did a great job on our exterior. Cleaned up after herself too!", date: "June 1, 2026" }
    ]
  },
  {
    id: 5,
    name: "Kevin Ochieng",
    title: "Welder & Metalwork Specialist",
    location: "Industrial Area, Nairobi",
    rating: 4.5,
    reviewsCount: 14,
    skills: ["Gate Fabrication", "Grilles & Burglar Proofing", "Steel Shelving", "Repairs"],
    available: true,
    photo: null,
    priceEstimates: [
      { service: "Gate Fabrication", cost: "Ksh 15,000+" },
      { service: "Window Grille (per window)", cost: "Ksh 3,500" },
      { service: "Welding Repairs", cost: "Ksh 1,500" }
    ],
    reviews: [
      { id: 1, user: "Robert M.", rating: 5, text: "Made us a very strong gate. Great quality steel and fair price.", date: "June 8, 2026" },
      { id: 2, user: "Susan L.", rating: 4, text: "Fixed our broken fence in no time. Would hire again.", date: "May 30, 2026" }
    ]
  },
  {
    id: 6,
    name: "Esther Muthoni",
    title: "Tiling & Masonry Expert",
    location: "Embakasi, Nairobi",
    rating: 4.8,
    reviewsCount: 27,
    skills: ["Floor Tiling", "Wall Tiling", "Screeding", "Waterproofing"],
    available: false,
    photo: null,
    priceEstimates: [
      { service: "Tiling (per sq metre)", cost: "Ksh 400" },
      { service: "Bathroom Tiling (full)", cost: "Ksh 8,000+" },
      { service: "Screeding (per sq metre)", cost: "Ksh 200" }
    ],
    reviews: [
      { id: 1, user: "Paul N.", rating: 5, text: "Esther tiled our bathroom beautifully. Very precise and clean.", date: "June 17, 2026" },
      { id: 2, user: "Jane A.", rating: 5, text: "Did our entire ground floor. Pattern was perfect. Highly recommend!", date: "June 3, 2026" }
    ]
  },
  {
    id: 7,
    name: "Dennis Mutua",
    title: "AC & Appliance Technician",
    location: "South B, Nairobi",
    rating: 4.6,
    reviewsCount: 19,
    skills: ["AC Installation", "AC Servicing", "Fridge Repair", "Washing Machine Repair"],
    available: true,
    photo: null,
    priceEstimates: [
      { service: "AC Service / Gas Refill", cost: "Ksh 2,500" },
      { service: "AC Installation", cost: "Ksh 4,000" },
      { service: "Appliance Diagnosis", cost: "Ksh 800" }
    ],
    reviews: [
      { id: 1, user: "Lucy M.", rating: 5, text: "Serviced our AC perfectly. Very fast and affordable.", date: "June 19, 2026" },
      { id: 2, user: "Tom K.", rating: 4, text: "Fixed our washing machine same day. Great service!", date: "June 7, 2026" }
    ]
  },
  {
    id: 8,
    name: "Faith Akinyi",
    title: "Cleaning & Home Care Specialist",
    location: "Ruaka, Nairobi",
    rating: 4.9,
    reviewsCount: 36,
    skills: ["Deep Cleaning", "After-construction Cleaning", "Carpet Cleaning", "Office Cleaning"],
    available: true,
    photo: null,
    priceEstimates: [
      { service: "Standard House Clean", cost: "Ksh 2,000" },
      { service: "Deep / After-construction", cost: "Ksh 5,000+" },
      { service: "Carpet Cleaning (per carpet)", cost: "Ksh 1,000" }
    ],
    reviews: [
      { id: 1, user: "Ann W.", rating: 5, text: "Left our house spotless after construction. Very thorough!", date: "June 21, 2026" },
      { id: 2, user: "Mike O.", rating: 5, text: "Best cleaner I've ever hired. Will definitely book again.", date: "June 14, 2026" }
    ]
  }
];

export default workers;
