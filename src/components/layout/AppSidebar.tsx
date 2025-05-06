
import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import {
  GraduationCap,
  Users,
  BookOpen,
  Calendar,
  BarChart3,
  Settings,
  Menu,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppSidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const isMobile = useIsMobile();
  
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: <BarChart3 size={20} /> },
    { name: 'Students', path: '/students', icon: <Users size={20} /> },
    { name: 'Courses', path: '/courses', icon: <BookOpen size={20} /> },
    { name: 'Attendance', path: '/attendance', icon: <Calendar size={20} /> },
    { name: 'Grades', path: '/grades', icon: <GraduationCap size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <>
      {isMobile && (
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50"
        >
          <Menu />
        </Button>
      )}
      
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-sidebar transform transition-transform duration-200 ease-in-out shadow-lg",
          isOpen ? "translate-x-0" : "-translate-x-full",
          isMobile ? "md:hidden" : "hidden md:block"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex items-center border-b">
            <GraduationCap size={28} className="text-primary mr-2" />
            <span className="font-bold text-lg">EduManage</span>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center p-2 rounded-md hover:bg-sidebar-accent transition-all duration-200"
                    onClick={() => isMobile && setIsOpen(false)}
                  >
                    <span className="text-sidebar-primary mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                A
              </div>
              <div className="ml-2">
                <p className="font-medium text-sm">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@school.edu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default AppSidebar;
