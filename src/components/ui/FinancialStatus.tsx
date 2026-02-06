"use client";

import React from "react";
import { Activity, GraduationCap } from "lucide-react";

const FinancialStatus: React.FC = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 md:p-5 h-auto sm:h-[300px] flex flex-col shadow-sm">
      <div>
        <h2 className="text-base sm:text-lg md:text-[18px] font-bold text-gray-900 leading-tight">
          Enrolled in Semester
        </h2>
      </div>

      <div className="mt-2 sm:mt-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <span className="text-xs sm:text-sm text-gray-700 font-medium">Active enrollments</span>
          <span className="text-2xl sm:text-3xl font-bold text-[#026892]">2847</span>
        </div>
      </div>

      <div className="my-2 sm:my-3 h-px bg-gray-100" />

      <div className="space-y-1.5 sm:space-y-2">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="text-gray-700">Full-time</span>
          <span className="font-semibold text-gray-900">2,456</span>
        </div>
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="text-gray-700">Part-time</span>
          <span className="font-semibold text-gray-900">391</span>
        </div>
      </div>

      <div className="mt-auto pt-2 sm:pt-2">
        <div className="rounded-lg bg-blue-50 px-2 sm:px-3 py-1.5 sm:py-2 text-blue-700 text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2">
          <Activity className="h-3 sm:h-4 w-3 sm:w-4" />
          <span>97.2% retention rate this semester</span>
        </div>
      </div>
    </div>
  );
};

export default FinancialStatus;
