"use client";

import React from "react";
import { useAcademicContext } from "@/contexts/AcademicContext";
import { collegePerformanceBySchools } from "@/data/principalDashboard.mock";

const CollegePerformanceBySchools: React.FC = () => {
  const { academicYear, semester } = useAcademicContext();
  const semLabel = semester === "Fall" ? "Sem 1" : "Sem 2";

  const toneForPassRate = (passRate: number) => {
    if (passRate >= 92) return "bg-emerald-100 text-emerald-700";
    if (passRate >= 88) return "bg-blue-100 text-blue-700";
    if (passRate >= 84) return "bg-amber-100 text-amber-700";
    return "bg-rose-100 text-rose-700";
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 md:p-5 shadow-sm h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
        <h2 className="text-base sm:text-lg md:text-[18px] font-bold text-gray-900 whitespace-nowrap">
          College Performance by Schools
        </h2>
        <div className="flex items-center gap-0.5 whitespace-nowrap text-xs">
          <span className="text-blue-400">●</span>
          <span className="text-gray-600">{academicYear}</span>
          <span className="text-emerald-400">●</span>
          <span className="text-gray-600">{semLabel} overview</span>
        </div>
      </div>

      <div className="mt-3 sm:mt-4 border border-gray-200 rounded-lg overflow-hidden flex-1">
        <div className="w-full overflow-x-auto scrollbar-hide">
          <table className="w-full text-xs sm:text-sm">
            <colgroup>
              <col className="w-2/5" />
              <col className="w-1/6" />
              <col className="w-1/6" />
              <col className="w-1/6" />
              <col className="w-1/6" />
            </colgroup>
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left text-xs sm:text-sm font-bold text-gray-900 px-1.5 sm:px-2 py-2 sm:py-2.5">School</th>
                <th className="text-center text-xs sm:text-sm font-bold text-gray-900 px-1.5 sm:px-2 py-2 sm:py-2.5 whitespace-nowrap align-middle">Enrollment</th>
                <th className="text-right text-xs sm:text-sm font-bold text-gray-900 px-1.5 sm:px-2 py-2 sm:py-2.5 whitespace-nowrap">Pass rate</th>
                <th className="text-center text-xs sm:text-sm font-bold text-gray-900 px-1.5 sm:px-2 py-2 sm:py-2.5 whitespace-nowrap">Avg gpa</th>
                <th className="text-right text-xs sm:text-sm font-bold text-gray-900 px-1.5 sm:px-2 py-2 sm:py-2.5 whitespace-nowrap">Risk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {collegePerformanceBySchools.map((row, index) => (
                <tr key={row.id} className={`transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-blue-50/30`}>
                  <td className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                    {row.school}
                  </td>

                  <td className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 whitespace-nowrap align-middle text-center">
                    {row.enrollment.toLocaleString()}
                  </td>

                  <td className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap text-right">
                    {row.passRate.toFixed(1)}%
                  </td>

                  <td className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 whitespace-nowrap text-center">
                    {row.avgGpa.toFixed(2)}
                  </td>

                  <td className="px-1.5 sm:px-2 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 whitespace-nowrap text-right">
                    {row.atRiskRate.toFixed(1)}%
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

export default CollegePerformanceBySchools;