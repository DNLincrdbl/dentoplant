"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Lock, Mail } from "lucide-react";
import { ApiError } from "@/lib/api";
import { adminLogin } from "@/lib/admin";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await adminLogin(email.trim(), password, remember);
      router.replace("/admin");
    } catch (err) {
      const e = err as ApiError;
      if (e.status === 401) setError("Hibás email vagy jelszó.");
      else if (e.status === 429) setError("Túl sok sikertelen próbálkozás — próbáld pár perc múlva.");
      else setError(e.message || "Nem sikerült bejelentkezni.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid min-h-screen place-items-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-display text-3xl text-brand-900 md:text-4xl">
            Dentoplant <span className="text-brand-600">admin</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">Jelentkezz be a blog szerkesztéséhez.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-background p-7 shadow-lg shadow-brand-900/5 md:p-8"
        >
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Email
            </span>
            <div className="mt-2 flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5 focus-within:border-brand-600 focus-within:ring-1 focus-within:ring-brand-600">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                placeholder="admin@dentoplant.hu"
              />
            </div>
          </label>

          <label className="mt-5 block">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Jelszó
            </span>
            <div className="mt-2 flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5 focus-within:border-brand-600 focus-within:ring-1 focus-within:ring-brand-600">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                placeholder="••••••••"
              />
            </div>
          </label>

          <label className="mt-5 flex items-center gap-2 text-sm text-foreground/80">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-border accent-brand-600"
            />
            Maradjak bejelentkezve
          </label>

          {error && (
            <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary mt-6 !h-12 !w-full !text-sm disabled:opacity-60"
          >
            {submitting ? "Bejelentkezés…" : "Bejelentkezés"}
          </button>
        </form>
      </div>
    </div>
  );
}
