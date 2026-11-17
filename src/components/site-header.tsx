import Link from "next/link";
import { Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/api";
import { roleLabels } from "@/lib/types";

const links = [
  { href: "/ponude", label: "Ponude" },
  { href: "/o-projektu", label: "O projektu" },
];

export async function SiteHeader() {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Utensils className="size-4" />
          </span>
          <span className="hidden sm:inline">SpasiZalogaj</span>
        </Link>

        <nav className="flex items-center gap-1 text-sm">
          {links.map((link) => (
            <Button key={link.href} asChild variant="ghost" size="sm">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {user ? (
            <Button asChild variant="outline" size="sm">
              <Link href="/profil">
                {user.name ?? "Moj profil"}
                <span className="hidden text-xs text-muted-foreground md:inline">
                  {roleLabels[user.role]}
                </span>
              </Link>
            </Button>
          ) : (
            <Button asChild size="sm">
              <Link href="/auth/signin">Prijava</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 text-xs text-muted-foreground">
        © 2026 Tim Menzory (G07) · Fakultet elektrotehnike i računarstva Sveučilišta u Zagrebu
      </div>
    </footer>
  );
}
