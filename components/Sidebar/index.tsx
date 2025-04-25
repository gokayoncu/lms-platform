import React from "react";

import SidebarRoutes from "./sidebar-routes";
import Logo from "../Logo";
const Sidebar = () => {
  return (
    <header className="h-full flex justify-start border-r flex-col overflow-y-auto shadow-sm items-center p-4 gap-4 bg-white">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </header>
  );
};

export default Sidebar;
