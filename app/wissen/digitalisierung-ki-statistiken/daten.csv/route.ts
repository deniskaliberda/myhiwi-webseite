import data from "@/content/research/digitalisierung-ki.json";

export const dynamic = "force-static";

export function GET() {
  const quote = (value: string | number) => `"${String(value).replace(/"/g, '""')}"`;
  const header = ["ID", "Kennzahl", "Wert", "Einheit", "Datenzeitraum", "Bezugsgruppe", "Herausgeber", "Veröffentlichung", "Originalquelle", "Fundstelle", "Geprüft am", "Direktlink"];
  const rows = data.statistics.map((row) => {
    const source = data.sources.find((item) => item.id === row.source)!;
    return [row.id, row.label, String(row.value).replace(".", ","), row.unit, row.period, row.basis, source.publisher, source.date, row.location.startsWith("KfW-Dossier") && source.companion ? source.companion : source.url, row.location, data.checked, `https://myhiwi.de/wissen/${data.slug}#${row.id}`];
  });
  const csv = "\uFEFF" + [header, ...rows].map((row) => row.map(quote).join(";")).join("\r\n") + "\r\n";
  return new Response(csv, { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": 'attachment; filename="myhiwi-digitalisierung-ki-statistiken.csv"', "X-Robots-Tag": "noindex" } });
}
