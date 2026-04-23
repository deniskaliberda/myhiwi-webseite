import { cn } from "@/lib/utils";

export default function StatCard({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <div className="text-3xl md:text-4xl font-heading font-bold text-blue-500">
        {value}
      </div>
      <div className="mt-1 text-sm text-slate-400">{label}</div>
    </div>
  );
}
