"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bold,
  Heading2,
  Heading3,
  ImagePlus,
  Italic,
  Link2,
  List,
  ListOrdered,
  Loader2,
  Quote,
  Strikethrough,
  Underline,
} from "lucide-react";
import { adminUploadImage } from "@/lib/admin";
import { formatApiError } from "@/lib/api";

type Mode = "visual" | "text";

export function WpContentEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (html: string) => void;
}) {
  const [mode, setMode] = useState<Mode>("visual");
  const [uploading, setUploading] = useState(false);
  const [mediaError, setMediaError] = useState<string | null>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const skipNextValue = useRef(false);

  useEffect(() => {
    if (mode !== "visual" || !visualRef.current) return;
    if (skipNextValue.current) {
      skipNextValue.current = false;
      return;
    }
    if (visualRef.current.innerHTML !== value) {
      visualRef.current.innerHTML = value || "";
    }
  }, [value, mode]);

  function switchMode(next: Mode) {
    if (next === mode) return;
    if (next === "text" && visualRef.current) {
      onChange(visualRef.current.innerHTML);
    }
    setMode(next);
  }

  function cmd(command: string, arg?: string) {
    visualRef.current?.focus();
    document.execCommand(command, false, arg);
    if (visualRef.current) {
      skipNextValue.current = true;
      onChange(visualRef.current.innerHTML);
    }
  }

  function addLink() {
    const url = window.prompt("Link URL-je", "https://");
    if (!url) return;
    cmd("createLink", url);
  }

  async function addMedia(file: File) {
    setMediaError(null);
    setUploading(true);
    try {
      const r = await adminUploadImage(file);
      const html = `<p><img src="${r.url}" alt="" /></p>`;
      if (mode === "visual") {
        visualRef.current?.focus();
        document.execCommand("insertHTML", false, html);
        if (visualRef.current) {
          skipNextValue.current = true;
          onChange(visualRef.current.innerHTML);
        }
      } else {
        onChange(`${value}${html}`);
      }
    } catch (err) {
      setMediaError(formatApiError(err));
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-sm shadow-brand-900/5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <div className="inline-flex rounded-full bg-muted p-1">
          <button
            type="button"
            onClick={() => switchMode("visual")}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              mode === "visual" ? "bg-background text-brand-900 shadow-sm" : "text-muted-foreground hover:text-brand-700"
            }`}
          >
            Vizuális
          </button>
          <button
            type="button"
            onClick={() => switchMode("text")}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              mode === "text" ? "bg-background text-brand-900 shadow-sm" : "text-muted-foreground hover:text-brand-700"
            }`}
          >
            Szöveg
          </button>
        </div>
        <button
          type="button"
          disabled={uploading}
          onClick={() => fileRef.current?.click()}
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground/80 hover:border-brand-600 hover:text-brand-700 disabled:opacity-60"
        >
          {uploading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <ImagePlus className="h-3.5 w-3.5" />}
          Média hozzáadása
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) addMedia(f);
            if (fileRef.current) fileRef.current.value = "";
          }}
        />
      </div>

      {mode === "visual" && (
        <div className="flex flex-wrap gap-0.5 border-b border-border px-3 py-2">
          <ToolBtn onClick={() => cmd("bold")} title="Félkövér">
            <Bold className="h-4 w-4" />
          </ToolBtn>
          <ToolBtn onClick={() => cmd("italic")} title="Dőlt">
            <Italic className="h-4 w-4" />
          </ToolBtn>
          <ToolBtn onClick={() => cmd("underline")} title="Aláhúzott">
            <Underline className="h-4 w-4" />
          </ToolBtn>
          <ToolBtn onClick={() => cmd("strikeThrough")} title="Áthúzott">
            <Strikethrough className="h-4 w-4" />
          </ToolBtn>
          <span className="mx-1 my-1 w-px bg-border" />
          <ToolBtn onClick={() => cmd("formatBlock", "h2")} title="Címsor 2 — téma a tartalomjegyzékben">
            <Heading2 className="h-4 w-4" />
            <span className="ml-1">H2</span>
          </ToolBtn>
          <ToolBtn onClick={() => cmd("formatBlock", "h3")} title="Címsor 3 — altéma">
            <Heading3 className="h-4 w-4" />
            <span className="ml-1">H3</span>
          </ToolBtn>
          <ToolBtn onClick={() => cmd("insertUnorderedList")} title="Felsorolás">
            <List className="h-4 w-4" />
          </ToolBtn>
          <ToolBtn onClick={() => cmd("insertOrderedList")} title="Számozott lista">
            <ListOrdered className="h-4 w-4" />
          </ToolBtn>
          <ToolBtn onClick={() => cmd("formatBlock", "blockquote")} title="Idézet">
            <Quote className="h-4 w-4" />
          </ToolBtn>
          <ToolBtn onClick={addLink} title="Link">
            <Link2 className="h-4 w-4" />
          </ToolBtn>
        </div>
      )}

      {mode === "visual" ? (
        <div
          ref={visualRef}
          contentEditable
          suppressContentEditableWarning
          className="wp-visual-editor min-h-[420px] max-w-none px-5 py-4 text-[15px] leading-relaxed text-foreground outline-none"
          onInput={() => {
            if (!visualRef.current) return;
            skipNextValue.current = true;
            onChange(visualRef.current.innerHTML);
          }}
        />
      ) : (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={22}
          className="min-h-[420px] w-full resize-y border-0 bg-transparent px-5 py-4 font-mono text-[13px] leading-relaxed text-foreground outline-none"
          placeholder="<p>A bejegyzés tartalma…</p>"
        />
      )}

      {mediaError && (
        <p className="border-t border-red-200 bg-red-50 px-4 py-2.5 text-xs text-red-800">{mediaError}</p>
      )}

      <style>{`
        .wp-visual-editor p { margin: 0 0 1em; }
        .wp-visual-editor h2 { font-size: 1.5em; font-weight: 650; margin: 1.1em 0 0.5em; }
        .wp-visual-editor h3 { font-size: 1.2em; font-weight: 650; margin: 1em 0 0.4em; }
        .wp-visual-editor ul { list-style: disc; padding-left: 1.4em; margin: 0 0 1em; }
        .wp-visual-editor ol { list-style: decimal; padding-left: 1.4em; margin: 0 0 1em; }
        .wp-visual-editor blockquote { border-left: 3px solid var(--brand-600); margin: 0 0 1em; padding-left: 1em; color: var(--muted-foreground); }
        .wp-visual-editor img { max-width: 100%; height: auto; border-radius: 0.75rem; }
        .wp-visual-editor a { color: var(--brand-700); text-decoration: underline; }
      `}</style>
    </div>
  );
}

function ToolBtn({
  onClick,
  title,
  children,
}: {
  onClick: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="inline-flex items-center rounded-lg px-2 py-1.5 text-xs font-medium text-foreground/70 hover:bg-brand-50 hover:text-brand-700"
    >
      {children}
    </button>
  );
}
