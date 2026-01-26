"use client";

import React from 'react';
import Link from 'next/link';
import { CheckSquare, Calendar, Users, Bell, ChevronRight } from 'lucide-react';

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const QuickActions: React.FC = () => {
  const actions: QuickAction[] = [
    {
      id: 'attendance',
      label: 'Mark Attendance',
      icon: <CheckSquare size={20} />,
      href: '/students/mark-attendance',
    },
    {
      id: 'timetable',
      label: "Today's Timetable",
      icon: <Calendar size={20} />,
      href: '/teaching/timetable',
    },
    {
      id: 'classes',
      label: 'Class Lists',
      icon: <Users size={20} />,
      href: '/students/class-lists',
    },
    {
      id: 'notify',
      label: 'Notify Students',
      icon: <Bell size={20} />,
      href: '/teaching/notify',
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm h-full flex flex-col">
      <div className="mb-5">
        <h2 className="heading-lg">Quick Actions</h2>
        <p className="text-xs text-gray-600">Essential daily tasks</p>
      </div>

      <div className="space-y-2.5 flex-1 flex flex-col">
        {actions.map((action) => (
          <Link key={action.id} href={action.href}>
            <div className="flex items-center justify-between p-3.5 rounded-lg border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-gray-300 cursor-pointer group bg-white hover:bg-gray-50 active:bg-gray-100">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110 flex-shrink-0"
                  style={{ color: '#0A6E8A', backgroundColor: '#0A6E8A15' }}
                >
                  {action.icon}
                </div>
                <span className="font-semibold text-sm text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                  {action.label}
                </span>
              </div>
              <ChevronRight 
                size={18} 
                className="text-gray-400 flex-shrink-0 transition-all duration-200 group-hover:translate-x-1 group-hover:text-gray-600"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;

