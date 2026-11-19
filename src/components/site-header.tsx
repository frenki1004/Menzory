import Link from "next/link";
import { Utensils } from "lucide-react";
import { AccountMenu } from "@/components/account-menu";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/api";

const links = [
  { href: "/ponude", label: "Ponude" },
  { href: "/o-projektu", label: "O projektu" },
];

export async function SiteHeader() {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-2 px-3 sm:gap-4 sm:px-4">
        <Link href="/" aria-label="SpasiZalogaj" className="flex shrink-0 items-center gap-2 font-semibold">
          <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Utensils className="size-4" />
          </span>
          <span className="hidden sm:inline">SpasiZalogaj</span>
        </Link>

        <nav className="flex items-center gap-0.5 text-sm sm:gap-1">
          {links.map((link) => (
            <Button key={link.href} asChild variant="ghost" size="sm" className="px-2 sm:px-3">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {user ? (
            <AccountMenu name={user.name} email={user.email} image={user.image} role={user.role} />
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
