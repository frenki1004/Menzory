/**
 * FRONTEND ↔ BACKEND CONTRACT
 * ---------------------------------------------------------------------------
 * Every page/component calls this module only. Each function is a placeholder
 * until the backend team implements it (see FRONTEND-BACKEND-CONTRACT.md).
 *
 * Rules for the implementer:
 *  - Keep the exported name and signature; replace the body.
 *  - Queries (get*) return the view models from src/lib/types.ts.
 *  - Mutations return `{ ok: true }` or throw an ApiError with a code.
 *  - Never return Prisma models directly: map Decimal -> number, Date -> ISO.
 */

import type {
  ApiErrorCode,
  CategoryView,
  CharitiesAwaitingApprovalView,
  CreateDonationRequestInput,
  CreateOfferInput,
  CreateReservationInput,
  CurrentUser,
  DonationRequestView,
  MembershipPlanView,
  MembershipView,
  OfferFilter,
  OfferListItem,
  PickupResultView,
  ProfileView,
  ReservationView,
  ReviewInput,
  Role,
  StoreOfferView,
  UpdateOfferInput,
  UpdateProfileInput,
} from "@/lib/types";

export class ApiError extends Error {
  constructor(
    public code: ApiErrorCode,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

class NotImplementedError extends Error {
  constructor(name: string) {
    super(`Backend nije implementiran: ${name}()`);
    this.name = "NotImplementedError";
  }
}

/** Placeholder for every query: returns an empty result until implemented. */
function empty<T>(name: string): T {
  void name;
  return [] as unknown as T;
}

/** Placeholder for every mutation: throws until implemented. */
function todo(name: string): never {
  throw new NotImplementedError(name);
}

/* ---------------------------------------------------------------- session */

export async function getCurrentUser(): Promise<CurrentUser | null> {
  // BACKEND: auth() iz src/auth.ts + prisma.user.findUnique
  return null;
}

export async function getMyProfile(): Promise<ProfileView | null> {
  // BACKEND: profile.service.ts -> getProfile(userId)
  return null;
}

export async function updateMyProfile(input: UpdateProfileInput): Promise<{ ok: true }> {
  // BACKEND: profile.service.ts -> updateProfile(userId, input)
  void input;
  return todo("updateMyProfile");
}

export async function setInitialRole(role: Role): Promise<{ ok: true }> {
  // BACKEND: auth/role.service.ts -> setInitialRole(userId, role)
  void role;
  return todo("setInitialRole");
}

/* ----------------------------------------------------------------- ponude */

export async function getCategories(): Promise<CategoryView[]> {
  // BACKEND: category.service.ts -> listCategories()
  return empty("getCategories");
}

export async function getActiveOffers(filter: OfferFilter = {}): Promise<OfferListItem[]> {
  // BACKEND: offer.service.ts -> getActiveOffers(filter)
  void filter;
  return empty("getActiveOffers");
}

export async function getOfferById(id: string): Promise<OfferListItem | null> {
  // BACKEND: offer.service.ts -> getOfferById(id)
  void id;
  return null;
}

export async function getStoreOffers(): Promise<StoreOfferView[]> {
  // BACKEND: offer.service.ts -> getStoreOffers(storeId)
  return empty("getStoreOffers");
}

export async function createOffer(input: CreateOfferInput): Promise<{ ok: true }> {
  // BACKEND: offer.service.ts -> createOffer({ storeId, ...input })
  void input;
  return todo("createOffer");
}

export async function updateOffer(id: string, input: UpdateOfferInput): Promise<{ ok: true }> {
  // BACKEND: offer.service.ts -> updateOffer(storeId, id, input)
  void id;
  void input;
  return todo("updateOffer");
}

export async function withdrawOffer(id: string): Promise<{ ok: true }> {
  // BACKEND: offer.service.ts -> withdrawOffer(storeId, id)  (status = CANCELLED)
  void id;
  return todo("withdrawOffer");
}

/* ------------------------------------------------------------ rezervacije */

export async function createReservation(input: CreateReservationInput): Promise<{ ok: true }> {
  // BACKEND: reservation.service.ts -> createReservation({ userId, ...input })
  void input;
  return todo("createReservation");
}

export async function cancelReservation(id: string): Promise<{ ok: true }> {
  // BACKEND: reservation.service.ts -> cancelReservation(userId, id)
  //          Pravilo: dopušteno samo > 1 h prije pickupEnd (P-04), vraća količinu.
  void id;
  return todo("cancelReservation");
}

export async function getUserReservations(): Promise<ReservationView[]> {
  // BACKEND: reservation.service.ts -> getUserReservations(userId)
  return empty("getUserReservations");
}

export async function confirmPickup(pickupCode: string): Promise<PickupResultView> {
  // BACKEND: reservation.service.ts -> confirmPickup({ storeId, pickupCode })
  void pickupCode;
  return todo("confirmPickup");
}

export async function createReview(input: ReviewInput): Promise<{ ok: true }> {
  // BACKEND: review.service.ts -> createReview(userId, input)
  void input;
  return todo("createReview");
}

/* ---------------------------------------------------------------- donacije */

export async function getDonationOffers(): Promise<OfferListItem[]> {
  // BACKEND: offer.service.ts -> getActiveOffers({ isDonation: true })
  return empty("getDonationOffers");
}

export async function createDonationRequest(
  input: CreateDonationRequestInput,
): Promise<{ ok: true }> {
  // BACKEND: donation.service.ts -> createDonationRequest(charityId, input)
  void input;
  return todo("createDonationRequest");
}

export async function getMyDonationRequests(): Promise<DonationRequestView[]> {
  // BACKEND: donation.service.ts -> getCharityRequests(charityId)
  return empty("getMyDonationRequests");
}

export async function getStoreDonationRequests(): Promise<DonationRequestView[]> {
  // BACKEND: donation.service.ts -> getStoreRequests(storeId)
  return empty("getStoreDonationRequests");
}

export async function decideDonationRequest(
  id: string,
  decision: "APPROVED" | "REJECTED",
): Promise<{ ok: true }> {
  // BACKEND: donation.service.ts -> decideDonationRequest(storeId, id, decision)
  void id;
  void decision;
  return todo("decideDonationRequest");
}

/* --------------------------------------------------------- članarine i admin */

export async function getMembershipPlans(): Promise<MembershipPlanView[]> {
  // BACKEND: membership.service.ts -> listPlans()
  return empty("getMembershipPlans");
}

export async function getMyMembership(): Promise<MembershipView | null> {
  // BACKEND: membership.service.ts -> getActiveMembership(storeId)
  return null;
}

export async function startMembershipCheckout(planId: string): Promise<{ ok: true }> {
  // BACKEND: membership.service.ts + payment provider (F-005)
  void planId;
  return todo("startMembershipCheckout");
}

export async function getPendingCharities(): Promise<CharitiesAwaitingApprovalView[]> {
  // BACKEND: admin.service.ts -> listPendingCharities()
  return empty("getPendingCharities");
}

export async function decideCharity(
  id: string,
  decision: "APPROVED" | "REJECTED",
): Promise<{ ok: true }> {
  // BACKEND: admin.service.ts -> approveCharity / rejectCharity
  void id;
  void decision;
  return todo("decideCharity");
}
