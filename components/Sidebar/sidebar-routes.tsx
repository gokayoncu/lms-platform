"use client";
import React from "react";
import SidebarItem from "./sidebar-item";
import { Compass,Layout } from "lucide-react";
const guestRoutes = [
  {
    icon: Layout,
    href: "/",
    label: "Dashboard",
  },
  {
    icon: Compass,
    href: "/search",
    label: "Browse",
  },
];
const SidebarRoutes = () => {
  return <div className="flex flex-col w-full gap-4">
    {
        guestRoutes.map((routes)=>(
            <SidebarItem 
                key={routes.href}
                icon={routes.icon}
                href={routes.href}
                label={routes.label}
            />
        ))
    }
  </div>;
};

export default SidebarRoutes;
