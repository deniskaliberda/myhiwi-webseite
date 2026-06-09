import { MetadataRoute } from 'next';

// Explicitly welcome the AI-search crawlers (GEO). They are already allowed via
// '*', but listing them makes the intent auditable and guarantees we never
// accidentally block Google-Extended / GPTBot / PerplexityBot etc. — which would
// cut MyHiwi out of ChatGPT / Perplexity / AI Overview answers.
const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'anthropic-ai',
  'Claude-Web',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
      ...AI_BOTS.map((ua) => ({ userAgent: ua, allow: '/', disallow: '/api/' })),
    ],
    sitemap: 'https://myhiwi.de/sitemap.xml',
  };
}
