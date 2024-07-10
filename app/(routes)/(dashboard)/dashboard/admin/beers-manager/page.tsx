import { auth } from "@clerk/nextjs/server";
import { ButtonAddBeer } from "./components/ButtonAddBeer";
import { ListBeers } from "./components/ListBeers";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { isAdministrator } from "@/lib/isAdministrator"

export default async function BeerManagerPage() {
  const { userId } = auth();

  if (!userId  || !isAdministrator(userId)) {
    return redirect("/");
  }

  const beer = await db.beer.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });


  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Manage your Beers</h2>
        <ButtonAddBeer />
      </div>
      <ListBeers beers={beer}/>
    </div>
  );
}
