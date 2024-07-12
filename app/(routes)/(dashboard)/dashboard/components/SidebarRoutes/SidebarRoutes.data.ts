import { Calendar, Beer ,  Heart, SquareGanttChart } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Beer,
    label: "Beer",
    href: "/dashboard",
  },
  // {
  //   icon: Calendar,
  //   label: "Beers Reserves",
  //   href: "/reserves",
  // },
  {
    icon: Heart,
    label: "Loved Beers",
    href: "/loved-beers",
  },
];

export const dataAdminSidebar = [
  {
    icon: SquareGanttChart,
    label: "Manage your Beers",
    href: "/dashboard/admin/beers-manager",
  },
  // {
  //   icon: Calendar,
  //   label: "All reserves",
  //   href: "/dashboard/admin/reserves-admin",
  // },
];