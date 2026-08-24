"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUi } from "@/providers/UiProvider";

export default function LoginPage() {
  const { openModal } = useUi();
  const router = useRouter();
  useEffect(() => {
    openModal("login");
    router.replace("/");
  }, [openModal, router]);
  return null;
}
