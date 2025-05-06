
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, title }) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className={cn(
        "min-h-screen transition-all duration-200",
        !isMobile ? (sidebarOpen ? "md:pl-64" : "md:pl-0") : ""
      )}>
        <AppHeader title={title} />
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
