import { EmptyState } from "@/components/empty-state";
import { FormFeedback } from "@/components/form-feedback";
import { PageHeader } from "@/components/page-header";
import { SubmitButton } from "@/components/submit-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { decideCharityAction, membershipCheckoutAction } from "@/app/actions";
import { getMembershipPlans, getPendingCharities } from "@/lib/api";
import { formatDate, formatPrice } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const [charities, plans] = await Promise.all([getPendingCharities(), getMembershipPlans()]);

  return (
    <div className="space-y-8">
      <FormFeedback />

      <div>
        <PageHeader
          title="Administracija"
          description="Odobravanje profila humanitarnih organizacija i cijene članarina."
        />

        {charities.length === 0 ? (
          <EmptyState
            title="Nema profila na čekanju"
            description="Novi profili humanitarnih organizacija pojavit će se ovdje nakon prijave."
          />
        ) : (
          <div className="rounded-xl border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Organizacija</TableHead>
                  <TableHead>OIB</TableHead>
                  <TableHead>Kontakt</TableHead>
                  <TableHead>Prijava</TableHead>
                  <TableHead className="text-right">Radnje</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {charities.map((charity) => (
                  <TableRow key={charity.id}>
                    <TableCell className="font-medium">{charity.name}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {charity.registrationNumber}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {charity.user.name ?? "—"}
                      <br />
                      <span className="text-xs">{charity.user.email}</span>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(charity.createdAt)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        {(["APPROVED", "REJECTED"] as const).map((decision) => (
                          <form key={decision} action={decideCharityAction}>
                            <input type="hidden" name="id" value={charity.id} />
                            <input type="hidden" name="decision" value={decision} />
                            <SubmitButton
                              label={decision === "APPROVED" ? "Odobri" : "Odbij"}
                              variant={decision === "APPROVED" ? "default" : "outline"}
                              size="sm"
                            />
                          </form>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>

      <div>
        <PageHeader title="Članarine" description="Cjenik članarina za prodajna mjesta." />

        {plans.length === 0 ? (
          <EmptyState
            title="Cjenik nije postavljen"
            description="Dodajte planove članarina kako bi se prodajna mjesta mogla pretplatiti."
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-base">
                    {plan.name}
                    <Badge variant="secondary">{plan.durationDays} dana</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-2xl font-semibold text-primary">{formatPrice(plan.price)}</p>
                  <form action={membershipCheckoutAction}>
                    <input type="hidden" name="planId" value={plan.id} />
                    <SubmitButton label="Aktiviraj" variant="outline" size="sm" />
                  </form>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
