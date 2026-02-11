"use client";

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import { BarChart3 } from "lucide-react";

type AxisTickProps = {
  x?: number;
  y?: number;
  payload?: { value?: string | number };
};

const MultiLineXAxisTick: React.FC<AxisTickProps> = ({
  x = 0,
  y = 0,
  payload,
}) => {
  const rawValue = payload?.value ?? "";
  const words = String(rawValue).split(/\s+/).filter(Boolean);

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={24}
        textAnchor="middle"
        fill="#111827"
        fontSize={12}
        fontWeight={600}
      >
        {words.map((word, idx) => (
          <tspan key={`${word}-${idx}`} x={0} dy={idx === 0 ? 0 : 14}>
            {word}
          </tspan>
        ))}
      </text>
    </g>
  );
};

const YAxisTick: React.FC<AxisTickProps> = ({ x = 0, y = 0, payload }) => {
  const value = payload?.value;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={10}
        textAnchor="end"
        fill="#6B7280"
        fontSize={12}
        fontWeight={600}
      >
        {value}
      </text>
    </g>
  );
};

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
        <div className="h-[300px] sm:h-[320px] w-full">
          <ResponsiveContainer
            width="100%"
            height="100%"
            minWidth={0}
            minHeight={300}
          >
            <BarChart
              data={data}
              margin={{ top: 10, right: 10, left: 8, bottom: 32 }}
              barCategoryGap="30%"
            >
              <CartesianGrid
                stroke="#E5E7EB"
                strokeDasharray="4 4"
                vertical={false}
              />

              <YAxis
                domain={[0, 100]}
                tick={<YAxisTick />}
                axisLine={false}
                tickLine={false}
                width={48}
                tickMargin={10}
                padding={{ top: 0, bottom: 0 }}
              />
              <XAxis
                dataKey="name"
                interval={0}
                tick={<MultiLineXAxisTick />}
                tickLine={false}
                axisLine={false}
                height={68}
                tickMargin={12}
              />

              <Bar
                dataKey="value"
                fill="#026892"
                radius={[0, 0, 0, 0]}
                barSize={50}
                isAnimationActive={false}
              >
                <LabelList
                  dataKey="value"
                  position="top"
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
