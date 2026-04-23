import { ExternalLink } from "lucide-react";

const pressLinks = [
  {
    label: "Wikipedia",
    href: "https://de.wikipedia.org/wiki/Denis_Kaliberda",
  },
  {
    label: "Tagesspiegel",
    href: "https://www.tagesspiegel.de/themen/denis-kaliberda",
  },
];

export default function SocialProofBar() {
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <span className="font-medium text-navy-800">
            Gegründet von Ex-Volleyball-Nationalspieler Denis Kaliberda
          </span>
          <span className="hidden sm:inline text-slate-300">|</span>
          {pressLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-navy-900 transition-colors"
            >
              {link.label}
              <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
