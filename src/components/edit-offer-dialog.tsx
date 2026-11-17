"use client";

import { updateOfferAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/submit-button";
import type { StoreOfferView } from "@/lib/types";

export function EditOfferDialog({ offer }: { offer: StoreOfferView }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost">
          Uredi
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Uredi ponudu</DialogTitle>
          <DialogDescription>
            Promjene su vidljive kupcima odmah nakon spremanja.
          </DialogDescription>
        </DialogHeader>
        <form action={updateOfferAction} className="space-y-4">
          <input type="hidden" name="id" value={offer.id} />
          <div className="space-y-1.5">
            <Label htmlFor={`title-${offer.id}`}>Naziv</Label>
            <Input id={`title-${offer.id}`} name="title" defaultValue={offer.title} required />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor={`price-${offer.id}`}>Cijena (€)</Label>
              <Input
                id={`price-${offer.id}`}
                name="price"
                type="number"
                step="0.01"
                min={0}
                defaultValue={offer.price}
                disabled={offer.isDonation}
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor={`qty-${offer.id}`}>Dostupna količina</Label>
              <Input
                id={`qty-${offer.id}`}
                name="availableQuantity"
                type="number"
                min={0}
                max={offer.quantity}
                defaultValue={offer.availableQuantity}
                required
              />
            </div>
          </div>
          <SubmitButton label="Spremi promjene" className="w-full" />
        </form>
      </DialogContent>
    </Dialog>
  );
}
