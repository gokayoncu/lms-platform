"use client";
import React from "react";
import SidebarItem from "./sidebar-item";
import { BarChart, Compass, Layout, List } from "lucide-react";
import { usePathname } from "next/navigation";
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
const teacherRoutes = [
  {
    icon: List,
    href: "/teacher/courses",
    label: "Courses",
  },
  {
    icon: BarChart,
    href: "/teacher/analytics",
    label: "Analytics",
  },
];
const SidebarRoutes = () => {
  const pathname = usePathname();
  const isTeacherpage = pathname?.startsWith("/teacher");
  const routes = isTeacherpage ? teacherRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full gap-4">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          href={route.href}
          label={route.label}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
