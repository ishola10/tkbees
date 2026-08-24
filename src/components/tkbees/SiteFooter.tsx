"use client";

import { usePathname, useRouter } from "next/navigation";
import { FOOTER_COLS } from "@/constants/nav";
import { useUi } from "@/providers/UiProvider";
import { BeeHex } from "./BrandMark";

export function SiteFooter() {
  const pathname = usePathname();
  const router = useRouter();
  const { showToast } = useUi();

  if (pathname === "/dashboard") {
    return (
      <div style={{ background: "var(--indigo)", color: "rgba(255,248,236,.5)", padding: "1rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11.5, flexWrap: "wrap", gap: 12 }}>
        <div style={{ fontFamily: "var(--fd)", fontWeight: 900, color: "var(--honey)" }}>🐝 TKBees</div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Help Centre", "Privacy", "Terms", "Contact"].map((l) => (
            <button key={l} type="button" style={{ background: "none", border: "none", color: "rgba(255,248,236,.5)", fontFamily: "var(--fb)", fontSize: 11.5, cursor: "pointer" }} onClick={() => showToast("📄", l, "Loading...")}>
              {l}
            </button>
          ))}
        </div>
        <div style={{ fontFamily: "var(--fm)", fontSize: 11, color: "rgba(255,248,236,.35)" }}>© 2026 T.L. Solution Ltd</div>
      </div>
    );
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: ".75rem" }}>
              <BeeHex />
              <div>
                <div style={{ fontFamily: "var(--fd)", fontWeight: 900, fontSize: "1.2rem", color: "white" }}>
                  TK<span style={{ color: "var(--honey)" }}>Bees</span>
                </div>
                <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".22em", color: "rgba(255,248,236,.5)" }}>
                  The Knowledge Bees
                </div>
              </div>
            </div>
            <p>
              TKBees is the platform of T.L. Solution (Touch Light Solution). We connect ambitious people with the skills, mentors and opportunities they need to turn ideas into real-world outcomes.
            </p>
            <div className="footer-social">
              {["📷", "💼", "🐦", "✉️"].map((e) => (
                <button key={e} className="footer-social-btn" type="button" onClick={() => showToast(e, "Social links", "Opening in the full app")}>
                  {e}
                </button>
              ))}
            </div>
            <div className="footer-systems">
              <span className="systems-dot" />
              All systems pollinating
            </div>
          </div>
          <div className="footer-cols">
            {FOOTER_COLS.map((c) => (
              <div key={c.t}>
                <div className="footer-col-title">{c.t}</div>
                {c.links.map((l) => (
                  <button
                    key={l.l}
                    className="footer-link"
                    type="button"
                    onClick={() => ("h" in l && l.h ? router.push(l.h) : showToast("📄", l.l, "Loading..."))}
                  >
                    {l.l}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 T.L. Solution Ltd · TKBees™</div>
          <div className="footer-version">v1.0 · founding cohort</div>
        </div>
      </div>
    </footer>
  );
}
