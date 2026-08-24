"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { NAV } from "@/constants/nav";
import { useUi } from "@/providers/UiProvider";
import { BrandMark } from "./BrandMark";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { openModal, openSearch, openPanel, showToast } = useUi();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  const search = () => {
    if (!query.trim()) return;
    showToast("🔍", `Results for "${query}"`, "Showing matching skills");
    router.push("/services");
  };

  return (
    <header className="site-header" id="siteHeader">
      <div className="container">
        <div className="utility-row">
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <span>Free for students</span>
            <span style={{ opacity: 0.3 }}>·</span>
            <span>£10K prize every cohort</span>
            <span style={{ opacity: 0.3 }}>·</span>
            <span>Verified mentors</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <button type="button" onClick={() => openModal("login")} style={{ background: "none", border: "none", fontFamily: "var(--fb)", fontSize: 11, color: "var(--muted)", cursor: "pointer" }}>
              Sign in
            </button>
            <button type="button" onClick={() => router.push("/community")} style={{ background: "none", border: "none", fontFamily: "var(--fb)", fontSize: 11, color: "var(--muted)", cursor: "pointer" }}>
              Join the hive
            </button>
            <span>EN · GBP</span>
          </div>
        </div>

        <div className="main-row">
          <button
            className="mobile-menu-btn"
            aria-label="Menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>

          <BrandMark />

          <div className="header-search">
            <svg className="search-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search skills, mentors, events, places…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && search()}
            />
            <button className="search-btn" type="button" onClick={search}>
              Buzz
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <button className="icon-btn" type="button" onClick={openSearch} title="Search (Ctrl+K)">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button className="icon-btn notif-wrap" type="button" onClick={() => openPanel("notif")} title="Notifications">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="notif-badge" />
            </button>
            <button className="icon-btn" type="button" onClick={() => openPanel("profile")} title="Profile">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
          </div>

          <button className="join-btn buzz-hover" type="button" onClick={() => openModal("signup")}>
            Join the hive
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="cat-nav">
          <div className="container cat-nav-inner">
            <div className="cat-nav-items">
              {NAV.map((n) => {
                const active = pathname === n.href;
                return (
                  <button
                    key={n.href}
                    className={`nav-chip${active ? " active" : ""}`}
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      router.push(n.href);
                    }}
                  >
                    <span className="chip-inner">
                      {n.label}
                      {"hot" in n && n.hot ? <span className="hot-badge">Hot</span> : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        <div className="mobile-menu-grid">
          {NAV.map((n) => (
            <button
              key={n.href}
              className={`mob-link${pathname === n.href ? " active" : ""}`}
              type="button"
              onClick={() => {
                setMobileOpen(false);
                router.push(n.href);
              }}
            >
              {n.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
