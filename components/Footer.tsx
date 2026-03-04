import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/myhiwi-logo.png"
                alt="MyHiwi"
                width={48}
                height={48}
                className="rounded-md brightness-110"
              />
              <span className="text-xl font-bold font-inter">MyHiwi</span>
            </div>
            <p className="text-slate-300 mb-4">
              Spezialisierte SEO- und Webdesign-Agentur für kleine, lokale Unternehmen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-inter font-semibold mb-4 text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/seo" className="text-slate-300 hover:text-white transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/webdesign" className="text-slate-300 hover:text-white transition-colors">
                  Webdesign
                </Link>
              </li>
              <li>
                <Link href="/starter" className="text-slate-300 hover:text-white transition-colors">
                  Starter-Paket
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/ueber-mich" className="text-slate-300 hover:text-white transition-colors">
                  Über mich
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-slate-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-inter font-semibold mb-4 text-white">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-300">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:kontakt@myhiwi.de" className="hover:text-white transition-colors">
                  kontakt@myhiwi.de
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Ahrensfelde, Brandenburg</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} MyHiwi. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/impressum" className="text-slate-400 hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-slate-400 hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
