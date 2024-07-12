"use client";

import { Separator } from "@/components/ui/separator";
import { useAuth } from "@clerk/nextjs";
import { dataAdminSidebar, dataGeneralSidebar } from "./SidebarRoutes.data";
import { SidebarItem } from "./SidebarItem";
import { isAdministrator } from "@/lib/isAdministrator"
import Link from "next/link";

export function SidebarRoutes() {
  const { userId } = useAuth();

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500 dark:text-gray-300">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />

          {isAdministrator(userId) && (
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500 dark:text-gray-300">ADMIN</p>
          {dataAdminSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
          )}
      </div>

      <div>
        <Separator />

        <p className="text-center text-gray-500 text-sm mt-4 dark:text-gray-300">
            © 2024 Todos los derechos reservados ||&nbsp;
            <Link href="https://portfolio-juanescode.netlify.app/" target="_blank">
              JuanesCode
            </Link>
          </p>
      </div>
    </div>
  );
}