'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ClassCardProps, ClassStatus } from '@/types';

const ClassCard: React.FC<ClassCardProps> = ({ session }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const getStatusStyles = (status: ClassStatus) => {
    const styles = {
      completed: 'bg-amber-100 text-amber-700',
      ongoing: 'bg-primary-100 text-primary-700',
      upcoming: 'bg-gray-100 text-gray-700',
    };
    return styles[status];
  };

  const getStatusLabel = (status: ClassStatus) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const getActionButtonStyle = (status: ClassStatus) => {
    if (status === 'completed') {
      return 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    } else if (status === 'ongoing') {
      return 'bg-primary-500 text-white hover:bg-primary-600';
    } else {
      return 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    }
  };

  const getActionLabel = (status: ClassStatus) => {
    if (status === 'completed') return 'View';
    if (status === 'ongoing') return 'Next';
    return 'Later';
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        bg-white rounded-lg p-4 cursor-pointer transition-all duration-200
        border flex flex-col h-full
        ${isHovered || isSelected 
          ? 'border-primary-500 shadow-md' 
          : 'border-gray-200 shadow-sm hover:shadow-md'}
      `}
    >
      <div className="flex items-start justify-between mb-3 flex-shrink-0">
        <span className={`
          px-2.5 py-1 rounded-full text-xs font-semibold
          ${getStatusStyles(session.status)}
          flex items-center gap-1
        `}>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-current"></span>
          {getStatusLabel(session.status)}
        </span>
      </div>

      <div className="flex-1 min-h-0 mb-4">
        <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">{session.name}</h3>
        <p className="text-xs text-gray-600 flex items-center gap-2">
          <span>{session.location}</span>
          <span>•</span>
          <span>{session.time}</span>
        </p>
      </div>

      <div className="flex justify-end flex-shrink-0">
        <Link href="/teaching/timetable">
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`
              px-4 py-1.5 rounded-lg font-semibold text-xs
              transition-all duration-200 active:scale-95
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
