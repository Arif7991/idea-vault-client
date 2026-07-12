"use client";

import { authClient } from "@/lib/auth-client";
import {
  Lightbulb,
  FolderKanban,
  User,
  TrendingUp,
} from "lucide-react";

export default function DashboardPage() {
  const { data: session } = authClient.useSession();

  const cards = [
    {
      title: "My Ideas",
      value: "--",
      icon: Lightbulb,
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Categories",
      value: "8",
      icon: FolderKanban,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Profile",
      value: "Active",
      icon: User,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Status",
      value: "Growing",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Welcome back,
          <span className="ml-2 text-violet-400">
            {session?.user?.name}
          </span>
          👋
        </h1>

        <p className="mt-3 text-slate-400">
          Manage your startup ideas and track your innovation journey.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {

          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-violet-500/40"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${card.color}`}
              >
                <Icon className="text-white" />
              </div>

              <h3 className="text-slate-400">
                {card.title}
              </h3>

              <p className="mt-2 text-3xl font-bold text-white">
                {card.value}
              </p>
            </div>
          );

        })}

      </div>

      <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">

        <h2 className="text-2xl font-bold text-white">
          Quick Overview
        </h2>

        <p className="mt-4 leading-8 text-slate-400">
          Welcome to your personal dashboard.
          From here you can create startup ideas,
          edit them anytime, delete old ideas,
          and explore ideas shared by innovators
          around the world.
        </p>

      </div>

    </div>
  );
}