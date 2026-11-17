import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { statusLabels } from "@/lib/types";

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  const tone =
    status === "ACTIVE" || status === "CONFIRMED" || status === "APPROVED"
      ? "bg-primary text-primary-foreground"
      : status === "PENDING"
        ? "border border-amber-300 bg-amber-50 text-amber-800"
        : status === "COMPLETED" || status === "COLLECTED"
          ? "border border-sky-300 bg-sky-50 text-sky-800"
          : "border border-border bg-muted text-muted-foreground";

  return (
    <Badge variant="outline" className={cn("border-transparent", tone, className)}>
      {statusLabels[status] ?? status}
    </Badge>
  );
}

export function PageHeader({
  title,
  description,
  actions,
  className,
  ...props
}: ComponentProps<"div"> & { title: string; description?: string; actions?: React.ReactNode }) {
  return (
    <div className={cn("mb-6 flex flex-wrap items-end justify-between gap-3", className)} {...props}>
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
      </div>
      {actions}
    </div>
  );
}
