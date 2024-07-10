import { Navbar } from "@/components/Shared/Navbar";
import { db } from "@/lib/db";
import { HeaderBeers } from "./components/HeaderBeers";
import { FiltersAndListBeers } from "./components/FiltersAndListBeers";

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
        <div>
          <FiltersAndListBeers beers={beers} />
        </div>
      </div>
    </div>
  );
}
