export const KNOWLEDGE_ARTICLES = [
  { tag: "Starter", title: "How to validate your idea in 7 days (without writing code)", read: "8 min", emo: "💡", color: "#F5A524" },
  { tag: "Build", title: "MVP toolkit: the 5 tools every student founder uses", read: "12 min", emo: "🔧", color: "#C6F432" },
  { tag: "Pitch", title: "The 10-slide deck that won £10K at TKBees Spring '25", read: "6 min", emo: "📄", color: "#FF6B6B" },
  { tag: "Find", title: "Where to find your first 100 users as a student", read: "9 min", emo: "🧭", color: "#F5A524" },
  { tag: "Learn", title: "Inside a TKBees bootcamp — day-by-day breakdown", read: "Video · 4 min", emo: "🎥", color: "#1E1B4B" },
  { tag: "Read", title: "The 24 skills the TKBees community is hiring for in 2026", read: "5 min", emo: "📚", color: "#C6F432" },
  { tag: "Starter", title: "How to find a co-founder who complements your skills", read: "7 min", emo: "🤝", color: "#FF6B6B" },
  { tag: "Build", title: "The no-code stack for non-technical founders", read: "10 min", emo: "⚡", color: "#F5A524" },
  { tag: "Pitch", title: "Cold email templates that actually get responses", read: "5 min", emo: "📧", color: "#C6F432" },
];

/** Resources extracted from tkbees.zip seed data */
export const ZIP_RESOURCES = [
  { title: "Y Combinator Startup School", description: "Free online program covering how to start a startup, from idea to launch. Includes lectures from YC partners and successful founders.", category: "Business Planning", url: "https://www.startupschool.org/", emo: "🎓", color: "#F5A524" },
  { title: "Lean Startup Methodology", description: "Learn the Build-Measure-Learn loop. The essential framework for validating business ideas with minimal resources.", category: "Business Planning", url: "https://theleanstartup.com/", emo: "🔁", color: "#C6F432" },
  { title: "Business Model Canvas", description: "A strategic management tool to quickly define and visualize your business model on a single page.", category: "Business Planning", url: "https://en.wikipedia.org/wiki/Business_Model_Canvas", emo: "🗂️", color: "#1E1B4B" },
  { title: "Fundraising Guide by First Round", description: "Comprehensive guide on seed funding, pitch decks, term sheets, and investor relations for early-stage startups.", category: "Funding", url: "https://firstround.com/review/", emo: "💰", color: "#F5A524" },
  { title: "Crunchbase - Startup Funding Database", description: "Research funding rounds, investors, and industry trends. Essential for understanding the fundraising landscape.", category: "Funding", url: "https://www.crunchbase.com/", emo: "📊", color: "#FF6B6B" },
  { title: "Google for Startups", description: "Access Google's programs, mentorship, and resources designed to help startups build and grow.", category: "Tech & Product", url: "https://startup.google.com/", emo: "☁️", color: "#C6F432" },
  { title: "Product Hunt Launch Guide", description: "Step-by-step guide to launching your product on Product Hunt for maximum exposure and early adopters.", category: "Marketing", url: "https://en.wikipedia.org/wiki/Product_Hunt", emo: "🚀", color: "#F5A524" },
  { title: "Indie Hackers Community", description: "Community of bootstrapped founders sharing revenue numbers, growth strategies, and lessons learned.", category: "Marketing", url: "https://www.indiehackers.com/", emo: "🧑‍💻", color: "#1E1B4B" },
  { title: "Stripe Atlas - Company Formation", description: "Incorporate a US company, open a bank account, and start accepting payments — all from anywhere in the world.", category: "Legal & Finance", url: "https://stripe.com/atlas", emo: "⚖️", color: "#FF6B6B" },
  { title: "YCDC - Legal Templates for Startups", description: "Free legal document templates including SAFEs, employment agreements, and NDAs from Y Combinator.", category: "Legal & Finance", url: "https://www.ycombinator.com/documents/", emo: "📄", color: "#C6F432" },
  { title: "Slidebean Pitch Deck Templates", description: "Professional pitch deck templates inspired by companies like Airbnb, Buffer, and Uber. Build investor-ready decks.", category: "Pitch Decks", url: "https://slidebean.com/pitch-deck-template", emo: "📑", color: "#F5A524" },
  { title: "Guy Kawasaki 10/20/30 Rule", description: "The classic pitch deck framework: 10 slides, 20 minutes, 30pt font minimum. Simple but powerful.", category: "Pitch Decks", url: "https://en.wikipedia.org/wiki/Guy_Kawasaki", emo: "🎤", color: "#1E1B4B" },
  { title: "How to Build an MVP", description: "A practical guide to building your Minimum Viable Product. Focus on solving one problem well before expanding.", category: "Tech & Product", url: "https://en.wikipedia.org/wiki/Minimum_viable_product", emo: "⚡", color: "#C6F432" },
  { title: "Growth Marketing Playbook", description: "Learn growth hacking tactics used by successful startups: SEO, content marketing, referral programs, and viral loops.", category: "Marketing", url: "https://en.wikipedia.org/wiki/Growth_hacking", emo: "📈", color: "#FF6B6B" },
  { title: "Startup Financial Model Template", description: "Free spreadsheet template for building financial projections, unit economics, and runway calculations.", category: "Funding", url: "https://www.ycombinator.com/documents/", emo: "📉", color: "#F5A524" },
];

