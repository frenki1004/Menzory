"use client";

import { useActionState } from "react";
import { HeartHandshake, ShoppingBasket, Store } from "lucide-react";
import { chooseRole } from "@/app/actions";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const roles = [
  {
    value: "BUYER",
    label: "Kupac",
    text: "Rezerviraj višak hrane i preuzmi ga kodom.",
    icon: ShoppingBasket,
  },
  {
    value: "SELLER",
    label: "Prodajno mjesto",
    text: "Objavljuj ponude i potvrđuj preuzimanja.",
    icon: Store,
  },
  {
    value: "CHARITY",
    label: "Humanitarna organizacija",
    text: "Traži donacije i organiziraj akcije.",
    icon: HeartHandshake,
  },
] as const;

export function RoleChoiceForm() {
  const [state, formAction, pending] = useActionState(chooseRole, {});

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Odaberite ulogu</CardTitle>
        <CardDescription>
          Ulogu birate samo pri prvoj prijavi. Profil humanitarne organizacije čeka odobrenje
          administratora.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-3">
          {state.error ? (
            <Alert variant="destructive">
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          ) : null}

          {roles.map((role) => (
            <label
              key={role.value}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition",
                "hover:border-primary/40 hover:bg-accent/40 has-[:checked]:border-primary has-[:checked]:bg-accent/60",
              )}
            >
              <input
                type="radio"
                name="role"
                value={role.value}
                required
                className="mt-1 size-4 accent-primary"
              />
              <role.icon className="mt-0.5 size-4 text-primary" />
              <span>
                <span className="block text-sm font-medium">{role.label}</span>
                <span className="block text-xs text-muted-foreground">{role.text}</span>
              </span>
            </label>
          ))}

          <Button type="submit" disabled={pending} className="w-full">
            {pending ? "Spremanje…" : "Potvrdi ulogu"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
