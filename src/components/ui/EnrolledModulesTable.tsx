"use client";

import React from "react";
import { BookOpen, Award } from "lucide-react";

export type EnrolledModule = {
  code: string;
  name: string;
  credits: number;
};

type EnrolledModulesTableProps = {
  items: EnrolledModule[];
};

const EnrolledModulesTable: React.FC<EnrolledModulesTableProps> = ({
  items,
}) => {
  const totalCredits = items.reduce((sum, module) => sum + module.credits, 0);

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-[19px] font-bold text-gray-900">
            Current Enrolled Modules
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Modules for the current semester
          </p>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-[#026892]">{totalCredits}</div>
          <div className="text-xs text-gray-500">Total Credits</div>
        </div>
      </div>

      <div className="rounded-lg border border-gray-100">
        <table className="w-full text-sm">
          <thead className="bg-white">
            <tr className="border-b border-gray-100">
              <th
                scope="col"
                className="px-3 py-2 text-left text-xs font-semibold text-gray-600"
              >
                Module Code
              </th>
              <th
                scope="col"
                className="px-3 py-2 text-left text-xs font-semibold text-gray-600"
              >
                Module Name
              </th>
              <th
                scope="col"
                className="px-3 py-2 text-right text-xs font-semibold text-gray-600"
              >
                Credits
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((module) => (
              <tr
                key={module.code}
                className="border-b border-gray-50 last:border-b-0 hover:bg-gray-50"
              >
                <td className="px-3 py-2 align-top">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                      <BookOpen className="h-3.5 w-3.5 text-blue-600" />
                    </span>
                    <span className="font-semibold text-gray-900 whitespace-nowrap">
                      {module.code}
                    </span>
                  </div>
                </td>

                <td className="px-3 py-2 align-top">
                  <div className="text-gray-900 font-medium truncate max-w-[22rem]">
                    {module.name}
                  </div>
                </td>

                <td className="px-3 py-2 align-top text-right">
                  <span className="inline-flex items-center justify-end gap-1 font-semibold text-[#026892]">
                    <Award className="h-3.5 w-3.5" />
                    {module.credits}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-2 pt-2 border-t border-gray-100">
        <p className="text-sm text-gray-600 text-center">
          {items.length} modules enrolled • {totalCredits} total credits this
          semester
        </p>
      </div>
    </div>
  );
};

export default EnrolledModulesTable;
