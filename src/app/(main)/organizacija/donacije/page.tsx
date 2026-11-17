import { HeartHandshake } from "lucide-react";
import { requestDonationAction } from "@/app/actions";
import { ActionForm } from "@/components/action-form";
import { EmptyState } from "@/components/empty-state";
import { PageHeader, StatusBadge } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getDonationOffers, getMyDonationRequests } from "@/lib/api";
import { formatDateTime, pickupWindow } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function CharityDonationsPage() {
  const [offers, requests] = await Promise.all([getDonationOffers(), getMyDonationRequests()]);

  return (
    <div className="space-y-8">
      <div>
        <PageHeader
          title="Donacijske ponude"
          description="Ponude koje prodajna mjesta nude besplatno humanitarnim organizacijama."
        />

        {offers.length === 0 ? (
          <EmptyState
            title="Trenutačno nema donacijskih ponuda"
            description="Kad prodajno mjesto objavi ponudu namijenjenu donacijama, prikazat će se ovdje."
          />
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {offers.map((offer) => (
              <Card key={offer.id}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge className="gap-1">
                      <HeartHandshake className="size-3" />
                      Donacija
                    </Badge>
                    <StatusBadge status={offer.status} className="ml-auto" />
                  </div>
                  <CardTitle className="text-base">{offer.title}</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {offer.store.name} · {offer.store.address}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-xs text-muted-foreground">
                    Preuzimanje: {pickupWindow(offer)} · dostupno {offer.availableQuantity}
                  </p>
                  <ActionForm action={requestDonationAction} submitLabel="Pošalji zahtjev">
                    <input type="hidden" name="offerId" value={offer.id} />
                    <div className="space-y-1.5">
                      <Label htmlFor={`quantity-${offer.id}`}>Tražena količina</Label>
                      <Input
                        id={`quantity-${offer.id}`}
                        name="quantity"
                        type="number"
                        min={1}
                        max={offer.availableQuantity}
                        defaultValue={1}
                        required
                      />
                    </div>
                  </ActionForm>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <div>
        <PageHeader title="Moji zahtjevi" description="Stanje zahtjeva poslanih prodajnim mjestima." />

        {requests.length === 0 ? (
          <EmptyState
            title="Nema poslanih zahtjeva"
            description="Pošaljite zahtjev za donacijsku ponudu i pratite odluku prodajnog mjesta ovdje."
          />
        ) : (
          <div className="rounded-xl border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ponuda</TableHead>
                  <TableHead>Prodajno mjesto</TableHead>
                  <TableHead>Količina</TableHead>
                  <TableHead>Poslano</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.offer.title}</TableCell>
                    <TableCell className="text-muted-foreground">{request.store.name}</TableCell>
                    <TableCell>{request.quantity}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDateTime(request.createdAt)}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={request.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
