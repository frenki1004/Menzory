import type { OfferListItem } from "@/lib/types";

const dateFormat = new Intl.DateTimeFormat("hr-HR", {
  day: "2-digit",
  month: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

const dayFormat = new Intl.DateTimeFormat("hr-HR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export function formatDateTime(value: string) {
  return dateFormat.format(new Date(value));
}

export function formatDate(value: string) {
  return dayFormat.format(new Date(value));
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("hr-HR", { style: "currency", currency: "EUR" }).format(value);
}

export function pickupWindow(offer: Pick<OfferListItem, "pickupStart" | "pickupEnd">) {
  return `${formatDateTime(offer.pickupStart)} – ${formatDateTime(offer.pickupEnd)}`;
}

export function discountPercent(price: number, originalPrice: number | null) {
  if (!originalPrice || originalPrice <= price) return null;
  return Math.round((1 - price / originalPrice) * 100);
}

/** Formats a Date as the `YYYY-MM-DDTHH:mm` value a datetime-local input expects. */
export function toDateTimeInput(date: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
