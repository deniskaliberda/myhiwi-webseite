import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ComplianceNoteProps = {
  /** Mono-Kicker, z. B. „Was passiert mit Ihren Daten". */
  kicker?: string;
  children?: ReactNode;
  /** Compact = ohne Icon, schlanker Box-Look. */
  variant?: "default" | "compact";
  className?: string;
};

/**
 * MyHiwi Redesign 2026 — ComplianceNote
 * components.md §6 + compliance.md §3 DSGVO-Sprache.
 * Default-Wortlaut: „DSGVO-bewusst, mit AVV und Anbieterübersicht projektbezogen."
 *
 * Verwendet wird die Komponente in Digital-Check Screen 5, FAQ-DSGVO-Antwort,
 * Footer-Bereich auf Bedarf. Kein blankes „100 % DSGVO-konform".
 */
export function ComplianceNote({
  kicker = "Was passiert mit Ihren Daten",
  children = (
    <>
      DSGVO-bewusst, mit AVV und Anbieterübersicht projektbezogen. Hosting
      bevorzugt in der EU, Auftragsverarbeitungs-Vertrag auf Anfrage. Sie können
      jederzeit per Mail Löschung verlangen.
    </>
  ),
  variant = "default",
  className,
}: ComplianceNoteProps) {
  const isCompact = variant === "compact";

  return (
    <aside
      className={cn(
        "rounded-mh-md border border-mh-divider bg-mh-subtle",
        isCompact ? "px-mh-4 py-mh-3" : "px-mh-5 py-mh-4",
        "flex gap-mh-3",
        className,
      )}
    >
      {!isCompact ? (
        <ShieldCheck
          className="mt-0.5 h-[22px] w-[22px] shrink-0 text-mh-accent"
          strokeWidth={1.6}
          aria-hidden="true"
        />
      ) : null}
      <div className="flex flex-col gap-mh-1">
        <span className="mh-label-mono text-mh-accent">{kicker}</span>
        <p className="mh-body-small text-mh-text-secondary max-w-mh-text">
          {children}
        </p>
      </div>
    </aside>
  );
}

export default ComplianceNote;
