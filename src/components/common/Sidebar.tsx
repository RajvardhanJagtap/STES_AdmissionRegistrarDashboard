"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Home, FileText, Users, UserCheck, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
  href?: string;
}

const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: Home, href: "/" },
  {
    id: "application-processing",
    label: "Application Processing",
    icon: FileText,
    href: "/",
  },
  {
    id: "student-records",
    label: "Student Records",
    icon: Users,
    href: "/",
  },
  {
    id: "enrollment-management",
    label: "Enrollment Management",
    icon: UserCheck,
    href: "/",
  },
  {
    id: "communication-center",
    label: "Communication Center",
    icon: Mail,
    href: "/",
  },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const pathname = usePathname();
  const activeId = useMemo(() => {
    const match = navItems.find((item) => {
      if (!item.href) return false;
      if (item.href === "/") return pathname === "/";
      return pathname === item.href || pathname.startsWith(`${item.href}/`);
    });
    return match?.id || "dashboard";
  }, [pathname]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-x-0 top-24 md:top-16 bottom-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-24 md:top-16 left-0 h-[calc(100vh-96px)] md:h-[calc(100vh-64px)] w-64 bg-white border-r border-gray-200 z-40 transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Navigation */}
        <nav className="p-2 space-y-2 h-full overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeId;

            return (
              <Link
                key={item.id}
                href={item.href || "/"}
                onClick={() => {
                  if (isOpen) onToggle();
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2 rounded-2xl text-[15px] font-medium transition-colors",
                  isActive
                    ? "bg-[#EAF7F1] text-[#026892]"
                    : "text-slate-800 hover:bg-slate-50",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="flex-1 text-left">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
