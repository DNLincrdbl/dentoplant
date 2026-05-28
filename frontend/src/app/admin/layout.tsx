"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, FileText, LogOut, Plus } from "lucide-react";
import { adminCheck, adminLogout, type AdminUser, adminMe } from "@/lib/admin";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [checking, setChecking] = useState(true);

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const c = await adminCheck();
      if (cancelled) return;
      if (!c.authenticated || !c.is_admin) {
        setChecking(false);
        if (!isLoginPage) router.replace("/admin/login");
        return;
      }
      const me = await adminMe();
      if (cancelled) return;
      setUser(me);
      setChecking(false);
      if (isLoginPage) router.replace("/admin");
    })();
    return () => {
      cancelled = true;
    };
  }, [isLoginPage, router]);

  if (isLoginPage) {
    return <div className="min-h-screen bg-muted/40">{children}</div>;
  }

  if (checking) {
    return (
      <div className="grid min-h-screen place-items-center bg-muted/40">
        <div className="text-sm text-muted-foreground">Bejelentkezés ellenőrzése…</div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-muted/40">
      <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link
              href="/admin"
              className="font-display text-lg font-semibold tracking-tight text-brand-900"
            >
              Dentoplant <span className="text-brand-600">admin</span>
            </Link>
            <nav className="hidden items-center gap-1 md:flex">
              <AdminNavLink href="/admin" exact icon={<FileText className="h-4 w-4" />}>
                Cikkek
              </AdminNavLink>
              <AdminNavLink href="/admin/blog/new" icon={<Plus className="h-4 w-4" />}>
                Új cikk
              </AdminNavLink>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-brand-700 md:inline-flex"
            >
              <ArrowLeft className="h-4 w-4" />
              Vissza a weboldalra
            </Link>
            <span className="hidden text-sm text-muted-foreground md:inline">{user.email}</span>
            <button
              type="button"
              onClick={async () => {
                await adminLogout();
                router.replace("/admin/login");
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground/85 hover:border-brand-600 hover:text-brand-700"
            >
              <LogOut className="h-4 w-4" />
              Kijelentkezés
            </button>
          </div>
        </div>
      </header>

      <main className="container-page py-8 md:py-12">{children}</main>
    </div>
  );
}

function AdminNavLink({
  href,
  exact,
  icon,
  children,
}: {
  href: string;
  exact?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
        isActive
          ? "bg-brand-600 text-white"
          : "text-foreground/75 hover:bg-brand-50 hover:text-brand-700"
      }`}
    >
      {icon}
      {children}
    </Link>
  );
}
