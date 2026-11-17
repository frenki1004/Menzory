import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { createOfferAction } from "@/app/actions";
import { ActionForm } from "@/components/action-form";
import { PageHeader } from "@/components/page-header";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getCategories, getMyMembership } from "@/lib/api";
import { toDateTimeInput } from "@/lib/format";

export const dynamic = "force-dynamic";

const selectClass =
  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm";

export default async function NewOfferPage() {
  const [categories, membership] = await Promise.all([getCategories(), getMyMembership()]);
  const start = new Date();
  const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        title="Objava nove ponude"
        description="Objavite pojedinačni proizvod ili paket iznenađenja. Ponuda je vidljiva kupcima do isteka roka preuzimanja."
      />

      {membership ? null : (
        <Alert className="mb-4 border-amber-300 bg-amber-50">
          <AlertCircle className="size-4 text-amber-700" />
          <AlertDescription className="text-amber-900">
            Objava ponuda zahtijeva aktivnu članarinu prodajnog mjesta.{" "}
            <Link href="/profil" className="font-medium underline">
              Odaberite članarinu
            </Link>
            .
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardContent className="p-6">
          <ActionForm action={createOfferAction} submitLabel="Objavi ponudu">
            <div className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="title">Naziv ponude *</Label>
                <Input
                  id="title"
                  name="title"
                  required
                  placeholder="npr. Pekarski paket peciva"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="description">Opis</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={3}
                  placeholder="Što se nalazi u ponudi, napomene o alergenima…"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="offerType">Vrsta ponude *</Label>
                  <select id="offerType" name="offerType" className={selectClass} defaultValue="INDIVIDUAL">
                    <option value="INDIVIDUAL">Pojedinačni artikl</option>
                    <option value="SURPRISE_BAG">Paket iznenađenja</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="categoryId">Kategorija</Label>
                  <select id="categoryId" name="categoryId" className={selectClass} defaultValue="">
                    <option value="">Bez kategorije</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-1.5">
                  <Label htmlFor="quantity">Količina *</Label>
                  <Input id="quantity" name="quantity" type="number" min={1} defaultValue={1} required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="originalPrice">Redovna cijena (€)</Label>
                  <Input
                    id="originalPrice"
                    name="originalPrice"
                    type="number"
                    step="0.01"
                    min={0}
                    placeholder="8.00"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="price">Snižena cijena (€) *</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    min={0}
                    placeholder="3.50"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="pickupStart">Početak preuzimanja *</Label>
                  <Input
                    id="pickupStart"
                    name="pickupStart"
                    type="datetime-local"
                    defaultValue={toDateTimeInput(start)}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="pickupEnd">Kraj preuzimanja *</Label>
                  <Input
                    id="pickupEnd"
                    name="pickupEnd"
                    type="datetime-local"
                    defaultValue={toDateTimeInput(end)}
                    required
                  />
                </div>
              </div>

              <label className="flex items-start gap-3 rounded-lg border bg-muted/40 p-4 text-sm">
                <input
                  type="checkbox"
                  name="isDonation"
                  className="mt-0.5 size-4 rounded border-input accent-primary"
                />
                <span>
                  Označi ponudu kao donaciju za humanitarne organizacije. Cijena se postavlja na
                  0,00 €, a ponudu vide samo odobrene organizacije.
                </span>
              </label>
            </div>
          </ActionForm>

          <div className="mt-4 border-t pt-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/prodajno-mjesto/ponude">Natrag na moje ponude</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
