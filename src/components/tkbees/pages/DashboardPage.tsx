"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { NOTIFS } from "@/constants/marketplace";
import { useUi } from "@/providers/UiProvider";
import { PageHero } from "../PageHero";

const NAV_ITEMS: { v: string; e: string; l: string; badge?: string }[] = [
  { v: "overview", e: "📊", l: "Overview" },
  { v: "profile", e: "👤", l: "My Profile" },
  { v: "myskills", e: "🛠️", l: "My Skills" },
  { v: "post", e: "➕", l: "Post a Skill" },
  { v: "messages", e: "💬", l: "Messages", badge: "3" },
  { v: "connections", e: "🤝", l: "Connections" },
  { v: "settings", e: "⚙️", l: "Settings" },
];

export function DashboardPage() {
  const { showToast } = useUi();
  const router = useRouter();
  const [view, setView] = useState("overview");
  const [tags, setTags] = useState(["React", "Next.js"]);
  const [tagIn, setTagIn] = useState("");
  const [toggles, setToggles] = useState({ public: true, instant: false, collab: true, enquiries: true, messages: true, connections: true, digest: false, marketing: false });
  const [published, setPublished] = useState(false);

  return (
    <div className="dash-layout">
      <aside className="dash-side">
        <div style={{ textAlign: "center", padding: "1.25rem 0", borderBottom: "1px solid var(--border)", marginBottom: "1rem" }}>
          <div className="dash-user-ring"><div className="dash-av">AK</div></div>
          <div className="dash-uname">Alex Kim</div>
          <div className="dash-urole">Full-stack Developer · Manchester</div>
          <span className="dash-ubadge">⭐ Pro Supplier</span>
        </div>
        <div className="dash-nav">
          {NAV_ITEMS.map((n) => (
            <button key={n.v} className={`dnav${view === n.v ? " active" : ""}`} type="button" onClick={() => { setView(n.v); setPublished(false); }}>
              <span>{n.e}</span>{n.l}{n.badge ? <span className="dnav-badge">{n.badge}</span> : null}
            </button>
          ))}
        </div>
      </aside>
      <div className="dash-main">
        {view === "overview" && (
          <>
            <div className="dash-section-title">Good morning, <span style={{ color: "var(--honey-dark)" }}>Alex</span> 👋</div>
            <div className="dash-section-sub">Here&apos;s your hive snapshot for today</div>
            <div className="dash-stats">
              {[
                { e: "👁️", l: "Profile views", v: "284", c: "+18%", up: true, clr: "#F5A524" },
                { e: "📩", l: "Active enquiries", v: "7", c: "+3 new", up: true, clr: "#1E1B4B" },
                { e: "🛠️", l: "Skills listed", v: "4", c: "2 active", up: null, clr: "#C6F432" },
                { e: "💷", l: "Revenue (MTD)", v: "£3.2k", c: "+24%", up: true, clr: "#FF6B6B" },
              ].map((s) => (
                <div className="dstat" key={s.l}>
                  <div className="dstat-topline" style={{ background: s.clr }} />
                  <div className="dstat-icon">{s.e}</div>
                  <div className="dstat-lbl">{s.l}</div>
                  <div className="dstat-val">{s.v}</div>
                  <div className={`dstat-chg ${s.up === true ? "chg-up" : ""}`}>{s.up === true ? "↑ " : ""}{s.c}</div>
                </div>
              ))}
            </div>
            <div className="dash-2col">
              <div className="dash-card">
                <div className="dc-hdr"><div className="dc-title">Recent Activity</div><button className="btn-dc-sm" type="button" onClick={() => showToast("📋", "Activity log", "All events loaded")}>View all</button></div>
                {NOTIFS.map((n) => (
                  <div className="act-item" key={n.time}>
                    <div className="act-dot" style={{ background: n.dot }} />
                    <div>
                      <div className="act-txt" dangerouslySetInnerHTML={{ __html: n.text }} />
                      <div className="act-time">{n.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="dash-card">
                <div className="dc-hdr"><div className="dc-title">Top Skills</div><button className="btn-dc-sm" type="button" onClick={() => setView("myskills")}>Manage</button></div>
                {[
                  { e: "⚛️", n: "React & Next.js Dev", m: "12 enquiries · 4.9★", p: "£85/hr" },
                  { e: "🐍", n: "Data Analysis & Python", m: "8 enquiries · 4.9★", p: "£90/hr" },
                  { e: "📱", n: "Mobile App Dev", m: "5 enquiries · 4.8★", p: "£95/hr" },
                ].map((s) => (
                  <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ fontSize: "1.3rem" }}>{s.e}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--indigo)" }}>{s.n}</div>
                      <div style={{ fontSize: 11.5, color: "var(--dim)" }}>{s.m}</div>
                    </div>
                    <div style={{ fontFamily: "var(--fm)", fontWeight: 700, fontSize: 14, color: "var(--honey-dark)" }}>{s.p}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {view === "profile" && (
          <>
            <div className="dash-section-title">My <span style={{ color: "var(--honey-dark)" }}>Profile</span></div>
            <div className="dash-section-sub">How the hive sees you</div>
            <div className="prof-banner-card" style={{ marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
                <div className="prof-av-ring"><div className="prof-av-in">AK</div></div>
                <div style={{ flex: 1 }}>
                  <div className="prof-name">Alex Kim</div>
                  <div style={{ fontSize: 13, color: "rgba(255,248,236,.6)", marginBottom: ".5rem" }}>@alexkim · Manchester, UK</div>
                  <div className="prof-stats">
                    {[["284", "Views"], ["4.9★", "Rating"], ["42", "Reviews"], ["18", "Connections"]].map(([n, l]) => (
                      <div key={l}><div className="ps-n">{n}</div><div className="ps-l">{l}</div></div>
                    ))}
                  </div>
                </div>
                <button className="btn-ghost" type="button" onClick={() => showToast("✏️", "Edit profile", "Editor loading...")}>Edit</button>
              </div>
            </div>
          </>
        )}

        {view === "myskills" && (
          <>
            <div className="dash-section-title">My <span style={{ color: "var(--honey-dark)" }}>Skills</span></div>
            <div className="dash-section-sub">Manage your listed services</div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1.25rem" }}>
              <button className="btn-primary" type="button" onClick={() => setView("post")}>+ Add new skill</button>
            </div>
            {[
              { e: "⚛️", n: "React & Next.js Development", m: "Technology · £85/hr · 4.9★ · 12 enquiries", on: true },
              { e: "🐍", n: "Data Analysis & Python", m: "Technology · £90/hr · 4.9★ · 8 enquiries", on: true },
              { e: "📱", n: "Mobile App Dev (React Native)", m: "Technology · £95/hr · 4.8★ · 5 enquiries", on: false },
              { e: "✍️", n: "Technical Writing & Docs", m: "Business · £55/hr · 4.7★ · 3 enquiries", on: false },
            ].map((s) => (
              <div className="sk-manage-row" key={s.n}>
                <div className="sk-manage-icon" style={{ background: "rgba(245,165,36,.12)", fontSize: "1.3rem" }}>{s.e}</div>
                <div className="sk-manage-body">
                  <div className="sk-manage-name">{s.n}</div>
                  <div className="sk-manage-meta">{s.m}</div>
                </div>
                <span className={s.on ? "status-open" : "status-soon"}>{s.on ? "● Active" : "◌ Paused"}</span>
                <div style={{ display: "flex", gap: 5 }}>
                  <button type="button" style={{ background: "var(--cream-dark)", border: "1px solid var(--border)", color: "var(--muted)", padding: "5px 12px", borderRadius: 8, fontSize: 12, cursor: "pointer", fontFamily: "var(--fb)" }} onClick={() => showToast("✏️", "Edit skill", "Skill editor loading")}>Edit</button>
                  <button type="button" style={{ background: "rgba(255,107,107,.1)", border: "1px solid rgba(255,107,107,.2)", color: "#b91c1c", padding: "5px 9px", borderRadius: 8, fontSize: 12, cursor: "pointer" }} onClick={() => showToast("🗑️", "Skill removed", "Skill has been deleted")}>🗑️</button>
                </div>
              </div>
            ))}
          </>
        )}

        {view === "post" && !published && (
          <>
            <div className="dash-section-title">Post a <span style={{ color: "var(--honey-dark)" }}>Skill</span></div>
            <div className="dash-section-sub">Add a new service to your profile</div>
            <div style={{ maxWidth: 600 }}>
              <div className="form-group"><label className="form-lbl">Skill / Service title</label><input className="form-inp" placeholder="e.g. Brand Identity Design" /></div>
              <div className="form-group"><label className="form-lbl">Category</label><select className="form-sel"><option>Technology & Development</option><option>Design & Creativity</option></select></div>
              <div className="form-group"><label className="form-lbl">Description</label><textarea className="form-inp" rows={4} placeholder="Describe your service…" style={{ resize: "vertical" }} /></div>
              <div className="form-2col">
                <div className="form-group"><label className="form-lbl">Pricing model</label><select className="form-sel"><option>Hourly rate</option><option>Fixed price</option></select></div>
                <div className="form-group"><label className="form-lbl">Price (£)</label><input className="form-inp" type="number" placeholder="85" /></div>
              </div>
              <div className="form-group">
                <label className="form-lbl">Tags (press Enter)</label>
                <div className="tags-inp" onClick={() => document.getElementById("tagIn")?.focus()}>
                  {tags.map((t) => (
                    <span className="tag-pill" key={t}>{t} <button type="button" onClick={() => setTags(tags.filter((x) => x !== t))}>×</button></span>
                  ))}
                  <input id="tagIn" placeholder="Add tag…" value={tagIn} onChange={(e) => setTagIn(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && tagIn.trim()) { e.preventDefault(); setTags([...tags, tagIn.trim()]); setTagIn(""); } }} />
                </div>
              </div>
              <div className="tog-row"><span>List publicly on marketplace</span><button className={`tog${toggles.public ? " on" : ""}`} type="button" onClick={() => setToggles({ ...toggles, public: !toggles.public })} /></div>
              <div className="tog-row"><span>Accept instant booking</span><button className={`tog${toggles.instant ? " on" : ""}`} type="button" onClick={() => setToggles({ ...toggles, instant: !toggles.instant })} /></div>
              <div style={{ display: "flex", gap: ".75rem", marginTop: "1.5rem" }}>
                <button className="btn-primary" type="button" onClick={() => setPublished(true)}>Publish skill →</button>
                <button type="button" style={{ background: "none", border: "1.5px solid var(--border)", color: "var(--muted)", padding: "0 20px", height: 48, borderRadius: 99, fontFamily: "var(--fb)", cursor: "pointer" }} onClick={() => showToast("💾", "Draft saved", "You can continue editing later")}>Save draft</button>
              </div>
            </div>
          </>
        )}

        {view === "post" && published && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 400, textAlign: "center" }}>
            <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🎉</div>
            <div style={{ fontFamily: "var(--fd)", fontSize: "1.8rem", fontWeight: 900, marginBottom: ".5rem" }}>Skill published!</div>
            <p style={{ color: "var(--muted)", maxWidth: 380, lineHeight: 1.6, marginBottom: "1.5rem" }}>Your service is now live on the TKBees marketplace.</p>
            <div style={{ display: "flex", gap: ".75rem" }}>
              <button className="btn-primary" type="button" onClick={() => { setPublished(false); setView("myskills"); }}>View my skills →</button>
              <button type="button" style={{ background: "none", border: "1.5px solid var(--border)", color: "var(--muted)", padding: "0 20px", height: 48, borderRadius: 99, fontFamily: "var(--fb)", cursor: "pointer" }} onClick={() => router.push("/services")}>Go to marketplace</button>
            </div>
          </div>
        )}

        {view === "messages" && (
          <>
            <div className="dash-section-title">Messages <span style={{ fontSize: "1rem", color: "var(--honey-dark)" }}>3 unread</span></div>
            <div className="dash-section-sub">Your recent conversations</div>
            <div className="dash-card" style={{ padding: ".5rem" }}>
              {[
                { i: "BS", n: "Bloom Studio", p: "Hi Alex, we love your portfolio and wanted to discuss a potential project…", t: "2h ago", u: true, c: "rgba(255,107,107,.15)", tc: "#FF6B6B" },
                { i: "DF", n: "DataForge", p: "Thanks for connecting! We have an exciting ML project that might suit you…", t: "1d ago", u: true, c: "rgba(245,165,36,.15)", tc: "#D98A06" },
                { i: "MJ", n: "Marcus Johnson", p: "The pitch deck was incredible. We just closed our seed round…", t: "2d ago", u: true, c: "rgba(198,244,50,.15)", tc: "#5a8000" },
                { i: "LP", n: "Luna Park", p: "Could you help with a quick React fix? Nothing too complex I hope…", t: "3d ago", u: false, c: "rgba(30,27,75,.08)", tc: "#1E1B4B" },
              ].map((m) => (
                <div className={`msg-item${m.u ? " unread" : ""}`} key={m.n} onClick={() => showToast("💬", `Chat with ${m.n}`, "Conversation loads in the app")}>
                  <div className="msg-av" style={{ background: m.c, color: m.tc }}>{m.i}</div>
                  <div className="msg-body">
                    <div className="msg-sender">{m.n}<span className="msg-time">{m.t}</span></div>
                    <div className="msg-preview">{m.p}</div>
                  </div>
                  {m.u ? <div className="unread-dot" /> : null}
                </div>
              ))}
            </div>
          </>
        )}

        {view === "connections" && (
          <>
            <div className="dash-section-title">Connections <span style={{ fontSize: "1rem", color: "var(--honey-dark)" }}>18</span></div>
            <div className="dash-section-sub">Your ecosystem network</div>
            <div className="g2">
              {[
                { n: "Bloom Studio", s: "Design", c: "rgba(255,107,107,.15)", tc: "#FF6B6B", tags: ["Branding", "UX"] },
                { n: "DataForge", s: "Technology", c: "rgba(245,165,36,.15)", tc: "#D98A06", tags: ["ML", "Analytics"] },
                { n: "Pivot Advisory", s: "Business", c: "rgba(198,244,50,.15)", tc: "#5a8000", tags: ["Strategy"] },
                { n: "Orbit Creative", s: "Creative", c: "rgba(30,27,75,.08)", tc: "#1E1B4B", tags: ["Video", "Content"] },
              ].map((c) => (
                <div key={c.n} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 14, padding: "1.25rem", cursor: "pointer" }} onClick={() => showToast("👋", c.n, "Profile loads in the app")}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: ".75rem" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: c.c, color: c.tc, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--fd)", fontWeight: 900, fontSize: ".85rem" }}>{c.n.slice(0, 2)}</div>
                    <div><div style={{ fontFamily: "var(--fd)", fontWeight: 800, fontSize: ".9rem" }}>{c.n}</div><div style={{ fontSize: 11.5, color: "var(--dim)" }}>{c.s}</div></div>
                  </div>
                  <div style={{ display: "flex", gap: 5, marginBottom: ".75rem" }}>{c.tags.map((t) => <span className="skill-chip" key={t}>{t}</span>)}</div>
                  <button className="btn-dc-sm" type="button" onClick={(e) => { e.stopPropagation(); showToast("💬", "Message sent", "Opening conversation…"); }}>Message</button>
                </div>
              ))}
            </div>
          </>
        )}

        {view === "settings" && (
          <>
            <div className="dash-section-title">Account <span style={{ color: "var(--honey-dark)" }}>Settings</span></div>
            <div className="dash-section-sub">Manage your preferences and account</div>
            <div className="dash-2col">
              <div className="dash-card">
                <div className="dc-hdr"><div className="dc-title" style={{ color: "var(--honey-dark)" }}>Personal information</div></div>
                <div className="form-group"><label className="form-lbl">Full name</label><input className="form-inp" defaultValue="Alex Kim" /></div>
                <div className="form-group"><label className="form-lbl">Email</label><input className="form-inp" defaultValue="alex@tkbees.com" /></div>
                <div className="form-group"><label className="form-lbl">Location</label><input className="form-inp" defaultValue="Manchester, UK" /></div>
                <button className="btn-primary" type="button" onClick={() => showToast("✅", "Settings saved", "Profile updated successfully")}>Save changes</button>
              </div>
              <div className="dash-card">
                <div className="dc-hdr"><div className="dc-title" style={{ color: "var(--honey-dark)" }}>Notifications</div></div>
                {([["enquiries", "New enquiries"], ["messages", "Messages"], ["connections", "Connection requests"], ["digest", "Weekly digest email"], ["marketing", "Marketing & promotions"]] as const).map(([k, l]) => (
                  <div className="tog-row" key={k}><span>{l}</span><button className={`tog${toggles[k] ? " on" : ""}`} type="button" onClick={() => setToggles({ ...toggles, [k]: !toggles[k] })} /></div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function ProfilePage() {
  const { showToast } = useUi();
  return (
    <>
      <PageHero kicker="👤 My Profile" kickerColor="#F5A524" titleHtml={<>Your TKBees <em>profile</em></>} sub="How the hive sees you. Edit your bio, manage skills, and track your reputation." />
      <div className="page-body">
        <div className="container">
          <div className="prof-banner-card">
            <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
              <div className="prof-av-ring"><div className="prof-av-in">AK</div></div>
              <div style={{ flex: 1 }}>
                <div className="prof-name">Alex Kim</div>
                <div style={{ fontSize: 13, color: "rgba(255,248,236,.6)", marginBottom: ".6rem" }}>@alexkim · Manchester · Full-stack Developer</div>
                <div style={{ fontSize: 14, color: "rgba(255,248,236,.75)", maxWidth: 420, lineHeight: 1.6 }}>Passionate about building products that solve real problems. 4+ years in React, Node.js, Python.</div>
                <div className="prof-stats">
                  {[["284", "Views"], ["4.9★", "Rating"], ["42", "Reviews"], ["18", "Connections"]].map(([n, l]) => (
                    <div key={l}><div className="ps-n">{n}</div><div className="ps-l">{l}</div></div>
                  ))}
                </div>
              </div>
              <button className="btn-ghost" type="button" onClick={() => showToast("✏️", "Edit profile", "Editor loading...")}>Edit profile</button>
            </div>
          </div>
          <div className="g2" style={{ gap: "1.25rem" }}>
            <div className="dash-card">
              <div className="dc-hdr"><div className="dc-title">About</div><button className="btn-dc-sm" type="button">Edit</button></div>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: "1rem" }}>I specialise in building fast, scalable web apps using React and Next.js. I work with startups and SMEs to bring ideas to life.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["React", "Next.js", "TypeScript", "Python", "Node.js", "PostgreSQL", "AWS"].map((s) => (
                  <span key={s} style={{ background: "rgba(245,165,36,.12)", border: "1px solid rgba(245,165,36,.25)", color: "var(--honey-dark)", padding: "3px 10px", borderRadius: 99, fontSize: 11.5, fontWeight: 600 }}>{s}</span>
                ))}
              </div>
            </div>
            <div className="dash-card">
              <div className="dc-hdr"><div className="dc-title">Contact & Availability</div><button className="btn-dc-sm" type="button">Edit</button></div>
              {[["📧", "alex@tkbees.com"], ["📍", "Manchester, UK (Remote OK)"], ["🕐", "Available from next week"], ["💼", "linkedin.com/in/alexkim"]].map(([e, t]) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: ".75rem", fontSize: 13.5, color: "var(--muted)", marginBottom: 12 }}><span>{e}</span>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
