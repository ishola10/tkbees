export const NAV = [
  { label: "What's Buzzing", href: "/buzzing", hot: true, group: "experience", blurb: "Trending ideas and shipped projects" },
  { label: "Book a Service", href: "/services", group: "platform", blurb: "Marketplace of student services" },
  { label: "Find Places", href: "/places", group: "platform", blurb: "Study spots, makerspaces, late-night cafés" },
  { label: "What's On", href: "/whats-on", group: "platform", blurb: "Events, hackathons and meetups" },
  { label: "Get Help", href: "/help", group: "platform", blurb: "Ask the hive, get matched" },
  { label: "Discover Deals", href: "/deals", group: "platform", blurb: "Student-only discounts and credits" },
  { label: "Bootcamps", href: "/bootcamps", group: "experience", blurb: "5-day build sprints with the £10K prize" },
  { label: "Mentors", href: "/mentors", group: "experience", blurb: "Verified mentors with bookable office hours" },
  { label: "Skills", href: "/skills", group: "experience", blurb: "Skill taxonomy and matched talent" },
  { label: "Knowledge Base", href: "/knowledge", group: "knowledge", blurb: "Playbooks, templates and lessons" },
  { label: "For Universities", href: "/universities", group: "community", blurb: "Partnership programmes" },
  { label: "For Founders", href: "/founders", group: "community", blurb: "Post a problem, hire student teams" },
  { label: "Hiring", href: "/hiring", group: "community", blurb: "Jobs and gigs from the network" },
  { label: "Community", href: "/community", group: "community", blurb: "Chapters, leaderboards and meetups" },
] as const;

export const TICKER_ITEMS = [
  "£10,000 Bootcamp Prize — Spring Cohort applications close in 12 days",
  "247 ideas hatched into projects this week",
  "Free for verified students — join with your university email",
  "New: Mentor matching now live in London, Manchester & Birmingham",
  "Workshops happening tonight in 14 cities",
  "Submit a problem, get matched with 3 student teams in 48h",
];

export const SEARCH_PILLS = [
  "Logo Design",
  "React Developer",
  "Pitch Deck",
  "Bootcamp",
  "Mentor",
  "Event Tonight",
];

export const JOIN_ROLES = [
  "I want to offer skills",
  "I want to book a service",
  "I'm a university",
  "I'm a founder",
];

export const FOOTER_COLS = [
  {
    t: "Platform",
    links: [
      { l: "Book a Service", h: "/services" },
      { l: "Find Places", h: "/places" },
      { l: "What's On", h: "/whats-on" },
      { l: "Get Help", h: "/help" },
      { l: "Discover Deals", h: "/deals" },
    ],
  },
  {
    t: "Experience",
    links: [
      { l: "Bootcamps", h: "/bootcamps" },
      { l: "Mentors", h: "/mentors" },
      { l: "Skills", h: "/skills" },
      { l: "What's Buzzing", h: "/buzzing" },
      { l: "The £10K Prize", h: "/bootcamps" },
    ],
  },
  {
    t: "Knowledge",
    links: [
      { l: "Knowledge Base", h: "/knowledge" },
      { l: "Playbooks", h: "/knowledge" },
      { l: "Templates", h: "/knowledge" },
      { l: "Case Studies", h: "/knowledge" },
      { l: "Submit an idea", h: "/submit-idea" },
    ],
  },
  {
    t: "Company",
    links: [
      { l: "For Universities", h: "/universities" },
      { l: "For Founders", h: "/founders" },
      { l: "Hiring", h: "/hiring" },
      { l: "Community", h: "/community" },
      { l: "Register", h: "/register" },
    ],
  },
  {
    t: "Legal",
    links: [
      { l: "Privacy", h: undefined },
      { l: "Terms", h: undefined },
      { l: "Cookies", h: undefined },
      { l: "Trust & Safety", h: undefined },
      { l: "Accessibility", h: undefined },
    ],
  },
];
