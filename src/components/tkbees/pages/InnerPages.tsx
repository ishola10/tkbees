"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { BUZZING, DEALS, HELP_QUESTIONS, JOBS, MENTORS, PLACES, SERVICES } from "@/constants/marketplace";
import { ALL_EVENTS, KNOWLEDGE_ARTICLES, UNI_BENEFITS, UNI_PARTNERS, UNI_TIERS, ZIP_RESOURCES, ZIP_UNI_BENEFITS } from "@/constants/content";
import { useUi } from "@/providers/UiProvider";
import { FilterChips } from "../FilterChips";
import { JoinForm } from "../JoinForm";
import { PageHero } from "../PageHero";

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-body">
      <div className="container">{children}</div>
    </div>
  );
}

export function BuzzingPage() {
  const { showToast } = useUi();
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? BUZZING : BUZZING.filter((b) => b.tag === filter);
  return (
    <>
      <PageHero kicker="🔥 What's Buzzing" kickerColor="#FF6B6B" titleHtml={<>Trending in <em>the hive</em></>} sub="Ideas, ships, wins and conversations heating up across the TKBees community right now." />
      <Body>
        <FilterChips chips={["All", "Shipped", "Winner", "Guide", "Build", "News", "Mentor"]} onChange={setFilter} />
        <div className="g3">
          {items.map((b) => (
            <div key={b.title} className="buzzing-card" onClick={() => showToast("🔥", `${b.title.substring(0, 40)}...`, "Full article opens in the app")}>
              <div className="buzzing-thumb" style={{ padding: 0, overflow: "hidden", position: "relative" }}>
                <img src={b.img} alt={b.tag} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(30,27,75,.7) 0%,transparent 50%)" }} />
                <span className="svc-tag" style={{ position: "absolute", top: 8, left: 8, zIndex: 1 }}>{b.tag}</span>
                <img src={b.authorImg} alt="Author" style={{ position: "absolute", bottom: 8, left: 8, width: 28, height: 28, borderRadius: "50%", objectFit: "cover", border: "2px solid white", zIndex: 1 }} />
              </div>
              <div className="buzzing-body">
                <div className="card-title" style={{ fontSize: 15, lineHeight: 1.35 }}>{b.title}</div>
                <div style={{ display: "flex", gap: "1rem", marginTop: ".75rem", fontSize: 12, color: "var(--dim)" }}>
                  <span>❤️ {b.likes}</span><span>💬 {b.comments}</span><span>🕐 {b.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button className="btn-indigo" type="button" onClick={() => showToast("📰", "Loading more...", "Fetching latest from the hive")}>Load more stories</button>
        </div>
      </Body>
    </>
  );
}

export function ServicesPage() {
  const { showToast } = useUi();
  const router = useRouter();
  const [filter, setFilter] = useState("All");
  const list = useMemo(() => {
    const all = [...SERVICES, ...SERVICES.slice(0, 4)];
    return filter === "All" ? all : all.filter((s) => s.tag === filter);
  }, [filter]);
  return (
    <>
      <PageHero kicker="💼 Book a Service" kickerColor="#F5A524" titleHtml={<>Student skills, <em>real prices</em></>} sub="Book any service from verified student talent. Portfolios, reviews and a 7-day satisfaction guarantee on every booking." />
      <Body>
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
          <FilterChips chips={["All", "Design", "Code", "Strategy", "Content", "Tutoring", "Photo"]} onChange={setFilter} style={{ border: "none", padding: 0 }} />
          <select className="form-sel" style={{ width: "auto", padding: "8px 14px" }}>
            <option>Sort: Most popular</option>
            <option>Price: Low to high</option>
            <option>Price: High to low</option>
            <option>Newest</option>
          </select>
        </div>
        <div className="g4">
          {list.map((s, i) => (
            <button key={`${s.title}-${i}`} className="svc-card" type="button" style={{ width: "100%" }} onClick={() => showToast(s.emo, `Booking: ${s.title}`, "Booking flow opens in the full app")}>
              <div className="svc-card-img" style={{ position: "relative", overflow: "hidden" }}>
                <img src={s.img} alt={s.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(30,27,75,.3),transparent 60%)" }} />
                <span className="svc-tag">{s.tag}</span>
                <img src={s.avatar} alt={s.from} style={{ position: "absolute", bottom: 8, left: 8, width: 28, height: 28, borderRadius: "50%", objectFit: "cover", border: "2px solid white" }} />
              </div>
              <div className="svc-body">
                <div className="svc-provider">{s.from}</div>
                <div className="svc-title">{s.title}</div>
                <div className="svc-foot">
                  <div className="svc-rating"><span className="svc-star">★</span><span>{s.rating}</span><span style={{ color: "var(--dim)" }}>({s.reviews})</span></div>
                  <div className="svc-price">from {s.price}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div style={{ marginTop: "3rem", background: "var(--indigo)", color: "var(--cream)", borderRadius: 20, padding: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: "var(--fd)", fontSize: "1.3rem", fontWeight: 900, marginBottom: ".25rem" }}>Are you a student with skills to sell?</div>
            <div style={{ fontSize: 14, color: "rgba(255,248,236,.65)" }}>Create your service listing in 5 minutes and start earning today.</div>
          </div>
          <button className="btn-lime" type="button" onClick={() => router.push("/dashboard")}>List your skills →</button>
        </div>
      </Body>
    </>
  );
}

export function PlacesPage() {
  const { showToast } = useUi();
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? PLACES : PLACES.filter((p) => p.type === filter);
  return (
    <>
      <PageHero kicker="📍 Find Places" kickerColor="#1E1B4B" titleHtml={<>Spaces where <em>makers work</em></>} sub="Study spots, makerspaces, co-working studios and late-night cafés — all near your campus, all bee-approved." />
      <Body>
        <FilterChips chips={["All", "Café", "Co-working", "Makerspace", "University", "Library", "Studio"]} onChange={setFilter} />
        <div className="g2" style={{ gap: "1.5rem" }}>
          <div className="g2">
            {items.map((p) => (
              <div key={p.name} className="place-card" onClick={() => showToast("📍", p.name, "Location details and booking in the app")}>
                <div className="place-img" style={{ padding: 0, position: "relative", overflow: "hidden" }}>
                  <img src={p.img} alt={p.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(30,27,75,.45) 0%,transparent 60%)" }} />
                  <span className="place-type" style={{ zIndex: 1, position: "relative" }}>{p.type}</span>
                </div>
                <div className="place-body">
                  <div className="place-name">{p.name}</div>
                  <div className="place-location" style={{ fontSize: 12, color: "var(--dim)" }}>📍 {p.location}</div>
                  <div className="place-tags">{p.tags.map((t) => <span className="skill-chip" key={t}>{t}</span>)}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: ".5rem", fontSize: 12 }}>
                    <span style={{ color: "#F5A524" }}>★</span>
                    <span style={{ fontFamily: "var(--fm)", fontWeight: 700 }}>{p.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <div style={{ fontFamily: "var(--fd)", fontWeight: 800, fontSize: "1.2rem", color: "var(--indigo)" }}>Interactive Map</div>
              <div style={{ fontSize: 13, color: "var(--dim)" }}>Powered by OpenStreetMap in the full app</div>
              <button className="btn-indigo btn-sm" type="button" onClick={() => showToast("🗺️", "Map view", "Interactive map loads in the full app")}>Open map view</button>
            </div>
            <div style={{ marginTop: "1.25rem", background: "var(--honey)", borderRadius: 16, padding: "1.5rem" }}>
              <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.1rem", marginBottom: ".5rem" }}>Submit a place</div>
              <div style={{ fontSize: 13, color: "rgba(30,27,75,.7)", marginBottom: "1rem" }}>Know a great study spot we&apos;ve missed? Add it to the hive.</div>
              <button className="btn-indigo btn-sm" type="button" onClick={() => showToast("📍", "Submit a place", "Thanks! We'll review and add it")}>Submit a location</button>
            </div>
          </div>
        </div>
      </Body>
    </>
  );
}

export function WhatsOnPage() {
  const { showToast } = useUi();
  const [filter, setFilter] = useState("All");
  const items = ALL_EVENTS.filter((e) => {
    if (filter === "All") return true;
    const hay = `${e.title} ${e.format}`.toLowerCase();
    return hay.includes(filter.toLowerCase());
  });
  return (
    <>
      <PageHero kicker="📅 What's On" kickerColor="#C6F432" titleHtml={<>Events, <em>hackathons</em> & meetups</>} sub="Everything happening in and around the TKBees ecosystem — from evening talks to 5-day bootcamps." />
      <Body>
        <FilterChips chips={["All", "Bootcamp", "Hackathon", "Meetup", "Workshop", "Online", "Tonight"]} onChange={setFilter} />
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {items.map((e) => (
            <div key={e.title} className="event-full-card" onClick={() => showToast("🎯", e.title, "Event details and booking in the app")}>
              <div className="event-full-card-topbar" style={{ background: `linear-gradient(90deg,transparent,${e.clr},transparent)` }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "1.5rem", alignItems: "center" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: ".5rem", flexWrap: "wrap", marginBottom: ".75rem" }}>
                    <span className={e.status === "open" ? "status-open" : "status-soon"}>{e.status === "open" ? "● Open" : "◌ Coming Soon"}</span>
                    <span style={{ fontSize: 12, color: "var(--dim)" }}>{e.date}</span>
                    <span style={{ fontSize: 12, color: "var(--dim)" }}>· {e.format}</span>
                  </div>
                  <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.2rem", color: "var(--indigo)", marginBottom: ".4rem" }}>{e.title}</div>
                  <div style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.5, maxWidth: 560 }}>{e.desc}</div>
                </div>
                <div style={{ textAlign: "center", flexShrink: 0 }}>
                  <div style={{ fontFamily: "var(--fm)", fontWeight: 800, fontSize: "1.6rem", color: "var(--indigo)", marginBottom: 3 }}>{e.prize}</div>
                  <div style={{ fontSize: 11, color: "var(--dim)", marginBottom: ".75rem" }}>{e.spots}</div>
                  <button
                    type="button"
                    onClick={(ev) => { ev.stopPropagation(); showToast("✅", e.status === "open" ? "Applied!" : "Reminder set", e.status === "open" ? "You will hear back within 72h" : "We will notify you when open"); }}
                    style={{ background: e.clr, color: e.clr === "#C6F432" ? "#1E1B4B" : "white", border: "none", padding: "9px 20px", borderRadius: 99, fontWeight: 800, fontSize: 12.5, cursor: "pointer", whiteSpace: "nowrap" }}
                  >
                    {e.status === "open" ? "Apply now →" : "Notify me"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "2.5rem", background: "var(--cream-dark)", borderRadius: 16, padding: "1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: "var(--fd)", fontWeight: 800, fontSize: "1rem", marginBottom: ".25rem" }}>Host an event on TKBees</div>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>Universities, companies and communities welcome</div>
          </div>
          <button className="btn-primary" type="button" onClick={() => showToast("🎪", "Submit event", "Form loading...")}>Submit your event →</button>
        </div>
      </Body>
    </>
  );
}

export function HelpPage() {
  const { showToast } = useUi();
  return (
    <>
      <PageHero kicker="❓ Get Help" kickerColor="#FF6B6B" titleHtml={<>Ask the hive, <em>get matched</em></>} sub="Post a question or problem. Our community of 8,000+ students, graduates and mentors will respond — or we'll match you with the right person." />
      <Body>
        <div style={{ background: "var(--indigo)", color: "var(--cream)", borderRadius: 20, padding: "2rem", marginBottom: "2rem" }}>
          <h3 style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.4rem", marginBottom: ".75rem" }}>Post your question</h3>
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-lbl" style={{ color: "rgba(255,248,236,.6)" }}>What do you need help with?</label>
            <input className="form-inp" placeholder="e.g. 'I need a React developer for my project' or 'How do I pitch to investors?'" />
          </div>
          <div className="form-2col" style={{ marginBottom: "1rem" }}>
            <div className="form-group">
              <label className="form-lbl" style={{ color: "rgba(255,248,236,.6)" }}>Category</label>
              <select className="form-sel"><option>Technical help</option><option>Business advice</option><option>Design feedback</option><option>Mentorship</option><option>Co-founder search</option><option>Other</option></select>
            </div>
            <div className="form-group">
              <label className="form-lbl" style={{ color: "rgba(255,248,236,.6)" }}>Budget</label>
              <select className="form-sel"><option>Looking for free help</option><option>Up to £50</option><option>Up to £200</option><option>Flexible</option></select>
            </div>
          </div>
          <button className="btn-primary" type="button" onClick={() => showToast("🐝", "Question posted!", "We'll match you within 48h")}>Post to the hive →</button>
        </div>
        <div className="section-kicker" style={{ color: "var(--honey-dark)", marginBottom: "1rem" }}>Recent questions from the hive</div>
        <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
          {HELP_QUESTIONS.map((h) => (
            <div key={h.q} className="help-card" onClick={() => showToast("❓", `${h.q.substring(0, 40)}...`, "Full thread opens in the app")}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                <div>
                  <span className="card-tag" style={{ background: "rgba(245,165,36,.12)", color: "var(--honey-dark)" }}>{h.tag}</span>
                  <div style={{ fontWeight: 600, color: "var(--indigo)", fontSize: 14, lineHeight: 1.4, marginBottom: ".4rem" }}>{h.q}</div>
                  <div style={{ fontSize: 11.5, color: "var(--dim)" }}>{h.time} · {h.ans} responses</div>
                </div>
                <button type="button" className="btn-primary btn-sm" style={{ flexShrink: 0 }} onClick={(e) => { e.stopPropagation(); showToast("💬", "Answering...", "Your answer will be posted"); }}>Answer</button>
              </div>
            </div>
          ))}
        </div>
      </Body>
    </>
  );
}

export function DealsPage() {
  const { openModal, showToast } = useUi();
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? DEALS : DEALS.filter((d) => d.cat === filter);
  return (
    <>
      <PageHero kicker="🏷️ Discover Deals" kickerColor="#FF6B6B" titleHtml={<>Student-exclusive <em>value</em></>} sub="Handpicked software credits, equipment hire and workshop discounts — available to verified TKBees members only." />
      <Body>
        <div style={{ background: "linear-gradient(135deg,var(--honey),#E08B10)", color: "var(--indigo)", borderRadius: 20, padding: "2rem", marginBottom: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".2em", marginBottom: ".5rem" }}>🔒 Exclusive access</div>
            <div style={{ fontFamily: "var(--fd)", fontSize: "1.4rem", fontWeight: 900 }}>Verify your student email to unlock all deals</div>
          </div>
          <button className="btn-indigo" type="button" onClick={() => openModal("signup")}>Verify now →</button>
        </div>
        <FilterChips chips={["All", "Productivity", "Design", "Code", "Cloud", "Video", "Collaboration"]} onChange={setFilter} />
        <div className="g4">
          {items.map((d) => (
            <div key={d.name} className="deal-card" onClick={() => showToast("🎁", `${d.name} deal unlocked!`, "Redirecting to claim page...")}>
              <div className="deal-card-img" style={{ background: "linear-gradient(135deg,#f0f0f0,#e0e0e0)" }}>
                <span style={{ fontSize: "3rem" }}>{d.emo}</span>
                <div className="deal-discount">{d.discount}</div>
              </div>
              <div style={{ padding: "1rem" }}>
                <div style={{ fontSize: 10, fontFamily: "var(--fm)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--dim)", marginBottom: 3 }}>{d.cat}</div>
                <div style={{ fontFamily: "var(--fd)", fontWeight: 800, fontSize: "1rem", color: "var(--indigo)", marginBottom: ".25rem" }}>{d.name}</div>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>{d.desc}</div>
                <button className="btn-primary btn-sm" type="button" style={{ marginTop: ".75rem", width: "100%", justifyContent: "center" }} onClick={(e) => { e.stopPropagation(); showToast("🎁", `Claiming ${d.name}...`, "Redirecting to claim page"); }}>Claim deal →</button>
              </div>
            </div>
          ))}
        </div>
      </Body>
    </>
  );
}

export function MentorsPage() {
  const { showToast } = useUi();
  return (
    <>
      <PageHero kicker="🎓 Mentors" kickerColor="#1E1B4B" titleHtml={<>Verified mentors, <em>bookable office hours</em></>} sub="Every mentor is hand-verified by the TKBees team. Book a 1-on-1 session, join a group office hour, or get matched based on your challenge." />
      <Body>
        <div style={{ background: "var(--honey)", borderRadius: 20, padding: "1.5rem 2rem", marginBottom: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.2rem", marginBottom: ".25rem" }}>Get matched with the right mentor</div>
            <div style={{ fontSize: 13.5, color: "rgba(30,27,75,.7)" }}>Tell us your challenge and we&apos;ll find the best mentor within 48h</div>
          </div>
          <button className="btn-indigo" type="button" onClick={() => showToast("🤝", "Mentor matching", "We'll find your match within 48h")}>Get matched →</button>
        </div>
        <FilterChips chips={["All", "Startup", "Design", "Tech", "Finance", "Marketing", "AI/ML"]} />
        <div className="g3">
          {MENTORS.map((m) => (
            <div key={m.name} className="mentor-card" onClick={() => showToast("🎓", m.name, "Booking opens in the full app")}>
              <div className="mentor-img" style={{ padding: 0, position: "relative", overflow: "hidden" }}>
                <img src={m.img} alt={m.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(30,27,75,.55) 0%,transparent 55%)" }} />
              </div>
              <div className="mentor-body">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: ".4rem" }}>
                  <div className="mentor-name">{m.name}</div>
                  {m.verified ? <span className="verified-badge">✓ Verified</span> : null}
                </div>
                <div className="mentor-role">{m.role}</div>
                <div className="mentor-skills">{m.skills.map((s) => <span className="skill-chip" key={s}>{s}</span>)}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: ".75rem", paddingTop: ".75rem", borderTop: "1px solid var(--border)" }}>
                  <div style={{ fontFamily: "var(--fm)", fontWeight: 700, fontSize: 14, color: "var(--indigo)" }}>{m.price}</div>
                  <button className="btn-primary btn-sm" type="button" onClick={(e) => { e.stopPropagation(); showToast("📅", `Booking ${m.name}`, "Calendar opens in the app"); }}>Book session</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Body>
    </>
  );
}

export function SkillsPage() {
  const { showToast } = useUi();
  const router = useRouter();
  const list = [...SERVICES, ...SERVICES.slice(0, 4)];
  return (
    <>
      <PageHero kicker="🛠️ Skills" kickerColor="#C6F432" titleHtml={<>The TKBees <em>skill graph</em></>} sub="Browse the full skill taxonomy, see who's available and what they're charging — then book directly or start a collaboration." />
      <Body>
        <FilterChips chips={["All", "Technology", "Design", "Business", "Creative", "Research", "Education"]} />
        <div className="g4">
          {list.map((s, i) => (
            <div key={`${s.title}-${i}`} className="card" onClick={() => showToast(s.emo, s.title, "Booking in the full app")}>
              <div style={{ height: 120, position: "relative", overflow: "hidden", background: `${s.accent}18` }}>
                <img src={s.img} alt={s.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <img src={s.avatar} alt={s.from} style={{ position: "absolute", bottom: 8, left: 8, width: 26, height: 26, borderRadius: "50%", objectFit: "cover", border: "2px solid white" }} />
              </div>
              <div className="card-body">
                <span className="card-tag" style={{ background: `${s.accent}18`, color: s.accent }}>{s.tag}</span>
                <div className="card-title">{s.title}</div>
                <div style={{ fontSize: 12, color: "var(--dim)", marginBottom: ".75rem" }}>{s.from}</div>
                <div className="card-foot">
                  <div style={{ fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}><span style={{ color: "#F5A524" }}>★</span><span style={{ fontFamily: "var(--fm)", fontWeight: 700 }}>{s.rating}</span></div>
                  <div style={{ fontFamily: "var(--fm)", fontWeight: 700, fontSize: 15 }}>from {s.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "2.5rem", background: "var(--indigo)", color: "var(--cream)", borderRadius: 20, padding: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.2rem", marginBottom: ".25rem" }}>Not finding what you need?</div>
            <div style={{ fontSize: 13.5, color: "rgba(255,248,236,.65)" }}>Post a help request and we&apos;ll match you with the right person in 48h.</div>
          </div>
          <button className="btn-lime" type="button" onClick={() => router.push("/help")}>Post a request →</button>
        </div>
      </Body>
    </>
  );
}

export function KnowledgePage() {
  const { showToast } = useUi();
  const [tab, setTab] = useState("All");
  const tabs = ["All", "Starter", "Build", "Pitch", "Find", "Learn", "Read"];
  const articles = tab === "All" ? KNOWLEDGE_ARTICLES : KNOWLEDGE_ARTICLES.filter((a) => a.tag === tab);
  const resourceCats = ["All", ...Array.from(new Set(ZIP_RESOURCES.map((r) => r.category)))];
  const [resCat, setResCat] = useState("All");
  const resources = resCat === "All" ? ZIP_RESOURCES : ZIP_RESOURCES.filter((r) => r.category === resCat);
  return (
    <>
      <PageHero kicker="📚 Knowledge Base" kickerColor="#F5A524" titleHtml={<>Playbooks, templates, <em>lessons forged by doers</em></>} sub="Everything we've learned building TKBees — and everything our community has shipped — in one searchable, filterable knowledge hub." />
      <Body>
        <div style={{ position: "relative", maxWidth: 560, marginBottom: "2rem" }}>
          <input type="text" placeholder="Search — e.g. 'pitch deck', 'MVP', 'co-founder'" className="form-inp" style={{ paddingLeft: 44 }} onKeyDown={(e) => e.key === "Enter" && showToast("🔍", "Searching...", "Loading results")} />
          <svg style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--muted)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
        </div>
        <div className="kb-tabs">
          {tabs.map((t) => (
            <button key={t} className={`kb-tab${tab === t ? " active" : ""}`} type="button" onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
        <div className="kb-grid">
          {articles.map((a) => (
            <button key={a.title} className="kb-card" type="button" onClick={() => showToast(a.emo, `${a.title.substring(0, 40)}...`, "Article opens in the full app")}>
              <div className="kb-hex-accent hex" style={{ background: a.color }} />
              <div className="kb-hex-icon hex"><span style={{ fontSize: "1.3rem" }}>{a.emo}</span></div>
              <div className="kb-tag">{a.tag}</div>
              <div className="kb-title">{a.title}</div>
              <div className="kb-meta"><span className="kb-read">{a.read}</span><span className="kb-cta">Read →</span></div>
            </button>
          ))}
        </div>
        <div style={{ margin: "3rem 0 1.5rem" }}>
          <div className="section-kicker" style={{ color: "var(--honey-dark)", marginBottom: ".75rem" }}>Resource library · from the hive archive</div>
          <h2 className="section-h2" style={{ fontSize: "clamp(24px,3vw,40px)" }}>Curated startup <em>resources</em></h2>
        </div>
        <FilterChips chips={resourceCats} onChange={setResCat} />
        <div className="g3">
          {resources.map((r) => (
            <a key={r.title} href={r.url} target="_blank" rel="noreferrer" className="kb-card" style={{ display: "block", textDecoration: "none" }}>
              <div className="kb-hex-accent hex" style={{ background: r.color }} />
              <div className="kb-hex-icon hex"><span style={{ fontSize: "1.3rem" }}>{r.emo}</span></div>
              <div className="kb-tag">{r.category}</div>
              <div className="kb-title">{r.title}</div>
              <div className="card-desc" style={{ marginTop: 8 }}>{r.description}</div>
              <div className="kb-meta"><span className="kb-read">External</span><span className="kb-cta">Open →</span></div>
            </a>
          ))}
        </div>
        <div style={{ marginTop: "3rem", background: "var(--indigo)", color: "var(--cream)", borderRadius: 20, padding: "2rem" }}>
          <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.3rem", marginBottom: ".5rem" }}>Contribute to the Knowledge Base</div>
          <div style={{ fontSize: 13.5, color: "rgba(255,248,236,.65)", marginBottom: "1.25rem" }}>Share what you&apos;ve shipped. Every accepted article earns you a founding-contributor badge and TKBees credits.</div>
          <button className="btn-lime" type="button" onClick={() => showToast("✍️", "Submit article", "Form loading...")}>Submit an article →</button>
        </div>
      </Body>
    </>
  );
}

export function HiringPage() {
  const { showToast } = useUi();
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? JOBS : JOBS.filter((j) => j.type === filter || (filter === "Remote" && j.title.includes("Remote")));
  return (
    <>
      <PageHero kicker="💼 Hiring" kickerColor="#1E1B4B" titleHtml={<>Jobs and <em>gigs from the network</em></>} sub="Browse roles posted by TKBees companies and community partners. Part-time, freelance, internship and full-time — all student and graduate friendly." />
      <Body>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", marginBottom: "1.5rem" }}>
          <FilterChips chips={["All", "Part-time", "Freelance", "Internship", "Full-time", "Remote"]} onChange={setFilter} style={{ border: "none", padding: 0 }} />
          <div style={{ position: "relative" }}>
            <input className="form-inp" placeholder="Search jobs…" style={{ width: 200, paddingLeft: 36 }} />
            <svg style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "var(--muted)" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: ".75rem", marginBottom: "2.5rem" }}>
          {items.map((j) => (
            <div key={j.title} className="job-card" onClick={() => showToast("💼", j.title, "Full listing opens in the app")}>
              <div className="job-company">
                <div className="job-company-logo" style={{ background: `${j.clr}18`, color: j.clr }}>{j.logo}</div>
                <div>
                  <div className="job-title">{j.title}</div>
                  <div style={{ fontSize: 12, color: "var(--dim)" }}>{j.company}</div>
                </div>
                {j.new ? <span className="status-open" style={{ marginLeft: "auto" }}>New</span> : null}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: ".5rem" }}>
                <div className="job-meta">
                  {j.skills.map((s) => <span className="job-tag" key={s}>{s}</span>)}
                  <span className="job-tag" style={{ background: "rgba(245,165,36,.12)", color: "var(--honey-dark)" }}>{j.type}</span>
                </div>
                <div style={{ fontFamily: "var(--fm)", fontWeight: 700, fontSize: 14, color: "var(--indigo)" }}>{j.salary}</div>
              </div>
              <button className="btn-primary btn-sm" type="button" style={{ marginTop: ".75rem" }} onClick={(e) => { e.stopPropagation(); showToast("✅", `Applied to ${j.title}`, "Application submitted"); }}>Apply now →</button>
            </div>
          ))}
        </div>
        <div style={{ background: "var(--honey)", borderRadius: 20, padding: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.2rem", marginBottom: ".25rem" }}>Hiring student talent?</div>
            <div style={{ fontSize: 13.5, color: "rgba(30,27,75,.7)" }}>Post a job or gig to reach 8,000+ verified students and graduates.</div>
          </div>
          <button className="btn-indigo" type="button" onClick={() => showToast("💼", "Post a job", "Listing form loading...")}>Post a job →</button>
        </div>
      </Body>
    </>
  );
}

export function CommunityPage() {
  const { showToast } = useUi();
  const chapters = ["Manchester 🐝 847 members", "London 🐝 2,140 members", "Birmingham 🐝 612 members", "Leeds 🐝 493 members", "Bristol 🐝 381 members", "Edinburgh 🐝 318 members", "Glasgow 🐝 276 members", "Liverpool 🐝 247 members"];
  const board = [
    { rank: "01", name: "Arjun M.", score: "1,240 pts", badge: "🥇" },
    { rank: "02", name: "Layla R.", score: "1,102 pts", badge: "🥈" },
    { rank: "03", name: "Daniel A.", score: "987 pts", badge: "🥉" },
    { rank: "04", name: "Mei T.", score: "856 pts", badge: "🌟" },
    { rank: "05", name: "Zara A.", score: "801 pts", badge: "🌟" },
  ];
  return (
    <>
      <PageHero kicker="🐝 Community" kickerColor="#F5A524" titleHtml={<>The TKBees <em>hive</em></>} sub="Join chapters in your city, climb the leaderboard, attend meetups, and connect with ambitious people doing ambitious things." />
      <Body>
        <div className="g3" style={{ marginBottom: "3rem" }}>
          {[
            { e: "🌍", t: "38 Cities", d: "Active chapters across the UK and beyond" },
            { e: "👥", t: "8,400+ Members", d: "Verified students, graduates and young professionals" },
            { e: "🏆", t: "412 Mentors", d: "Industry professionals with bookable slots" },
          ].map((c) => (
            <div className="comm-card" key={c.t}>
              <div style={{ fontSize: "2.5rem", marginBottom: ".5rem" }}>{c.e}</div>
              <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.3rem", marginBottom: ".25rem" }}>{c.t}</div>
              <div style={{ fontSize: 13, color: "var(--muted)" }}>{c.d}</div>
            </div>
          ))}
        </div>
        <div className="section-kicker" style={{ color: "var(--honey-dark)", marginBottom: "1rem" }}>City chapters</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: ".75rem", marginBottom: "2rem" }}>
          {chapters.map((c) => (
            <button key={c} className="comm-card" type="button" onClick={() => showToast("🌍", c.split("🐝")[0].trim(), "Chapter profile loads in app")}>
              <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--indigo)" }}>{c.split("🐝")[0]}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 3 }}>🐝 {c.split("🐝")[1]?.trim()}</div>
            </button>
          ))}
        </div>
        <div style={{ background: "var(--indigo)", color: "var(--cream)", borderRadius: 20, padding: "2rem", marginBottom: "2rem" }}>
          <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.3rem", marginBottom: ".5rem" }}>🏆 Community Leaderboard</div>
          <div style={{ fontSize: 13.5, color: "rgba(255,248,236,.65)", marginBottom: "1.5rem" }}>Top contributors this month</div>
          {board.map((l) => (
            <div key={l.rank} style={{ display: "flex", alignItems: "center", gap: ".75rem", padding: ".6rem 0", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
              <span style={{ fontFamily: "var(--fm)", fontSize: 11, color: "rgba(255,248,236,.4)", width: 24 }}>{l.rank}</span>
              <span style={{ fontSize: "1.2rem" }}>{l.badge}</span>
              <span style={{ fontWeight: 700, flex: 1 }}>{l.name}</span>
              <span style={{ fontFamily: "var(--fm)", fontSize: 12, color: "var(--honey)" }}>{l.score}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "var(--honey)", borderRadius: 20, padding: "2rem" }}>
          <JoinForm variant="plain" />
        </div>
      </Body>
    </>
  );
}

export function BootcampsPage() {
  const { showToast } = useUi();
  const router = useRouter();
  const camps = ALL_EVENTS.filter((e) => e.format.includes("sprint") || e.format.includes("intensive") || e.format.includes("day") || e.title.includes("Bootcamp") || e.title.includes("Hack"));
  return (
    <>
      <PageHero kicker="⚡ Bootcamps" kickerColor="#F5A524" titleHtml={<>Build, ship and <em>win £10,000</em></>} sub="Our signature 5-day bootcamps bring together cross-disciplinary teams to solve real challenges — with mentorship, structure and a life-changing prize." />
      <Body>
        <div className="g2" style={{ gap: "2rem", marginBottom: "3rem" }}>
          <div style={{ background: "var(--indigo)", color: "var(--cream)", borderRadius: 20, padding: "2rem" }}>
            <div style={{ fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".22em", color: "var(--lime)", marginBottom: ".5rem" }}>Next cohort · Manchester</div>
            <div style={{ fontFamily: "var(--fd)", fontSize: "2rem", fontWeight: 900, marginBottom: ".5rem" }}>5–10 June 2026</div>
            <div style={{ fontSize: 14, color: "rgba(255,248,236,.65)", marginBottom: "1.5rem" }}>Applications close 1 May 2026 · 47 spots remaining</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".75rem", marginBottom: "1.5rem" }}>
              {[["£10,000", "Prize fund"], ["48h", "Intensive"], ["12", "Teams max"], ["6+", "Expert mentors"]].map(([v, l]) => (
                <div key={l} style={{ borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: ".75rem" }}>
                  <div style={{ fontFamily: "var(--fm)", fontWeight: 800, fontSize: "1.4rem", color: "var(--honey)" }}>{v}</div>
                  <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em", color: "rgba(255,248,236,.5)", marginTop: 3 }}>{l}</div>
                </div>
              ))}
            </div>
            <button className="btn-lime" type="button" onClick={() => showToast("🎉", "Application started!", "We will email you the next steps")}>Apply for the next cohort →</button>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.4rem", marginBottom: "1rem", color: "var(--indigo)" }}>What happens in 5 days?</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
              {[
                { d: "Day 1", t: "Arrive & form teams", desc: "Meet your cohort. Pick a real problem. Build your team around complementary skills." },
                { d: "Day 2-3", t: "Build & mentor sessions", desc: "Daily workshops with industry mentors. Build, iterate, prototype. No theory — only shipping." },
                { d: "Day 4", t: "User testing", desc: "Get your product in front of real users. Feedback loops. Pivot if needed." },
                { d: "Day 5", t: "Pitch & prize", desc: "Present to a panel of investors and founders. Winning team takes home £10,000 and launch support." },
              ].map((s) => (
                <div key={s.d} style={{ background: "var(--cream-dark)", borderRadius: 12, padding: "1rem", display: "flex", gap: ".75rem" }}>
                  <span style={{ fontFamily: "var(--fm)", fontSize: 11, color: "var(--honey-dark)", whiteSpace: "nowrap", paddingTop: 2 }}>{s.d}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--indigo)", fontSize: 14, marginBottom: 2 }}>{s.t}</div>
                    <div style={{ fontSize: 13, color: "var(--muted)" }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="section-kicker" style={{ color: "var(--honey-dark)", marginBottom: "1rem" }}>All upcoming bootcamps</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {camps.map((e) => (
            <div key={e.title} className="event-full-card" onClick={() => showToast("⚡", e.title, "Details and application in the full app")}>
              <div className="event-full-card-topbar" style={{ background: e.clr }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "1.5rem", alignItems: "center" }}>
                <div>
                  <div style={{ display: "flex", gap: ".5rem", alignItems: "center", marginBottom: ".5rem" }}>
                    <span className={e.status === "open" ? "status-open" : "status-soon"}>{e.status === "open" ? "● Open" : "◌ Coming Soon"}</span>
                    <span style={{ fontSize: 12, color: "var(--dim)" }}>{e.date} · {e.format}</span>
                  </div>
                  <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.1rem", marginBottom: ".3rem" }}>{e.title}</div>
                  <div style={{ fontSize: 13, color: "var(--muted)" }}>{e.desc}</div>
                </div>
                <div style={{ textAlign: "center", flexShrink: 0 }}>
                  <div style={{ fontFamily: "var(--fm)", fontWeight: 800, fontSize: "1.5rem", marginBottom: 3 }}>{e.prize}</div>
                  <div style={{ fontSize: 11, color: "var(--dim)", marginBottom: ".75rem" }}>{e.spots}</div>
                  <button type="button" onClick={(ev) => { ev.stopPropagation(); showToast("✅", "Applied!", "You will hear back within 72h"); }} style={{ background: e.clr, color: e.clr === "#C6F432" ? "#1E1B4B" : "white", border: "none", padding: "8px 18px", borderRadius: 99, fontWeight: 800, fontSize: 12, cursor: "pointer" }}>Apply →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "2.5rem", background: "var(--cream-dark)", borderRadius: 16, padding: "1.5rem", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.1rem", marginBottom: ".5rem" }}>Are you a university or company?</div>
          <div style={{ fontSize: 13.5, color: "var(--muted)", marginBottom: "1.25rem" }}>Partner with us to run bootcamps with your student cohort or post real challenges for teams to solve.</div>
          <div style={{ display: "flex", gap: ".75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-indigo" type="button" onClick={() => router.push("/universities")}>University partnership →</button>
            <button className="btn-primary" type="button" onClick={() => router.push("/founders")}>Post a challenge →</button>
          </div>
        </div>
      </Body>
    </>
  );
}

export function UniversitiesPage() {
  const { showToast } = useUi();
  return (
    <>
      <PageHero kicker="🏛️ For Universities" kickerColor="#1E1B4B" titleHtml={<>Partner with TKBees, <em>unlock your talent pipeline</em></>} sub="Turn your student population into a living innovation engine. Our university partnership gives you structured bootcamps, verified talent, and measurable outcomes." />
      <Body>
        <div className="g2" style={{ gap: "2rem", marginBottom: "3rem" }}>
          <div>
            <h3 style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem" }}>What you get</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
              {[...UNI_BENEFITS, ...ZIP_UNI_BENEFITS].map((p) => (
                <div key={p.t} style={{ background: "var(--cream-dark)", borderRadius: 12, padding: "1.25rem", display: "flex", gap: ".75rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{p.e}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--indigo)", fontSize: 14, marginBottom: 3 }}>{p.t}</div>
                    <div style={{ fontSize: 13, color: "var(--muted)" }}>{p.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "var(--indigo)", color: "var(--cream)", borderRadius: 20, padding: "2rem" }}>
            <div style={{ fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".2em", color: "var(--lime)", marginBottom: ".75rem" }}>Apply to partner</div>
            <h3 style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.4rem", marginBottom: "1.5rem" }}>Start the conversation</h3>
            <div className="form-group"><label className="form-lbl" style={{ color: "rgba(255,248,236,.6)" }}>University name</label><input className="form-inp" placeholder="e.g. University of Manchester" /></div>
            <div className="form-group"><label className="form-lbl" style={{ color: "rgba(255,248,236,.6)" }}>Your name & role</label><input className="form-inp" placeholder="e.g. Dr. Smith, Head of Enterprise" /></div>
            <div className="form-group"><label className="form-lbl" style={{ color: "rgba(255,248,236,.6)" }}>Email</label><input className="form-inp" type="email" placeholder="you@university.ac.uk" /></div>
            <div className="form-group"><label className="form-lbl" style={{ color: "rgba(255,248,236,.6)" }}>Student population</label><select className="form-sel"><option>Under 5,000</option><option>5,000–15,000</option><option>15,000–30,000</option><option>30,000+</option></select></div>
            <button className="btn-lime" type="button" style={{ width: "100%", justifyContent: "center" }} onClick={() => showToast("🏛️", "Partnership enquiry sent!", "We will be in touch within 48 hours")}>Send enquiry →</button>
          </div>
        </div>
        <div className="section-kicker" style={{ color: "var(--honey-dark)", marginBottom: "1rem" }}>Partnership tiers · MVP is free</div>
        <div className="g3" style={{ marginBottom: "3rem" }}>
          {UNI_TIERS.map((t) => (
            <div key={t.name} className="uni-card" style={t.highlighted ? { borderColor: "var(--honey)", boxShadow: "0 12px 40px rgba(245,165,36,.18)" } : undefined}>
              <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.3rem", marginBottom: "1rem" }}>{t.name}</div>
              {t.features.map((f) => (
                <div key={f} style={{ fontSize: 13, color: "var(--muted)", marginBottom: 8 }}>✓ {f}</div>
              ))}
            </div>
          ))}
        </div>
        <div className="section-kicker" style={{ color: "var(--honey-dark)", marginBottom: "1rem" }}>Current university partners</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "1rem" }}>
          {UNI_PARTNERS.map((u, i) => (
            <div className="uni-card" key={u}>
              <div style={{ fontSize: "2.5rem", marginBottom: ".75rem" }}>{["🎓", "🏛️", "🔬", "⚗️", "🎨", "📊", "🏫", "🎓"][i]}</div>
              <div style={{ fontFamily: "var(--fd)", fontWeight: 800, fontSize: ".9rem", color: "var(--indigo)" }}>{u}</div>
              <div className="verified-badge" style={{ justifyContent: "center", marginTop: ".4rem" }}>✓ Partner</div>
            </div>
          ))}
        </div>
      </Body>
    </>
  );
}
