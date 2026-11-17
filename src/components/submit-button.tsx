"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

/** Submit button that disables itself while a plain server action is pending. */
export function SubmitButton({
  label,
  pendingLabel = "Obrada…",
  variant,
  size,
  className,
  icon,
}: {
  label: string;
  pendingLabel?: string;
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
  className?: string;
  icon?: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant={variant} size={size} className={className} disabled={pending}>
      {pending ? null : icon}
      {pending ? pendingLabel : label}
    </Button>
  );
}
