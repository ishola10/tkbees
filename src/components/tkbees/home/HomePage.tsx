"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ACTIVITY_FEED, SERVICES, TALENTS, TESTIMONIALS } from "@/constants/marketplace";
import { KNOWLEDGE_ARTICLES } from "@/constants/content";
import { useUi } from "@/providers/UiProvider";
import { JoinForm } from "../JoinForm";
import { Reveal, useCountUp } from "../Reveal";

function HexGrid({ rows, cols }: { rows: number; cols: number }) {
  const paths: string[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = 60 + c * 78 + (r % 2 ? 39 : 0);
      const y = 60 + r * 68;
      paths.push(`M${x} ${y} l45 26 l0 52 l-45 26 l-45 -26 l0 -52 Z`);
    }
  }
  return (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </g>
  );
}

function ActivityFeed() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ACTIVITY_FEED.length), 2600);
    return () => clearInterval(t);
  }, []);
  const items = [0, 1, 2].map((i) => ACTIVITY_FEED[(idx + i) % ACTIVITY_FEED.length]);
  return (
    <div style={{ minHeight: 88 }}>
      {items.map((f, i) => (
        <div className="activity-item" key={`${f.time}-${f.text}-${i}`} style={{ opacity: 1 - i * 0.28 }}>
          <span className="activity-bee" />
          <span className="activity-time">{f.time}</span>
          <span className="activity-text">{f.text}</span>
        </div>
      ))}
    </div>
  );
}

