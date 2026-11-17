"use client";

import { useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

/** Shows the result of a plain server-action form that redirected with ?ok / ?greska. */
export function FormFeedback() {
  const params = useSearchParams();
  const error = params.get("greska");
  const ok = params.get("ok");

  if (!error && !ok) return null;

  return (
    <Alert
      className={error ? undefined : "mb-4 border-primary/30 bg-accent"}
      variant={error ? "destructive" : "default"}
    >
      {error ? <AlertCircle className="size-4" /> : <CheckCircle2 className="size-4 text-primary" />}
      <AlertDescription>{error ?? "Radnja je uspješno izvršena."}</AlertDescription>
    </Alert>
  );
}
