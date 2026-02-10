import React from "react";
import type { StatCard } from "@/types";
import { AlertCircle, CheckCircle2, FileText, Hourglass } from "lucide-react";

export const admissionRegistrarDashboardStats: StatCard[] = [
  {
    id: "total-applications",
    title: "Total Applications",
    value: "2,341",
    icon: React.createElement(FileText),
    iconColor: "blue",
    change: {
      text: "+15% from last year",
      variant: "neutral",
    },
  },
  {
    id: "applications-approved",
    title: "Applications Approved",
    value: "1,678",
    icon: React.createElement(CheckCircle2),
    iconColor: "green",
    change: {
      text: "71.7% approval rate",
      variant: "neutral",
    },
  },
  {
    id: "under-review",
    title: "Under Review",
    value: "456",
    icon: React.createElement(AlertCircle),
    iconColor: "orange",
    change: { text: "Pending decision", variant: "neutral" },
  },
  {
    id: "waiting-list",
    title: "Waiting List",
    value: "207",
    icon: React.createElement(Hourglass),
    iconColor: "purple",
    change: {
      text: "Awaiting allocation",
      variant: "neutral",
    },
  },
];
