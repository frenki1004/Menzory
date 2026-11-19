import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Tag } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getOfferImage } from "@/lib/offer-images";
import { offerTypeLabels, type OfferListItem } from "@/lib/types";
import { discountPercent, formatPrice, pickupWindow } from "@/lib/format";

export function OfferCard({ offer }: { offer: OfferListItem }) {
  const discount = discountPercent(offer.price, offer.originalPrice);

  return (
    <Link href={`/ponude/${offer.id}`} className="group block">
      <Card className="h-full overflow-hidden transition hover:border-primary/40 hover:shadow-md">
        <AspectRatio ratio={4 / 3} className="bg-muted">
          <Image
            src={getOfferImage(offer.title, offer.category?.slug)}
            alt={offer.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </AspectRatio>

        <CardContent className="flex min-h-48 flex-col p-5">
          <div className="mb-3 flex items-center justify-between gap-2">
            <Badge variant="secondary" className="font-medium">
              {offerTypeLabels[offer.offerType]}
            </Badge>
            {offer.isDonation ? (
              <Badge className="bg-primary/10 text-primary hover:bg-primary/10">Donacija</Badge>
            ) : discount ? (
              <Badge variant="destructive">-{discount}%</Badge>
            ) : null}
          </div>

          <h3 className="font-semibold leading-snug group-hover:text-primary">{offer.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{offer.store.name}</p>

          <dl className="mt-4 space-y-1.5 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              <dd>{offer.store.address}</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              <dd>{pickupWindow(offer)}</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <Tag className="size-3.5" />
              <dd>Preostalo: {offer.availableQuantity}</dd>
            </div>
          </dl>

          <div className="mt-auto flex items-baseline gap-2 border-t pt-4">
            <span className="text-lg font-semibold text-primary">
              {offer.isDonation ? "Besplatno" : formatPrice(offer.price)}
            </span>
            {offer.originalPrice ? (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(offer.originalPrice)}
              </span>
            ) : null}
            {offer.category ? (
              <span className="ml-auto text-xs text-muted-foreground">{offer.category.name}</span>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
