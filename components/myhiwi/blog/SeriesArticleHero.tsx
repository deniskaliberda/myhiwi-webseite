import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import s from './SeriesArticle.module.css';

type Props = { episode: number; title: ReactNode; lead: string; date: string; dateLabel: string; readTime: string; image: string; imageAlt: string; width: number; height: number; caption: string };
export function SeriesArticleHero(p: Props) {
 return <header className={s.hero}><div className={s.inner}>
  <Link className={s.back} href="/blog">← Zum MyHiwi-Blog</Link>
  <div className={s.grid}><div className={s.copy}>
   <p className={s.eyebrow}>Comunio mit fünf KI-Bots · Folge {p.episode}</p>
   <h1>{p.title}</h1><p className={s.lead}>{p.lead}</p>
   <div className={s.meta}><span>Denis Kaliberda</span><time dateTime={p.date}>{p.dateLabel}</time><span>{p.readTime} Lesezeit</span></div>
  </div><figure className={s.cover}><Image src={p.image} alt={p.imageAlt} width={p.width} height={p.height} priority unoptimized/><figcaption>{p.caption}</figcaption></figure></div>
 </div></header>;
}
