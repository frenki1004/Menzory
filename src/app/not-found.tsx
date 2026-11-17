import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-5xl font-bold text-primary">404</p>
      <h1 className="text-xl font-semibold">Stranica nije pronađena</h1>
      <p className="max-w-sm text-sm text-muted-foreground">
        Tražena stranica ne postoji ili je ponuda u međuvremenu uklonjena.
      </p>
      <div className="flex gap-2">
        <Button asChild>
          <Link href="/ponude">Pregledaj ponude</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Početna</Link>
        </Button>
      </div>
    </div>
  );
}
