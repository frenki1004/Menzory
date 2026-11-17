import Link from "next/link";
import { FormFeedback } from "@/components/form-feedback";
import { PageHeader, StatusBadge } from "@/components/page-header";
import { SubmitButton } from "@/components/submit-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { membershipCheckoutAction, saveProfile } from "@/app/actions";
import { ActionForm } from "@/components/action-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getCurrentUser, getMembershipPlans, getMyMembership, getMyProfile } from "@/lib/api";
import { formatDate, formatPrice } from "@/lib/format";
import { roleLabels } from "@/lib/types";

export const dynamic = "force-dynamic";

const shortcuts: Record<string, { href: string; label: string }[]> = {
  BUYER: [
    { href: "/kupac/rezervacije", label: "Moje rezervacije" },
    { href: "/ponude", label: "Pregledaj ponude" },
  ],
  SELLER: [
    { href: "/prodajno-mjesto/ponude", label: "Moje ponude" },
    { href: "/prodajno-mjesto/nova-ponuda", label: "Nova ponuda" },
    { href: "/prodajno-mjesto/preuzimanje", label: "Potvrda preuzimanja" },
    { href: "/prodajno-mjesto/zahtjevi", label: "Zahtjevi za donacije" },
  ],
  CHARITY: [{ href: "/organizacija/donacije", label: "Donacijske ponude" }],
  ADMIN: [{ href: "/admin", label: "Administracija" }],
};

export default async function ProfilePage() {
  const [user, profile, membership, plans] = await Promise.all([
    getCurrentUser(),
    getMyProfile(),
    getMyMembership(),
    getMembershipPlans(),
  ]);

  if (!user) {
    return (
      <div className="mx-auto max-w-md text-center">
        <PageHeader title="Profil" description="Za pristup profilu potrebna je prijava." />
        <Button asChild>
          <Link href="/auth/signin">Prijavi se</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title={user.name ?? "Moj profil"}
        description={`${roleLabels[user.role]}${user.email ? ` · ${user.email}` : ""}`}
        actions={<Badge variant="secondary">{roleLabels[user.role]}</Badge>}
      />

      <FormFeedback />

      <div className="flex flex-wrap gap-2">
        {(shortcuts[user.role] ?? []).map((link) => (
          <Button key={link.href} asChild variant="outline" size="sm">
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            {user.role === "BUYER" ? "Podaci računa" : "Podaci profila"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ActionForm action={saveProfile} submitLabel="Spremi profil">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Naziv / ime</Label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={profile?.store?.name ?? profile?.charity?.name ?? user.name ?? ""}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  defaultValue={profile?.store?.phone ?? ""}
                  placeholder="+385 91 123 4567"
                />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="address">Adresa</Label>
                <Input
                  id="address"
                  name="address"
                  defaultValue={profile?.store?.address ?? ""}
                  placeholder="Ilica 42, Zagreb"
                />
              </div>
              {user.role === "SELLER" ? (
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="description">Opis prodajnog mjesta</Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={3}
                    defaultValue={profile?.store?.description ?? ""}
                  />
                </div>
              ) : null}
            </div>
          </ActionForm>
        </CardContent>
      </Card>

      {user.role === "SELLER" ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Članarina</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {membership ? (
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">{membership.plan.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Vrijedi do {formatDate(membership.validUntil)}
                  </p>
                </div>
                <StatusBadge status={membership.status} />
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Nemate aktivnu članarinu. Objava ponuda zahtijeva aktivnu članarinu.
              </p>
            )}

            {membership ? null : (
              <div className="grid gap-3 sm:grid-cols-3">
                {plans.map((plan) => (
                  <div key={plan.id} className="rounded-lg border p-4">
                    <p className="text-sm font-medium">{plan.name}</p>
                    <p className="mt-1 text-lg font-semibold text-primary">
                      {formatPrice(plan.price)}
                    </p>
                    <p className="text-xs text-muted-foreground">{plan.durationDays} dana</p>
                    <form action={membershipCheckoutAction} className="mt-3">
                      <input type="hidden" name="planId" value={plan.id} />
                      <SubmitButton label="Plati" size="sm" className="w-full" />
                    </form>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ) : null}

      {profile?.charity ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Status organizacije</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {profile.charity.isApproved
                ? "Profil je odobren i možete slati zahtjeve za donacije."
                : "Profil čeka odobrenje administratora."}
            </p>
            <Badge variant={profile.charity.isApproved ? "default" : "secondary"}>
              {profile.charity.isApproved ? "Odobreno" : "Na čekanju"}
            </Badge>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
