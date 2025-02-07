import '@/app/ui/global.css';
import SideNav from '@/app/ui/sidenav';
import TopNav from '@/app/ui/topnav';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      {/* Top Navigation Bar */}
      <TopNav />
      
      {/* Main Content Section */}
      <div className="flex flex-grow">
        {/* Sidebar Navigation */}
        <div className="w-64 hidden md:block">
          <SideNav />
        </div>

        {/* Page Content */}
        <div className="flex-grow p-6 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

