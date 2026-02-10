"use client";

import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import { BarChart3 } from "lucide-react";

const ApplicationProcessing: React.FC = () => {
  const data = [
    { name: "Document Verification", value: 85.2 },
    { name: "Academic Review", value: 78.9 },
    { name: "Enrollment Rate", value: 73.5 },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 md:p-5 shadow-sm h-full flex flex-col">
      <div className="flex items-center gap-2">
        <BarChart3 className="h-4 w-4 text-primary-600" />
        <h2 className="text-base sm:text-lg md:text-[18px] font-bold text-gray-900 leading-tight">
          Application Processing
        </h2>
      </div>

      <div className="mt-3 sm:mt-4 flex-1">
        <div className="h-[170px] sm:h-[190px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 8, right: 34, left: 6, bottom: 6 }}
              barCategoryGap={18}
            >
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis
                type="category"
                dataKey="name"
                width={150}
                tick={{ fontSize: 12, fill: "#111827", fontWeight: 600 }}
                axisLine={false}
                tickLine={false}
              />

              <Bar
                dataKey="value"
                fill="#026892"
                radius={[999, 999, 999, 999]}
                barSize={10}
                isAnimationActive={false}
              >
                <LabelList
                  dataKey="value"
                  position="right"
                  formatter={(v: number) => `${v.toFixed(1)}%`}
                  style={{ fill: "#111827", fontSize: 12, fontWeight: 700 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <button
          type="button"
          className="mt-3 w-full rounded-lg border border-[#026892] text-[#026892] py-2 text-xs sm:text-sm font-semibold hover:bg-blue-50/40 transition-colors"
        >
          View Admission Reports
        </button>
      </div>
    </div>
  );
};

export default ApplicationProcessing;
