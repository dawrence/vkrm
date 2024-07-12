import { Navbar } from "@/components/Shared/Navbar";
import { db } from "@/lib/db";
import { HeaderBeers } from "./components/HeaderBeers";
import { FiltersAndListBeers } from "./components/FiltersAndListBeers";
import Link from "next/link";

export default async function pageBeers() {
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
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <HeaderBeers />
        <div></div>
        <div>
          <FiltersAndListBeers beers={beers} />
        </div>
        <div>
          <p className="text-center text-gray-500 text-sm mt-4 dark:text-gray-300">
            © 2024 Todos los derechos reservados ||&nbsp;
            <Link href="https://portfolio-juanescode.netlify.app/" target="_blank">
              JuanesCode
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
