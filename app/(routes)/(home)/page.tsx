import { Navbar } from "@/components/Shared/Navbar";
import { FirtsBlock } from "./components/FirtsBlock";
import { SliderBrands } from "./components/SliderBrands";
import { Features } from "./components/Features";
// import { OurFleet } from "./components/OurFleet";
import { DriveToday } from "./components/DriveToday";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirtsBlock />
      <SliderBrands />
      <Features />
      {/* <OurFleet /> */}
      <DriveToday />
      <p className="text-center text-gray-500 text-sm mt-2 dark:text-gray-300">
        © 2024 Todos los derechos reservados ||&nbsp;
        <Link href="https://portfolio-juanescode.netlify.app/" target="_blank" >
          JuanesCode
        </Link>
      </p>
    </div>
  );
}
