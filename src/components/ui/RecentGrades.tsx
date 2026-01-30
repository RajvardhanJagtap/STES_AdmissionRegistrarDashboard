"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import type { StudentGrade } from "@/data/studentDashboard.mock";

type RecentGradesProps = {
  items: StudentGrade[];
};

const RecentGrades: React.FC<RecentGradesProps> = ({ items }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
      <h2 className="text-[19px] font-bold text-gray-900 mb-4">
        Recent Grades
      </h2>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50"
          >
            <div className="h-10 w-10 rounded-lg bg-gray-200 text-gray-600 grid place-items-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold text-gray-900 truncate">
                {item.title}
              </div>
              <div className="text-sm text-gray-600 truncate">
                {item.course} <span className="mx-1">•</span> {item.postedText}
              </div>
            </div>

            <div className="flex-shrink-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#026892] text-white">
                {item.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentGrades;
