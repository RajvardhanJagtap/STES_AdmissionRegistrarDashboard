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
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm h-[400px] flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
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

      <div className="flex-1 space-y-1 overflow-hidden">
        {items.map((module) => (
          <div
            key={module.code}
            className="flex items-center gap-3 p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex-shrink-0">
              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 truncate">
                    {module.code}
                  </h3>
                  <p className="text-xs text-gray-600 truncate">
                    {module.name}
                  </p>
                </div>
                
                <div className="flex items-center gap-1 ml-3">
                  <Award className="w-3 h-3 text-[#026892]" />
                  <span className="text-sm font-semibold text-[#026892]">
                    {module.credits}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 pt-2 border-t border-gray-100">
        <p className="text-sm text-gray-600 text-center">
          {items.length} modules enrolled • {totalCredits} total credits this semester
        </p>
      </div>
    </div>
  );
};

export default EnrolledModulesTable;