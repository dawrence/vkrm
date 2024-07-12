import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { ListBeers } from "./components/ListBeers";
import Link from "next/link";

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
        <h2 className="text-2xl font-bold">Lista de cervezas</h2>
      </div>
      <ListBeers beers={beers} />
      <p className="text-center text-gray-500 text-sm mt-4 dark:text-gray-300">
        © 2024 Todos los derechos reservados ||&nbsp;
        <Link href="https://portfolio-juanescode.netlify.app/" target="_blank">
          JuanesCode
        </Link>
      </p>
    </div>
  );
}
