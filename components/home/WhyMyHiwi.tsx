import Container from "@/components/layout/Container";
import SectionReveal from "@/components/shared/SectionReveal";

const stats = [
  {
    value: "87%",
    label: "günstiger",
    description: "als traditionelle Agenturen — bei gleicher Qualität",
  },
  {
    value: "<1s",
    label: "Ladezeit",
    description: "Next.js statt WordPress — Ihre Website ist blitzschnell",
  },
  {
    value: "100%",
    label: "transparent",
    description: "Sie sehen genau, was Ihr Investment bringt — in echten Zahlen",
  },
];

export default function WhyMyHiwi() {
  return (
    <section className="py-24 md:py-32 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 noise" />

      <Container className="relative">
        <SectionReveal>
          <p className="text-blue-500 font-medium text-xs tracking-widest uppercase mb-4">
            Warum MyHiwi
          </p>
          <h2 className="text-white max-w-md mb-16">
            Anders als andere.
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.value} delay={i * 100}>
              <div>
                <p className="text-6xl md:text-7xl font-heading font-bold text-white leading-none mb-3">
                  {stat.value}
                </p>
                <p className="text-blue-500 font-heading font-semibold text-lg mb-2">
                  {stat.label}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
