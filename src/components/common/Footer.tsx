"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-0 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="min-w-max flex items-center justify-between gap-3 text-[11px] sm:text-sm text-[#1a2533] whitespace-nowrap">
            <div className="flex items-center gap-1">
              <span>Version 2.1.0</span>
              <span className="text-gray-300">•</span>
              <a href="#" className="hover:text-[#026892] transition-colors">Support</a>
              <span className="text-gray-300">•</span>
              <a href="#" className="hover:text-[#026892] transition-colors">Terms</a>
              <span className="text-gray-300">•</span>
              <a href="#" className="hover:text-[#026892] transition-colors">Privacy</a>
            </div>
            <div className="text-gray-600">Last Updated: 2/6/2026</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;