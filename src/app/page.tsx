import Link from "next/link";
import { Utensils, HeartHandshake, Store, ShieldCheck, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-between p-6 sm:p-12 max-w-5xl mx-auto w-full">
      {/* Header */}
      <header className="w-full flex items-center justify-between pb-8 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-emerald-600 text-white rounded-xl shadow-sm">
            <Utensils className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">SpasiZalogaj</h1>
            <p className="text-xs text-slate-500 font-medium">Tim Menzory (G07) · FER</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/api/auth/signin"
            className="px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition"
          >
            Prijava
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>PROINZ 2026/27 · Kontrolna točka M1</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Smanjimo otpad od hrane zajedno
        </h2>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          Platforma koja povezuje prodajna mjesta s viškom hrane, građane koji žele povoljnije obroke i humanitarne organizacije.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/ponude"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 shadow transition"
          >
            <span>Pregledaj ponude</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/o-projektu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 font-semibold hover:bg-slate-50 transition"
          >
            O projektu
          </Link>
        </div>
      </section>

      {/* Role Cards */}
      <section className="grid sm:grid-cols-3 gap-6 w-full py-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 transition">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit mb-4">
            <Utensils className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Kupci</h3>
          <p className="mt-2 text-sm text-slate-600">
            Pronađite pojedinačne proizvode ili pakete iznenađenja po sniženim cijenama i preuzmite ih s jedinstvenim kodom.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 transition">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mb-4">
            <Store className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Prodajna mjesta</h3>
          <p className="mt-2 text-sm text-slate-600">
            Objavite ponude viška hrane prije isteka roka, smanjite gubitke i podržite lokalnu zajednicu.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 transition">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit mb-4">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Humanitarne udruge</h3>
          <p className="mt-2 text-sm text-slate-600">
            Zatražite besplatne donacije hrane i organizirajte akcije prikupljanja s partnerskim trgovinama.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full pt-8 border-t border-slate-200 text-center text-xs text-slate-500">
        <p>© 2026 Tim Menzory (G07) · Fakultet elektrotehnike i računarstva Sveučilišta u Zagrebu</p>
      </footer>
    </main>
  );
}
