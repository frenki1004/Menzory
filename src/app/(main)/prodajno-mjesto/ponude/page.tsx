import Link from "next/link";
import { EmptyState } from "@/components/empty-state";
import { FormFeedback } from "@/components/form-feedback";
import { PageHeader, StatusBadge } from "@/components/page-header";
import { EditOfferDialog } from "@/components/edit-offer-dialog";
import { SubmitButton } from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { withdrawOfferAction } from "@/app/actions";
import { getStoreOffers } from "@/lib/api";
import { formatDateTime, formatPrice } from "@/lib/format";
import { offerTypeLabels } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function StoreOffersPage() {
  const offers = await getStoreOffers();

  return (
    <div>
      <PageHeader
        title="Moje ponude"
        description="Uređujte, povucite ili pratite stanje svojih ponuda viška hrane."
        actions={
          <Button asChild size="sm">
            <Link href="/prodajno-mjesto/nova-ponuda">+ Nova ponuda</Link>
          </Button>
        }
      />

      <FormFeedback />

      {offers.length === 0 ? (
        <EmptyState
          title="Još nema objavljenih ponuda"
          description="Objavite prvu ponudu viška hrane i ona će se odmah prikazati kupcima."
          action={{ href: "/prodajno-mjesto/nova-ponuda", label: "Objavi ponudu" }}
        />
      ) : (
        <div className="rounded-xl border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ponuda</TableHead>
                <TableHead>Vrsta</TableHead>
                <TableHead>Cijena</TableHead>
                <TableHead>Dostupno</TableHead>
                <TableHead>Preuzimanje do</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Radnje</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {offers.map((offer) => (
                <TableRow key={offer.id}>
                  <TableCell className="font-medium">{offer.title}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {offerTypeLabels[offer.offerType]}
                  </TableCell>
                  <TableCell>
                    {offer.isDonation ? "Donacija" : formatPrice(offer.price)}
                  </TableCell>
                  <TableCell>
                    {offer.availableQuantity} / {offer.quantity}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDateTime(offer.pickupEnd)}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={offer.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button asChild size="sm" variant="ghost">
                        <Link href={`/ponude/${offer.id}`}>Prikaži</Link>
                      </Button>
                      <EditOfferDialog offer={offer} />
                      {offer.status === "ACTIVE" ? (
                        <form action={withdrawOfferAction}>
                          <input type="hidden" name="id" value={offer.id} />
                          <SubmitButton
                            label="Povuci"
                            pendingLabel="Povlačenje…"
                            variant="outline"
                            size="sm"
                          />
                        </form>
                      ) : null}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
