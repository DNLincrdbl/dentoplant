"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { apiPost, formatApiError } from "@/lib/api";
import { useLocale, useLocalizedHref } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

type ChatRole = "user" | "assistant";
type ChatMessage = { role: ChatRole; content: string };

const SUGGESTIONS_HU = [
  "Mikor vagytok nyitva?",
  "Hogyan tudok időpontot foglalni?",
  "Mennyibe kerül egy konzultáció?",
];
const SUGGESTIONS_EN = [
  "What are your opening hours?",
  "How do I book an appointment?",
  "How much is a consultation?",
];

const TYPING_MS = 1100;

function wait(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

export function SiteChat() {
  const locale = useLocale();
  const l = useLocalizedHref();
  const en = locale === "en";
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: en
        ? "Hello — I can help with opening hours, booking, services and list prices. I don’t diagnose symptoms or book appointments."
        : "Üdvözlöm — nyitvatartásban, bejelentkezésben, szolgáltatásokban és tájékoztató árakban tudok segíteni. Diagnózist és időpontot itt nem adok.",
    },
  ]);
  const scroller = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const t = {
    title: en ? "Dentoplant assistant" : "Dentoplant asszisztens",
    open: en ? "Open chat" : "Chat megnyitása",
    close: en ? "Close chat" : "Chat bezárása",
    placeholder: en ? "Write a question…" : "Írjon egy kérdést…",
    send: en ? "Send" : "Küldés",
    disclaimer: en ? "General clinic info" : "Általános infó a rendelőről",
    thinking: en ? "One moment" : "Egy pillanat",
  };
  const suggestions = en ? SUGGESTIONS_EN : SUGGESTIONS_HU;

  useEffect(() => {
    if (!open) return;
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, busy]);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 280);
    return () => window.clearTimeout(id);
  }, [open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setBusy(true);
    const started = Date.now();
    let reply: string;
    try {
      const data = await apiPost<{ reply: string }>("/api/chat", {
        message: trimmed,
        history: nextMessages.slice(1, -1).map((m) => ({ role: m.role, content: m.content })),
      });
      reply = data.reply;
    } catch (err) {
      reply = formatApiError(err);
    }
    await wait(Math.max(0, TYPING_MS - (Date.now() - started)));
    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    setBusy(false);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(input);
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 md:right-6 md:bottom-6">
      <section
        data-open={open}
        aria-hidden={!open}
        aria-labelledby={titleId}
        className={cn(
          "chat-panel absolute right-0 bottom-[4.35rem] overflow-hidden rounded-[1.75rem] border border-brand-100/80 bg-background/95 shadow-[0_24px_60px_-24px_rgba(58,25,71,0.45)] backdrop-blur-xl will-change-transform",
          "flex h-[min(34rem,calc(100dvh-7rem))] w-[min(23.5rem,calc(100vw-2rem))] flex-col",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <header className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 px-4 py-3.5 text-white">
          <div className="pointer-events-none absolute -top-10 -right-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex items-center gap-3">
            <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/15 text-sm font-semibold tracking-wide">
              D
              <span className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2 border-brand-800 bg-emerald-400" />
            </span>
            <div className="min-w-0 flex-1">
              <p id={titleId} className="font-display text-[15px] font-semibold leading-tight">
                {t.title}
              </p>
              <p className="mt-0.5 text-[11px] text-white/70">{t.disclaimer}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-8 w-8 place-items-center rounded-full text-white/80 transition hover:bg-white/12 hover:text-white"
              aria-label={t.close}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </header>

        <div
          ref={scroller}
          className="flex-1 space-y-2.5 overflow-y-auto bg-[linear-gradient(180deg,var(--brand-50)_0%,transparent_120px)] px-3.5 py-4"
        >
          {messages.map((m, i) => (
            <div
              key={`${m.role}-${i}`}
              className={cn("chat-bubble flex", m.role === "user" ? "justify-end" : "justify-start")}
            >
              <div
                className={cn(
                  "max-w-[86%] px-3.5 py-2.5 text-[13.5px] leading-relaxed whitespace-pre-wrap",
                  m.role === "user"
                    ? "rounded-[1.15rem_1.15rem_0.4rem_1.15rem] bg-brand-700 text-white shadow-sm shadow-brand-900/10"
                    : "rounded-[1.15rem_1.15rem_1.15rem_0.4rem] border border-brand-100 bg-white text-foreground/90 shadow-sm shadow-brand-900/5",
                )}
              >
                <ChatText text={m.content} hrefFor={l} user={m.role === "user"} />
              </div>
            </div>
          ))}
          {busy && (
            <div className="chat-bubble flex justify-start">
              <div className="flex items-center gap-2 rounded-[1.15rem_1.15rem_1.15rem_0.4rem] border border-brand-100 bg-white px-3.5 py-2.5 shadow-sm">
                <span className="sr-only">{t.thinking}</span>
                <span className="chat-dot h-1.5 w-1.5 rounded-full bg-brand-500" />
                <span className="chat-dot h-1.5 w-1.5 rounded-full bg-brand-500" />
                <span className="chat-dot h-1.5 w-1.5 rounded-full bg-brand-500" />
              </div>
            </div>
          )}
          {messages.length < 3 && !busy && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {suggestions.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => void send(q)}
                  className="rounded-full border border-brand-200/80 bg-white/80 px-3 py-1.5 text-left text-[12px] text-brand-800 shadow-sm transition hover:border-brand-400 hover:bg-brand-50"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>

        <form
          onSubmit={onSubmit}
          className="border-t border-brand-100/80 bg-white/90 p-3 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 rounded-2xl border border-brand-100 bg-muted/50 px-2 py-1.5 transition focus-within:border-brand-400 focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(140,75,162,0.12)]">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              maxLength={800}
              className="min-w-0 flex-1 bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground/80"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-700 text-white transition hover:bg-brand-800 disabled:bg-brand-200 disabled:text-white/80"
              aria-label={t.send}
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="mt-2 px-1 text-[10px] tracking-wide text-muted-foreground">
            +36 30 264 5024
          </p>
        </form>
      </section>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "relative z-10 grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-brand-700 text-white shadow-[0_12px_28px_-8px_rgba(58,25,71,0.55)] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-brand-800",
          open ? "scale-95 bg-brand-800" : "hover:scale-[1.04]",
        )}
        aria-label={open ? t.close : t.open}
        aria-expanded={open}
      >
        <MessageCircle
          className={cn(
            "absolute h-6 w-6 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "scale-50 opacity-0" : "scale-100 opacity-100",
          )}
        />
        <X
          className={cn(
            "absolute h-6 w-6 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "scale-100 opacity-100" : "scale-50 opacity-0",
          )}
        />
      </button>
    </div>
  );
}

function ChatText({
  text,
  hrefFor,
  user,
}: {
  text: string;
  hrefFor: (path: string) => string;
  user?: boolean;
}) {
  const parts = text.split(/(\/[a-z0-9][a-z0-9/-]*)/gi);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("/") && /^\/[a-z0-9][a-z0-9/-]*$/i.test(part)) {
          return (
            <a
              key={i}
              href={hrefFor(part)}
              className={cn(
                "underline underline-offset-2",
                user ? "decoration-white/50" : "text-brand-700 decoration-brand-300",
              )}
            >
              {part}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
