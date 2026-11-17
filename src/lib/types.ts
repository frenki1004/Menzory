/**
 * View models shared by the frontend and the backend implementation.
 * Every API function in src/lib/api.ts is typed with these shapes.
 * Dates are ISO strings (backend maps Prisma `Date` with `.toISOString()`),
 * money is a plain number (backend maps `Decimal` with `Number(...)`).
 */

export type Role = "BUYER" | "SELLER" | "CHARITY" | "ADMIN";

export type OfferType = "INDIVIDUAL" | "SURPRISE_BAG";
export type OfferStatus = "ACTIVE" | "RESERVED" | "EXPIRED" | "CANCELLED";

export type ReservationStatus = "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";

export type DonationStatus = "PENDING" | "APPROVED" | "REJECTED" | "COLLECTED";

export type MembershipStatus = "ACTIVE" | "EXPIRED" | "CANCELLED";

export type ApiErrorCode =
  | "NOT_FOUND"
  | "OUT_OF_STOCK"
  | "TOO_LATE_TO_CANCEL"
  | "MEMBERSHIP_REQUIRED"
  | "NOT_APPROVED"
  | "FORBIDDEN"
  | "UNAUTHENTICATED"
  | "INVALID_INPUT";

export interface StoreSummary {
  id: string;
  name: string;
  address: string;
  phone: string | null;
  latitude: number | null;
  longitude: number | null;
}

export interface CategoryView {
  id: string;
  name: string;
  slug: string;
}

export interface OfferListItem {
  id: string;
  title: string;
  description: string | null;
  offerType: OfferType;
  isDonation: boolean;
  price: number;
  originalPrice: number | null;
  availableQuantity: number;
  status: OfferStatus;
  pickupStart: string;
  pickupEnd: string;
  store: StoreSummary;
  category: CategoryView | null;
}

export interface OfferFilter {
  q?: string;
  categorySlug?: string;
  maxPrice?: number;
  donationOnly?: boolean;
  storeId?: string;
}

export interface ReservationItemView {
  id: string;
  quantity: number;
  unitPrice: number;
  offerTitle: string;
  offerType: OfferType;
}

export interface ReservationView {
  id: string;
  status: ReservationStatus;
  totalAmount: number;
  pickupCode: string | null;
  expiresAt: string;
  createdAt: string;
  store: StoreSummary;
  items: ReservationItemView[];
  canCancel: boolean;
  hasReview: boolean;
}

export interface StoreOfferView {
  id: string;
  title: string;
  offerType: OfferType;
  isDonation: boolean;
  price: number;
  originalPrice: number | null;
  quantity: number;
  availableQuantity: number;
  status: OfferStatus;
  pickupStart: string;
  pickupEnd: string;
}

export interface DonationRequestView {
  id: string;
  quantity: number;
  status: DonationStatus;
  createdAt: string;
  offer: { id: string; title: string; price: number; availableQuantity: number };
  charity: { id: string; name: string };
  store: { id: string; name: string };
}

export interface MembershipPlanView {
  id: string;
  name: string;
  type: string;
  price: number;
  durationDays: number;
}

export interface MembershipView {
  id: string;
  status: MembershipStatus;
  validUntil: string;
  plan: MembershipPlanView;
}

export interface CharitiesAwaitingApprovalView {
  id: string;
  name: string;
  registrationNumber: string;
  address: string | null;
  phone: string | null;
  createdAt: string;
  user: { name: string | null; email: string | null };
}

export interface ProfileView {
  id: string;
  name: string | null;
  email: string | null;
  role: Role;
  store: (StoreSummary & { description: string | null }) | null;
  charity: { id: string; name: string; registrationNumber: string; isApproved: boolean } | null;
}

export interface CurrentUser {
  id: string;
  name: string | null;
  email: string | null;
  role: Role;
}

export interface PickupResultView {
  id: string;
  storeName: string;
  completedAt: string;
  items: { offerTitle: string; quantity: number }[];
}

export interface ReviewInput {
  reservationId: string;
  rating: number;
  comment?: string;
}

export interface CreateOfferInput {
  title: string;
  description?: string;
  categoryId?: string;
  offerType: OfferType;
  price: number;
  originalPrice?: number;
  quantity: number;
  isDonation: boolean;
  pickupStart: string;
  pickupEnd: string;
}

export interface UpdateOfferInput {
  title: string;
  price: number;
  availableQuantity: number;
  status?: OfferStatus;
}

export interface CreateReservationInput {
  offerId: string;
  quantity: number;
}

export interface CreateDonationRequestInput {
  offerId: string;
  quantity: number;
}

export interface UpdateProfileInput {
  name: string;
  address: string;
  phone: string;
  description?: string;
}

export const roleLabels: Record<Role, string> = {
  BUYER: "Kupac",
  SELLER: "Prodajno mjesto",
  CHARITY: "Humanitarna organizacija",
  ADMIN: "Administrator",
};

export const statusLabels: Record<string, string> = {
  ACTIVE: "Aktivna",
  RESERVED: "Rasprodana",
  EXPIRED: "Istekla",
  CANCELLED: "Otkazana",
  PENDING: "Na čekanju",
  CONFIRMED: "Potvrđena",
  COMPLETED: "Preuzeta",
  APPROVED: "Odobren",
  REJECTED: "Odbijen",
  COLLECTED: "Preuzeto",
};

export const offerTypeLabels: Record<OfferType, string> = {
  INDIVIDUAL: "Pojedinačni artikl",
  SURPRISE_BAG: "Paket iznenađenja",
};
