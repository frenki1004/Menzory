import Link from "next/link";
import { Utensils, ArrowLeft, Clock, MapPin, Tag } from "lucide-react";

export const dynamic = "force-dynamic";

export default function OffersPage() {
  // Demonstration active surplus offers matching UC-03
  const sampleOffers = [
    {
      id: "off-1",
      title: "Pekarski paket iznenađenja",
      storeName: "Pekara Zlatni Klas",
      address: "Ilica 42, Zagreb",
      offerType: "SURPRISE_BAG",
      price: "3.50",
      originalPrice: "9.00",
      availableQuantity: 4,
      pickupWindow: "Danas 19:30 - 20:30",
    },
    {
      id: "off-2",
      title: "Dnevni veganski meni (višak)",
      storeName: "Bistro Zeleni Kutak",
      address: "Savska cesta 18, Zagreb",
      offerType: "INDIVIDUAL",
      price: "4.80",
      originalPrice: "11.50",
      availableQuantity: 2,
      pickupWindow: "Danas 15:00 - 16:30",
    },
    {
      id: "off-3",
      title: "Miješano sezonsko voće (2 kg)",
      storeName: "Bio Tržnica Kvatrić",
      address: "Šubićeva 20, Zagreb",
      offerType: "INDIVIDUAL",
      price: "2.90",
      originalPrice: "7.00",
      availableQuantity: 6,
      pickupWindow: "Danas 18:00 - 19:30",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col p-6 sm:p-12 max-w-5xl mx-auto w-full">
      {/* Top Nav */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-200">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Početna</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/prodajno-mjesto/nova-ponuda"
            className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition"
          >
            + Objava ponude (Prodajno mjesto)
          </Link>
          <Link
            href="/prodajno-mjesto/preuzimanje"
            className="text-xs font-semibold text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition"
          >
            Potvrda koda (UC-04)
          </Link>
        </div>
      </div>

      {/* Title */}
      <div className="py-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Dostupne ponude hrane</h1>
        <p className="mt-2 text-sm text-slate-600">
          Pregledajte svježe ponude viška hrane u vašoj blizini i rezervirajte ih prije isteka roka (FZ-17, FZ-20).
        </p>
      </div>

      {/* Offer Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleOffers.map((offer) => {
          const discount = Math.round(
            (1 - parseFloat(offer.price) / parseFloat(offer.originalPrice)) * 100
          );

          return (
            <div
              key={offer.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800">
                    {offer.offerType === "SURPRISE_BAG" ? "Paket iznenađenja" : "Pojedinačni artikl"}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-700">
                    -{discount}%
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">{offer.title}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-700">{offer.storeName}</p>
                <div className="mt-4 space-y-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{offer.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{offer.pickupWindow}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-slate-400" />
                    <span>Preostalo: {offer.availableQuantity} kom</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xl font-extrabold text-emerald-600">{offer.price} €</span>
                  <span className="ml-2 text-xs text-slate-400 line-through">{offer.originalPrice} €</span>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm transition"
                >
                  Rezerviraj
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
