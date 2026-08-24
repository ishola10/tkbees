export type BuzzFaq = {
  triggers: string[];
  answer: string;
  quickReplies: string[];
};

export const BUZZ_FAQ: BuzzFaq[] = [
  // PLATFORM BASICS
  {
    triggers: ['what is tkbees','what is this','tell me about tkbees','what do you do','explain tkbees','tkbees','about'],
    answer: `**TKBees** (The Knowledge Bees) is a student-first ecosystem where ambitious 18–35 year olds connect with the skills, people and opportunities they need to turn ideas into real outcomes.\n\nYou can:\n- 📋 **Book a service** from verified student talent\n- 🧑‍🏫 **Find a mentor** with bookable office hours\n- ⚡ **Join a bootcamp** and compete for £10,000\n- 📚 **Browse the Knowledge Base** for playbooks and templates\n- 📍 **Find places** to work near campus\n\nIt's built by **T.L. Solution** (Touch Light Solution). Not a feed. Not a network. A place where things actually get done.`,
    quickReplies: ['How do I join?', 'Tell me about the bootcamp', 'How does booking work?']
  },
  {
    triggers: ['who is it for','target audience','who can join','age','students','graduates','professionals','18','35'],
    answer: `TKBees is built for **ambitious 18–35 year olds** — specifically:\n\n- 🎓 **Students** at any UK university\n- 🚀 **Recent graduates** looking to build or get hired\n- 💡 **Young professionals** with ideas but no team\n- 🏛️ **Universities** wanting innovation pipelines\n- 🏗️ **Founders** who need student talent fast\n\nJoining is completely **free for verified students** — just sign up with your university email.`,
    quickReplies: ['How do I join free?', 'I am a founder', 'University partnership']
  },
  {
    triggers: ['is it free','cost','price','how much','free','paid','subscription'],
    answer: `**Free for students** 🎉\n\nHere's how it works:\n\n- ✅ **Joining** — always free with a university email\n- ✅ **Browsing** skills, mentors, events — free\n- ✅ **Posting** a help request — free\n- 💳 **Booking a service** — you pay the provider directly (prices from £12)\n- 🏆 **Bootcamp entry** — free to apply; prize-backed\n- 🏢 **For companies / universities** — partnership plans available\n\nNo hidden fees. No ad revenue. Just people building things.`,
    quickReplies: ['How do I sign up?', 'How does booking work?', 'I am a university']
  },

  // JOINING / ACCOUNTS
  {
    triggers: ['how do i join','sign up','register','create account','get started','how to join','join','joining'],
    answer: `Joining takes about **60 seconds**:\n\n1. Click **"Join the hive"** in the top navigation\n2. Choose your role (supplier, buyer, university or founder)\n3. Enter your name, email and a password\n4. Verify your student email for the free plan\n5. Set up your profile and list your first skill\n\nYou'll get a **founding member badge** during the launch phase — the earlier you join, the better your spot in the hive.`,
    quickReplies: ['What roles are there?', 'I am a student with skills', 'I want to hire someone']
  },
  {
    triggers: ['roles','what role','supplier','buyer','talent','offer skills','sell','list a service'],
    answer: `There are **4 roles** on TKBees:\n\n- 🛠️ **Supplier / Talent** — you offer services, list skills, take bookings and build a portfolio\n- 🔍 **Customer / Buyer** — you book services, post problems and hire talent\n- 🏛️ **University** — you partner to run bootcamps and access the talent dashboard\n- 🚀 **Founder** — you post real challenges and hire student teams\n\nYou can do more than one — many TKBees are both buyers and suppliers.`,
    quickReplies: ['How do I list a skill?', 'How do I book a service?', 'Tell me about bootcamps']
  },

  // BOOKING A SERVICE
  {
    triggers: ['book','booking','hire','how do i book','book a service','how to hire','get help','need someone','service'],
    answer: `Booking a service on TKBees is simple:\n\n1. Go to **"Book a Service"** in the navigation\n2. Browse or search by skill, category or price\n3. Click a service card — you'll see the provider's portfolio, rating and reviews\n4. Hit **"Book this skill"** and complete the short brief\n5. The provider confirms within 24h\n6. Work happens, you review — **7-day satisfaction guarantee** on every booking\n\nPrices start from **£12 per hour** for tutoring up to project-based rates.`,
    quickReplies: ['What services are available?', 'How much does it cost?', 'What is the guarantee?']
  },
  {
    triggers: ['guarantee','refund','satisfaction','7 day','not happy','dispute'],
    answer: `Every booking on TKBees comes with a **7-day satisfaction guarantee**:\n\n- ✅ If the work isn't delivered to the agreed brief, we'll arrange a revision or refund\n- ✅ All providers are identity-verified and have real reviews\n- ✅ Payments are held until you confirm the work is complete\n- 📩 Disputes are handled by the TKBees team within 48h\n\nYou're always protected.`,
    quickReplies: ['How do I book?', 'What services are available?']
  },
  {
    triggers: ['what services','types of service','categories','available services','what can i book','skills available'],
    answer: `TKBees has services across every discipline — here are the main categories:\n\n- 💻 **Technology** — React, Python, apps, automation, web dev\n- 🎨 **Design** — logos, brand identity, UX, motion graphics\n- 📊 **Business** — pitch decks, GTM strategy, market research\n- 📸 **Creative** — photography, video, content, social media\n- 📐 **Tutoring** — maths, science, coding, languages, exam prep\n- 🎙️ **Media** — podcast production, scriptwriting, editing\n\nPrices range from **£12/hour** for tutoring to **£2,000+** for full brand projects.`,
    quickReplies: ['How do I book?', 'How much does it cost?', 'I want to list a service']
  },

  // LISTING A SKILL
  {
    triggers: ['list a skill','post a service','sell my skills','how do i list','offer my services','earn','make money','become a supplier','how to sell'],
    answer: `Listing your first service takes **5 minutes**:\n\n1. Go to your **Dashboard → Post a Skill**\n2. Write a title and description\n3. Choose a category (Design, Code, Strategy, etc.)\n4. Set your pricing model (hourly, fixed, day rate)\n5. Add tags and toggle visibility\n6. Hit **Publish** — you're live on the marketplace!\n\n💡 **Tips for getting your first booking:**\n- Keep prices competitive at first (£15–£40/hr)\n- Add 3+ portfolio pieces\n- Respond to enquiries within 2 hours`,
    quickReplies: ['How much should I charge?', 'Tell me about the marketplace', 'What is the 7-day guarantee?']
  },
  {
    triggers: ['how much should i charge','pricing','rate','hourly rate','what to charge'],
    answer: `Here are **typical rates** on TKBees by category:\n\n- 🎨 **Graphic / Logo Design** — £15–£50/project\n- 💻 **Web Dev / React** — £20–£85/hr\n- 📸 **Photography** — £40–£150/shoot\n- 📊 **Strategy / Pitch Decks** — £30–£2,000/project\n- 📐 **Tutoring** — £12–£30/hr\n- 🎬 **Video / Content** — £25–£75/hr\n\nStart competitive, collect 5 reviews, then raise your rates. Most TKBees double their rate within 3 months.`,
    quickReplies: ['How do I list a skill?', 'How does payment work?']
  },

  // BOOTCAMPS
  {
    triggers: ['bootcamp','boot camp','10k','£10','prize','10000','competition','cohort','sprint','hackathon','build week'],
    answer: `The **TKBees Bootcamp** is our flagship experience — a 5-day intensive build sprint where teams compete for a **£10,000 prize** 🏆\n\nHere's what happens:\n- 📅 **Day 1** — Meet your team, pick a real problem\n- 🔧 **Days 2–3** — Build it with daily mentor sessions\n- 🧪 **Day 4** — User test and iterate\n- 🎤 **Day 5** — Pitch to investors. Best team wins £10K\n\n**Next cohort:** Manchester · 5–10 June 2026\n**Applications close:** 1 May 2026 · 47 spots left\n\nClick "Bootcamps" in the nav to apply →`,
    quickReplies: ['How do I apply?', 'Can I bring my own idea?', 'Who are the mentors?']
  },
  {
    triggers: ['apply','how to apply','application','apply for bootcamp','sign up for bootcamp'],
    answer: `To apply for a TKBees bootcamp:\n\n1. Click **"Bootcamps"** in the top navigation\n2. Find the cohort you want and hit **"Apply now →"**\n3. Fill in a short form — your background, skills and what you want to build\n4. We review applications and let you know within **72 hours**\n5. If accepted, you'll get a welcome pack and team-matching survey\n\n**No experience needed.** We build teams around complementary skills — designers, coders, marketers and domain experts all welcome.\n\n🔒 **Applications for June 2026 close 1 May 2026.**`,
    quickReplies: ['Can I bring my own idea?', 'Is it really free to apply?', 'Who are the mentors?']
  },
  {
    triggers: ['can i bring my idea','own idea','existing idea','my project','startup idea'],
    answer: `Yes! You have **two options** at the bootcamp:\n\n- 💡 **Bring your own idea** — pitch it on Day 1 and recruit a team around it\n- 🎯 **Get assigned a challenge** — we source real problems from universities and companies; you pick one and a team forms around it\n\nBoth routes win equally. Some of our best outcomes came from teams who started with a company's problem, not a personal idea.\n\nEither way, you'll have **6 mentors, 5 days, and £10,000 on the line.**`,
    quickReplies: ['How do I apply?', 'Who are the mentors?', 'What happens after the bootcamp?']
  },
  {
    triggers: ['after the bootcamp','post bootcamp','what happens after','launch support','winning team'],
    answer: `Winning the bootcamp is just the beginning 🚀\n\nThe winning team gets:\n- 💰 **£10,000 cash prize** (split by the team)\n- 🤝 **6 months of mentorship** with our founder network\n- 🏛️ **University partnership introductions**\n- 📣 **PR and press support** from T.L. Solution\n- 🌱 **Potential investment conversations** with our investor panel\n\nEven non-winning teams leave with a portfolio piece, a network of collaborators, and a TKBees alumni badge that's recognised by our hiring partners.`,
    quickReplies: ['How do I apply?', 'Who are the mentors?', 'Tell me about hiring']
  },

  // MENTORS
  {
    triggers: ['mentor','mentors','mentorship','find a mentor','book a mentor','office hours','advice','guidance'],
    answer: `TKBees has **412 verified mentors** with bookable sessions 📅\n\nHow it works:\n- Browse mentors by expertise — Tech, Design, Startup, Finance, AI/ML, Marketing\n- Each mentor has a verified profile, their background and pricing\n- Book a **1-on-1 session** or join a **group office hour**\n- Sessions run from **free** (volunteer mentors) to **£50/hr** (senior professionals)\n\nNot sure who to pick? Use **"Get matched"** — tell us your challenge and we'll suggest the right mentor within 48h.\n\nGo to **Mentors** in the nav to browse →`,
    quickReplies: ['How much do mentors cost?', 'How does matching work?', 'I want to become a mentor']
  },
  {
    triggers: ['become a mentor','mentor application','apply as mentor','volunteer mentor','mentor signup'],
    answer: `We'd love to have you as a mentor 🙌\n\nTo apply:\n1. Go to **"Mentors"** in the navigation\n2. Click **"Apply to mentor"**\n3. Submit your background, LinkedIn and areas of expertise\n4. Our team verifies you within **5 working days**\n5. Set your availability, pricing (or free) and go live\n\n**Mentors who offer free sessions** get a **verified volunteer badge** and are featured in our weekly newsletter (8,000+ subscribers).\n\nAll TKBees mentors are listed by the community as "trusted advisors" — it's a recognised credential in the startup ecosystem.`,
    quickReplies: ['Tell me about the bootcamp', 'What is TKBees?']
  },

  // KNOWLEDGE BASE
  {
    triggers: ['knowledge base','knowledge','articles','guides','playbook','templates','resources','learn','lessons','how to'],
    answer: `The **TKBees Knowledge Base** is our library of actionable playbooks, templates and case studies — all written by people who've actually shipped things.\n\nHighlights:\n- 💡 "How to validate your idea in 7 days (without writing code)"\n- 🔧 "The MVP toolkit: 5 tools every student founder uses"\n- 📄 "The 10-slide deck that won £10K at TKBees Spring '25"\n- 🧭 "Where to find your first 100 users as a student"\n- ⚡ "The no-code stack for non-technical founders"\n\nAll content is **free** and searchable. Go to **Knowledge Base** in the nav →`,
    quickReplies: ['Can I contribute?', 'Tell me about the bootcamp', 'How do I join?']
  },
  {
    triggers: ['contribute','write an article','submit','content','write for tkbees'],
    answer: `Yes — the Knowledge Base is community-built 📝\n\nTo contribute:\n1. Go to the **Knowledge Base** page\n2. Scroll to the bottom and hit **"Submit an article"**\n3. Share your draft (Google Doc, Notion or plain text)\n4. Our editors review within **7 days**\n5. Accepted articles earn you:\n   - ✍️ A **founding-contributor badge**\n   - 💰 **TKBees credits** (usable against bookings)\n   - 📣 Feature in our weekly newsletter\n\nWe accept playbooks, case studies, templates, and honest lessons from building.`,
    quickReplies: ['What is the Knowledge Base?', 'How do I join?']
  },

  // PLACES
  {
    triggers: ['places','find places','study spot','cafe','library','makerspace','co-working','workspace','where to work','near campus'],
    answer: `**Find Places** helps you discover the best spots to work near your campus 📍\n\nCurrently mapped in **38 cities** across the UK, including:\n- ☕ Cafés with great Wi-Fi and long hours\n- 🏭 Makerspaces with 3D printers and laser cutters\n- 🌿 Co-working studios with hot desks and meeting rooms\n- 🦉 24h libraries for those late-night sessions\n- 🎙️ Recording studios and podcast booths\n\nEach listing has tags, ratings, opening hours and directions. Use the interactive map view to find what's closest to you.\n\nGo to **"Find Places"** in the nav →`,
    quickReplies: ['How do I submit a place?', 'What cities are covered?']
  },

  // UNIVERSITIES
  {
    triggers: ['university','universities','university partner','for universities','academic','institution','campus','partner'],
    answer: `TKBees has a dedicated **University Partnership Programme** 🏛️\n\nAs a university partner you get:\n- 🏆 Branded bootcamp on campus each semester\n- 📊 Live talent dashboard — see which students are building\n- 💰 Co-sponsored prize fund (match our £10K)\n- 🤝 Industry partner introductions for placement\n- 🎓 A verified talent pipeline for enterprise tracks\n\n**Current partners include:**\nUniversity of Manchester · Manchester Met · UCL · Imperial · Goldsmiths · LSE · Salford · Birmingham\n\nGo to **"For Universities"** in the nav, or speak to our team directly.`,
    quickReplies: ['How do I apply to partner?', 'Tell me about the bootcamp', 'What does it cost?']
  },

  // FOUNDERS
  {
    triggers: ['founder','founders','company','startup','business','problem','challenge','post a challenge','hire a team'],
    answer: `**Founders** can work with TKBees in two ways:\n\n🏆 **Post a bootcamp challenge**\nYour real business problem becomes the challenge for our next cohort. 12 teams compete to solve it. You get fresh thinking, a winning solution and a team to potentially hire. You pay a sponsorship fee.\n\n💼 **Hire from the marketplace**\nBrowse 2,400+ verified skills. Book a one-off service or hire on a project basis — all backed by our 7-day guarantee.\n\nGo to **"For Founders"** in the nav to post your first challenge →`,
    quickReplies: ['How do I post a challenge?', 'How do I book a service?', 'Tell me about the bootcamp']
  },

  // HIRING / JOBS
  {
    triggers: ['hiring','jobs','job','gig','work','employment','internship','part time','freelance','career','vacancy'],
    answer: `The **TKBees Hiring board** lists roles posted by our network of companies and community partners 💼\n\nTypes of roles:\n- 🕐 **Part-time** — flexible hours around your studies\n- 🎯 **Freelance / Gig** — project-based work\n- 📚 **Internship** — paid placements from £1,200/mo\n- 💼 **Full-time** — graduate roles from £22K\n- 🌐 **Remote** — work from anywhere\n\nAll listings are student and graduate friendly. Salaries are transparent — no "competitive salary" vagueness.\n\nGo to **"Hiring"** in the nav to browse open roles →`,
    quickReplies: ['How do I post a job?', 'Can I hire student teams?', 'Tell me about deals']
  },

  // DEALS
  {
    triggers: ['deals','discount','offer','credits','free software','student discount','save money','tools','notion','figma','aws'],
    answer: `**Discover Deals** is our curated collection of student-exclusive discounts and software credits 🏷️\n\nSome current highlights:\n- 📝 **Notion Pro** — 1 year free\n- 🎨 **Figma Professional** — free while studying\n- ☁️ **AWS Credits** — $1,000 in startup credits\n- 🤖 **GitHub Copilot** — free student plan\n- 📊 **Pitch** — 6 months Pro free\n- 🎬 **Loom Creator** — unlimited recordings free\n\n🔒 All deals require a **verified student email**. Once verified, you get instant access to the full deals vault.\n\nGo to **"Discover Deals"** in the nav →`,
    quickReplies: ['How do I verify my student email?', 'How do I join free?', 'What else is free?']
  },

  // COMMUNITY
  {
    triggers: ['community','hive','chapter','city','leaderboard','meet','meetup','local','network','connect','members'],
    answer: `The **TKBees Community** is the living hive behind the platform 🐝\n\nHow to get involved:\n- 🌍 **Join your city chapter** — we have active chapters in 38 cities across the UK\n- 🏆 **Climb the leaderboard** — earn points by booking, reviewing, contributing and attending events\n- 📅 **Attend meetups** — local events happen monthly in Manchester, London, Birmingham and Leeds\n- 💬 **What's Buzzing** — see trending ideas, shipped projects and community wins\n\n**8,400+ members** · **38 cities** · **412 verified mentors**\n\nGo to **"Community"** in the nav →`,
    quickReplies: ['What is What\'s Buzzing?', 'How do I join?', 'Where are the events?']
  },

  // WHAT'S BUZZING
  {
    triggers: ["what's buzzing","whats buzzing","buzzing","trending","news","updates","community posts","latest"],
    answer: `**What's Buzzing** is the TKBees community feed — but without the scroll-trap 🔥\n\nYou'll see:\n- 🚀 **Shipped** — projects the community just launched\n- 🏆 **Winners** — bootcamp prize winners and their stories\n- 💡 **Guides** — practical articles from members who've done it\n- ⚡ **Build** — tools, stacks and no-code wins\n- 📢 **News** — platform updates, new mentors, new deals\n\nEverything is curated by the TKBees team — no algorithms, no ads, just the most useful and inspiring things from the hive.\n\nGo to **"What's Buzzing"** in the nav →`,
    quickReplies: ['How do I contribute content?', 'How do I join?', 'Tell me about the community']
  },

  // GET HELP
  {
    triggers: ['get help','need help','ask','post a question','question','problem','stuck','support','assistance'],
    answer: `The **Get Help** page lets you post any question or challenge to the TKBees community 🤝\n\nHow it works:\n1. Describe your problem or question\n2. Choose a category (Technical, Business, Design, Mentorship, Co-founder)\n3. Set a budget (or "free help")\n4. The hive responds — often within **a few hours**\n5. Or we **auto-match you with a mentor** within 48h\n\nRecent popular questions:\n- "I need a React developer for 2 weeks"\n- "How do I validate a B2B SaaS idea?"\n- "Looking for a co-founder with UX experience"\n\nGo to **"Get Help"** in the nav →`,
    quickReplies: ['How do I find a mentor?', 'How do I book a service?', 'Tell me about the community']
  },

  // PAYMENT
  {
    triggers: ['payment','pay','how do i pay','stripe','payment method','card','bank','transfer','invoice'],
    answer: `Payments on TKBees are secure and simple:\n\n- 💳 We accept **all major cards** (Visa, Mastercard, Amex)\n- 🔒 Payments are **held in escrow** until you confirm delivery\n- 📧 Automatic **invoices and receipts** sent by email\n- 💷 All prices in **GBP**\n- 🔁 Refunds processed within **3–5 business days** where eligible\n\nProviders receive payment **24h after delivery confirmation**, minus a small platform fee (currently 10%).\n\nWe use **Stripe** for all payment processing — fully PCI-DSS compliant.`,
    quickReplies: ['What is the 7-day guarantee?', 'How do I book a service?']
  },

  // CONTACT / SUPPORT
  {
    triggers: ['contact','email','phone','speak to someone','human','support team','report','help centre','complaint','issue'],
    answer: `Need to speak to a real human? 👋\n\n- 📧 **Email:** hello@tkbees.com\n- 💬 **Response time:** within 24h (Mon–Fri, 9am–6pm GMT)\n- 🐝 **For urgent issues:** mark your email "URGENT" and we'll respond within 4h\n- 📋 **Help Centre:** click Help Centre in the footer for FAQs and guides\n- 🚨 **To report a safety issue:** safety@tkbees.com (monitored 24/7)\n\nFor booking disputes, use the in-app dispute flow and we'll step in within **48h**.`,
    quickReplies: ['What is the 7-day guarantee?', 'How do I get a refund?', 'Tell me about TKBees']
  },

  // SAFETY
  {
    triggers: ['safe','safety','scam','fraud','trust','verified','fake','report','abuse','inappropriate'],
    answer: `TKBees takes trust and safety seriously 🔒\n\n- ✅ **Every provider** is identity-verified before going live\n- ✅ **All services** are reviewed and categorised by our team\n- ✅ **Payments are held in escrow** — you only release funds when satisfied\n- ✅ **Reviews are verified** — only actual buyers can leave reviews\n- 🚨 **Report any issue** using the flag icon on any profile or listing, or email safety@tkbees.com\n\nWe have a zero-tolerance policy on misrepresentation, harassment or fraud. Accounts are suspended immediately pending investigation.`,
    quickReplies: ['How does the guarantee work?', 'How do I contact support?']
  },

  // FALLBACK
  {
    triggers: ['hello','hi','hey','good morning','good afternoon','howdy','greetings','yo','sup'],
    answer: `Hey there! 👋 I'm **Buzz**, the TKBees assistant.\n\nI can help you with:\n- 📋 Booking or listing a service\n- ⚡ Joining a bootcamp (£10K prize!)\n- 🧑‍🏫 Finding or becoming a mentor\n- 📚 Navigating the Knowledge Base\n- 🎓 University or founder partnerships\n- 💼 Jobs, deals, events and more\n\nWhat would you like to know? Type a question or pick a topic above 👆`,
    quickReplies: ['What is TKBees?', 'How do I join?', 'Tell me about the bootcamp']
  },
  {
    triggers: ['thank','thanks','cheers','great','brilliant','awesome','perfect','helpful'],
    answer: `You're welcome! Happy to help 🐝\n\nIf you've got more questions, I'm always here. And when you're ready — **join the hive**, it only takes 60 seconds and it's free for students.\n\nGood luck building! 🚀`,
    quickReplies: ['How do I join?', 'Tell me about the bootcamp', 'Browse services']
  },
];
