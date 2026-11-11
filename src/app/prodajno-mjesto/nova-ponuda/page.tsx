import Link from "next/link";
import { ArrowLeft, Store, Info } from "lucide-react";

export default function NewOfferPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col p-6 sm:p-12 max-w-3xl mx-auto w-full">
      <div className="pb-6 border-b border-slate-200">
        <Link
          href="/ponude"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Natrag na ponude</span>
        </Link>
      </div>

      <div className="py-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg">
            <Store className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Objava nove ponude viška hrane</h1>
            <p className="text-xs text-slate-500 font-medium">Obrazac uporabe UC-02 · F-005, F-006, F-007</p>
          </div>
        </div>
      </div>

      <form className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Naziv ponude *
          </label>
          <input
            type="text"
            required
            placeholder="npr. Pekarski paket peciva ili Sendvič piletina"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Vrsta ponude *
            </label>
            <select
              defaultValue="INDIVIDUAL"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="INDIVIDUAL">Pojedinačni artikl</option>
              <option value="SURPRISE_BAG">Paket iznenađenja</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Količina *
            </label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Redovna cijena (€)
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              placeholder="npr. 8.00"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Snižena cijena (€) *
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              required
              placeholder="npr. 3.50"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Početak preuzimanja *
            </label>
            <input
              type="datetime-local"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Kraj preuzimanja *
            </label>
            <input
              type="datetime-local"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
          <input
            id="isDonation"
            type="checkbox"
            className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
          />
          <label htmlFor="isDonation" className="text-xs text-slate-700 font-medium">
            Označi ponudu kao donaciju za humanitarne organizacije (cijena 0.00 €, vidljivo udrugama).
          </label>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <Link
            href="/ponude"
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
          >
            Odustani
          </Link>
          <button
            type="submit"
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm transition"
          >
            Objavi ponudu
          </button>
        </div>
      </form>
    </main>
  );
}
