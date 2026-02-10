"use client";

import { useState } from "react";
import { Bell, ChevronDown, Menu } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Avatar from "@/components/ui/Avatar";
import { User } from "@/types";
import { useAcademicContext } from "@/contexts/AcademicContext";
import Image from "next/image";

interface HeaderProps {
  user?: User;
  onToggleSidebar?: () => void;
  variant?: "default" | "admissionRegistrarDashboard";
}

const AdmissionRegistrarDashboardHeader: React.FC<HeaderProps> = ({
  user,
  onToggleSidebar,
}) => {
  const [area, setArea] = useState("Admission");
  const { academicYear, semester, setAcademicYear, setSemester } =
    useAcademicContext();

  const semesterLabel = semester === "Fall" ? "semester one" : "semester two";
  const mobileSemesterLabel =
    semester === "Fall" ? "Semester One" : "Semester Two";

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="flex h-22 md:h-16 flex-col md:flex-row md:items-center md:justify-between px-4 sm:px-6 py-1.5 md:py-0 gap-1.5 md:gap-0">
        {/* Mobile/desktop top row: Brand + (mobile) actions */}
        <div className="flex items-center justify-between min-w-0">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-gray-700" />
            </button>

            <Image
              src="/images/ur-logo.jpeg"
              alt="UR Logo"
              width={48}
              height={48}
              className="rounded-full flex-shrink-0"
              priority
            />

            <div className="min-w-0 leading-tight">
              <div className="text-[18px] sm:text-[20px] font-semibold tracking-normal text-black truncate">
                SAMPS UR
              </div>
              <div className="hidden md:block text-xs sm:text-sm text-gray-500 truncate">
                Admission Registrar Dashboard
              </div>
            </div>
          </div>

          {/* Mobile right-side actions (matches screenshot) */}
          <div className="md:hidden flex items-center gap-2 flex-shrink-0">
            <Select value={area} onValueChange={setArea}>
              <SelectTrigger className="h-9 w-[140px] border-gray-200 text-sm font-medium px-3 rounded-lg shadow-sm">
                <SelectValue placeholder="Admission" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admission">Admission</SelectItem>
              </SelectContent>
            </Select>

            <button
              className="relative p-2 rounded-md hover:bg-gray-100"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                5
              </span>
            </button>

            <button
              type="button"
              className="flex items-center p-1 rounded-md hover:bg-gray-100"
              aria-label="Profile"
            >
              <Avatar
                name={user?.name || "Registrar"}
                initials={user?.initials || "R"}
                size="md"
              />
            </button>
          </div>
        </div>

        {/* Mobile second row: Academic Year + Semester (matches screenshot) */}
        <div className="md:hidden flex items-center gap-2 flex-nowrap">
          <Select value={academicYear} onValueChange={setAcademicYear}>
            <SelectTrigger className="h-9 w-[120px] border-gray-200 text-xs font-semibold whitespace-nowrap">
              <SelectValue placeholder="2024-2025" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-2025">2024-2025</SelectItem>
              <SelectItem value="2025-2026">2025-2026</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={mobileSemesterLabel}
            onValueChange={(value) =>
              setSemester(value === "Semester One" ? "Fall" : "Spring")
            }
          >
            <SelectTrigger className="h-9 w-[140px] border-gray-200 text-xs font-semibold whitespace-nowrap">
              <SelectValue placeholder="Semester One" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Semester One">Semester One</SelectItem>
              <SelectItem value="Semester Two">Semester Two</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Desktop actions + user (keep existing order) */}
        <div className="hidden md:flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <Select value={academicYear} onValueChange={setAcademicYear}>
            <SelectTrigger className="h-9 w-[120px] lg:w-[130px] border-gray-200 text-sm font-medium">
              <SelectValue placeholder="2024-2025" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-2025">2024-2025</SelectItem>
              <SelectItem value="2025-2026">2025-2026</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={semesterLabel}
            onValueChange={(value) =>
              setSemester(value === "semester one" ? "Fall" : "Spring")
            }
          >
            <SelectTrigger className="h-9 w-[130px] lg:w-[150px] border-gray-200 text-sm font-medium capitalize">
              <SelectValue placeholder="semester one" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semester one">semester one</SelectItem>
              <SelectItem value="semester two">semester two</SelectItem>
            </SelectContent>
          </Select>

          <Select value={area} onValueChange={setArea}>
            <SelectTrigger className="h-9 w-[140px] border-gray-200 text-sm font-medium px-3 rounded-lg shadow-sm">
              <SelectValue placeholder="Admission" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Admission">Admission</SelectItem>
            </SelectContent>
          </Select>

          <button
            className="relative p-2 rounded-md hover:bg-gray-100"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
              5
            </span>
          </button>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right leading-tight">
              <div className="text-sm font-semibold text-gray-900">
                {user?.name || "Ignace Gatare"}
              </div>
              <div className="text-xs text-gray-500">
                {user?.role || "Admission"}
              </div>
            </div>

            <Avatar
              name={user?.name || "Registrar"}
              initials={user?.initials || "R"}
              size="md"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

