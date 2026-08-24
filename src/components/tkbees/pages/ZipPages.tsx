"use client";

import { useState } from "react";
import Link from "next/link";
import { useUi } from "@/providers/UiProvider";
import { PageHero } from "../PageHero";

export function RegisterPage() {
  const { showToast } = useUi();
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", university: "", course: "", year: "", type: "" });

  if (done) {
    return (
      <div className="page-body">
        <div className="container" style={{ maxWidth: 560, textAlign: "center", padding: "4rem 1rem" }}>
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🐝</div>
          <h1 className="page-hero-h1">Welcome to the <em>hive!</em></h1>
          <p className="page-hero-sub" style={{ margin: "1rem auto 2rem" }}>You are now part of the TKBees community. Here are your next steps:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 360, margin: "0 auto" }}>
            <Link href="/submit-idea" className="btn-primary" style={{ justifyContent: "center" }}>Submit your idea →</Link>
            <Link href="/ai-coach" className="btn-secondary" style={{ justifyContent: "center" }}>Talk to the AI Coach</Link>
            <Link href="/community" className="btn-indigo" style={{ justifyContent: "center" }}>Join the community</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero kicker="🐝 Student registration" kickerColor="#F5A524" titleHtml={<>Join the hive — <em>it&apos;s free</em></>} sub="Sign up with your university email. Founding members get the first bootcamp slots and a permanent badge." />
      <div className="page-body">
        <div className="container" style={{ maxWidth: 560 }}>
          <div className="dash-card">
            <div className="form-group"><label className="form-lbl">Full name</label><input className="form-inp" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Alex Kim" /></div>
            <div className="form-group"><label className="form-lbl">University email</label><input className="form-inp" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@university.ac.uk" /></div>
            <div className="form-group"><label className="form-lbl">University</label><input className="form-inp" value={form.university} onChange={(e) => setForm({ ...form, university: e.target.value })} placeholder="University of Manchester" /></div>
            <div className="form-2col">
              <div className="form-group"><label className="form-lbl">Course</label><input className="form-inp" value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} placeholder="Computer Science" /></div>
              <div className="form-group"><label className="form-lbl">Year</label><select className="form-sel" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })}><option value="">Select</option><option>Year 1</option><option>Year 2</option><option>Year 3</option><option>Year 4</option><option>Postgraduate</option></select></div>
            </div>
            <div className="form-group"><label className="form-lbl">Stage</label><select className="form-sel" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}><option value="">Select</option><option>Idea Stage</option><option>Early Stage</option><option>Growing</option></select></div>
            <button
              className="btn-primary btn-lg"
              type="button"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => {
                if (!form.name || !form.email || !form.university) {
                  showToast("⚠️", "Please fill required fields", "");
                  return;
                }
                setDone(true);
                showToast("🎉", "Welcome to TKBees!", "Founding member badge awarded");
              }}
            >
              Create my account →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function SubmitIdeaPage() {
  const { showToast } = useUi();
  const [done, setDone] = useState(false);
  const [support, setSupport] = useState<string[]>([]);
  const stages = ["Just an idea", "Working on it", "Have early users"];
  const industries = ["Fintech", "Edtech", "Healthtech", "Agritech", "E-commerce", "SaaS", "Social Impact", "Other"];
  const supportOptions = ["Mentorship", "Co-founder", "Funding", "Technical Help", "Marketing"];

  if (done) {
    return (
      <div className="page-body">
        <div className="container" style={{ maxWidth: 560, textAlign: "center", padding: "4rem 1rem" }}>
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🚀</div>
          <h1 className="page-hero-h1">Idea <em>submitted</em></h1>
          <p className="page-hero-sub" style={{ margin: "1rem auto 2rem" }}>We&apos;ll review it and match you with mentors, teammates or resources within 48 hours.</p>
          <Link href="/ai-coach" className="btn-lime" style={{ justifyContent: "center" }}>Get coaching on this idea →</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero kicker="💡 Submit an idea" kickerColor="#C6F432" titleHtml={<>Hatch it. <em>We&apos;ll help you ship it.</em></>} sub="Describe the problem, your solution and the support you need. Optional pitch deck welcome." />
      <div className="page-body">
        <div className="container" style={{ maxWidth: 640 }}>
          <div className="dash-card">
            <div className="form-group"><label className="form-lbl">Student email</label><input className="form-inp" type="email" placeholder="you@university.ac.uk" /></div>
            <div className="form-group"><label className="form-lbl">Idea name</label><input className="form-inp" placeholder="e.g. Climaroot" /></div>
            <div className="form-group"><label className="form-lbl">Problem</label><textarea className="form-inp" rows={3} placeholder="What problem are you solving?" style={{ resize: "vertical" }} /></div>
            <div className="form-group"><label className="form-lbl">Solution</label><textarea className="form-inp" rows={3} placeholder="How does your idea solve it?" style={{ resize: "vertical" }} /></div>
            <div className="form-2col">
              <div className="form-group"><label className="form-lbl">Stage</label><select className="form-sel">{stages.map((s) => <option key={s}>{s}</option>)}</select></div>
              <div className="form-group"><label className="form-lbl">Industry</label><select className="form-sel">{industries.map((s) => <option key={s}>{s}</option>)}</select></div>
            </div>
            <div className="form-group">
              <label className="form-lbl">Support needed</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {supportOptions.map((s) => (
                  <button key={s} type="button" className={`fchip${support.includes(s) ? " on" : ""}`} onClick={() => setSupport(support.includes(s) ? support.filter((x) => x !== s) : [...support, s])}>{s}</button>
                ))}
              </div>
            </div>
            <div className="form-group"><label className="form-lbl">Pitch deck (optional)</label><input className="form-inp" type="file" /></div>
            <button className="btn-lime btn-lg" type="button" style={{ width: "100%", justifyContent: "center" }} onClick={() => { setDone(true); showToast("🚀", "Idea submitted!", "We'll match you within 48h"); }}>
              Submit idea →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function AiCoachPage() {
  return (
    <>
      <PageHero
        kicker="🤖 AI Startup Coach"
        kickerColor="#1E1B4B"
        titleHtml={<>Buzz, but <em>deeper.</em></>}
        sub="Validate ideas, sketch a business model and plan your first steps. Open the hive assistant in the corner — or start with a prompt below."
      />
      <div className="page-body">
        <div className="container">
          <div className="g3">
            {[
              { e: "💡", t: "Validate my idea", d: "Ask Buzz to stress-test your problem, audience and wedge." },
              { e: "📐", t: "Build a lean canvas", d: "Walk through problem, solution, channels and unit economics." },
              { e: "🎤", t: "Prep my pitch", d: "Turn your story into a 10-slide, 20-minute deck outline." },
              { e: "👥", t: "Find a co-founder", d: "Describe the skills you need and get matching advice." },
              { e: "💰", t: "Fundraising basics", d: "SAFEs, seed rounds and how student founders actually raise." },
              { e: "⚡", t: "MVP in a weekend", d: "Pick a no-code or code stack and ship a first version." },
            ].map((c) => (
              <div className="help-card" key={c.t}>
                <div style={{ fontSize: "2rem", marginBottom: ".5rem" }}>{c.e}</div>
                <div style={{ fontFamily: "var(--fd)", fontWeight: 800, fontSize: "1.1rem", marginBottom: 6 }}>{c.t}</div>
                <div style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.5 }}>{c.d}</div>
                <div style={{ marginTop: "1rem", fontSize: 12, color: "var(--honey-dark)", fontWeight: 700 }}>Open Buzz in the corner →</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
