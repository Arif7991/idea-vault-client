"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Lightbulb,
  FolderOpen,
  User,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Add Idea",
    href: "/dashboard/add-idea",
    icon: Lightbulb,
  },
  {
    title: "My Ideas",
    href: "/dashboard/my-ideas",
    icon: FolderOpen,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 border-r border-white/10 bg-slate-900 lg:block">

      <div className="border-b border-white/10 p-6">

        <h1 className="text-3xl font-bold text-white">
          Idea
          <span className="text-violet-500">
            Vault
          </span>
        </h1>

      </div>

      <nav className="space-y-2 p-5">

        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                pathname === item.href
                  ? "bg-violet-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />
              {item.title}
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}