import { signInWithGoogle } from "@/app/actions";
import { GoogleIcon } from "@/components/google-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SubmitButton } from "@/components/submit-button";

export default function SignInPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Prijava</CardTitle>
        <CardDescription>
          Prijavite se Google računom. Lozinke se ne pohranjuju u SpasiZalogaj.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form action={signInWithGoogle}>
          <SubmitButton
            label="Nastavi s Google računom"
            pendingLabel="Preusmjeravanje…"
            icon={<GoogleIcon />}
            className="w-full"
          />
        </form>
        <Button asChild variant="ghost" className="w-full">
          <a href="/ponude">Nastavi kao gost</a>
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Prijavom prihvaćate da se vaše ime i adresa e-pošte koriste za izradu profila.
        </p>
      </CardContent>
    </Card>
  );
}
