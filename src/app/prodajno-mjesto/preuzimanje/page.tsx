import Link from "next/link";
import { ArrowLeft, CheckCircle2, QrCode, ShieldAlert } from "lucide-react";

export default function PickupVerificationPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col p-6 sm:p-12 max-w-xl mx-auto w-full">
      <div className="pb-6 border-b border-slate-200">
        <Link
          href="/ponude"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Natrag na ponude</span>
        </Link>
      </div>

      <div className="py-8 text-center">
        <div className="p-3 bg-emerald-100 text-emerald-800 rounded-2xl w-fit mx-auto mb-3">
          <QrCode className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Potvrda koda za preuzimanje</h1>
        <p className="text-xs text-slate-500 font-medium mt-1">
          Obrazac uporabe UC-04 · Kriptografska provjera sažetka (NF-04, F-012)
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Jednokratni kod za preuzimanje
          </label>
          <input
            type="text"
            maxLength={6}
            placeholder="npr. 7X9K2M"
            className="w-full text-center tracking-widest text-2xl font-mono uppercase px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <p className="text-[11px] text-slate-400 mt-2 text-center">
            Unesite 6-znamenkasti alfanumerički kod koji kupac predočuje pri preuzimanju.
          </p>
        </div>

        <button
          type="button"
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-lg shadow-sm transition"
        >
          Provjeri i potvrdi preuzimanje
        </button>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
          <div className="font-semibold text-slate-800 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Sigurnosno pravilo NF-04:</span>
          </div>
          <p>
            U bazi se čuva samo kriptografski sažetak (SHA-256). Nakon što se preuzimanje potvrdi, kod se odmah poništava i rezervacija se označava kao dovršena.
          </p>
        </div>
      </div>
    </main>
  );
}
