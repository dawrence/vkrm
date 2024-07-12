import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import { ListLovedBeers } from "./components/ListLovedBeers";
import Link from "next/link";

export default function pageLovedCars() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div>
      <h1 className="text-2xl">Cervezas que te gustan</h1>

      <ListLovedBeers />
      <p className="text-center text-gray-500 text-sm mt-4 dark:text-gray-300">
        © 2024 Todos los derechos reservados ||&nbsp;
        <Link href="https://portfolio-juanescode.netlify.app/" target="_blank">
          JuanesCode
        </Link>
      </p>
    </div>
  );
}
