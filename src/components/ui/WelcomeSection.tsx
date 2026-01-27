"use client";

import React from "react";
import { useAcademicContext } from "@/contexts/AcademicContext";

interface WelcomeSectionProps {
  userName: string;
  employeeId?: string;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  userName,
  employeeId,
}) => {
  const { academicYear, semester } = useAcademicContext();

  // Get current date dynamically
  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="w-full bg-gradient-to-r from-slate-50 via-blue-50/30 to-slate-50 backdrop-blur-sm">
      <div className="px-4 py-3 sm:py-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1 leading-tight">
          <span className="text-gray-900">Hello,</span>{" "}
          <span className="text-gray-900">{userName}</span>
        </h1>

        <p className="text-sm sm:text-base text-gray-600 font-medium mb-0 leading-relaxed max-w-4xl">
          Inspire minds, shape futures, and empower the next generation of
          leaders
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;


