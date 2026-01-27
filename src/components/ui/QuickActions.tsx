"use client";

import React from "react";
import Link from "next/link";
import { CheckSquare, Calendar, Users, Bell } from "lucide-react";

interface QuickAction {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const QuickActions: React.FC = () => {
  const actions: QuickAction[] = [
    {
      id: "attendance",
      label: "Mark Attendance",
      description: "Record class attendance",
      icon: <CheckSquare size={20} />,
      href: "/students/mark-attendance",
    },
    {
      id: "timetable",
      label: "View Timetable",
      description: "Check your class schedule",
      icon: <Calendar size={20} />,
      href: "/teaching/timetable",
    },
    {
      id: "classes",
      label: "Class Lists",
      description: "Manage student rosters",
      icon: <Users size={20} />,
      href: "/students/class-lists",
    },
    {
      id: "notify",
      label: "Notify Students",
      description: "Send notifications",
      icon: <Bell size={20} />,
      href: "/teaching/notify",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm h-full flex flex-col">
      <div className="mb-3">
        <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
      </div>

      <div className="space-y-2 flex-1 flex flex-col">
        {actions.map((action) => (
          <Link key={action.id} href={action.href} className="block">
            <div
              role="button"
              tabIndex={0}
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#024698]/20"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-gray-200 grid place-items-center text-[#024698]">
                {action.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-900">
                  {action.label}
                </div>
                <div className="text-xs text-gray-600 mt-0.5">
                  {action.description}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;


