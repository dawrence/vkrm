"use client";
import { ModeToggle } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { useLovedBeers } from "@/hooks/use-loved-beers";
import { UserButton, useAuth } from "@clerk/nextjs";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const { userId } = useAuth();
  const {lovedItems} = useLovedBeers();

  return (
    <div className="max-w-5xl py-5 mx-auto px-5 sm:px-0">
      <div className="justify-between lg:flex">
        <Link href="/" className="flex items-center justify-center gap-x-2">
          <Image src="/viking.png" alt="JuanesBeer" width={150} height={150} />
          <span className="text-xl font-bold">VikingBeers</span>
        </Link>

        <div className="flex items-center justify-center gap-x-7">
          <Link href="/beers">Lista de cervezas</Link>
          <Link href="/dashboard">Dashboard</Link>
          {userId ? (
            <>
              <Link href="/loved-beers">
                <Heart
                  strokeWidth={1}
                  className={`cursor-pointer ${lovedItems.length > 0 && "fill-black dark:fill-red-700"}`}
                />
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href="/sign-in" className="flex gap-x-3">
              <Button>
                Iniciar sesión
                <User className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}