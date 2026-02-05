"use client";

import React from "react";
import Link from "next/link";
import { BarChart3, BookOpen, ClipboardList, FileText } from "lucide-react";

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  variant: "blue" | "green" | "orange" | "purple";
}

const QuickActions: React.FC = () => {
  const actions: QuickAction[] = [
    {
      id: "marks-submitted",
      label: "Marks Submitted",
      icon: <ClipboardList size={20} />,
      href: "/grade-submissions",
      variant: "blue",
    },
    {
      id: "service-requests",
      label: "Service Requests",
      icon: <FileText size={20} />,
      href: "/service-requests",
      variant: "green",
    },
    {
      id: "academic-affairs",
      label: "Academic Affairs",
      icon: <BookOpen size={20} />,
      href: "/academic",
      variant: "orange",
    },
    {
      id: "reports",
      label: "Reports",
      icon: <BarChart3 size={20} />,
      href: "/reports",
      variant: "purple",
    },
  ];

  const getItemStyles = (isEmphasis: boolean) => {
    if (isEmphasis) {
      return {
        bg: "bg-[#FFF4EC] border border-[#FFE2CF]",
        icon: "text-orange-600",
        text: "text-orange-700",
        ring: "focus-visible:ring-orange-600/20",
        hover: "hover:bg-[#FFEFE4]",
      };
    }

    return {
      bg: "bg-[#EEF6FF] border border-[#DCEBFF]",
      icon: "text-sky-700",
      text: "text-sky-700",
      ring: "focus-visible:ring-sky-600/20",
      hover: "hover:bg-[#E7F1FF]",
    };
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm h-auto sm:h-[300px] flex flex-col">
      <h2 className="text-[18px] font-bold text-gray-900 mb-2.5">
        Quick Actions
      </h2>
      <div className="flex flex-col flex-1 gap-2">
        {actions.map((action, index) => {
          const isEmphasis = index === actions.length - 1;
          const styles = getItemStyles(isEmphasis);

          return (
            <Link key={action.id} href={action.href} className="block">
              <div
                className={`flex items-center gap-3 px-3.5 py-3 rounded-xl ${styles.bg} ${styles.hover} transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 ${styles.ring}`}
              >
                <div className={`flex-shrink-0 ${styles.icon}`}>
                  <span className="[&>svg]:h-5 [&>svg]:w-5">{action.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-semibold text-[15px] ${styles.text}`}>
                    {action.label}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
