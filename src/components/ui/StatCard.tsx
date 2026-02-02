import React from "react";
import { StatCardProps } from "@/types";

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  iconColor = "blue",
}) => {
  const getVariantStyles = (variant?: string) => {
    switch (variant) {
      case "positive":
        return "text-emerald-600";
      case "negative":
        return "text-red-600";
      case "warning":
        return "text-orange-600";
      default:
        return "text-gray-500";
    }
  };

  const getIconBgColor = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string }> = {
      blue: { bg: "bg-blue-50", text: "text-blue-600" },
      green: { bg: "bg-green-50", text: "text-green-600" },
      red: { bg: "bg-red-50", text: "text-red-600" },
      orange: { bg: "bg-orange-50", text: "text-orange-600" },
      purple: { bg: "bg-purple-50", text: "text-purple-600" },
    };
    return colorMap[color] || colorMap["blue"];
  };

  const iconStyle = getIconBgColor(iconColor);

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-auto sm:h-[140px] flex flex-col">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-bold text-gray-600 tracking-tight truncate">
            {title}
          </h3>
        </div>

        <div
          className={`flex-shrink-0 h-9 w-9 rounded-lg ${iconStyle.bg} ${iconStyle.text} grid place-items-center`}
        >
          <span className="[&>svg]:h-[18px] [&>svg]:w-[18px]">{icon}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <p className="text-2xl font-bold text-gray-900 leading-none mb-2">
          {value}
        </p>

        {change?.text && (
          <div
            className={`flex items-center gap-1 text-xs font-medium ${getVariantStyles(change.variant)}`}
          >
            {change.icon ? (
              <span className="[&>svg]:h-3 [&>svg]:w-3">{change.icon}</span>
            ) : null}
            <span>{change.text}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
