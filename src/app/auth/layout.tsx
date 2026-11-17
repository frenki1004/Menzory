import { Utensils } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 px-4 py-10">
      <Link href="/" className="mb-6 flex items-center gap-2 text-lg font-semibold">
        <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
          <Utensils className="size-4" />
        </span>
        SpasiZalogaj
      </Link>
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
