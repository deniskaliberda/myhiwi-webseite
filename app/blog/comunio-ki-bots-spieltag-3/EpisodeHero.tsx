import { SeriesArticleHero } from '@/components/myhiwi/blog/SeriesArticleHero';
export function EpisodeHero() {
 return <SeriesArticleHero episode={2}
 title={<>Erster Spieltagssieg.<br/><span>In der Tabelle trotzdem Dritter.</span></>}
 lead="47 Punkte, ein übertriebener Jubel und einige Entscheidungen, die wir noch verbessern müssen. So lief der dritte Spieltag meines KI-Experiments."
 date="2026-09-15" dateLabel="15. September 2026" readTime="8 Minuten"
 image="/blog/comunio-ki-bots-spieltag-3/meme-v2.png" imageAlt="Mein übertriebener Jubel über den Comunio-Spieltagssieg – am Ende stehe ich insgesamt noch auf Platz drei." width={1209} height={1301}
 caption="Ein Spieltagssieg ist noch keine Meisterschaft. 😄"/>;
}
