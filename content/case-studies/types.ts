export type CaseMetric = {
  value: string;
  label: string;
  period: string;
  source: string;
  note?: string;
};

export type CaseImage = { src: string; alt: string; caption: string };

export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  location: string;
  title: string;
  summary: string;
  standfirst: string;
  website: string;
  updated: string;
  cover: CaseImage;
  services: Array<{ label: string; href: string }>;
  metrics: CaseMetric[];
  overviewMetricIndexes?: number[];
  metricGroups?: Array<{
    title: string;
    description: string;
    metrics: CaseMetric[];
  }>;
  inquiryHistory?: {
    period: string;
    source: string;
    note: string;
    rows: Array<{ label: string; value: number }>;
  };
  technicalComparison?: {
    period: string;
    source: string;
    note: string;
    rows: Array<{ label: string; before: string; after: string }>;
  };
  challenge: { title: string; body: string };
  improvements: Array<{ title: string; body: string }>;
  comparison?: {
    eyebrow?: string;
    title?: string;
    beforeLabel?: string;
    afterLabel?: string;
    before: CaseImage;
    after: CaseImage;
    note: string;
  };
  gallery: CaseImage[];
  roleViews?: CaseImage[];
  timeline: Array<{ date: string; title: string; body: string }>;
  methodology: string[];
  searchHistory?: Array<{ month: string; clicks: number; impressions: number }>;
  outlook: string;
  video?: { src: string; poster: string; caption: string };
};
