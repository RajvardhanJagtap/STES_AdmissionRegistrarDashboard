import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import AcademicProviderWrapper from "@/components/providers/AcademicProviderWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Admission Registrar Dashboard - STES",
  description:
    "Admission registrar dashboard for application processing, enrollment, and communication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AcademicProviderWrapper>{children}</AcademicProviderWrapper>
      </body>
    </html>
  );
}
