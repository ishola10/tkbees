"use client";

import { useMemo, useState } from "react";
import {
  FOUNDER_CITIES,
  FOUNDER_NEIGHBOURHOODS,
  FOUNDER_SECTORS,
  FOUNDERS,
  SECTOR_BADGES,
  type FounderProfile,
} from "@/constants/founders";
import { useUi } from "@/providers/UiProvider";

function hexBg() {
  const paths: string[] = [];
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 7; c++) {
      const x = 50 + c * 88 + (r % 2 ? 44 : 0);
      const y = 50 + r * 76;
      paths.push(`M${x} ${y} l44 25 l0 50 l-44 25 l-44 -25 l0 -50 Z`);
    }
  }
  return paths;
}

export function FoundersPage() {
  const { showToast } = useUi();
  const [sector, setSector] = useState("All");
  const [city, setCity] = useState("All Cities");
  const [nb, setNb] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [q, setQ] = useState("");
  const [modal, setModal] = useState<FounderProfile | null>(null);
  const [netWho, setNetWho] = useState("");
  const [netName, setNetName] = useState("");

  const list = useMemo(() => {
    return FOUNDERS.filter((f) => {
      if (sector !== "All" && f.sector !== sector && !(sector === "Craft" && f.sector === "Craft & Design")) return false;
      if (city !== "All Cities" && f.city !== city) return false;
      if (nb !== "All" && f.area !== nb) return false;
      if (q) {
        const hay = `${f.name} ${f.biz} ${f.niche} ${f.area} ${f.story}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [sector, city, nb, q]);

  const featured = FOUNDERS.filter((f) => f.featured).slice(0, 4);

  return (
    <>
      <div style={{ background: "var(--indigo)", color: "var(--cream)", padding: "3.5rem 0 0", position: "relative", overflow: "hidden" }}>
        <svg viewBox="0 0 600 400" style={{ position: "absolute", right: "-4rem", top: "-4rem", width: 560, opacity: 0.06, color: "var(--cream)" }} aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            {hexBg().map((d) => <path key={d} d={d} />)}
          </g>
        </svg>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 14px", borderRadius: 99, background: "rgba(245,165,36,.15)", border: "1px solid rgba(245,165,36,.3)", color: "var(--honey)", fontSize: 10.5, fontWeight: 800, letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            🗺️ Hidden Treasures of British Business
          </div>
          <h1 style={{ fontFamily: "var(--fd)", fontSize: "clamp(38px,6vw,84px)", fontWeight: 900, lineHeight: 0.92, letterSpacing: "-.03em", marginBottom: "1.25rem" }}>
            Every city has<br /><em style={{ fontStyle: "italic", color: "var(--honey)" }}>untold stories.</em><br />
            <span style={{ color: "rgba(255,248,236,.35)" }}>We&apos;re telling them.</span>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,248,236,.65)", maxWidth: 580, lineHeight: 1.7, marginBottom: "2rem" }}>
            TKBees surfaces the professionals, craftspeople, restaurateurs, artists, coaches and makers who are quietly building extraordinary things across the UK — starting in Manchester. Not startups. Not pitch decks. Real businesses. Real people.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", marginBottom: "2.5rem" }}>
            <button className="btn-primary" type="button" onClick={() => document.getElementById("foundersGrid")?.scrollIntoView({ behavior: "smooth" })}>Explore the network →</button>
            <button className="btn-ghost" type="button" onClick={() => document.getElementById("founderJoinForm")?.scrollIntoView({ behavior: "smooth" })}>Add your business</button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", padding: "1.75rem 0", borderTop: "1px solid rgba(255,255,255,.1)" }}>
            {[["240+", "Professionals profiled"], ["38", "UK cities mapped"], ["18", "Business sectors"], ["Manchester", "Starting here"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--fm)", fontWeight: 800, fontSize: "1.6rem", color: "var(--honey)", lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 10.5, textTransform: "uppercase", letterSpacing: ".18em", color: "rgba(255,248,236,.45)", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,.04)", borderTop: "1px solid rgba(255,255,255,.08)", marginTop: "1.5rem", padding: ".75rem 0", overflow: "hidden" }}>
          <div style={{ display: "flex", gap: "1.5rem", animation: "marquee 45s linear infinite", width: "max-content" }}>
            {[...FOUNDERS, ...FOUNDERS].map((f, i) => (
              <span key={`${f.name}-${i}`} style={{ display: "inline-flex", alignItems: "center", gap: ".6rem", flexShrink: 0, fontSize: 12.5, color: "rgba(255,248,236,.55)", whiteSpace: "nowrap" }}>
                <img src={f.img} alt={f.name} style={{ width: 24, height: 24, borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(255,255,255,.2)" }} />
                <strong style={{ color: "rgba(255,248,236,.85)" }}>{f.name}</strong> · {f.biz} · {f.area}
                <span style={{ color: "rgba(245,165,36,.4)" }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: "white", borderBottom: "1px solid var(--border)", padding: "1rem 2rem", position: "sticky", top: 68, zIndex: 50 }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: ".75rem", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".15em", color: "var(--dim)" }}>Sector</div>
            {FOUNDER_SECTORS.map((s) => (
              <button key={s} className={`fchip${sector === s ? " on" : ""}`} type="button" style={{ fontSize: 11, padding: "4px 12px" }} onClick={() => setSector(s)}>{s}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: ".5rem", alignItems: "center", flexWrap: "wrap" }}>
            {FOUNDER_CITIES.map((c) => (
              <button key={c} className={`fchip${city === c ? " on" : ""}`} type="button" style={{ fontSize: 11, padding: "4px 12px" }} onClick={() => setCity(c)}>{c}</button>
            ))}
            <div style={{ position: "relative" }}>
              <input className="form-inp" placeholder="Search name, niche, area…" style={{ width: 210, paddingLeft: 34, height: 36, fontSize: 12.5 }} value={q} onChange={(e) => setQ(e.target.value)} />
              <svg style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "var(--dim)" }} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "2.5rem 2rem 5rem" }}>
        <div style={{ background: "var(--honey)", borderRadius: 24, padding: "2.5rem", marginBottom: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(30,27,75,.08)" }} />
          <div>
            <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".25em", marginBottom: ".75rem", display: "flex", alignItems: "center", gap: 8, color: "var(--indigo)" }}>
              <span style={{ width: 20, height: 2, background: "var(--indigo)", display: "inline-block", borderRadius: 1 }} />Manchester Spotlight
            </div>
            <h2 style={{ fontFamily: "var(--fd)", fontSize: "clamp(24px,3.5vw,46px)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-.02em", marginBottom: "1rem", color: "var(--indigo)" }}>The businesses you walk past every day but never knew about.</h2>
            <p style={{ fontSize: 14, color: "rgba(30,27,75,.7)", lineHeight: 1.6, maxWidth: 420, marginBottom: "1.5rem" }}>Manchester&apos;s creative economy is worth £8.4bn — and most of it isn&apos;t on Instagram. TKBees maps the craftspeople, practitioners and owners building quietly and brilliantly, neighbourhood by neighbourhood.</p>
            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              <button className="btn-indigo" type="button" onClick={() => setCity("Manchester")}>Explore Manchester →</button>
              <button type="button" style={{ background: "none", border: "2px solid rgba(30,27,75,.3)", color: "var(--indigo)", padding: "0 20px", height: 44, borderRadius: 99, fontWeight: 700, fontSize: 13, cursor: "pointer" }} onClick={() => document.getElementById("founderJoinForm")?.scrollIntoView({ behavior: "smooth" })}>Add your business</button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".75rem", position: "relative", zIndex: 1 }}>
            {featured.map((f) => (
              <div key={f.name} style={{ background: "white", borderRadius: 16, overflow: "hidden", cursor: "pointer" }} onClick={() => setModal(f)}>
                <div style={{ height: 100, position: "relative", overflow: "hidden" }}>
                  <img src={f.bizImg} alt={f.biz} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(30,27,75,.5),transparent)" }} />
                  <img src={f.img} alt={f.name} style={{ position: "absolute", bottom: 8, left: 8, width: 30, height: 30, borderRadius: "50%", objectFit: "cover", border: "2px solid white" }} />
                </div>
                <div style={{ padding: ".65rem .75rem" }}>
                  <div style={{ fontFamily: "var(--fd)", fontWeight: 800, fontSize: ".82rem", color: "var(--indigo)", lineHeight: 1.2 }}>{f.name}</div>
                  <div style={{ fontSize: 10.5, color: "var(--dim)", marginTop: 2 }}>{f.niche}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".25em", color: "var(--honey-dark)", marginBottom: ".75rem" }}>📍 Manchester neighbourhoods</div>
          <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
            {FOUNDER_NEIGHBOURHOODS.map((n) => (
              <button key={n} className={`fchip${nb === n ? " on" : ""}`} type="button" style={{ fontSize: 11, padding: "4px 12px" }} onClick={() => setNb(n)}>{n}</button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
          <div>
            <div style={{ fontSize: 12.5, color: "var(--muted)", marginBottom: 4 }}>Showing {list.length} of {FOUNDERS.length} profiles</div>
            <h2 style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.6rem", color: "var(--indigo)" }}>Hidden treasures, <em style={{ fontStyle: "italic", color: "var(--honey-dark)" }}>mapped.</em></h2>
          </div>
          <div style={{ display: "flex", gap: ".5rem" }}>
            <button type="button" onClick={() => setView("grid")} style={{ width: 36, height: 36, borderRadius: 8, border: "1.5px solid var(--border)", background: view === "grid" ? "var(--indigo)" : "white", color: view === "grid" ? "white" : "var(--indigo)", cursor: "pointer" }}>⊞</button>
            <button type="button" onClick={() => setView("list")} style={{ width: 36, height: 36, borderRadius: 8, border: "1.5px solid var(--border)", background: view === "list" ? "var(--indigo)" : "white", color: view === "list" ? "white" : "var(--indigo)", cursor: "pointer" }}>☰</button>
          </div>
        </div>

        <div id="foundersGrid">
          {list.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem", color: "var(--muted)" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
              <div style={{ fontFamily: "var(--fd)", fontSize: "1.2rem", fontWeight: 900, marginBottom: ".5rem", color: "var(--indigo)" }}>No profiles found</div>
              <p style={{ fontSize: 14 }}>Try a different search, city or sector</p>
            </div>
          ) : view === "grid" ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.25rem" }}>
              {list.map((f) => (
                <div key={f.name} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden", cursor: "pointer" }} onClick={() => setModal(f)}>
                  <div style={{ height: 180, position: "relative", overflow: "hidden" }}>
                    <img src={f.bizImg} alt={f.biz} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(30,27,75,.7) 0%,transparent 55%)" }} />
                    <span style={{ position: "absolute", top: 10, left: 10, fontSize: 10, fontFamily: "var(--fm)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", padding: "3px 8px", borderRadius: 6, background: "var(--indigo)", color: "var(--cream)" }}>{f.sector}</span>
                    {f.featured ? <span style={{ position: "absolute", top: 10, right: 10, fontSize: 10, fontWeight: 800, padding: "3px 8px", borderRadius: 6, background: "var(--honey)", color: "var(--indigo)" }}>★ Featured</span> : null}
                    <div style={{ position: "absolute", bottom: 12, left: 12, display: "flex", alignItems: "center", gap: 8 }}>
                      <img src={f.img} alt={f.name} style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", border: "2px solid white" }} />
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "white", lineHeight: 1.2 }}>{f.name}</div>
                        <div style={{ fontSize: 10, color: "rgba(255,255,255,.7)" }}>{f.area}, {f.city}</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1rem", color: "var(--indigo)", marginBottom: 2 }}>{f.biz} {f.verified ? <span style={{ color: "#166534", fontSize: 10.5 }}>✓</span> : null}</div>
                    <div style={{ fontSize: 11.5, color: "var(--dim)", marginBottom: ".875rem" }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5, marginBottom: ".875rem" }}>{f.story}</div>
                    <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: ".875rem" }}>
                      {f.tags.map((t) => <span key={t} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 6, background: "rgba(245,165,36,.12)", color: "var(--honey-dark)", fontWeight: 700 }}>{t}</span>)}
                    </div>
                    <div style={{ fontSize: 11.5, color: "#166534", marginBottom: "1rem", padding: ".5rem .75rem", background: "rgba(22,101,52,.06)", borderRadius: 8, borderLeft: "3px solid #C6F432" }}>🤝 {f.network}</div>
                    <div style={{ display: "flex", gap: ".5rem" }}>
                      <button className="btn-primary btn-sm" type="button" style={{ flex: 1, justifyContent: "center" }} onClick={(e) => { e.stopPropagation(); setModal(f); }}>Full story →</button>
                      <button type="button" style={{ width: 36, height: 36, borderRadius: 10, border: "1.5px solid var(--border)", background: "none", cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); showToast("🤝", "Connection request sent", `${f.name} will be notified`); }}>🤝</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            list.map((f) => (
              <div key={f.name} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "1.25rem", marginBottom: ".75rem", display: "flex", gap: "1.25rem", alignItems: "flex-start", cursor: "pointer", flexWrap: "wrap" }} onClick={() => setModal(f)}>
                <img src={f.img} alt={f.name} style={{ width: 60, height: 60, borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "2px solid var(--honey)" }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1rem", color: "var(--indigo)" }}>{f.name} {f.verified ? <span style={{ color: "#166534", fontSize: 11, fontWeight: 600 }}>✓ Verified</span> : null}</div>
                  <div style={{ fontSize: 12.5, color: "var(--muted)" }}>{f.title} · <strong style={{ color: "var(--indigo)" }}>{f.biz}</strong></div>
                  <div style={{ fontSize: 12.5, color: "var(--dim)", margin: ".5rem 0" }}>📍 {f.area}, {f.city} · {f.niche}</div>
                  <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>{f.story}</div>
                </div>
                <button className="btn-primary btn-sm" type="button" onClick={(e) => { e.stopPropagation(); setModal(f); }}>View profile</button>
              </div>
            ))
          )}
        </div>

        <div style={{ margin: "4rem 0 3rem" }}>
          <div style={{ fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".25em", color: "var(--honey-dark)", marginBottom: ".75rem" }}>Sectors in the spotlight</div>
          <h2 style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "clamp(24px,3vw,42px)", marginBottom: "2rem", color: "var(--indigo)" }}>Every walk of <em style={{ fontStyle: "italic", color: "var(--honey-dark)" }}>life.</em> Every kind of <em style={{ fontStyle: "italic", color: "var(--honey-dark)" }}>business.</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: ".75rem" }}>
            {SECTOR_BADGES.map((s) => (
              <button key={s.s} type="button" onClick={() => setSector(s.s)} style={{ background: `${s.c}18`, border: `1.5px solid ${s.c}44`, borderRadius: 14, padding: "1.25rem 1rem", textAlign: "center", cursor: "pointer", fontFamily: "var(--fb)" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: ".5rem" }}>{s.e}</div>
                <div style={{ fontWeight: 700, fontSize: ".85rem", color: "var(--indigo)" }}>{s.s}</div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{s.n} profiles</div>
              </button>
            ))}
          </div>
        </div>

        <div style={{ background: "var(--indigo)", color: "var(--cream)", borderRadius: 24, padding: "2.5rem", marginBottom: "3rem" }}>
          <div className="g2" style={{ gap: "2rem", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".22em", color: "var(--lime)", marginBottom: ".75rem" }}>🤝 Smart Networking</div>
              <h3 style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "clamp(22px,3vw,38px)", lineHeight: 1, marginBottom: ".75rem" }}>Tell us who you need.<br />We&apos;ll find them.</h3>
              <p style={{ fontSize: 14, color: "rgba(255,248,236,.65)", lineHeight: 1.65, marginBottom: "1.5rem" }}>Not random connections — deliberate ones. Tell us your business and what collaborator or supplier you&apos;re looking for. We match you with three verified profiles within 48 hours.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}>
                {["I need a photographer", "Looking for a caterer", "Want a financial advisor", "Need a designer", "Looking for a studio space", "Want a wellness coach"].map((t) => (
                  <button key={t} type="button" onClick={() => setNetWho(t)} style={{ fontSize: 11.5, fontWeight: 600, padding: "5px 12px", borderRadius: 99, border: "1px solid rgba(198,244,50,.3)", background: "rgba(198,244,50,.08)", color: "var(--lime)", cursor: "pointer", fontFamily: "var(--fb)" }}>{t}</button>
                ))}
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 18, padding: "1.75rem" }}>
              <div style={{ fontSize: ".95rem", fontWeight: 700, marginBottom: "1.25rem", color: "var(--honey)" }}>Get matched in 48h</div>
              <div className="form-group"><label className="form-lbl" style={{ color: "rgba(255,248,236,.55)" }}>Your name</label><input className="form-inp" value={netName} onChange={(e) => setNetName(e.target.value)} placeholder="e.g. Adeola Mensah" /></div>
              <div className="form-group"><label className="form-lbl" style={{ color: "rgba(255,248,236,.55)" }}>Your business & sector</label><input className="form-inp" placeholder="e.g. Florist · Creative" /></div>
              <div className="form-group"><label className="form-lbl" style={{ color: "rgba(255,248,236,.55)" }}>Who are you looking to connect with?</label><input className="form-inp" value={netWho} onChange={(e) => setNetWho(e.target.value)} placeholder="e.g. Wedding photographers in Manchester" /></div>
              <div className="form-group"><label className="form-lbl" style={{ color: "rgba(255,248,236,.55)" }}>Your city</label><select className="form-sel"><option>Manchester</option><option>London</option><option>Birmingham</option><option>Leeds</option></select></div>
              <button className="btn-lime" type="button" style={{ width: "100%", justifyContent: "center" }} onClick={() => netName ? showToast("🤝", "Match request sent!", "We'll send 3 profiles within 48h") : showToast("⚠️", "Please add your name", "")}>Find my match →</button>
            </div>
          </div>
        </div>

        <div id="founderJoinForm" style={{ background: "var(--cream-dark)", borderRadius: 24, padding: "2.5rem" }}>
          <div className="g2" style={{ gap: "3rem", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".22em", color: "var(--honey-dark)", marginBottom: ".75rem" }}>📌 Add your business</div>
              <h3 style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "clamp(24px,3vw,42px)", lineHeight: 0.95, marginBottom: ".75rem", color: "var(--indigo)" }}>Your business deserves<br />to be <em style={{ fontStyle: "italic", color: "var(--honey-dark)" }}>found.</em></h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65, marginBottom: "1.5rem" }}>Whether you&apos;re a sole trader, a studio of three, or a 20-year institution — if you&apos;re doing something remarkable, we want to profile you.</p>
              {["✅ Free to list — forever", "🔍 Found by TKBees' 8,000+ members", "🤝 Matched with collaborators, suppliers and clients"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: ".6rem", fontSize: 13.5, color: "var(--indigo)", marginBottom: 8 }}>{t}</div>
              ))}
            </div>
            <div>
              <div className="form-group"><label className="form-lbl">Your full name</label><input className="form-inp" placeholder="e.g. Marcus Brodie" /></div>
              <div className="form-group"><label className="form-lbl">Business name</label><input className="form-inp" placeholder="e.g. Brodie & Grain" /></div>
              <div className="form-2col">
                <div className="form-group"><label className="form-lbl">Sector</label><select className="form-sel"><option>Creative</option><option>Wellness</option><option>Hospitality</option></select></div>
                <div className="form-group"><label className="form-lbl">City / Area</label><input className="form-inp" placeholder="e.g. Manchester, Ancoats" /></div>
              </div>
              <div className="form-group"><label className="form-lbl">Your story</label><textarea className="form-inp" rows={4} placeholder="Tell us what makes you special…" style={{ resize: "vertical" }} /></div>
              <button className="btn-primary" type="button" style={{ width: "100%", justifyContent: "center" }} onClick={() => showToast("🌟", "Profile submitted!", "We'll review and publish within 72h")}>Submit my profile →</button>
            </div>
          </div>
        </div>
      </div>

      <div className={`modal-overlay${modal ? " open" : ""}`} onClick={(e) => e.target === e.currentTarget && setModal(null)}>
        {modal ? (
          <div className="modal" style={{ maxWidth: 680, padding: 0, overflow: "hidden", maxHeight: "88vh", overflowY: "auto" }}>
            <button className="modal-close" type="button" onClick={() => setModal(null)}>✕</button>
            <div style={{ height: 280, position: "relative", overflow: "hidden" }}>
              <img src={modal.bizImg} alt={modal.biz} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(30,27,75,.85) 0%,rgba(30,27,75,.2) 60%,transparent)" }} />
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "4rem", display: "flex", gap: "1rem", alignItems: "flex-end" }}>
                <img src={modal.img} alt={modal.name} style={{ width: 70, height: 70, borderRadius: "50%", objectFit: "cover", border: "3px solid var(--honey)", flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.4rem", color: "white", lineHeight: 1.1 }}>{modal.name}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,.75)", marginTop: 3 }}>{modal.title}</div>
                  <div style={{ fontSize: 11.5, color: "var(--honey)", marginTop: 4 }}>📍 {modal.area}, {modal.city}</div>
                </div>
              </div>
            </div>
            <div style={{ padding: "1.75rem" }}>
              <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.2rem", color: "var(--indigo)" }}>{modal.biz}</div>
              <div style={{ fontSize: 12, color: "var(--dim)", margin: "2px 0 1rem" }}>{modal.niche} · {modal.sector}</div>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>{modal.story}</p>
              <div style={{ background: "rgba(22,101,52,.06)", border: "1px solid rgba(198,244,50,.3)", borderRadius: 12, padding: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".15em", color: "#166534", marginBottom: ".4rem" }}>🤝 Looking to connect with</div>
                <div style={{ fontSize: 13.5, color: "var(--indigo)" }}>{modal.network}</div>
              </div>
              <button className="btn-primary" type="button" onClick={() => { showToast("🤝", "Connection request sent", `${modal.name} will receive your details`); setModal(null); }}>
                Connect with {modal.name.split(" ")[0]} →
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
