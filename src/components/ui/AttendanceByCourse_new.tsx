"use client";

import React from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export type AttendanceByCourseItem = {
  courseCode: string;
  attendancePercent: number;
};

type AttendanceByCourseProps = {
  items: AttendanceByCourseItem[];
};

const clampPercent = (value: number) => Math.max(0, Math.min(100, value));

const getAttendanceStatus = (percent: number) => {
  if (percent >= 85)
    return {
      color: "bg-green-500",
      status: "excellent",
      icon: TrendingUp,
      textColor: "text-green-600",
    };
  if (percent >= 75)
    return {
      color: "bg-blue-500",
      status: "good",
      icon: Minus,
      textColor: "text-blue-600",
    };
  if (percent >= 60)
    return {
      color: "bg-orange-500",
      status: "warning",
      icon: TrendingDown,
      textColor: "text-orange-600",
    };
  return {
    color: "bg-red-500",
    status: "critical",
    icon: TrendingDown,
    textColor: "text-red-600",
  };
};

const AttendanceByCourse: React.FC<AttendanceByCourseProps> = ({ items }) => {
  const safeItems = items.map((item) => ({
    ...item,
    attendancePercent: clampPercent(item.attendancePercent),
  }));

  const averageAttendance =
    safeItems.reduce((sum, item) => sum + item.attendancePercent, 0) /
    safeItems.length;

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-[19px] font-semibold text-gray-900">
            Attendance Overview
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Average: {averageAttendance.toFixed(1)}%
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">
            {safeItems.length}
          </div>
          <div className="text-xs text-gray-500">Courses</div>
        </div>
      </div>

      <div className="space-y-3">
        {safeItems.map((item) => {
          const status = getAttendanceStatus(item.attendancePercent);
          const Icon = status.icon;

          return (
            <div
              key={item.courseCode}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex-shrink-0">
                <div
                  className={`w-10 h-10 rounded-lg ${status.color} flex items-center justify-center`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-semibold text-gray-900 truncate">
                    {item.courseCode}
                  </h3>
                  <span className={`text-sm font-bold ${status.textColor}`}>
                    {item.attendancePercent.toFixed(0)}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${status.color}`}
                    style={{ width: `${item.attendancePercent}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttendanceByCourse;
