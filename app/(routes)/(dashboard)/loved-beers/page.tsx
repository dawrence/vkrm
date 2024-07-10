import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import { ListLovedBeers } from "./components/ListLovedBeers";

export default function pageLovedCars() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div>
      <h1 className="text-2xl">Cervezas que te gustan</h1>

      <ListLovedBeers />
    </div>
  );
}