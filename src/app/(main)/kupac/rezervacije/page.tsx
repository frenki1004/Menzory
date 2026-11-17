import { EmptyState } from "@/components/empty-state";
import { FormFeedback } from "@/components/form-feedback";
import { PageHeader, StatusBadge } from "@/components/page-header";
import { ReviewDialog } from "@/components/review-dialog";
import { SubmitButton } from "@/components/submit-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cancelReservationAction } from "@/app/actions";
import { getUserReservations } from "@/lib/api";
import { formatDateTime, formatPrice } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function MyReservationsPage() {
  const reservations = await getUserReservations();

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        title="Moje rezervacije"
        description="Pregledajte svoje rezervacije, kodove za preuzimanje i otkažite rezervaciju najkasnije 1 h prije preuzimanja."
      />

      <FormFeedback />

      {reservations.length === 0 ? (
        <EmptyState
          title="Nemate rezervacija"
          description="Odaberite ponudu na popisu aktivnih ponuda i rezervirajte je."
          action={{ href: "/ponude", label: "Pregledaj ponude" }}
        />
      ) : (
        <div className="space-y-4">
          {reservations.map((reservation) => (
            <Card key={reservation.id}>
              <CardHeader className="flex-row items-start justify-between gap-3">
                <div>
                  <CardTitle className="text-base">{reservation.store.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {reservation.store.address} · {formatDateTime(reservation.createdAt)}
                  </p>
                </div>
                <StatusBadge status={reservation.status} />
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-1 text-sm">
                  {reservation.items.map((item) => (
                    <li key={item.id} className="flex justify-between gap-3">
                      <span>
                        {item.offerTitle} × {item.quantity}
                      </span>
                      <span className="text-muted-foreground">
                        {formatPrice(item.unitPrice * item.quantity)}
                      </span>
                    </li>
                  ))}
                </ul>

                <Separator />

                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Ukupno</p>
                    <p className="font-semibold">{formatPrice(reservation.totalAmount)}</p>
                  </div>

                  {reservation.pickupCode ? (
                    <div className="rounded-lg border border-primary/30 bg-accent px-4 py-2 text-center">
                      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                        Kod za preuzimanje
                      </p>
                      <p className="font-mono text-lg font-semibold tracking-[0.2em]">
                        {reservation.pickupCode}
                      </p>
                    </div>
                  ) : null}

                  <p className="text-xs text-muted-foreground">
                    Preuzimanje do {formatDateTime(reservation.expiresAt)}
                  </p>

                  {reservation.status === "COMPLETED" && !reservation.hasReview ? (
                    <ReviewDialog
                      reservationId={reservation.id}
                      storeName={reservation.store.name}
                    />
                  ) : null}

                  {reservation.canCancel ? (
                    <form action={cancelReservationAction}>
                      <input type="hidden" name="id" value={reservation.id} />
                      <SubmitButton label="Otkaži rezervaciju" variant="outline" size="sm" />
                    </form>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
