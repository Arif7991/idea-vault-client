"use client";

import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import {
  Mail,
  User,
  BadgeCheck,
  Calendar,
} from "lucide-react";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  return (
    <div className="mx-auto max-w-5xl">

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

        {/* Cover */}

        <div className="h-44 bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-700" />

        {/* Profile */}

        <div className="-mt-20 flex flex-col items-center px-8 pb-10">

          <Image
            src={user?.image || "/avatar.png"}
            alt="profile"
            width={140}
            height={140}
            className="rounded-full border-4 border-slate-900 object-cover"
          />

          <h1 className="mt-6 text-4xl font-bold text-white">
            {user?.name}
          </h1>

          <p className="mt-2 text-slate-400">
            Startup Innovator
          </p>

          <div className="mt-10 grid w-full gap-6 md:grid-cols-2">

            {/* Name */}

            <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">

              <div className="mb-3 flex items-center gap-3 text-violet-400">
                <User size={22} />
                <span>Name</span>
              </div>

              <p className="text-lg text-white">
                {user?.name}
              </p>

            </div>

            {/* Email */}

            <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">

              <div className="mb-3 flex items-center gap-3 text-cyan-400">
                <Mail size={22} />
                <span>Email</span>
              </div>

              <p className="break-all text-lg text-white">
                {user?.email}
              </p>

            </div>

            {/* Account */}

            <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">

              <div className="mb-3 flex items-center gap-3 text-emerald-400">
                <BadgeCheck size={22} />
                <span>Account Status</span>
              </div>

              <p className="text-lg font-semibold text-emerald-400">
                Verified
              </p>

            </div>

            {/* Joined */}

            <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">

              <div className="mb-3 flex items-center gap-3 text-yellow-400">
                <Calendar size={22} />
                <span>Member Since</span>
              </div>

              <p className="text-lg text-white">
                2026
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}