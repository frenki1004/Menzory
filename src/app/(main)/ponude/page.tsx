import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import { EmptyState } from "@/components/empty-state";
import { OfferCard } from "@/components/offer-card";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getActiveOffers, getCategories } from "@/lib/api";

export const dynamic = "force-dynamic";

interface SearchParams {
  q?: string;
  kategorija?: string;
  maxCijena?: string;
  donacije?: string;
}

export default async function OffersPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const [categories, offers] = await Promise.all([
    getCategories(),
    getActiveOffers({
      q: params.q,
      categorySlug: params.kategorija,
      maxPrice: params.maxCijena ? Number(params.maxCijena) : undefined,
      donationOnly: params.donacije === "1",
    }),
  ]);

  const filtered = Boolean(params.q || params.kategorija || params.maxCijena || params.donacije);

  return (
    <div>
      <PageHeader
        title="Dostupne ponude hrane"
        description="Pronađite višak hrane u svojoj blizini i rezervirajte ga prije isteka roka preuzimanja."
        actions={
          <Button asChild size="sm" variant="outline">
            <Link href="/prodajno-mjesto/nova-ponuda">+ Objavi ponudu</Link>
          </Button>
        }
      />

      <Card className="mb-6">
        <CardContent className="p-4">
          <form className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
            <div className="space-y-1.5 lg:col-span-2">
              <Label htmlFor="q">Pretraga</Label>
              <Input id="q" name="q" defaultValue={params.q} placeholder="Naziv ponude ili trgovine" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="kategorija">Kategorija</Label>
              <select
                id="kategorija"
                name="kategorija"
                defaultValue={params.kategorija ?? ""}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
              >
                <option value="">Sve kategorije</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="maxCijena">Najviša cijena (€)</Label>
              <Input
                id="maxCijena"
                name="maxCijena"
                type="number"
                step="0.01"
                min="0"
                defaultValue={params.maxCijena}
                placeholder="npr. 5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  name="donacije"
                  value="1"
                  defaultChecked={params.donacije === "1"}
                  className="size-4 rounded border-input accent-primary"
                />
                Samo donacije
              </label>
              <div className="flex gap-2">
                <Button type="submit" size="sm" className="flex-1">
                  <SlidersHorizontal className="size-3.5" />
                  Filtriraj
                </Button>
                {filtered ? (
                  <Button asChild size="sm" variant="ghost">
                    <Link href="/ponude">Očisti</Link>
                  </Button>
                ) : null}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {offers.length === 0 ? (
        <EmptyState
          title={filtered ? "Nema ponuda za odabrane filtre" : "Trenutačno nema aktivnih ponuda"}
          description={
            filtered
              ? "Pokušajte ukloniti filtre ili proširiti kriterije pretrage."
              : "Kad prodajna mjesta objave višak hrane, ponude će se pojaviti ovdje."
          }
          action={
            filtered
              ? { href: "/ponude", label: "Ukloni filtre" }
              : undefined
          }
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      )}
    </div>
  );
}
