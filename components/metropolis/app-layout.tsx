
import { ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";
import { AppNavbar } from "./app-navbar";

export default function AppLayout({ children }:{children:ReactNode}){
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <AppSidebar/>
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <AppNavbar/>
        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

