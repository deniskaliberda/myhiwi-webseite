import Image from "next/image";
import Link from "next/link";
import { getCaseStudy } from "@/content/case-studies";
import { Card } from "./Card";

/** A current reference, shared by existing industry and founder pages. */
export function ProjectTeaser({ slug }: { slug: string }) {
  const project = getCaseStudy(slug);
  const metric = project.metrics[0];
  return (
    <Card className="grid gap-mh-6 md:grid-cols-2 md:items-center">
      <Image
        src={project.cover.src}
        alt={project.cover.alt}
        width={1440}
        height={1000}
        sizes="(max-width: 767px) 85vw, 45vw"
        className="w-full rounded-mh-md border border-mh-divider"
      />
      <div>
        <p className="mh-label-mono-sm text-mh-text-secondary">
          {project.industry} · {project.location}
        </p>
        <h3 className="mt-mh-3 mh-display-4">{project.name}</h3>
        <p className="mt-mh-4 mh-body-medium text-mh-text-secondary">
          {project.summary}
        </p>
        <p className="mt-mh-4 mh-body-medium font-semibold">
          {metric.value} {metric.label}
        </p>
        <p className="mt-mh-2 mh-body-xs text-mh-text-secondary">
          {metric.period} · {metric.source}
        </p>
        <Link
          href={`/case-studies/${slug}`}
          className="mt-mh-5 inline-flex min-h-[44px] items-center gap-mh-3 font-semibold underline underline-offset-4"
        >
          Projekt und Ergebnisse ansehen <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </Card>
  );
}
