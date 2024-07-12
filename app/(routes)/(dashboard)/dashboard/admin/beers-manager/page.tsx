import { auth } from "@clerk/nextjs/server";
import { ButtonAddBeer } from "./components/ButtonAddBeer";
import { ListBeers } from "./components/ListBeers";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { isAdministrator } from "@/lib/isAdministrator";
import Link from "next/link";

export default async function BeerManagerPage() {
  const { userId } = auth();

  if (!userId || !isAdministrator(userId)) {
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
        <h2 className="text-2xl font-bold">Gestiona tus cervezas</h2>
        <ButtonAddBeer />
      </div>
      <ListBeers beers={beer} />
      <p className="text-center text-gray-500 text-sm mt-4 dark:text-gray-300">
        © 2024 Todos los derechos reservados ||&nbsp;
        <Link href="https://portfolio-juanescode.netlify.app/" target="_blank">
          JuanesCode
        </Link>
      </p>
    </div>
  );
}
