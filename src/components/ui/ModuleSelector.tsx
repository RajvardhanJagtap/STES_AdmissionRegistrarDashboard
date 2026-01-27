"use client";

import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

interface Module {
  id: string;
  name: string;
}

interface ModuleSelectorProps {
  modules: Module[];
  selectedModule: string;
  onModuleChange: (moduleId: string) => void;
}

const ModuleSelector: React.FC<ModuleSelectorProps> = ({
  modules,
  selectedModule,
  onModuleChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentModule = modules.find((m) => m.id === selectedModule);

  return (
    <div className="relative w-full max-w-xs">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg flex items-center justify-between gap-2 hover:border-gray-400 transition-colors text-left"
      >
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="text-xs font-medium text-gray-600 whitespace-nowrap">Module</span>
          <span className="text-sm font-semibold text-gray-900 truncate">
            {currentModule?.name}
          </span>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-gray-600 transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-md z-20 py-1 overflow-hidden">
            {modules.map((module) => {
              const isSelected = module.id === selectedModule;
              return (
                <button
                  key={module.id}
                  type="button"
                  onClick={() => {
                    onModuleChange(module.id);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-2 flex items-center justify-between hover:bg-gray-50 transition-colors text-left text-sm ${
                    isSelected ? "bg-blue-50" : ""
                  }`}
                >
                  <span
                    className={`font-medium ${
                      isSelected ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {module.name}
                  </span>
                  {isSelected && (
                    <Check className="h-3.5 w-3.5 text-blue-600" />
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ModuleSelector;


