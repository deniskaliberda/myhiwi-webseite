export type ServiceInterest = 'webdesign' | 'seo' | 'beides';
export type HasWebsite = 'ja' | 'nein';
export type BusinessCategory = 'gastronomie' | 'handwerk' | 'arztpraxis' | 'einzelhandel' | 'dienstleister' | 'sonstiges';
export type Challenge = 'sichtbarkeit' | 'veraltete-website' | 'wenig-anfragen' | 'schlechte-bewertungen' | 'anderes';
export type Timeline = 'sofort' | '1-3-monate' | 'informieren';

export interface QuizData {
  service: ServiceInterest | null;
  hasWebsite: HasWebsite | null;
  business: BusinessCategory | null;
  businessCustom: string;
  challenge: Challenge | null;
  challengeCustom: string;
  timeline: Timeline | null;
  name: string;
  email: string;
  phone: string;
  website: string;
  message: string;
}

export const TOTAL_QUIZ_STEPS = 6;

export const initialQuizData: QuizData = {
  service: null,
  hasWebsite: null,
  business: null,
  businessCustom: '',
  challenge: null,
  challengeCustom: '',
  timeline: null,
  name: '',
  email: '',
  phone: '',
  website: '',
  message: '',
};

export const serviceLabels: Record<ServiceInterest, string> = {
  webdesign: 'Webdesign',
  seo: 'Local SEO',
  beides: 'Webdesign & Local SEO',
};

export const websiteLabels: Record<HasWebsite, string> = {
  ja: 'Ja',
  nein: 'Nein',
};

export const businessLabels: Record<BusinessCategory, string> = {
  gastronomie: 'Gastronomie',
  handwerk: 'Handwerk',
  arztpraxis: 'Arztpraxis / Gesundheit',
  einzelhandel: 'Einzelhandel',
  dienstleister: 'Dienstleister',
  sonstiges: 'Sonstiges',
};

export const challengeLabels: Record<Challenge, string> = {
  sichtbarkeit: 'Keine Sichtbarkeit bei Google',
  'veraltete-website': 'Veraltete Website',
  'wenig-anfragen': 'Wenig Kundenanfragen',
  'schlechte-bewertungen': 'Schlechte Google-Bewertungen',
  anderes: 'Anderes',
};

export const timelineLabels: Record<Timeline, string> = {
  sofort: 'Sofort',
  '1-3-monate': 'In 1–3 Monaten',
  informieren: 'Erst mal informieren',
};
