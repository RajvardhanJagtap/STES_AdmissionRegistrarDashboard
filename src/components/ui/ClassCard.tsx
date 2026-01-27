"use client";

import React from "react";
import Link from "next/link";
import { ClassCardProps, ClassStatus } from "@/types";

const ClassCard: React.FC<ClassCardProps> = ({ session }) => {
  const getActionButtonStyle = (status: ClassStatus) => {
    if (status === "ongoing") {
      return "bg-[#024698] text-white border-transparent hover:opacity-95";
    }

    if (status === "completed") {
      return "bg-white text-gray-700 border-gray-300 hover:bg-gray-50";
    }

    return "bg-white text-gray-700 border-gray-300 hover:bg-gray-50";
  };

  const getActionLabel = (status: ClassStatus) => {
    if (status === "completed") return "View";
    if (status === "ongoing") return "Next";
    return "Later";
  };

  const isNext = session.status === "ongoing";

  return (
    <div
      className={`rounded-lg border p-3 transition-all duration-200 ${
        isNext ? "bg-blue-50 border-blue-200 hover:bg-blue-100" : "bg-gray-50 border-gray-200 hover:bg-gray-100"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div
            className={`text-sm font-semibold truncate ${
              isNext ? "text-blue-900" : "text-gray-900"
            }`}
          >
            {session.name}
          </div>
          <div className="text-xs text-gray-600 truncate mt-1">
            {session.location} <span className="mx-1">•</span> {session.time}
          </div>
        </div>

        <Link href="/teaching/timetable" className="flex-shrink-0">
          <button
            type="button"
            className={`
              inline-flex items-center justify-center
              px-3 py-1.5 rounded-lg font-semibold text-xs
              border transition-all duration-200 active:scale-95 whitespace-nowrap
              ${getActionButtonStyle(session.status)}
            `}
          >
            {getActionLabel(session.status)}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;