export const EVENTS_DATA = [
  { title: "TKBees Bootcamp 2026 — Manchester", date: "14–16 Mar 2026", format: "48h intensive", prize: "£10,000", spots: "8/12 teams", status: "open" as const, desc: "The flagship event. Cross-disciplinary teams, expert mentorship, and the biggest prize in the North.", clr: "#F5A524" },
  { title: "Climate-Tech Hackathon", date: "5 Apr 2026", format: "Weekend sprint", prize: "£2,500", spots: "20 spots", status: "open" as const, desc: "Build climate solutions with a team of engineers, designers and scientists over one weekend.", clr: "#C6F432" },
  { title: "Build Week — London", date: "5–9 May 2026", format: "5-day sprint", prize: "£2,500", spots: "12/20 spots", status: "open" as const, desc: "A focused week-long sprint where small teams tackle startup challenges with industry mentors.", clr: "#1E1B4B" },
  { title: "Demo Day — Online", date: "22 Jun 2026", format: "Half-day showcase", prize: "Investor intros", spots: "Open to all", status: "soon" as const, desc: "Present your project to a panel of investors, mentors, and industry leaders.", clr: "#FF6B6B" },
  { title: "Founder Fireside — Birmingham", date: "8 Jul 2026", format: "Evening event", prize: "Free", spots: "50 spots", status: "soon" as const, desc: "Three founders. Three honest stories about what it really takes to build a startup.", clr: "#F5A524" },
];

/** Events extracted from tkbees.zip seed data */
export const ZIP_EVENTS = [
  { title: "TKBees Launch Pitch Night", date: "15 Sep 2026", format: "Competition · 6:00 PM WAT", prize: "Mentorship packs", spots: "Open to all", status: "open" as const, desc: "Pitch your startup idea in 3 minutes to a panel of mentors and investors. Top 3 ideas win mentorship packages and community recognition.", clr: "#F5A524" },
  { title: "Lean Canvas Workshop", date: "20 Aug 2026", format: "Workshop · 2:00 PM WAT", prize: "Free", spots: "Open", status: "open" as const, desc: "A hands-on workshop where you'll build a Lean Canvas for your startup idea in 90 minutes. Bring your idea and leave with a business model.", clr: "#C6F432" },
  { title: "Founder Networking Mixer", date: "5 Sep 2026", format: "Networking · Lagos", prize: "Free", spots: "Open to members", status: "soon" as const, desc: "Meet fellow student entrepreneurs, find co-founders, and connect with mentors over food and conversation. Open to all TKBees members.", clr: "#FF6B6B" },
  { title: "How to Validate Your Idea (Webinar)", date: "28 Aug 2026", format: "Webinar · 4:00 PM WAT", prize: "Free", spots: "Open", status: "open" as const, desc: "Learn the step-by-step process of validating a startup idea before writing a single line of code. Real examples from student founders.", clr: "#1E1B4B" },
  { title: "University Innovation Hackathon", date: "10 Oct 2026", format: "48h competition", prize: "Cash + accelerator", spots: "Campus teams", status: "soon" as const, desc: "48-hour hackathon for student teams to build prototypes solving real problems. Prizes include cash awards and accelerator spots.", clr: "#C6F432" },
];

export const ALL_EVENTS = [...EVENTS_DATA, ...ZIP_EVENTS];

export const UNI_PARTNERS = [
  "University of Manchester",
  "Manchester Metropolitan",
  "UCL",
  "Imperial College",
  "Goldsmiths",
  "LSE",
  "University of Salford",
  "University of Birmingham",
];

export const UNI_BENEFITS = [
  { e: "🎓", t: "Branded bootcamp on campus", d: "We run a TKBees x [Your Uni] bootcamp each semester with your branding, problem set and panel." },
  { e: "📊", t: "Live talent dashboard", d: "See which of your students are building, what they're shipping, and who's getting hired." },
  { e: "🏆", t: "Co-sponsored prize fund", d: "Match or top up the £10K prize to incentivise your highest-performing students." },
  { e: "🤝", t: "Industry partner introductions", d: "We connect your students with our founder and investor network for placement and investment." },
];

/** Partnership tiers extracted from tkbees.zip */
export const UNI_TIERS = [
  { name: "Basic", features: ["Student access to platform", "Community membership", "Resource library access", "Monthly newsletter"] },
  { name: "Standard", highlighted: true, features: ["Everything in Basic", "Custom university page", "Event hosting support", "Quarterly impact report", "Priority mentor matching"] },
  { name: "Premium", features: ["Everything in Standard", "Dedicated success manager", "Co-branded events", "API integration", "Custom analytics dashboard"] },
];

export const ZIP_UNI_BENEFITS = [
  { e: "👥", t: "Student Engagement", d: "Give students a practical platform to explore entrepreneurship beyond the classroom." },
  { e: "🏆", t: "Innovation Culture", d: "Foster a culture of innovation and startup thinking on your campus." },
  { e: "📊", t: "Impact Metrics", d: "Track student engagement, ideas submitted, and startup progress with real data." },
  { e: "💡", t: "Idea Pipeline", d: "Build a pipeline of student innovations that can represent your university." },
];
