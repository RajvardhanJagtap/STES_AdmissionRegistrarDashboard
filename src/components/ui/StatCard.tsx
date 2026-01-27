import React from "react";
import { StatCardProps } from "@/types";

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-slate-100/0 group-hover:from-primary-50/40 group-hover:to-slate-100/20 transition-all duration-300 pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-gray-900 leading-none">
          {title}
        </p>
        <div className="flex-shrink-0 h-9 w-9 rounded-full bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300 text-primary-600 grid place-items-center">
          <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
        </div>
      </div>

      <p className="relative z-10 mt-2 text-2xl lg:text-3xl font-bold text-gray-900">
        {value}
      </p>
    </div>
  );
};

export default StatCard;


