'use client';

import { X, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { sidebarItems } from "@/constants";
import { Tooltip, TooltipTrigger } from "../ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";

export const AppSidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    return (
         <aside
           className={`p-4 z-50 h-full flex flex-col transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}
         >
           <Button
             onClick={() => setSidebarOpen(!sidebarOpen)}
             className="mb-4 self-end"
           >
             {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
           </Button>
           <nav className="mt-4 space-y-4 flex-1">
            {sidebarItems.map(({ label, icon}) => (
                <div key={label}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant={'ghost'}>
                                {icon}
                                {sidebarOpen && <span>{label}</span>}
                            </Button>
                        </TooltipTrigger>
                        {!sidebarOpen && <TooltipContent side="right">{label}</TooltipContent>}
                    </Tooltip>
                </div>
            ))}
           </nav>
         </aside>
  )
}
