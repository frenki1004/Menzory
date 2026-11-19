"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { ChevronDown, LogOut, UserRound } from "lucide-react";
import { signOutAction } from "@/app/actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { roleLabels, type CurrentUser } from "@/lib/types";

export function AccountMenu({
  name,
  email,
  image,
  role,
}: Pick<CurrentUser, "name" | "email" | "image" | "role">) {
  const router = useRouter();
  const [isSigningOut, startSignOut] = useTransition();
  const displayName = name?.trim() || "Moj račun";
  const initials = name
    ?.trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => Array.from(part)[0])
    .join("")
    .toLocaleUpperCase("hr-HR");
  const emailInitial = email?.trim().charAt(0).toLocaleUpperCase("hr-HR");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="h-11 gap-2 rounded-full py-1 pl-1 pr-2.5 sm:pr-3"
          aria-label="Prijavljeni ste. Izbornik računa"
        >
          <Avatar aria-hidden="true" className="size-8">
            <AvatarImage src={image ?? undefined} alt="" referrerPolicy="no-referrer" />
            <AvatarFallback className="bg-accent font-semibold text-accent-foreground">
              {initials || emailInitial || <UserRound />}
            </AvatarFallback>
          </Avatar>
          <span className="flex flex-col items-start text-left">
            <span className="hidden max-w-36 truncate text-sm leading-tight sm:block">
              {displayName}
            </span>
            <span className="text-xs leading-tight text-muted-foreground max-[359px]:max-w-14 max-[359px]:whitespace-normal">
              Prijavljeni ste
            </span>
          </span>
          <ChevronDown aria-hidden="true" className="hidden text-muted-foreground sm:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="w-64">
        <DropdownMenuLabel className="space-y-1 px-2 py-2 font-normal">
          <p className="truncate text-sm font-semibold text-foreground">{displayName}</p>
          {email && <p className="truncate">{email}</p>}
          <Badge variant="secondary">{roleLabels[role]}</Badge>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => router.push("/profil")}>
          <UserRound aria-hidden="true" />
          Moj profil
        </DropdownMenuItem>
        <DropdownMenuItem
          variant="destructive"
          disabled={isSigningOut}
          onSelect={(event) => {
            event.preventDefault();
            startSignOut(() => signOutAction());
          }}
        >
          <LogOut aria-hidden="true" />
          {isSigningOut ? "Odjava…" : "Odjava"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
