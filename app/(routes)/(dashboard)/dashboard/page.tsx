import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { ListBeers } from "./components/ListBeers";


export default async function DashboardPage() {
    const { userId } = auth();

    if (!userId) {
      return redirect("/");
    }

    const beers = await db.beer.findMany({
      where: {
        isPublish: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">List of beers</h2>
      </div>
        <ListBeers beers={beers} />
    </div>
  );
}
