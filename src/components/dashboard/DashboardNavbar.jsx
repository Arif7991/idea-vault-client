"use client";

import { authClient } from "@/lib/auth-client";

export default function DashboardNavbar() {
  const { data: session } = authClient.useSession();

  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-slate-900 px-8">

      <div>

        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-slate-400">
          Welcome back, {session?.user?.name}
        </p>

      </div>

      <img
        src={
          session?.user?.image ||
          "https://i.pravatar.cc/100"
        }
        alt="profile"
        className="h-12 w-12 rounded-full border-2 border-violet-500 object-cover"
      />

    </header>
  );
}