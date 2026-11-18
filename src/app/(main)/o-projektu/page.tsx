import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        title="O projektu"
        description="SpasiZalogaj je studentski projekt na kolegiju Programsko inženjerstvo (FER)."
      />

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Problem koji rješavamo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            Prodajna mjesta svakodnevno bacaju hranu koja je još sigurna za konzumaciju jer je ne
            uspiju prodati do kraja dana. Istodobno građani i humanitarne organizacije nemaju
            jednostavan način da saznaju gdje i kada takva hrana postoji.
          </p>
          <p>
            SpasiZalogaj povezuje obje strane: prodajna mjesta objavljuju višak hrane po sniženoj
            cijeni ili kao donaciju, kupci ga rezerviraju i preuzimaju uz jedinstveni kod, a
            humanitarne organizacije traže donacije na jednom mjestu.
          </p>
        </CardContent>
      </Card>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Tehnologije</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Next.js 15, TypeScript, Prisma i PostgreSQL (Neon), Auth.js s Google OAuth 2.0 / OIDC
            prijavom, Tailwind CSS i shadcn/ui.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Tim Menzory (G07)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Frane Andrić, Fabijan Pitlović, David Kokorović, Borna Mužina, Enzo Kutić, Lovro
            Blagić i Luka Taslak.
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Button asChild variant="outline">
          <Link href="/ponude">Pogledaj aktivne ponude</Link>
        </Button>
      </div>
    </div>
  );
}
