"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Case Study", href: "/#case" },
  { label: "Preise", href: "/#preise" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Blog", href: "/blog" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Light treatment on homepage + kontakt (both already use light backgrounds).
  // Dark treatment everywhere else.
  const light = pathname === "/" || pathname?.startsWith("/kontakt");

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors",
        light
          ? "bg-white/75 border-slate-200/70"
          : "bg-navy-900/90 border-white/5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo — official MyHiwi brand icon */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="MyHiwi — Startseite">
            <Image
              src="/brand/myhiwi-icon.svg"
              alt=""
              width={36}
              height={36}
              priority
              className="h-9 w-9 rounded-lg shadow-sm"
            />
            <span
              className={cn(
                "font-heading font-bold tracking-tight text-base",
                light ? "text-slate-900" : "text-white"
              )}
            >
              <span className="font-light opacity-70">My</span>Hiwi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  light
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-300 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className={cn(
                "group inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition-all",
                "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/30 hover:shadow-lg"
              )}
            >
              Erstgespräch
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className={cn(
              "md:hidden p-2 rounded-md transition-colors",
              light ? "text-slate-700 hover:bg-slate-100" : "text-slate-300 hover:bg-white/5"
            )}
            onClick={() => setOpen(!open)}
            aria-label="Menü"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className={cn(
              "md:hidden py-4 border-t",
              light ? "border-slate-200" : "border-white/5"
            )}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "py-2.5 px-2 text-base font-medium rounded transition-colors",
                    light ? "text-slate-700 hover:bg-slate-100" : "text-slate-300 hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
              >
                Erstgespräch buchen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
