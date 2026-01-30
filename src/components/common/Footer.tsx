"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-2 mt-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <span>Version 2.1.0</span>
            <span>•</span>
            <a href="#" className="hover:text-gray-600 transition-colors">Support</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
          </div>
          
          <div className="flex items-center gap-3">
            <span>Last Updated: Aug 2025</span>
            <span>•</span>
            <a href="#" className="hover:text-gray-600 transition-colors">Feedback</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;