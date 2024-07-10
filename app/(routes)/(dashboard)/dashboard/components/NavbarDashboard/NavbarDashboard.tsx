import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SidebarRoutes } from "../SidebarRoutes";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function NavbarDashboard() {
  return (
    <nav className="flex items-center justify-between w-full h-20 px-2 border-b gap-x-4 md:px-6 bg-background">
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-x-7">
          <Link href="/beers">List Beers</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
        <div className="flex items-end justify-end gap-x-2">
          <UserButton />
        </div>
      </div>
    </nav>
  );
}
