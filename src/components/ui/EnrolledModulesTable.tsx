"use client";

import React from "react";

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
  return (
    <div className="bg-white border border-gray-100 rounded-xl px-6 pt-6 pb-2 shadow-sm">
      <h2 className="text-[19px] font-bold text-gray-900 mb-3">
        Assigned Modules
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-gray-600"
              >
                Course Code
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-semibold text-gray-600"
              >
                Course
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-right text-xs font-semibold text-gray-600"
              >
                Credits
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((module) => (
              <tr
                key={module.code}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="px-3 py-3 font-semibold text-gray-900 whitespace-nowrap">
                  {module.code}
                </td>
                <td className="px-3 py-3 text-gray-800">{module.name}</td>
                <td className="px-3 py-3 text-right text-gray-900">
                  {module.credits}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledModulesTable;
