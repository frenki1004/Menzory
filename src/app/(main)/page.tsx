import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Store, Utensils } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const roles = [
  {
    icon: Utensils,
    title: "Kupci",
    text: "Pronađite pojedinačne proizvode ili pakete iznenađenja po sniženim cijenama i preuzmite ih s jedinstvenim kodom.",
  },
  {
    icon: Store,
    title: "Prodajna mjesta",
    text: "Objavite ponude viška hrane prije isteka roka, smanjite gubitke i podržite lokalnu zajednicu.",
  },
  {
    icon: HeartHandshake,
    title: "Humanitarne udruge",
    text: "Zatražite besplatne donacije hrane i organizirajte akcije prikupljanja s partnerskim trgovinama.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <Card className="relative isolate overflow-hidden">
        <AspectRatio ratio={16 / 9} className="min-h-96 bg-muted sm:min-h-0">
          <Image
            src="/hero.png"
            alt="Kupac preuzima paket viška hrane od volontera na gradskoj tržnici"
            fill
            priority
            sizes="(min-width: 1280px) 1152px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/10 max-sm:from-background/95 max-sm:via-background/80 max-sm:to-background/40" />
        </AspectRatio>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-xl px-6 py-8 sm:px-10">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Smanjimo otpad od hrane zajedno
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Platforma koja povezuje prodajna mjesta s viškom hrane, građane koji žele povoljnije
              obroke i humanitarne organizacije.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/ponude">
                  Pregledaj ponude
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/o-projektu">O projektu</Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <section className="grid gap-4 sm:grid-cols-3">
        {roles.map((role) => (
          <Card key={role.title}>
            <CardHeader>
              <span className="grid size-9 place-items-center rounded-lg bg-accent text-accent-foreground">
                <role.icon className="size-4" />
              </span>
              <CardTitle className="text-base">{role.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{role.text}</CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
