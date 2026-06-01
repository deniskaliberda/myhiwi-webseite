import { NextResponse, type NextRequest } from "next/server";

/**
 * Canonical host enforcement: 301-redirect www.myhiwi.de → myhiwi.de.
 * Fixes the host ambiguity (both hosts previously returned 200), which splits
 * ranking signals on a young domain. Non-www is the canonical host (matches the
 * canonicals + sitemap + metadataBase).
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (host.toLowerCase().startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = host.slice(4); // strip leading "www."
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  // Run on real page routes; skip Next internals, API, and static assets.
  matcher: ["/((?!_next/static|_next/image|api/|favicon.ico|.*\\.).*)"],
};
