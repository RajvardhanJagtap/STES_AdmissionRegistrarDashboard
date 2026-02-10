"use client";

import MainLayout from "@/layouts/MainLayout";
import StatCard from "@/components/ui/StatCard";
import AdmissionSummary from "@/components/ui/AdmissionSummary";
import QuickActions from "@/components/ui/QuickActions";
import WelcomeSection from "@/components/ui/WelcomeSection";
import IntakeCapacity from "@/components/ui/IntakeCapacity";
import ApplicationProcessing from "@/components/ui/ApplicationProcessing";
import ProgramDistribution from "@/components/ui/ProgramDistribution";
import { currentAdmissionRegistrar } from "@/data/admissionRegistrarUser";
import { admissionRegistrarDashboardStats } from "@/data/admissionRegistrarDashboard.mock";

export default function HomePage() {
  return (
    <MainLayout headerVariant="admissionRegistrarDashboard">
      <div className="w-full min-h-screen bg-slate-50">
        <WelcomeSection userName={currentAdmissionRegistrar.name} />

        {/* Stats */}
        <div className="py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
            {admissionRegistrarDashboardStats.map((stat) => (
              <StatCard
                key={stat.id}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                iconColor={stat.iconColor}
                change={stat.change}
              />
            ))}
          </div>
        </div>

        <div className="py-2 pb-10">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3">
            <QuickActions />
            <div className="lg:col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-3">
              <AdmissionSummary />
              <IntakeCapacity />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
            <ApplicationProcessing />
            <ProgramDistribution />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
