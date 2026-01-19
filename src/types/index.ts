// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  initials?: string;
}

// Notification types
export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  type: 'info' | 'warning' | 'success' | 'error';
}

// Search result types
export interface SearchResult {
  id: string;
  title: string;
  type: 'resource' | 'student' | 'course';
  description?: string;
}

// Component props types
export interface HeaderProps {
  user?: User;
}

export interface AvatarProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  badge?: number;
  className?: string;
}

// Sidebar navigation types
export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  color?: string;
}

export interface SidebarProps {
  className?: string;
}

// Dashboard Stats types
export interface StatCard {
  id: string;
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    isPositive: boolean;
  };
}

// Class/Course types
export type ClassStatus = 'completed' | 'ongoing' | 'upcoming';

export interface ClassSession {
  id: string;
  name: string;
  code: string;
  status: ClassStatus;
  time: string;
  location: string;
  studentCount: number;
  icon?: React.ReactNode;
}

export interface TodayClassesData {
  date: string;
  totalClasses: number;
  classes: ClassSession[];
}

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    isPositive: boolean;
  };
}

export interface ClassCardProps {
  session: ClassSession;
}

export interface TodayClassesProps {
  data: TodayClassesData;
}

// Performance Chart types
export interface ChartDataPoint {
  day: string;
  attendance: number;
  engagement: number;
  assignments: number;
}

export interface PerformanceChartData {
  title: string;
  subtitle: string;
  data: ChartDataPoint[];
}

export interface PerformanceChartProps {
  data: PerformanceChartData;
}

// Alerts & Notifications types - DEPRECATED, use types/alerts.ts instead
// export type AlertType = 'urgent' | 'important' | 'info';
// export interface Alert {...}
// See: /src/types/alerts.ts for the new backend-ready alert types

