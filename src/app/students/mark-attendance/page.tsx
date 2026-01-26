"use client";

import React, { useMemo } from 'react';
import MainLayout from '@/layouts/MainLayout';
import MarkAttendance from '@/components/ui/MarkAttendance';
import { getDashboardData } from '@/data/dummyData';
import { useAcademicContext } from '@/contexts/AcademicContext';

export default function MarkAttendancePage() {
  const { academicYear, semester } = useAcademicContext();
  const { markAttendanceData } = useMemo(() => getDashboardData(academicYear, semester), [academicYear, semester]);

  return (
    <MainLayout>
      <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">
        {/* Header */}
        <div className="px-6 py-8 border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Mark Attendance</h1>
            <p className="text-gray-600">Manage and track student attendance across your classes</p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <MarkAttendance data={markAttendanceData} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
