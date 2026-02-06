"use client";

import React from "react";

type Status = "Reviewed" | "In Progress" | "Pending Review";

const RecentGradeSubmissions: React.FC = () => {
  const rows: Array<{
    group: string;
    year: string;
    progress: number;
    modules: string;
    status: Status;
  }> = [
    {
      group: "MEE LEVEL 1",
      year: "Year 1",
      progress: 100,
      modules: "13/13",
      status: "Reviewed",
    },
    {
      group: "CSE LEVEL 2",
      year: "Year 2",
      progress: 85,
      modules: "11/13",
      status: "In Progress",
    },
    {
      group: "BBA LEVEL 3",
      year: "Year 3",
      progress: 92,
      modules: "12/13",
      status: "Reviewed",
    },
    {
      group: "LAW LEVEL 2",
      year: "Year 2",
      progress: 76,
      modules: "10/13",
      status: "In Progress",
    },
  ];

  const getStatusPill = (status: Status) => {
    switch (status) {
      case "Reviewed":
        return "bg-emerald-50 text-emerald-800 ring-1 ring-inset ring-emerald-200";
      case "In Progress":
        return "bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-200";
      case "Pending Review":
        return "bg-slate-50 text-slate-800 ring-1 ring-inset ring-slate-200";
      default:
        return "bg-slate-50 text-slate-800 ring-1 ring-inset ring-slate-200";
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 md:p-5 shadow-sm h-full flex flex-col">
      <div>
        <h2 className="text-base sm:text-lg md:text-[18px] font-bold text-gray-900 leading-tight">
          Recent Grade Submissions
        </h2>
      </div>

      <div className="mt-3 sm:mt-4 border border-gray-200 rounded-lg overflow-hidden flex-1">
        <div className="w-full overflow-x-auto scrollbar-hide">
          <table className="w-full text-xs sm:text-sm">
            <colgroup>
              <col className="w-28" />
              <col className="w-16" />
              <col className="w-20" />
              <col className="w-16" />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left text-xs sm:text-sm font-bold text-gray-900 px-1.5 sm:px-3 py-2 sm:py-2.5">Group</th>
                <th className="text-left text-xs sm:text-sm font-bold text-gray-900 px-1.5 sm:px-3 py-2 sm:py-2.5 whitespace-nowrap">Year</th>
                <th className="text-left text-xs sm:text-sm font-bold text-gray-900 px-1.5 sm:px-3 py-2 sm:py-2.5 whitespace-nowrap">Completion</th>
                <th className="text-left text-xs sm:text-sm font-bold text-gray-900 px-1.5 sm:px-3 py-2 sm:py-2.5 whitespace-nowrap">Modules</th>
                <th className="text-left text-xs sm:text-sm font-bold text-gray-900 px-1.5 sm:px-3 py-2 sm:py-2.5 whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row, index) => (
                <tr key={row.group} className={`transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-blue-50/30`}>
                  <td className="px-1.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                    {row.group}
                  </td>
                  <td className="px-1.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 whitespace-nowrap">
                    {row.year}
                  </td>
                  <td className="px-1.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap text-center">
                    {row.progress}%
                  </td>
                  <td className="px-1.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 whitespace-nowrap text-center">
                    {row.modules}
                  </td>
                  <td className="px-1.5 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap text-center">
                    <span
                      className={`inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-semibold w-24 ${getStatusPill(row.status)}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentGradeSubmissions;
