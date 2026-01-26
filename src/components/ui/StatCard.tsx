import React from 'react';
import { StatCardProps } from '@/types';

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300 overflow-hidden">
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-slate-100/0 group-hover:from-primary-50/50 group-hover:to-slate-100/30 transition-all duration-300 pointer-events-none" />
      
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">{title}</p>
          <p className="text-3xl lg:text-4xl font-bold text-gray-900">{value}</p>
        </div>
        <div className="flex-shrink-0 p-3 rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300 text-primary-500">
          {icon}
        </div>
      </div>
      
      {change && (
        <div className="relative z-10 flex items-center gap-2 pt-2 border-t border-gray-100">
          <span className={`
            px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1
            ${change.isPositive
              ? 'bg-emerald-100/80 text-emerald-700'
              : 'bg-rose-100/80 text-rose-700'
            }
          `}>
            <span>{change.isPositive ? '↑' : '↓'}</span>
            {Math.abs(change.value)}%
          </span>
          <span className="text-xs text-gray-500">vs last month</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
