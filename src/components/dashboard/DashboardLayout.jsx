"use client";

import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-950">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <DashboardNavbar />

        <main className="flex-1 p-6 md:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}