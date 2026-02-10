"use client";

import React from "react";

const AdmissionSummary: React.FC = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 md:p-5 h-auto sm:h-[280px] flex flex-col shadow-sm">
      <div>
        <h2 className="text-base sm:text-lg md:text-[18px] font-bold text-gray-900 leading-tight">
          Admission Summary
        </h2>
      </div>

      <div className="mt-4 sm:mt-5 space-y-3">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs sm:text-sm text-gray-700 font-medium">
            Total Applications
          </span>
          <span className="text-xl sm:text-2xl font-bold text-gray-900">
            2,341
          </span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-xs sm:text-sm text-gray-700 font-medium">
            Pending Review
          </span>
          <span className="inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-semibold bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-200">
            456
          </span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-xs sm:text-sm text-gray-700 font-medium">
            Enrolled Students
          </span>
          <span className="inline-flex items-center justify-center rounded-full px-2 py-0.5 text-[11px] sm:text-xs font-semibold bg-gray-50 text-gray-900 ring-1 ring-inset ring-gray-200">
            1,234
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSummary;
