import { EmptyState } from "@/components/empty-state";
import { FormFeedback } from "@/components/form-feedback";
import { PageHeader, StatusBadge } from "@/components/page-header";
import { SubmitButton } from "@/components/submit-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { decideDonationRequestAction } from "@/app/actions";
import { getStoreDonationRequests } from "@/lib/api";
import { formatDateTime } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function StoreDonationRequestsPage() {
  const requests = await getStoreDonationRequests();

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        title="Zahtjevi za donacije"
        description="Odobrite ili odbijte zahtjeve humanitarnih organizacija za svoje donacijske ponude."
      />

      <FormFeedback />

      {requests.length === 0 ? (
        <EmptyState
          title="Nema zaprimljenih zahtjeva"
          description="Kad humanitarna organizacija zatraži vašu donaciju, zahtjev će se pojaviti ovdje."
        />
      ) : (
        <div className="space-y-4">
          {requests.map((request) => (
            <Card key={request.id}>
              <CardHeader className="flex-row items-start justify-between gap-3">
                <div>
                  <CardTitle className="text-base">{request.charity.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {request.offer.title} · traženo {request.quantity} ·{" "}
                    {formatDateTime(request.createdAt)}
                  </p>
                </div>
                <StatusBadge status={request.status} />
              </CardHeader>
              {request.status === "PENDING" ? (
                <CardContent className="flex gap-2">
                  {(["APPROVED", "REJECTED"] as const).map((decision) => (
                    <form key={decision} action={decideDonationRequestAction}>
                      <input type="hidden" name="id" value={request.id} />
                      <input type="hidden" name="decision" value={decision} />
                      <SubmitButton
                        label={decision === "APPROVED" ? "Odobri" : "Odbij"}
                        pendingLabel="Obrada…"
                        variant={decision === "APPROVED" ? "default" : "outline"}
                        size="sm"
                      />
                    </form>
                  ))}
                </CardContent>
              ) : null}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
