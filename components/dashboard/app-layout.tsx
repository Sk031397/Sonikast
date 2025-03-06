'use client';
import React, { ReactNode, useState } from 'react'
import AppHeader from '../dashboard/app-header'
import AppSidebar from '../dashboard/app-sidebar'

export default function AppLayout({children}:{children:ReactNode}) {
  const [activeTab,setActiveTab] = useState<string>('dashboard');
  return (
    <div className='min-h-screen text-white'>
     <AppHeader/>
     <div className="flex flex-col md:flex-row">
        <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab}/>
        <div className="flex-1 p-6">
            {children}
        </div>
     </div>
    </div>
  )
}
