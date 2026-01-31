"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";

export type AttendanceByCourseItem = {
  courseCode: string;
  attendancePercent: number;
};

type AttendanceByCourseProps = {
  items: AttendanceByCourseItem[];
};

const clampPercent = (value: number) => Math.max(0, Math.min(100, value));
const BRAND_BLUE = "#026892";

const AttendanceByCourse: React.FC<AttendanceByCourseProps> = ({ items }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Mock data with specified percentages
  const mockData = [
    { courseCode: "CS101", attendancePercent: 60 },
    { courseCode: "MATH202", attendancePercent: 70 },
    { courseCode: "ENG150", attendancePercent: 80 }, // Only one above 75%
    { courseCode: "PHY110", attendancePercent: 72 },
    { courseCode: "HIST130", attendancePercent: 50 },
  ];

  const safeItems = mockData.map((item) => ({
    ...item,
    attendancePercent: clampPercent(item.attendancePercent),
  }));

  const targetPercentage = 75;
  const exceededCount = safeItems.filter(
    (item) => item.attendancePercent > targetPercentage,
  ).length;
  const averageAttendance =
    safeItems.reduce((sum, item) => sum + item.attendancePercent, 0) /
    safeItems.length;

  const chartData = safeItems.map((item) => ({
    name: item.courseCode,
    value: item.attendancePercent,
  }));

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm h-[460px] flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-[19px] font-bold text-gray-900">
            Attendance Overview
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Course-wise attendance percentage
          </p>
        </div>
        <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium text-green-700">
            Target Exceeded (75%)
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-4 h-72 w-full min-w-0">
        {isMounted ? (
          <ResponsiveContainer
            width="100%"
            height="100%"
            minWidth={0}
            minHeight={288}
          >
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 16, left: 0, bottom: 40 }}
            >
              <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
              <YAxis
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#9ca3af" }}
                tickLine={{ stroke: "#9ca3af" }}
              />
              <XAxis
                dataKey="name"
                interval={0}
                tick={{ fontSize: 12, fill: "#6b7280" }}
                angle={-35}
                textAnchor="end"
                height={50}
                axisLine={{ stroke: "#9ca3af" }}
                tickLine={{ stroke: "#9ca3af" }}
              />
              <Tooltip
                formatter={(value: number) => [`${value}%`, "Attendance"]}
                contentStyle={{
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                }}
              />
              <ReferenceLine
                y={targetPercentage}
                stroke="#34d399"
                strokeDasharray="6 6"
              />
              <Bar
                dataKey="value"
                fill={BRAND_BLUE}
                radius={[6, 6, 0, 0]}
                barSize={44}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full w-full" />
        )}
      </div>

      {/* Summary line */}
      <div className="mt-3 pt-3 border-t border-gray-100">
        <p className="text-sm text-gray-600 text-center">
          Average attendance:{" "}
          <span className="font-semibold text-[#026892]">
            {averageAttendance.toFixed(1)}%
          </span>{" "}
          • {exceededCount} of {safeItems.length} courses above target
        </p>
      </div>
    </div>
  );
};

export default AttendanceByCourse;
