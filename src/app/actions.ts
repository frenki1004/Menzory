"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn, signOut } from "@/auth";
import * as api from "@/lib/api";
import type { OfferType, Role } from "@/lib/types";

export type ActionState = { error?: string; ok?: boolean; message?: string };

function message(error: unknown): string {
  return error instanceof Error ? error.message : "Neočekivana pogreška.";
}

async function run(fn: () => Promise<unknown>, revalidate?: string): Promise<ActionState> {
  try {
    await fn();
    if (revalidate) revalidatePath(revalidate);
    return { ok: true };
  } catch (error) {
    return { error: message(error) };
  }
}

/**
 * Server action for plain `<form action={...}>` buttons: runs the mutation and
 * redirects back to the page with ?ok=1 or ?greska=<poruka>.
 */
async function runAndRedirect(
  fn: () => Promise<unknown>,
  path: string,
  success = "Radnja je uspješno izvršena.",
): Promise<void> {
  let target = `${path}?ok=${encodeURIComponent(success)}`;
  try {
    await fn();
    revalidatePath(path);
  } catch (error) {
    target = `${path}?greska=${encodeURIComponent(message(error))}`;
  }
  redirect(target);
}

/* ------------------------------------------------------------------ prijava */

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function chooseRole(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const role = String(formData.get("role") ?? "") as Role;
  if (!["BUYER", "SELLER", "CHARITY"].includes(role)) {
    return { error: "Odaberite ulogu." };
  }

  const result = await run(() => api.setInitialRole(role));
  if (result.error) return result;

  redirect("/");
}

export async function saveProfile(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const result = await run(
    () =>
      api.updateMyProfile({
        name: String(formData.get("name") ?? ""),
        address: String(formData.get("address") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        description: String(formData.get("description") ?? "") || undefined,
      }),
    "/profil",
  );
  return result.ok ? { ok: true, message: "Profil je spremljen." } : result;
}

/* ------------------------------------------------------------------- ponude */

export async function createOfferAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const isDonation = formData.get("isDonation") === "on";
  const originalPrice = formData.get("originalPrice");

  const result = await run(
    () =>
      api.createOffer({
        title: String(formData.get("title") ?? ""),
        description: String(formData.get("description") ?? "") || undefined,
        categoryId: String(formData.get("categoryId") ?? "") || undefined,
        offerType: String(formData.get("offerType") ?? "INDIVIDUAL") as OfferType,
        price: isDonation ? 0 : Number(formData.get("price") ?? 0),
        originalPrice: originalPrice ? Number(originalPrice) : undefined,
        quantity: Number(formData.get("quantity") ?? 1),
        isDonation,
        pickupStart: String(formData.get("pickupStart") ?? ""),
        pickupEnd: String(formData.get("pickupEnd") ?? ""),
      }),
    "/prodajno-mjesto/ponude",
  );
  if (result.error) return result;

  redirect("/prodajno-mjesto/ponude?novo=1");
}

export async function updateOfferAction(formData: FormData) {
  return runAndRedirect(
    () =>
      api.updateOffer(String(formData.get("id")), {
        title: String(formData.get("title") ?? ""),
        price: Number(formData.get("price") ?? 0),
        availableQuantity: Number(formData.get("availableQuantity") ?? 0),
      }),
    "/prodajno-mjesto/ponude",
    "Ponuda je ažurirana.",
  );
}

export async function withdrawOfferAction(formData: FormData) {
  return runAndRedirect(
    () => api.withdrawOffer(String(formData.get("id"))),
    "/prodajno-mjesto/ponude",
    "Ponuda je povučena.",
  );
}

/* -------------------------------------------------------------- rezervacije */

export async function reserveAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const result = await run(
    () =>
      api.createReservation({
        offerId: String(formData.get("offerId")),
        quantity: Number(formData.get("quantity") ?? 1),
      }),
    "/kupac/rezervacije",
  );
  if (result.error) return result;

  redirect("/kupac/rezervacije?rezervirano=1");
}

export async function cancelReservationAction(formData: FormData) {
  return runAndRedirect(
    () => api.cancelReservation(String(formData.get("id"))),
    "/kupac/rezervacije",
    "Rezervacija je otkazana i količina je vraćena u ponudu.",
  );
}

export type PickupState = ActionState & { result?: { storeName: string; itemCount: number } };

export async function verifyPickupAction(
  _prev: PickupState,
  formData: FormData,
): Promise<PickupState> {
  const code = String(formData.get("pickupCode") ?? "").trim().toUpperCase();
  if (code.length !== 6) {
    return { error: "Kod se sastoji od 6 znakova." };
  }

  try {
    const pickup = await api.confirmPickup(code);
    revalidatePath("/prodajno-mjesto/preuzimanje");
    return {
      ok: true,
      message: "Preuzimanje je potvrđeno.",
      result: {
        storeName: pickup.storeName,
        itemCount: pickup.items.reduce((sum, item) => sum + item.quantity, 0),
      },
    };
  } catch (error) {
    return { error: message(error) };
  }
}

export async function reviewAction(formData: FormData) {
  return runAndRedirect(
    () =>
      api.createReview({
        reservationId: String(formData.get("reservationId")),
        rating: Number(formData.get("rating") ?? 5),
        comment: String(formData.get("comment") ?? "") || undefined,
      }),
    "/kupac/rezervacije",
    "Hvala na ocjeni!",
  );
}

/* ---------------------------------------------------------------- donacije */

export async function requestDonationAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const result = await run(
    () =>
      api.createDonationRequest({
        offerId: String(formData.get("offerId")),
        quantity: Number(formData.get("quantity") ?? 1),
      }),
    "/organizacija/donacije",
  );
  return result.ok ? { ok: true, message: "Zahtjev je poslan prodajnom mjestu." } : result;
}

export async function decideDonationRequestAction(formData: FormData) {
  const decision = String(formData.get("decision")) === "APPROVED" ? "APPROVED" : "REJECTED";

  return runAndRedirect(
    () => api.decideDonationRequest(String(formData.get("id")), decision),
    "/prodajno-mjesto/zahtjevi",
    decision === "APPROVED" ? "Zahtjev je odobren." : "Zahtjev je odbijen.",
  );
}

/* --------------------------------------------------------- članarine, admin */

export async function membershipCheckoutAction(formData: FormData) {
  return runAndRedirect(
    () => api.startMembershipCheckout(String(formData.get("planId"))),
    "/profil",
    "Članarina je aktivirana.",
  );
}

export async function decideCharityAction(formData: FormData) {
  const decision = String(formData.get("decision")) === "APPROVED" ? "APPROVED" : "REJECTED";

  return runAndRedirect(
    () => api.decideCharity(String(formData.get("id")), decision),
    "/admin",
    decision === "APPROVED" ? "Profil je odobren." : "Profil je odbijen.",
  );
}
