"use client";

import { usePathname } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Header as MyHiwiHeader } from "@/components/myhiwi/layout/Header";
import { Footer as MyHiwiFooter } from "@/components/myhiwi/layout/Footer";

const HOME_NAV = [
  { label: "System", href: "/#system" },
  { label: "Cases", href: "/case-studies" },
  { label: "Pakete", href: "/#pakete" },
  { label: "Über MyHiwi", href: "/ueber-mich" },
];

const HOME_DRAWER = [
  {
    label: "Homepage",
    items: [
      { label: "System", href: "/#system" },
      { label: "Pakete", href: "/#pakete" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    label: "Cases",
    items: [
      { label: "Alle Case Studies", href: "/case-studies" },
      {
        label: "Sonnenhof Herrsching",
        href: "/case-studies/sonnenhof-herrsching",
      },
    ],
  },
  {
    label: "MyHiwi",
    items: [
      { label: "Über MyHiwi", href: "/ueber-mich" },
      { label: "Blog", href: "/blog" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
];

const HOME_FOOTER_COLUMNS = [
  {
    label: "System",
    items: [
      { label: "Sichtbarkeit", href: "/#system" },
      { label: "Anfrage & Buchung", href: "/#system" },
      { label: "Zahlung & Verbindlichkeit", href: "/#system" },
      { label: "AI & Automation", href: "/#system" },
    ],
  },
  {
    label: "Cases",
    items: [
      { label: "Alle Case Studies", href: "/case-studies" },
      {
        label: "Sonnenhof Herrsching",
        href: "/case-studies/sonnenhof-herrsching",
      },
      { label: "Mr. Sherman Tanzstudio", href: "/case-studies/mr-sherman" },
      { label: "Formazin", href: "/case-studies/formazin" },
    ],
  },
  {
    label: "MyHiwi",
    items: [
      { label: "Über MyHiwi", href: "/ueber-mich" },
      { label: "Blog", href: "/blog" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProposal = pathname?.startsWith("/p/");
  const isHome = pathname === "/";

  if (isProposal) {
    return <>{children}</>;
  }

  if (isHome) {
    return (
      <>
        <MyHiwiHeader
          navItems={HOME_NAV}
          drawerGroups={HOME_DRAWER}
          cta={{
            label: "Kostenlosen Digital-Check anfragen",
            href: "/kontakt",
          }}
        />
        <main>{children}</main>
        <MyHiwiFooter columns={HOME_FOOTER_COLUMNS} />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
