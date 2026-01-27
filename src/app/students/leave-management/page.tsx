"use client";

import React, { useMemo } from 'react';
import MainLayout from '@/layouts/MainLayout';
import LeaveManagement from '@/components/ui/LeaveManagement';
import { useAcademicContext } from '@/contexts/AcademicContext';
import { getDashboardData } from '@/data/dummyData';

export default function LeaveManagementPage() {
  const { academicYear, semester } = useAcademicContext();
  const { leaveManagementData } = useMemo(() => getDashboardData(academicYear, semester), [academicYear, semester]);

  return (
    <MainLayout>
      <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">
        <div className="px-6 py-6 border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Leave Management</h1>
            <p className="text-gray-600">Apply and track your leave applications</p>
          </div>
        </div>

        <div className="px-6 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <LeaveManagement data={leaveManagementData} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}


