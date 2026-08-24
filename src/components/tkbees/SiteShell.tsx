"use client";

import { PromoTicker } from "./PromoTicker";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { SearchOverlay, NotificationPanel, ProfilePanel, AuthModal, Toast } from "./Overlays";
import { Chatbot } from "./Chatbot";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PromoTicker />
      <SiteHeader />
      <SearchOverlay />
      <NotificationPanel />
      <ProfilePanel />
      <AuthModal />
      <Toast />
      <main>{children}</main>
      <SiteFooter />
      <Chatbot />
    </>
  );
}
