"use client";

import React from "react";
import { Activity, FileText, AlertCircle } from "lucide-react";
import type { StudentAssignment } from "@/data/studentDashboard.mock";

type AssignmentsTasksProps = {
  items: StudentAssignment[];
};

const AssignmentsTasks: React.FC<AssignmentsTasksProps> = ({ items }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Assignments &amp; Tasks
      </h2>

      <div className="space-y-3">
        {items.map((item, index) => {
          const isWarning = item.tone === "warning";
          const bg = isWarning
            ? "bg-orange-50 border-orange-100"
            : "bg-blue-50 border-blue-100";
          const iconWrap = isWarning
            ? "bg-orange-100 text-orange-600"
            : "bg-blue-100 text-blue-600";
          const Icon = isWarning
            ? AlertCircle
            : index === 0
              ? Activity
              : FileText;

          const titleClass = isWarning ? "text-orange-900" : "text-blue-900";
          const metaClass = isWarning ? "text-orange-700" : "text-blue-700";

          return (
            <div
              key={item.id}
              className={`rounded-xl px-4 py-3 flex items-center gap-3 ${bg}`}
            >
              <div
                className={`h-10 w-10 rounded-lg grid place-items-center ${iconWrap}`}
              >
                <Icon className="w-5 h-5" />
              </div>

              <div className="min-w-0 flex-1">
                <div
                  className={`text-sm font-semibold truncate ${titleClass}`}
                >
                  {item.title}
                </div>
                <div className={`text-sm truncate ${metaClass}`}>
                  {item.course} <span className="text-gray-500">•</span>{" "}
                  {item.dueText}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssignmentsTasks;
