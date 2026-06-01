export const META_PIXEL_ENV_KEY = "NEXT_PUBLIC_META_PIXEL_ID";

type MetaPixelEnv = {
  [META_PIXEL_ENV_KEY]?: string | undefined;
  [key: string]: string | undefined;
};

/** Returns a validated Meta Pixel id (5–32 digits) or "" when unset/invalid. */
export function getMetaPixelId(env: MetaPixelEnv = process.env) {
  const pixelId = env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || "";

  return /^\d{5,32}$/.test(pixelId) ? pixelId : "";
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fires the browser-side Meta `Lead` event. `eventId` is the dedup key and must
 * match the server-side CAPI event_id so Meta counts the lead once, not twice.
 */
export function trackMetaLead(
  eventId: string,
  customData: Record<string, string | number> = {},
) {
  if (
    typeof window === "undefined" ||
    typeof window.fbq !== "function" ||
    !eventId.trim()
  ) {
    return false;
  }

  window.fbq("track", "Lead", customData, { eventID: eventId });
  return true;
}
