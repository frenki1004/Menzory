import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MapPin, Phone, Tag } from "lucide-react";
import { reserveAction } from "@/app/actions";
import { ActionForm } from "@/components/action-form";
import { StatusBadge } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getOfferById } from "@/lib/api";
import { discountPercent, formatPrice, pickupWindow } from "@/lib/format";
import { offerTypeLabels } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function OfferDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const offer = await getOfferById(id);

  if (!offer) notFound();

  const discount = discountPercent(offer.price, offer.originalPrice);
  const available = offer.status === "ACTIVE" && offer.availableQuantity > 0;

  return (
    <div className="mx-auto max-w-4xl">
      <Button asChild variant="ghost" size="sm" className="mb-4 -ml-2">
        <Link href="/ponude">
          <ArrowLeft className="size-4" />
          Natrag na ponude
        </Link>
      </Button>

      <div className="grid gap-6 md:grid-cols-[1.6fr_1fr] md:items-start">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{offerTypeLabels[offer.offerType]}</Badge>
                {offer.isDonation ? <Badge>Donacija</Badge> : null}
                {discount ? <Badge variant="destructive">-{discount}%</Badge> : null}
                <StatusBadge status={offer.status} className="ml-auto" />
              </div>
              <CardTitle className="text-2xl">{offer.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{offer.store.name}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {offer.description ? (
                <p className="text-sm leading-relaxed">{offer.description}</p>
              ) : null}
              <dl className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Clock className="size-4" />
                  <dd>{pickupWindow(offer)}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  <dd>{offer.store.address}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="size-4" />
                  <dd>Dostupno: {offer.availableQuantity}</dd>
                </div>
                {offer.store.phone ? (
                  <div className="flex items-center gap-2">
                    <Phone className="size-4" />
                    <dd>{offer.store.phone}</dd>
                  </div>
                ) : null}
              </dl>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Rezervacija</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-primary">
                {offer.isDonation ? "Besplatno" : formatPrice(offer.price)}
              </span>
              {offer.originalPrice ? (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(offer.originalPrice)}
                </span>
              ) : null}
            </p>

            {available ? (
              <ActionForm action={reserveAction} submitLabel="Rezerviraj i plati">
                <input type="hidden" name="offerId" value={offer.id} />
                <div className="space-y-1.5">
                  <Label htmlFor="quantity">Količina</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min={1}
                    max={offer.availableQuantity}
                    defaultValue={1}
                    required
                  />
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Nakon plaćanja dobivate jedinstveni kod za preuzimanje. Otkazivanje je moguće
                  najkasnije 1 h prije kraja roka preuzimanja.
                </p>
              </ActionForm>
            ) : (
              <p className="text-sm text-muted-foreground">
                Ova ponuda više nije dostupna za rezervaciju.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
