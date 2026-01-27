"use client";

import React, { useMemo, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { assignedModulesData } from "@/data/dummyData";
import { Mail, Smartphone, Send, FileText, ChevronDown } from "lucide-react";

type RecipientMode = "all" | "students" | "year";
type Channel = "email" | "sms";
type Priority = "normal" | "high" | "urgent";

type Student = {
  id: string;
  name: string;
  year: number;
};

type QuickTemplate = {
  id: string;
  title: string;
  category: "Schedule" | "Assessment" | "Results";
  subject: string;
  message: string;
};

type RecentNotification = {
  id: string;
  title: string;
  studentsLabel: string;
  channelsLabel: string;
  timeAgo: string;
};

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold text-gray-700 mb-2">{children}</div>
  );
}

export default function NotifyStudentsPage() {
  const modules = assignedModulesData.modules;

  const defaultModuleId = modules[0]?.id ?? "";
  const [selectedModuleId, setSelectedModuleId] = useState(defaultModuleId);
  const [recipientMode, setRecipientMode] = useState<RecipientMode>("all");
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(3);
  const [studentSearch, setStudentSearch] = useState("");
  const [channel, setChannel] = useState<Channel>("email");
  const [priority, setPriority] = useState<Priority>("normal");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const selectedModule = useMemo(
    () => modules.find((m) => m.id === selectedModuleId) ?? modules[0],
    [modules, selectedModuleId],
  );

  const students = useMemo<Student[]>(() => {
    const count = selectedModule?.students ?? 0;
    // Deterministic mock list for UI (no backend yet)
    return Array.from({ length: count }, (_, idx) => {
      const n = idx + 1;
      const year = ((idx % 4) + 1) as 1 | 2 | 3 | 4;
      return {
        id: `${selectedModule?.code ?? "MOD"}-${n}`,
        name: `Student ${n}`,
        year,
      };
    });
  }, [selectedModule?.code, selectedModule?.students]);

  const filteredStudents = useMemo(() => {
    const q = studentSearch.trim().toLowerCase();
    if (!q) return students;
    return students.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q) ||
        `year ${s.year}`.includes(q),
    );
  }, [studentSearch, students]);

  const quickTemplates: QuickTemplate[] = useMemo(
    () => [
      {
        id: "tmpl-cancel",
        title: "Class Cancellation",
        category: "Schedule",
        subject: "Class Cancellation Notice",
        message:
          "Dear students,\n\nToday's class has been cancelled. Please check the timetable for updates.\n\nRegards,",
      },
      {
        id: "tmpl-reminder",
        title: "Assignment Reminder",
        category: "Assessment",
        subject: "Assignment Reminder",
        message:
          "Hi everyone,\n\nThis is a reminder that the assignment is due soon. Please submit on time.\n\nThanks,",
      },
      {
        id: "tmpl-exam",
        title: "Exam Notification",
        category: "Assessment",
        subject: "Upcoming Exam Information",
        message:
          "Dear students,\n\nPlease note the upcoming exam details. Make sure you are prepared and arrive on time.\n\nRegards,",
      },
      {
        id: "tmpl-grade",
        title: "Grade Release",
        category: "Results",
        subject: "Grades Released",
        message:
          "Hi everyone,\n\nGrades have been released. Please check the portal for your results.\n\nRegards,",
      },
    ],
    [],
  );

  const recentNotifications: RecentNotification[] = useMemo(
    () => [
      {
        id: "n-1",
        title: "Assignment 3 Deadline Reminder",
        studentsLabel: "45 students",
        channelsLabel: "Email",
        timeAgo: "2 hours ago",
      },
      {
        id: "n-2",
        title: "Lab Session Rescheduled",
        studentsLabel: "52 students",
        channelsLabel: "Email + SMS",
        timeAgo: "1 day ago",
      },
      {
        id: "n-3",
        title: "Midterm Results Published",
        studentsLabel: "38 students",
        channelsLabel: "Email",
        timeAgo: "2 days ago",
      },
    ],
    [],
  );

  const recipientLabel = useMemo(() => {
    const totalStudents = selectedModule?.students ?? 0;
    if (recipientMode === "all") return `All Students (${totalStudents})`;
    if (recipientMode === "year") return `Year ${selectedYear} Only`;
    return selectedStudentIds.length === 1
      ? "1 Selected Student"
      : `${selectedStudentIds.length} Selected Students`;
  }, [recipientMode, selectedModule, selectedStudentIds.length, selectedYear]);

  const onApplyTemplate = (tmpl: QuickTemplate) => {
    setSubject(tmpl.subject);
    setMessage(tmpl.message);
  };

  const ChannelCard = ({
    value,
    icon,
    label,
  }: {
    value: Channel;
    icon: React.ReactNode;
    label: string;
  }) => {
    const active = channel === value;
    return (
      <button
        type="button"
        onClick={() => setChannel(value)}
        className={`w-full rounded-xl border p-5 transition-colors text-left flex flex-col items-center justify-center gap-3 min-h-[92px] ${
          active
            ? "border-primary-700 bg-primary-50"
            : "border-gray-200 bg-white hover:bg-gray-50"
        }`}
      >
        <div className={active ? "text-primary-700" : "text-gray-500"}>
          {icon}
        </div>
        <div
          className={`font-semibold ${
            active ? "text-primary-700" : "text-gray-700"
          }`}
        >
          {label}
        </div>
      </button>
    );
  };

  const SegButton = ({
    active,
    onClick,
    children,
  }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full px-4 py-3 rounded-xl border font-semibold transition-colors ${
        active
          ? "border-primary-700 bg-primary-50 text-primary-800"
          : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );

  const Pill = ({
    active,
    onClick,
    children,
  }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`px-6 py-2.5 rounded-xl font-semibold transition-colors ${
        active
          ? "bg-primary-700 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );

  return (
    <MainLayout>
      <div className="w-full px-6 py-8">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-gray-900">Notify Students</h1>
          <p className="text-gray-600">
            Send notifications to your students via multiple channels
          </p>
        </div>

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left: Compose */}
          <div className="xl:col-span-2">
            <Card title="Compose Notification">
              <div className="space-y-6">
                {/* Select Module */}
                <div>
                  <SectionLabel>Select Module</SectionLabel>
                  <div className="relative">
                    <select
                      value={selectedModuleId}
                      onChange={(e) => setSelectedModuleId(e.target.value)}
                      className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-primary-200 focus:border-primary-300 outline-none appearance-none"
                    >
                      {modules.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.code} - {m.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Recipients */}
                <div>
                  <SectionLabel>Recipients</SectionLabel>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <SegButton
                      active={recipientMode === "all"}
                      onClick={() => {
                        setRecipientMode("all");
                        setSelectedStudentIds([]);
                      }}
                    >
                      All Students ({selectedModule?.students ?? 0})
                    </SegButton>
                    <SegButton
                      active={recipientMode === "students"}
                      onClick={() => setRecipientMode("students")}
                    >
                      Particular Student(s)
                    </SegButton>
                    <SegButton
                      active={recipientMode === "year"}
                      onClick={() => {
                        setRecipientMode("year");
                        setSelectedStudentIds([]);
                      }}
                    >
                      Particular Year
                    </SegButton>
                  </div>

                  {recipientMode === "year" ? (
                    <div className="mt-4">
                      <div className="text-sm font-semibold text-gray-700 mb-2">
                        Select Year
                      </div>
                      <div className="relative">
                        <select
                          value={selectedYear}
                          onChange={(e) =>
                            setSelectedYear(Number(e.target.value))
                          }
                          className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-primary-200 focus:border-primary-300 outline-none appearance-none"
                        >
                          <option value={1}>Year 1</option>
                          <option value={2}>Year 2</option>
                          <option value={3}>Year 3</option>
                          <option value={4}>Year 4</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {recipientMode === "students" ? (
                    <div className="mt-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="text-sm font-semibold text-gray-700">
                          Select Students
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedStudentIds(students.map((s) => s.id))
                            }
                            className="px-3 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors text-sm font-semibold"
                          >
                            Select All
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedStudentIds([])}
                            className="px-3 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors text-sm font-semibold"
                          >
                            Clear
                          </button>
                        </div>
                      </div>

                      <div className="mt-3">
                        <input
                          value={studentSearch}
                          onChange={(e) => setStudentSearch(e.target.value)}
                          placeholder="Search by name, id, or year..."
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary-200 focus:border-primary-300 outline-none"
                        />
                      </div>

                      <div className="mt-3 border border-gray-200 rounded-xl overflow-hidden">
                        <div className="max-h-56 overflow-y-auto bg-white">
                          {filteredStudents.length === 0 ? (
                            <div className="p-4 text-sm text-gray-500">
                              No students match your search.
                            </div>
                          ) : (
                            filteredStudents.map((s) => {
                              const checked = selectedStudentIds.includes(s.id);
                              return (
                                <label
                                  key={s.id}
                                  className="flex items-center justify-between gap-3 px-4 py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 cursor-pointer"
                                >
                                  <div className="min-w-0">
                                    <div className="font-semibold text-gray-900 truncate">
                                      {s.name}
                                    </div>
                                    <div className="text-sm text-gray-500 truncate">
                                      {s.id} • Year {s.year}
                                    </div>
                                  </div>
                                  <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={(e) => {
                                      const nextChecked = e.target.checked;
                                      setSelectedStudentIds((prev) => {
                                        if (nextChecked) return [...prev, s.id];
                                        return prev.filter((id) => id !== s.id);
                                      });
                                    }}
                                    className="h-4 w-4 accent-primary-700"
                                  />
                                </label>
                              );
                            })
                          )}
                        </div>
                      </div>

                      <div className="mt-2 text-sm text-gray-500">
                        {selectedStudentIds.length} selected
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Notification Channel */}
                <div>
                  <SectionLabel>Notification Channel</SectionLabel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ChannelCard
                      value="email"
                      icon={<Mail className="w-6 h-6" />}
                      label="Email"
                    />
                    <ChannelCard
                      value="sms"
                      icon={<Smartphone className="w-6 h-6" />}
                      label="SMS"
                    />
                  </div>
                </div>

                {/* Priority */}
                <div>
                  <SectionLabel>Priority Level</SectionLabel>
                  <div className="flex flex-wrap gap-3">
                    <Pill
                      active={priority === "normal"}
                      onClick={() => setPriority("normal")}
                    >
                      Normal
                    </Pill>
                    <Pill
                      active={priority === "high"}
                      onClick={() => setPriority("high")}
                    >
                      High
                    </Pill>
                    <Pill
                      active={priority === "urgent"}
                      onClick={() => setPriority("urgent")}
                    >
                      Urgent
                    </Pill>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <SectionLabel>Subject / Title</SectionLabel>
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter notification subject..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary-200 focus:border-primary-300 outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <SectionLabel>Message</SectionLabel>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    rows={7}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary-200 focus:border-primary-300 outline-none resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => {}}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-700 text-white hover:bg-primary-800 transition-colors shadow-sm"
                    aria-label={`Send notification (${recipientLabel}) via ${channel}`}
                  >
                    <Send className="w-5 h-5" />
                    <span className="font-semibold">Send Notification</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {}}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    <span className="font-semibold">Save as Draft</span>
                  </button>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Templates + Recent */}
          <div className="space-y-6">
            <Card title="Quick Templates">
              <div className="space-y-3">
                {quickTemplates.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => onApplyTemplate(t)}
                    className="w-full text-left border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-900">{t.title}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {t.category}
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            <Card title="Recent Notifications">
              <div className="space-y-4">
                {recentNotifications.map((n) => (
                  <div
                    key={n.id}
                    className="bg-gray-50/70 rounded-xl p-4 border border-gray-100"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="font-semibold text-gray-900">
                        {n.title}
                      </div>
                      <div className="text-sm text-gray-500 whitespace-nowrap">
                        {n.timeAgo}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                      <div>{n.studentsLabel}</div>
                      <div className="text-gray-500">{n.channelsLabel}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}