export function HomePage() {
  const router = useRouter();
  const { openModal, showToast } = useUi();
  const railRef = useRef<HTMLDivElement>(null);
  const ideas = useCountUp(12847);
  const cities = useCountUp(38);
  const prize = useCountUp(10000, 1800);
  const [kbTab, setKbTab] = useState("All");
  const kbTabs = ["All", "Starter", "Build", "Pitch", "Find", "Learn", "Read"];
  const kbItems =
    kbTab === "All"
      ? KNOWLEDGE_ARTICLES.slice(0, 6)
      : KNOWLEDGE_ARTICLES.filter((a) => a.tag === kbTab).slice(0, 6);

  return (
    <>
      <section className="hero grain relative">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          {Array.from({ length: 14 }, (_, i) => (
            <span
              key={i}
              className="pollen"
              style={{
                left: `${(i * 73) % 100}%`,
                bottom: `${(i * 17) % 30}%`,
                animationDelay: `${(i * 0.7) % 7}s`,
                opacity: 0.5,
              }}
            />
          ))}
        </div>
        <div className="container">
          <div className="hero-grid-layout">
            <div>
              <Reveal className="hero-eyebrow">
                <span className="hero-eyebrow-lime">✦</span> Touch Light Solution presents
              </Reveal>
              <Reveal as="h1" className="hero-h1">
                Turn{" "}
                <em style={{ position: "relative" }}>
                  ideas
                  <svg viewBox="0 0 200 22" className="hero-underline" aria-hidden="true" preserveAspectRatio="none">
                    <path d="M2 14 C 50 4, 150 4, 198 14" stroke="#C6F432" strokeWidth="8" fill="none" strokeLinecap="round" />
                  </svg>
                </em>{" "}
                into
                <br />
                <span style={{ position: "relative" }}>
                  outcomes.<span className="hero-coral-dot" />
                </span>
              </Reveal>
              <Reveal as="p" className="hero-sub">
                TKBees is the student-first ecosystem where ambitious people meet the skills, mentors and opportunities that turn ideas into real-world results. Book a service, find a place, join a bootcamp — and pollinate the next big thing.
              </Reveal>
              <Reveal className="hero-ctas">
                <button className="btn-indigo btn-lg buzz-hover" type="button" onClick={() => openModal("signup")}>
                  Join the hive — it&apos;s free
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
                <button className="btn-secondary btn-lg" type="button" onClick={() => router.push("/bootcamps")}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  See the £10K bootcamp
                </button>
              </Reveal>
              <Reveal className="hero-stats">
                <div>
                  <div className="hstat-val">{ideas}</div>
                  <div className="hstat-lbl">Ideas hatched</div>
                </div>
                <div>
                  <div className="hstat-val">{cities}</div>
                  <div className="hstat-lbl">Cities active</div>
                </div>
                <div>
                  <div className="hstat-val">£10K</div>
                  <div className="hstat-lbl">Bootcamp prize</div>
                </div>
              </Reveal>
            </div>
            <div style={{ position: "relative" }}>
              <div className="hero-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=85&fit=crop"
                  alt="Students collaborating"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(30,27,75,0.45),rgba(30,27,75,0.15))" }} />
                <div className="hero-live-badge">
                  <span style={{ position: "relative", display: "flex", width: 8, height: 8 }}>
                    <span className="ping" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--indigo)", opacity: 0.6 }} />
                    <span style={{ position: "relative", width: 8, height: 8, borderRadius: "50%", background: "var(--indigo)" }} />
                  </span>
                  The hive is live
                </div>
              </div>
              <Reveal className="hero-activity">
                <div className="activity-hdr">
                  <div className="activity-lbl">Hive activity · last 10 minutes</div>
                  <div className="activity-live">LIVE</div>
                </div>
                <ActivityFeed />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="vision-strip">
        <Reveal className="container">
          <div style={{ fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".25em", color: "var(--honey-dark)", marginBottom: "1.25rem" }}>
            Our positioning · in one line
          </div>
          <p className="vision-quote">
            &quot;TKBees connects <em>ambitious individuals</em> with the skills, people and opportunities they need to turn <em>ideas into reality</em> — through a platform that <span className="underlined">books real outcomes</span>, not feeds.&quot;
          </p>
          <div className="vision-meta">
            <span>Built by T.L. Solution</span>
            <div className="vision-divider" />
            <span>For 18–35 year olds</span>
            <div className="vision-divider" />
            <span>Real outcomes, not networking</span>
          </div>
        </Reveal>
      </div>

      <section className="service-rail">
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
            <Reveal>
              <div className="section-kicker" style={{ color: "var(--coral)" }}>Marketplace · Beelance</div>
              <h2 className="section-h2">Book a student. <em>Get it done.</em></h2>
              <p className="section-sub">Real services at student prices, delivered by verified TKBees with portfolios, reviews and 7-day guarantee.</p>
            </Reveal>
            <div className="rail-nav-btns">
              <button className="rail-btn" type="button" aria-label="Scroll left" onClick={() => railRef.current?.scrollBy({ left: -460, behavior: "smooth" })}>‹</button>
              <button className="rail-btn filled" type="button" aria-label="Scroll right" onClick={() => railRef.current?.scrollBy({ left: 460, behavior: "smooth" })}>›</button>
            </div>
          </div>
          <div className="rail-scroll" ref={railRef} style={{ scrollSnapType: "x mandatory" }}>
            <div style={{ display: "flex", gap: "1rem", width: "max-content", paddingBottom: ".5rem" }}>
              {SERVICES.map((s) => (
                <button
                  key={s.title}
                  className="svc-card"
                  type="button"
                  onClick={() => showToast(s.emo, `Booking: ${s.title}`, "Service booking opens in the full app")}
                >
                  <div className="svc-card-img">
                    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg,${s.accent}22,${s.accent}44)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3.5rem" }}>
                      {s.emo}
                    </div>
                    <span className="svc-tag">{s.tag}</span>
                    <span className="svc-badge" style={{ background: s.accent, color: s.accent === "#1E1B4B" ? "#FFF8EC" : "#1E1B4B" }}>
                      Top rated
                    </span>
                  </div>
                  <div className="svc-body">
                    <div className="svc-provider">{s.from}</div>
                    <div className="svc-title">{s.title}</div>
                    <div className="svc-foot">
                      <div className="svc-rating">
                        <span className="svc-star">★</span>
                        <span>{s.rating}</span>
                        <span style={{ color: "var(--dim)" }}>({s.reviews})</span>
                      </div>
                      <div className="svc-price">from {s.price}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pillars-wrap">
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
            <Reveal>
              <div className="section-kicker" style={{ color: "var(--honey-dark)" }}>Five things you can actually do here</div>
              <h2 className="section-h2">Not a network. <em>An ecosystem</em> for doing.</h2>
            </Reveal>
            <Reveal as="p" style={{ color: "var(--muted)", maxWidth: 360, fontSize: 14, lineHeight: 1.6 }}>
              Every pillar is built for real outcomes — not feeds, not followers. Book it, find it, attend it, ask for it, or save on it.
            </Reveal>
          </div>
          <div className="pillars-grid">
            <Reveal as="button" className="pillar-card pc0" onClick={() => router.push("/services")}>
              <div className="pillar-icon" style={{ background: "rgba(30,27,75,.1)" }}>💼</div>
              <div className="pillar-badge" style={{ background: "rgba(30,27,75,.1)", color: "var(--indigo)" }}>1,240 services live</div>
              <h3 className="pillar-h3">Book a Service</h3>
              <p className="pillar-p">&quot;I need something done.&quot; From a logo by a design student to a tutor for tomorrow&apos;s exam.</p>
              <div className="pillar-arrow">Open →</div>
              <svg className="pillar-hex-bg" viewBox="0 0 120 120" width="120" height="120">
                <path d="M60 4 L112 32 L112 88 L60 116 L8 88 L8 32 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M60 24 L92 42 L92 78 L60 96 L28 78 L28 42 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Reveal>
            <Reveal as="button" className="pillar-card pc1" onClick={() => router.push("/places")}>
              <div className="pillar-icon" style={{ background: "rgba(30,27,75,.08)" }}>📍</div>
              <div className="pillar-badge" style={{ background: "rgba(30,27,75,.08)", color: "var(--indigo)" }}>Mapped in 38 cities</div>
              <h3 className="pillar-h3">Find Places</h3>
              <p className="pillar-p">Study spots, makerspaces, late-night cafés near campus.</p>
              <div className="pillar-arrow">Open →</div>
            </Reveal>
            <Reveal as="button" className="pillar-card pc2" onClick={() => router.push("/whats-on")}>
              <div className="pillar-icon" style={{ background: "rgba(255,255,255,.12)" }}>📅</div>
              <div className="pillar-badge" style={{ background: "rgba(255,255,255,.1)", color: "var(--cream)" }}>84 happening this week</div>
              <h3 className="pillar-h3">What&apos;s On</h3>
              <p className="pillar-p">Events, hackathons, bootcamps and meetups — including our £10K flagship cohort.</p>
              <div className="pillar-arrow">Open →</div>
              <svg className="pillar-hex-bg" viewBox="0 0 120 120" width="120" height="120">
                <path d="M60 4 L112 32 L112 88 L60 116 L8 88 L8 32 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </Reveal>
            <Reveal as="button" className="pillar-card pc3" onClick={() => router.push("/help")}>
              <div className="pillar-icon" style={{ background: "rgba(30,27,75,.1)" }}>❓</div>
              <div className="pillar-badge" style={{ background: "rgba(30,27,75,.1)", color: "var(--indigo)" }}>412 mentors verified</div>
              <h3 className="pillar-h3">Get Help</h3>
              <p className="pillar-p">Post a problem, get matched in 48h.</p>
              <div className="pillar-arrow">Open →</div>
            </Reveal>
            <Reveal as="button" className="pillar-card pc4" onClick={() => router.push("/deals")}>
              <div className="pillar-icon" style={{ background: "rgba(255,255,255,.18)" }}>🏷️</div>
              <div className="pillar-badge" style={{ background: "rgba(255,255,255,.15)", color: "white" }}>Save up to 70%</div>
              <h3 className="pillar-h3">Discover Deals</h3>
              <p className="pillar-p">Student-friendly value — credits, hire, workshops.</p>
              <div className="pillar-arrow">Open →</div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="talent-section">
        <div className="container" style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <Reveal>
              <div className="section-kicker" style={{ color: "var(--honey-dark)" }}>Featured TKBees · the talent wall</div>
              <h2 className="section-h2">Meet the makers.<br /><em>Available this week.</em></h2>
            </Reveal>
            <Reveal as="p" style={{ color: "var(--muted)", maxWidth: 380, fontSize: 14, lineHeight: 1.6 }}>
              Every face is a verified student or graduate with a portfolio, reviews and bookable services. Hover to pause the swarm.
            </Reveal>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ display: "flex" }} className="a-marquee">
            {[...TALENTS, ...TALENTS].map((t, i) => (
              <button
                key={`${t.name}-${i}`}
                className="talent-card"
                type="button"
                style={{ marginRight: "1.25rem", flexShrink: 0, width: 230 }}
                onClick={() => showToast("👤", t.name, "Profile opens in the full app")}
              >
                <div className="talent-hex-wrap">
                  <div className="talent-hex-bg hex" style={{ background: t.color }} />
                  <div className="talent-hex-img hex">
                    <div style={{ width: "100%", height: "100%", background: `${t.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
                      {t.emo}
                    </div>
                  </div>
                </div>
                <div className="talent-name">{t.name}</div>
                <div className="talent-role">{t.role}</div>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: ".5rem" }}>
                  {t.skills.map((s) => (
                    <span className="skill-chip" key={s}>{s}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
          <div style={{ position: "absolute", insetBlock: 0, left: 0, width: 80, background: "linear-gradient(to right,var(--cream),transparent)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", insetBlock: 0, right: 0, width: 80, background: "linear-gradient(to left,var(--cream),transparent)", pointerEvents: "none" }} />
        </div>
      </section>

      <section className="bootcamp-wrap">
        <svg viewBox="0 0 600 600" style={{ position: "absolute", right: "-10rem", top: "-5rem", width: 640, height: 640, opacity: 0.06, color: "var(--cream)" }} aria-hidden="true">
          <HexGrid rows={7} cols={7} />
        </svg>
        <div className="container">
          <div className="bootcamp-grid">
            <Reveal style={{ position: "relative" }}>
              <div className="bootcamp-img-wrap">
                <img className="bootcamp-img" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=85&fit=crop" alt="Bootcamp team working" style={{ objectFit: "cover" }} />
                <div className="bootcamp-img-overlay" />
                <div className="bootcamp-img-info">
                  <div>
                    <div style={{ fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".22em", color: "var(--lime)", marginBottom: 4 }}>
                      Next cohort · Manchester
                    </div>
                    <div style={{ fontFamily: "var(--fd)", fontSize: "1.5rem", fontWeight: 900, color: "var(--cream)" }}>5–10 June 2026</div>
                  </div>
                  <span className="status-closed" style={{ background: "var(--coral)", color: "white", border: "none" }}>47 spots left</span>
                </div>
              </div>
              <div className="bootcamp-prize-card">
                <div className="bootcamp-prize-lbl">Winners take home</div>
                <div className="bootcamp-prize-amt">£{prize}</div>
                <div style={{ fontSize: 11.5, fontWeight: 600 }}>+ launch support & mentorship</div>
              </div>
            </Reveal>
            <Reveal>
              <div className="hero-eyebrow" style={{ background: "var(--honey)", color: "var(--indigo)", marginBottom: "1.25rem" }}>🏆 The Experience Layer</div>
              <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(32px,4.5vw,62px)", fontWeight: 900, lineHeight: 0.95, marginBottom: "1rem" }}>
                Bootcamps that <em style={{ fontStyle: "italic", color: "var(--honey)" }}>build</em>,
                <br />not just teach.
              </h2>
              <p style={{ color: "rgba(255,248,236,.75)", fontSize: 15, lineHeight: 1.6, maxWidth: 480, marginBottom: "2.5rem" }}>
                5 days. Real problems. Real teams. A live execution sprint backed by universities, mentored by industry, judged by founders.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".75rem", marginBottom: "2rem" }}>
                {[
                  { num: "01", emo: "💡", title: "Bring an idea", desc: "Or pick a real-world problem sourced from our university and industry partners." },
                  { num: "02", emo: "👥", title: "Form a team", desc: "Match with complementary skills — designers, coders, marketers, builders." },
                  { num: "03", emo: "🚀", title: "Build it live", desc: "5-day intensive with mentors, workshops and daily checkpoints. No theory — only shipping." },
                  { num: "04", emo: "🏆", title: "Pitch & launch", desc: "Final showcase to investors. Winning team takes the £10K and launch support." },
                ].map((s) => (
                  <div className="step-card" key={s.num}>
                    <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: ".4rem" }}>
                      <span className="step-num">{s.num}</span>
                      <span style={{ fontSize: "1.1rem" }}>{s.emo}</span>
                    </div>
                    <div className="step-title">{s.title}</div>
                    <div className="step-desc">{s.desc}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem" }}>
                <button className="btn-primary" type="button" onClick={() => router.push("/bootcamps")}>Apply for the next cohort</button>
                <button className="btn-ghost" type="button" onClick={() => router.push("/universities")}>I&apos;m a university partner</button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="kb-wrap">
        <div className="container">
          <Reveal style={{ display: "grid", gap: "2rem", alignItems: "end", marginBottom: "2rem" }}>
            <div className="g2">
              <div>
                <div className="section-kicker" style={{ color: "var(--honey-dark)" }}>The Knowledge Base · because we&apos;re called The Knowledge Bees</div>
                <h2 className="section-h2">Playbooks, templates and lessons<br /><em>forged by people who shipped.</em></h2>
              </div>
              <div>
                <div style={{ position: "relative", maxWidth: 420 }}>
                  <input
                    type="text"
                    placeholder="Search the Knowledge Base — e.g. 'pitch deck'"
                    className="form-inp"
                    style={{ paddingLeft: 42, paddingRight: 90 }}
                    onKeyDown={(e) => e.key === "Enter" && showToast("🔍", "Knowledge search", "Loading results...")}
                  />
                  <svg style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--muted)" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  <button type="button" onClick={() => showToast("🔍", "Searching...", "Loading results")} style={{ position: "absolute", right: 4, top: 4, height: 36, padding: "0 14px", borderRadius: 10, background: "var(--honey)", border: "none", fontSize: 12, fontWeight: 700, cursor: "pointer", color: "var(--indigo)" }}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="kb-tabs">
            {kbTabs.map((t) => (
              <button key={t} className={`kb-tab${kbTab === t ? " active" : ""}`} type="button" onClick={() => setKbTab(t)}>
                {t}
              </button>
            ))}
          </div>
          <div className="kb-grid">
            {kbItems.map((a) => (
              <button key={a.title} className="kb-card" type="button" onClick={() => showToast(a.emo, `${a.title.substring(0, 40)}...`, "Article opens in the full app")}>
                <div className="kb-hex-accent hex" style={{ background: a.color }} />
                <div className="kb-hex-icon hex"><span style={{ fontSize: "1.3rem" }}>{a.emo}</span></div>
                <div className="kb-tag">{a.tag}</div>
                <div className="kb-title">{a.title}</div>
                <div className="kb-meta">
                  <span className="kb-read">{a.read}</span>
                  <span className="kb-cta">Read →</span>
                </div>
              </button>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <button className="btn-indigo" type="button" onClick={() => router.push("/knowledge")}>View the full Knowledge Base →</button>
          </div>
        </div>
      </section>

      <section className="testimonials-wrap">
        <div className="container">
          <Reveal style={{ marginBottom: "3rem" }}>
            <div className="section-kicker" style={{ color: "var(--honey-dark)" }}>Voices from the hive</div>
            <h2 className="section-h2">People who came with ideas.<br /><em>They left with outcomes.</em></h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.25rem" }}>
            {TESTIMONIALS.map((t) => (
              <Reveal as="figure" className="testimonial-card" key={t.name}>
                <div className="testimonial-quote-mark" style={{ color: t.clr }}>&quot;</div>
                <blockquote className="testimonial-blockquote">{t.q}</blockquote>
                <figcaption className="testimonial-figcaption">
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <img src={t.avatar} alt={t.name} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: `2px solid ${t.clr}` }} />
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </figcaption>
                <span className="testimonial-hex-bg hex" style={{ background: t.clr }} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="join-wrap">
        <svg viewBox="0 0 600 600" style={{ position: "absolute", left: "-8rem", top: "-8rem", width: 700, height: 700, opacity: 0.12, color: "var(--indigo)" }} aria-hidden="true">
          <HexGrid rows={8} cols={8} />
        </svg>
        <div className="container">
          <div className="join-grid">
            <Reveal>
              <div style={{ fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".22em", marginBottom: "1rem" }}>Phase 1 · Waitlist now open</div>
              <h2 className="join-h2">Be the first<br />in the <em>hive.</em></h2>
              <p className="join-sub">Early TKBees get the best mentors, the first £10K bootcamp slots, and a permanent founding-member badge. Pick a lane and drop your email.</p>
            </Reveal>
            <Reveal>
              <JoinForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
