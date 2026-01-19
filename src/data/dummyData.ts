import { User, StatCard, TodayClassesData, PerformanceChartData } from '@/types';
import { AlertsData } from '@/types/alerts';
import { EngagementTrendsData } from '@/types/engagement';
import { dashboardIcons } from '@/data/icons';

// Dummy user data
export const currentUser: User = {
  id: '1',
  name: 'Kunal',
  email: 'kunal@example.com',
  role: 'Lecturer',
  initials: 'K',
};

// Dummy dashboard stats
export const dashboardStats: StatCard[] = [
  {
    id: 'total-students',
    title: 'Total Students',
    value: 234,
    change: { value: 12, isPositive: true },
    icon: dashboardIcons.totalStudents,
  },
  {
    id: 'active-courses',
    title: 'Active Courses',
    value: 8,
    change: { value: 2, isPositive: true },
    icon: dashboardIcons.activeCourses,
  },
  {
    id: 'pending-tasks',
    title: 'Pending Tasks',
    value: 15,
    change: { value: -5, isPositive: false },
    icon: dashboardIcons.pendingTasks,
  },
  {
    id: 'avg-performance',
    title: 'Avg. Performance',
    value: '87%',
    change: { value: 3, isPositive: true },
    icon: dashboardIcons.avgPerformance,
  },
];

// Dummy today's classes data
export const todayClassesData: TodayClassesData = {
  date: 'Thursday, January 15, 2026',
  totalClasses: 4,
  classes: [
    {
      id: 'class-1',
      name: 'Advanced Algorithms',
      code: 'CS301',
      status: 'completed',
      time: '09:00 AM - 10:30 PM',
      location: 'Room A-204',
      studentCount: 42,
    },
    {
      id: 'class-2',
      name: 'Data Structures Lab',
      code: 'CS201L',
      status: 'ongoing',
      time: '11:00 AM - 12:30 PM',
      location: 'Lab C-102',
      studentCount: 35,
    },
    {
      id: 'class-3',
      name: 'Web Development',
      code: 'CS405',
      status: 'upcoming',
      time: '02:00 PM - 03:30 PM',
      location: 'Online - Zoom',
      studentCount: 48,
    },
    {
      id: 'class-4',
      name: 'Machine Learning',
      code: 'CS502',
      status: 'upcoming',
      time: '04:00 PM - 05:30 PM',
      location: 'Room B-301',
      studentCount: 38,
    },
  ],
};

// Dummy performance chart data
export const performanceChartData: PerformanceChartData = {
  title: 'Weekly Performance Trends',
  subtitle: 'Tracking student metrics across the week',
  data: [
    { day: 'Mon', attendance: 85, engagement: 78, assignments: 65 },
    { day: 'Tue', attendance: 92, engagement: 85, assignments: 72 },
    { day: 'Wed', attendance: 88, engagement: 82, assignments: 78 },
    { day: 'Thu', attendance: 95, engagement: 88, assignments: 85 },
    { day: 'Fri', attendance: 90, engagement: 86, assignments: 88 },
    { day: 'Sat', attendance: 75, engagement: 70, assignments: 68 },
    { day: 'Sun', attendance: 68, engagement: 65, assignments: 60 },
  ],
};

// Dummy alerts data (Backend-ready)
export const alertsData: AlertsData = {
  unreadCount: 4,
  alerts: [
    {
      id: 'alert-1',
      title: 'Emergency Faculty Meeting',
      message: 'All faculty members are required to attend the emergency meeting scheduled for today at 4:00 PM in Conference Hall A.',
      from: 'Dean of Academics',
      time: '10 mins ago',
      priority: 'high',
      isNew: true,
    },
    {
      id: 'alert-2',
      title: 'Guest Lecture - Machine Learning',
      message: 'Dr Rajesh Kumar from IIT Delhi will deliver a guest lecture on Advanced Machine Learning on Jan 18, 2026 at 2:00 PM.',
      from: 'HOD - Computer Science',
      time: '1 hour ago',
      priority: 'medium',
      isNew: true,
    },
    {
      id: 'alert-3',
      title: 'Exam Schedule Update',
      message: 'The final exam schedule has been updated. Please check the academic portal for the revised timetable.',
      from: 'Examination Department',
      time: '2 hours ago',
      priority: 'medium',
      isNew: true,
    },
    {
      id: 'alert-4',
      title: 'Research Grant Applications Open',
      message: 'Applications for research grants are now open. Submit your proposals by Jan 25, 2026.',
      from: 'Research & Development Cell',
      time: '5 hours ago',
      priority: 'low',
      isNew: false,
    },
  ],
};

// Dummy student engagement trends data
export const engagementTrendsData: EngagementTrendsData = {
  weekly: {
    average: 83,
    peak: 95,
    growth: 30,
    chartData: [
      { month: 'SEPT', engagement: 72 },
      { month: 'SEPT', engagement: 78 },
      { month: 'SEPT', engagement: 80 },
      { month: 'OCT', engagement: 85 },
      { month: 'OCT', engagement: 90 },
      { month: 'OCT', engagement: 88 },
      { month: 'NOV', engagement: 92 },
      { month: 'NOV', engagement: 95 },
    ],
  },
  monthly: {
    average: 82,
    peak: 92,
    growth: 28,
    chartData: [
      { month: 'SEPT', engagement: 75 },
      { month: 'OCT', engagement: 88 },
      { month: 'NOV', engagement: 91 },
      { month: 'DEC', engagement: 85 },
      { month: 'JAN', engagement: 90 },
      { month: 'FEB', engagement: 87 },
      { month: 'MAR', engagement: 93 },
      { month: 'APR', engagement: 96 },
    ],
  },
};
