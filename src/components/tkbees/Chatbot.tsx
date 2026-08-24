"use client";

import { useEffect, useRef, useState } from "react";
import { BUZZ_FAQ } from "@/constants/buzzFaq";

type Msg = { role: "user" | "buzz"; text: string; quickReplies?: string[] };

function formatBuzzText(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`)
    .replace(/\n/g, "<br>");
}

function getBuzzResponse(text: string) {
  const normalised = text.toLowerCase().replace(/[^a-z0-9\s']/g, " ").trim();
  const words = normalised.split(/\s+/);
  let bestMatch = null as (typeof BUZZ_FAQ)[number] | null;
  let bestScore = 0;

  for (const faq of BUZZ_FAQ) {
    let score = 0;
    for (const trigger of faq.triggers) {
      if (normalised.includes(trigger)) score += trigger.split(" ").length * 2;
    }
    for (const word of words) {
      for (const trigger of faq.triggers) {
        if (trigger.split(" ").some((t) => t === word && word.length > 3)) score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  if (bestMatch && bestScore > 0) return bestMatch;
  return {
    answer: `Hmm, I'm not sure about that one — but the TKBees team will know! 🐝\n\nHere's what I can definitely help with:\n- 📋 Booking or listing services\n- ⚡ Bootcamps and the £10K prize\n- 🧑‍🏫 Mentors and mentorship\n- 🏛️ University partnerships\n- 💼 Jobs, deals and events\n\nOr email us at **hello@tkbees.com** and a human will get back to you within 24h.`,
    quickReplies: ["What is TKBees?", "How do I join?", "How do I contact support?"],
  };
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const [value, setValue] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!open) setUnread(1);
    }, 4000);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [history, typing]);

  const greet = () => {
    setHistory([
      {
        role: "buzz",
        text: `Hi there! I'm **Buzz** 🐝, the TKBees assistant.\n\nI know everything about how TKBees works — services, bootcamps, mentors, deals, universities and more. What would you like to know?`,
        quickReplies: ["What is TKBees?", "How do I join free?", "Tell me about the bootcamp"],
      },
    ]);
  };

  const toggle = () => {
    setOpen((o) => {
      const next = !o;
      if (next) {
        setUnread(0);
        if (history.length === 0) greet();
        setTimeout(() => inputRef.current?.focus(), 350);
      }
      return next;
    });
  };

  const reply = (text: string) => {
    if (typing) return;
    setHistory((h) => [...h, { role: "user", text }]);
    const response = getBuzzResponse(text);
    setTyping(true);
    const delay = 700 + Math.min(text.length * 10, 800);
    setTimeout(() => {
      setTyping(false);
      setHistory((h) => [...h, { role: "buzz", text: response.answer, quickReplies: response.quickReplies }]);
    }, delay);
  };

  const send = () => {
    const text = value.trim();
    if (!text || typing) return;
    setValue("");
    if (inputRef.current) inputRef.current.style.height = "auto";
    reply(text);
  };

  return (
    <>
      <button className={`chat-launcher${open ? " open" : ""}`} onClick={toggle} aria-label="Chat with Buzz" type="button">
        <div className="chat-launcher-pulse" />
        <span className="chat-launcher-icon">🐝</span>
        {unread > 0 && !open ? <span className="chat-unread-badge">{unread}</span> : null}
      </button>

      <div className={`chat-window${open ? " open" : ""}`} role="dialog" aria-label="TKBees chat with Buzz">
        <div className="chat-hdr">
          <div className="chat-bee-avatar">
            🐝
            <div className="chat-bee-status" />
          </div>
          <div className="chat-hdr-info">
            <div className="chat-hdr-name">Buzz</div>
            <div className="chat-hdr-status">
              <span className="chat-hdr-dot" />
              TKBees assistant · always online
            </div>
          </div>
          <div className="chat-hdr-actions">
            <button className="chat-hdr-btn" type="button" title="Clear chat" onClick={greet}>↺</button>
            <button className="chat-hdr-btn" type="button" title="Close" onClick={toggle}>✕</button>
          </div>
        </div>

        <div className="chat-topics">
          {["What is TKBees?", "How do I book a service?", "Tell me about the bootcamp", "How do I join for free?", "How do I find a mentor?"].map((t) => (
            <button key={t} className="chat-topic-btn" type="button" onClick={() => reply(t)}>
              {t.replace("How do I book a service?", "Book a service").replace("Tell me about the bootcamp", "Bootcamp").replace("How do I join for free?", "Join free").replace("How do I find a mentor?", "Find a mentor")}
            </button>
          ))}
        </div>

        <div className="chat-messages" ref={listRef}>
          {history.map((msg, i) =>
            msg.role === "user" ? (
              <div className="chat-msg user" key={i}>
                <div className="chat-msg-avatar">AK</div>
                <div className="chat-bubble">{msg.text}</div>
              </div>
            ) : (
              <div className="chat-msg" key={i}>
                <div className="chat-msg-avatar">🐝</div>
                <div>
                  <div className="chat-bubble" dangerouslySetInnerHTML={{ __html: formatBuzzText(msg.text) }} />
                  {msg.quickReplies && i === history.length - 1 ? (
                    <div className="chat-quick-replies">
                      {msg.quickReplies.map((r) => (
                        <button key={r} className="qr-chip" type="button" onClick={() => reply(r)}>
                          {r}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            )
          )}
          {typing ? (
            <div className="chat-typing">
              <div className="chat-msg-avatar">🐝</div>
              <div className="typing-bubble">
                <div className="typing-dot" />
                <div className="typing-dot" />
                <div className="typing-dot" />
              </div>
            </div>
          ) : null}
        </div>

        <div className="chat-input-wrap">
          <textarea
            ref={inputRef}
            className="chat-input"
            placeholder="Ask Buzz anything…"
            rows={1}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = `${Math.min(e.target.scrollHeight, 100)}px`;
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
          />
          <button className="chat-send-btn" type="button" disabled={typing} onClick={send} aria-label="Send message">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22l-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>
        <div className="chat-branding">Powered by TKBees · T.L. Solution</div>
      </div>
    </>
  );
}
