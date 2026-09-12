"""Render publication figures from the same records used by the statistics page.

Run with Python 3 + matplotlib. MH_STATS_FONT can point to a local TTF;
otherwise the installed system Arial is used. No online data is fetched.
"""
import json
import os
from pathlib import Path
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib import font_manager

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / 'content/research/digitalisierung-ki.json').read_text())
font = Path(os.environ.get('MH_STATS_FONT', '/System/Library/Fonts/Supplemental/Arial.ttf'))
if font.exists():
    font_manager.fontManager.addfont(str(font))
    plt.rcParams['font.family'] = font_manager.FontProperties(fname=str(font)).get_name()
plt.rcParams['svg.fonttype'] = 'path'
plt.rcParams['svg.hashsalt'] = 'myhiwi-statistics'
ink, blue, muted, paper = '#0F172A', '#2563EB', '#475569', '#FFFFFF'
charts = [
    ('ki-groessenklassen', 'KI-Nutzung nach Unternehmensgröße',
     'Deutschland · Daten 2025 · Unternehmen der Destatis-IKT-Erhebung',
     ['ki-10-49', 'ki-50-249', 'ki-gross'],
     ['10–49 Beschäftigte', '50–249 Beschäftigte', 'Mehr als 250 Beschäftigte*'],
     'Quelle: Statistisches Bundesamt, Tabellenstand 24.11.2025.\n* Beschriftung der obersten Größenklasse wie in der Originaltabelle.'),
    ('digitalstrategie', 'Hat das Unternehmen eine Digitalstrategie?',
     'Deutschland · KW 2–6, 2026 · Unternehmen mit 20–99 Beschäftigten',
     ['strategie-fehlt', 'strategie-bereiche', 'strategie-zentral'],
     ['Keine Digitalstrategie', 'Strategien in einzelnen Bereichen', 'Zentrale Digitalstrategie'],
     'Quelle: Bitkom Research / Bitkom e. V., Veröffentlichung 16.03.2026.\nGesamtbefragung: 604 Unternehmen ab 20 Beschäftigten; hier nur die Teilgruppe 20–99.')
]
for name,title,subtitle,ids,labels,note in charts:
    values=[next(r['value'] for r in data['statistics'] if r['id']==id) for id in ids]
    fig=plt.figure(figsize=(14,9), dpi=100, facecolor=paper)
    fig.text(.06,.91,'MYHIWI  /  ZAHLEN & QUELLEN',color=blue,fontsize=12,weight='bold')
    fig.text(.06,.83,title,color=ink,fontsize=26,weight='bold')
    fig.text(.06,.77,subtitle,color=muted,fontsize=14)
    ax=fig.add_axes([.36,.32,.56,.36])
    ax.barh(range(3),values,color=blue,height=.42,zorder=3)
    ax.set_yticks(range(3),labels,fontsize=13,color=ink)
    ax.invert_yaxis(); ax.set_xlim(0,100)
    ax.set_xticks([0,25,50,75,100],['0','25','50','75','100 %'],color=muted,fontsize=12)
    ax.grid(axis='x',color='#F8FAFC',linewidth=2,zorder=0)
    for spine in ax.spines.values():spine.set_visible(False)
    ax.tick_params(axis='both',length=0,pad=12)
    for i,v in enumerate(values):ax.text(v+2,i,f'{v:g} %'.replace('.',','),va='center',color=ink,fontsize=16,weight='bold')
    fig.text(.06,.18,note,color=muted,fontsize=12,linespacing=1.7)
    fig.text(.06,.065,'Eigene Darstellung: MyHiwi · Quellenprüfung '+data['checked']+'\nmyhiwi.de/wissen/digitalisierung-ki-statistiken',color=muted,fontsize=11,linespacing=1.7)
    out=ROOT/'public/wissen/digitalisierung-ki'/name
    fig.savefig(out.with_suffix('.svg'),metadata={'Date': None,'Description':subtitle+' '+note})
    fig.savefig(out.with_suffix('.png'))
    plt.close(fig)
