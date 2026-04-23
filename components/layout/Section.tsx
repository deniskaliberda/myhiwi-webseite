import { cn } from "@/lib/utils";
import Container from "./Container";

type SectionVariant = "dark" | "light" | "white";

const variantStyles: Record<SectionVariant, string> = {
  dark: "bg-navy-900 text-white",
  light: "bg-slate-50 text-navy-900",
  white: "bg-white text-navy-900",
};

export default function Section({
  children,
  variant = "white",
  className,
  id,
}: {
  children: React.ReactNode;
  variant?: SectionVariant;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", variantStyles[variant], className)}>
      <Container>{children}</Container>
    </section>
  );
}
