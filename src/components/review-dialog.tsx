"use client";

import { reviewAction } from "@/app/actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/submit-button";
import { Textarea } from "@/components/ui/textarea";

export function ReviewDialog({
  reservationId,
  storeName,
}: {
  reservationId: string;
  storeName: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Ocijeni
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Ocijeni {storeName}</DialogTitle>
          <DialogDescription>
            Ocjena i komentar prikazuju se na javnom profilu prodajnog mjesta.
          </DialogDescription>
        </DialogHeader>
        <form action={reviewAction} className="space-y-4">
          <input type="hidden" name="reservationId" value={reservationId} />
          <div className="space-y-1.5">
            <Label htmlFor={`rating-${reservationId}`}>Ocjena</Label>
            <select
              id={`rating-${reservationId}`}
              name="rating"
              defaultValue="5"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
            >
              {[5, 4, 3, 2, 1].map((value) => (
                <option key={value} value={value}>
                  {value} / 5
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor={`comment-${reservationId}`}>Komentar</Label>
            <Textarea id={`comment-${reservationId}`} name="comment" rows={3} />
          </div>
          <SubmitButton label="Pošalji ocjenu" className="w-full" />
        </form>
      </DialogContent>
    </Dialog>
  );
}
