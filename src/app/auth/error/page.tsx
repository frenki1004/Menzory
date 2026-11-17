import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthErrorPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <AlertCircle className="size-5 text-destructive" />
          Prijava nije uspjela
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert variant="destructive">
          <AlertDescription>
            Prijava putem vanjskog pružatelja identiteta nije dovršena. Pokušajte ponovno ili
            nastavite pregledavati javne ponude.
          </AlertDescription>
        </Alert>
        <div className="flex gap-2">
          <Button asChild className="flex-1">
            <Link href="/auth/signin">Pokušaj ponovno</Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <Link href="/ponude">Javne ponude</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