const DefaultHeader: React.FC<HeaderProps> = ({ user, onToggleSidebar }) => {
  const [area, setArea] = useState("Admission");
  const { academicYear, semester, setAcademicYear, setSemester } =
    useAcademicContext();

  const semesterLabel = semester === "Fall" ? "semester one" : "semester two";
  const mobileSemesterLabel =
    semester === "Fall" ? "Semester One" : "Semester Two";
  const rawUsername = (user?.email || "registrar@example.com").split("@")[0];
  const username = rawUsername
    ? rawUsername.charAt(0).toUpperCase() + rawUsername.slice(1)
    : "Registrar";

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="flex h-24 md:h-16">
        {/* LEFT: Sidebar-aligned logo column */}
        <div className="hidden lg:flex w-64 items-center justify-center border-r border-gray-100">
          <Image
            src="/images/ur-logo.jpeg"
            alt="UR Logo"
            width={60}
            height={60}
            className="rounded-full"
            priority
          />
        </div>

        {/* RIGHT: Main header area */}
        <div className="flex flex-1 flex-col md:flex-row md:items-center md:justify-between px-4 sm:px-6 min-w-0 py-2 md:py-0 gap-2 md:gap-0">
          {/* Mobile top row: Brand + Notifications + User */}
          <div className="flex items-center justify-between min-w-0">
            {/* Brand + mobile menu */}
            <div className="flex items-center gap-3 min-w-0">
              <button
                type="button"
                onClick={onToggleSidebar}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5 text-gray-700" />
              </button>

              <div className="lg:hidden">
                <Image
                  src="/images/ur-logo.jpeg"
                  alt="UR Logo"
                  width={44}
                  height={44}
                  className="rounded-full"
                  priority
                />
              </div>

              <h1 className="text-[18px] sm:text-[20px] font-medium tracking-normal text-black truncate">
                SAMPS UR
              </h1>
            </div>

            <div className="md:hidden flex items-center gap-2 flex-shrink-0">
              <Select value={area} onValueChange={setArea}>
                <SelectTrigger className="h-9 w-[140px] border-gray-200 text-sm font-medium px-3 rounded-lg shadow-sm">
                  <SelectValue placeholder="Admission" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admission">Admission</SelectItem>
                </SelectContent>
              </Select>

              {/* Notifications */}
              <button className="relative p-2 rounded-md hover:bg-gray-100">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  3
                </span>
              </button>

              {/* User */}
              <Select value={username} onValueChange={() => {}}>
                <SelectTrigger className="h-9 border-gray-200 text-sm font-medium px-2 max-w-[140px]">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="hidden sm:block truncate">
                      <SelectValue placeholder="Registrar" />
                    </span>
                    <Avatar
                      name={user?.name || "Registrar"}
                      initials={user?.initials || "R"}
                      size="sm"
                    />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={username}>{username}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Mobile second row: Academic Year + Semester (editable) */}
          <div className="md:hidden flex items-center gap-2 flex-nowrap">
            <Select value={academicYear} onValueChange={setAcademicYear}>
              <SelectTrigger className="h-8 w-[120px] border-gray-200 text-xs font-medium whitespace-nowrap">
                <SelectValue placeholder="2024-2025" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024-2025">2024-2025</SelectItem>
                <SelectItem value="2025-2026">2025-2026</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={mobileSemesterLabel}
              onValueChange={(value) =>
                setSemester(value === "Semester One" ? "Fall" : "Spring")
              }
            >
              <SelectTrigger className="h-8 w-[140px] px-2 border-gray-200 text-xs font-medium whitespace-nowrap">
                <SelectValue placeholder="Semester One" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Semester One">Semester One</SelectItem>
                <SelectItem value="Semester Two">Semester Two</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Desktop controls */}
          <div className="hidden md:flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Select value={area} onValueChange={setArea}>
              <SelectTrigger className="h-9 w-[140px] border-gray-200 text-sm font-medium px-3 rounded-lg shadow-sm">
                <SelectValue placeholder="Admission" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admission">Admission</SelectItem>
              </SelectContent>
            </Select>

            {/* Notifications */}
            <button className="relative p-2 rounded-md hover:bg-gray-100">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                3
              </span>
            </button>

            {/* Academic Year */}
            <Select value={academicYear} onValueChange={setAcademicYear}>
              <SelectTrigger className="h-9 w-[120px] lg:w-[130px] border-gray-200 text-sm font-medium">
                <SelectValue placeholder="2024-2025" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024-2025">2024-2025</SelectItem>
                <SelectItem value="2025-2026">2025-2026</SelectItem>
              </SelectContent>
            </Select>

            {/* Semester */}
            <Select
              value={semesterLabel}
              onValueChange={(value) =>
                setSemester(value === "semester one" ? "Fall" : "Spring")
              }
            >
              <SelectTrigger className="h-9 w-[130px] lg:w-[150px] border-gray-200 text-sm font-medium capitalize">
                <SelectValue placeholder="semester one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semester one">semester one</SelectItem>
                <SelectItem value="semester two">semester two</SelectItem>
              </SelectContent>
            </Select>

            {/* User */}
            <Select value={username} onValueChange={() => {}}>
              <SelectTrigger className="h-9 border-gray-200 text-sm font-medium px-2 sm:px-3 max-w-[180px]">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="hidden sm:block truncate">
                    <SelectValue placeholder="Registrar" />
                  </span>
                  <Avatar
                    name={user?.name || "Registrar"}
                    initials={user?.initials || "R"}
                    size="sm"
                  />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={username}>{username}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  );
};

const Header: React.FC<HeaderProps> = (props) => {
  if (props.variant === "admissionRegistrarDashboard") {
    return <AdmissionRegistrarDashboardHeader {...props} />;
  }
  return <DefaultHeader {...props} />;
};

export default Header;
