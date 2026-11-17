"use client";

import { useActionState } from "react";
import { AlertCircle, CheckCircle2, QrCode } from "lucide-react";
import { verifyPickupAction, type PickupState } from "@/app/actions";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PickupForm() {
  const [state, formAction, pending] = useActionState<PickupState, FormData>(
    verifyPickupAction,
    {},
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <QrCode className="size-4 text-primary" />
          Potvrda preuzimanja
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          {state.error ? (
            <Alert variant="destructive">
              <AlertCircle className="size-4" />
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          ) : null}

          {state.result ? (
            <Alert className="border-primary/30 bg-accent">
              <CheckCircle2 className="size-4 text-primary" />
              <AlertDescription>
                Preuzimanje potvrđeno u <strong>{state.result.storeName}</strong> (
                {state.result.itemCount} {state.result.itemCount === 1 ? "artikl" : "artikla"}).
                Kod je poništen i više se ne može iskoristiti.
              </AlertDescription>
            </Alert>
          ) : null}

          <div className="space-y-1.5">
            <Label htmlFor="pickupCode">Jednokratni kod</Label>
            <Input
              id="pickupCode"
              name="pickupCode"
              maxLength={6}
              required
              placeholder="npr. 7X9K2M"
              autoComplete="off"
              className="text-center font-mono text-2xl uppercase tracking-[0.3em]"
            />
            <p className="text-xs text-muted-foreground">
              Unesite 6-znakovni kod koji kupac predočuje pri preuzimanju ili skenirajte QR kod.
            </p>
          </div>

          <Button type="submit" disabled={pending} className="w-full">
            {pending ? "Provjera…" : "Provjeri i potvrdi preuzimanje"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
