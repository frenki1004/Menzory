import { ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { PickupForm } from "./pickup-form";

export default function PickupPage() {
  return (
    <div className="mx-auto max-w-lg">
      <PageHeader
        title="Preuzimanje"
        description="Provjerite kod kupca i označite rezervaciju kao preuzetu."
      />

      <PickupForm />

      <Card className="mt-4 bg-muted/40">
        <CardContent className="flex gap-3 p-4 text-xs text-muted-foreground">
          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
          <p>
            U bazi se čuva samo kriptografski sažetak koda (SHA-256). Nakon potvrde preuzimanja kod
            se poništava i rezervacija se označava kao dovršena.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
