import React from "react";
import { Module } from "@/types";
import {
  BookOpen,
  Users,
  Calendar,
  Clock,
  MapPin,
  Eye,
  Download,
} from "lucide-react";

interface ModuleCardProps {
  module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "completed":
        return "bg-gray-100 text-gray-700";
      case "upcoming":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        {/* Icon */}
        <div className="w-16 h-16 bg-primary-700 rounded-xl flex items-center justify-center flex-shrink-0">
          <BookOpen className="w-8 h-8 text-white" />
        </div>

        {/* Module Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {module.code}
              </h3>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                  module.status,
                )}`}
              >
                {getStatusLabel(module.status)}
              </span>
            </div>
          </div>
          <p className="text-gray-600 font-medium">{module.name}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Students */}
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-400" />
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Students
            </p>
            <p className="text-sm font-semibold text-gray-900">
              {module.students}
            </p>
          </div>
        </div>

        {/* Credits */}
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-400" />
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Credits
            </p>
            <p className="text-sm font-semibold text-gray-900">
              {module.credits}
            </p>
          </div>
        </div>

        {/* Schedule */}
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-400" />
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Schedule
            </p>
            <p className="text-sm font-semibold text-gray-900">
              {module.schedule}
            </p>
          </div>
        </div>

        {/* Room */}
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Room
            </p>
            <p className="text-sm font-semibold text-gray-900">{module.room}</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Course Progress
          </span>
          <span className="text-sm font-semibold text-primary-700">
            {module.progress}%
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-700 to-primary-500 transition-all duration-300"
            style={{ width: `${module.progress}%` }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary-700 text-white hover:bg-primary-800 transition-colors shadow-sm"
        >
          <Eye className="w-4 h-4" />
          View Details
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Users className="w-4 h-4" />
          Class List
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Calendar className="w-4 h-4" />
          Timetable
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>
    </div>
  );
}
