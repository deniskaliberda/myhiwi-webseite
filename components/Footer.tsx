import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Container from "@/components/layout/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-400">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <p className="text-white font-heading font-semibold text-lg mb-2">
              MyHiwi
            </p>
            <p className="text-sm leading-relaxed">
              Digitale Kundengewinnung für lokale Unternehmen — Website, SEO
              und messbare Ergebnisse.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-medium text-sm mb-3">Navigation</p>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Über mich", href: "/ueber-mich" },
                { label: "Blog", href: "/blog" },
                { label: "Kontakt", href: "/kontakt" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-medium text-sm mb-3">Kontakt</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:kontakt@myhiwi.de"
                  className="hover:text-white transition-colors"
                >
                  kontakt@myhiwi.de
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Ahrensfelde, Brandenburg</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p>© {currentYear} MyHiwi UG. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
