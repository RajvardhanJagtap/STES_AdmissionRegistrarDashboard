"use client";

import React from "react";

type IntakeRow = {
  program: string;
  capacity: number;
  approved: number;
  enrolled: number;
  remaining: number;
};

const IntakeCapacity: React.FC = () => {
  const intake: IntakeRow[] = [
    {
      program: "Computer Science",
      capacity: 600,
      approved: 510,
      enrolled: 450,
    },
    {
      program: "Business Admin",
      capacity: 500,
      approved: 420,
      enrolled: 380,
    },
    {
      program: "Engineering",
      capacity: 450,
      approved: 410,
      enrolled: 404,
    },
  ].map((row) => ({
    ...row,
    remaining: Math.max(0, row.capacity - row.enrolled),
  }));

  const totalCapacity = intake.reduce((sum, row) => sum + row.capacity, 0);
  const totalEnrolled = intake.reduce((sum, row) => sum + row.enrolled, 0);
  const fillRate =
    totalCapacity > 0 ? (totalEnrolled / totalCapacity) * 100 : 0;

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 md:p-5 h-auto sm:h-[280px] flex flex-col shadow-sm">
      <div>
        <h2 className="text-base sm:text-lg md:text-[18px] font-bold text-gray-900 leading-tight">
          Intake Capacity
        </h2>
      </div>

      <div className="mt-3 sm:mt-4 flex flex-col flex-1 min-h-0">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs sm:text-sm text-gray-700 font-medium">
            Total enrolled
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
              {totalEnrolled.toLocaleString()}
            </span>
            <span className="inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-semibold bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200">
              {fillRate.toFixed(1)}% filled
            </span>
          </div>
        </div>

        <div className="my-2 sm:my-3 h-px bg-gray-100" />

        <div className="flex-1 min-h-0 border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-2.5 sm:px-3 py-2">
            <div className="grid grid-cols-12 gap-x-4 sm:gap-x-5 text-[11px] sm:text-xs font-bold text-gray-800">
              <div className="col-span-5">Program</div>
              <div className="col-span-2 text-center whitespace-nowrap">
                Capacity
              </div>
              <div className="col-span-2 text-center whitespace-nowrap pl-1">
                Enrolled
              </div>
              <div className="col-span-3 text-center">Remaining</div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {intake.map((row) => (
              <div key={row.program} className="px-2.5 sm:px-3 py-2">
                <div className="grid grid-cols-12 gap-x-4 sm:gap-x-5 items-center">
                  <div className="col-span-5 min-w-0">
                    <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                      {row.program}
                    </div>
                  </div>
                  <div className="col-span-2 text-center text-[11px] sm:text-xs text-gray-700 whitespace-nowrap">
                    {row.capacity.toLocaleString()}
                  </div>
                  <div className="col-span-2 text-center text-[11px] sm:text-xs font-semibold text-gray-900 whitespace-nowrap pl-1">
                    {row.enrolled.toLocaleString()}
                  </div>
                  <div className="col-span-3 text-center text-[11px] sm:text-xs text-gray-700 whitespace-nowrap">
                    {row.remaining.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakeCapacity;
