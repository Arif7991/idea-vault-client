"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  ArrowRight,
  Sparkles,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050816]">

      {/* =========================
            Aurora Background
      ========================== */}

      <div className="absolute inset-0">

        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-violet-700/30 blur-[130px]" />

        <div className="absolute right-0 top-32 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-fuchsia-600/20 blur-[120px]" />

      </div>

      {/* Grid */}

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .3 }}
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300 backdrop-blur-xl"
            >
              <Sparkles size={16} />

              Trusted By Thousands Of Innovators
            </motion.div>

            <h1 className="mt-8 text-6xl font-black leading-[1.05] text-white xl:text-7xl">

              Build The

              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">

                Next Big Startup

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              Discover breakthrough startup ideas,
              connect with talented founders,
              validate concepts and launch products
              loved by millions.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link href="/ideas">

                <Button className="h-14 rounded-2xl bg-violet-600 px-8 text-base hover:bg-violet-700">

                  Explore Ideas

                  <ArrowRight className="ml-2 h-5 w-5"/>

                </Button>

              </Link>

              <Link href="/dashboard/add-idea">

                <Button
                  variant="outline"
                  className="h-14 rounded-2xl border-white/10 bg-white/5 px-8 text-base text-white backdrop-blur-xl hover:bg-white/10"
                >
                  Share Your Idea
                </Button>

              </Link>

            </div>

            {/* Stats */}

            <div className="mt-16 flex flex-wrap gap-10">

              <div>

                <h3 className="text-4xl font-bold text-white">

                  <CountUp end={12000} duration={3} />+

                </h3>

                <p className="mt-2 text-slate-400">
                  Community Members
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-white">

                  <CountUp end={5400} duration={3} />+

                </h3>

                <p className="mt-2 text-slate-400">
                  Startup Ideas
                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-white">

                  <CountUp end={800} duration={3} />+

                </h3>

                <p className="mt-2 text-slate-400">
                  Projects Launched
                </p>

              </div>

            </div>

          </motion.div>          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Glow */}

            <div className="absolute h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[120px]" />

            {/* Main Glass Card */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="relative w-[470px] rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-2xl shadow-violet-900/30"
            >
              {/* Top */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-400">
                    Trending Startup
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    AI Farming Platform
                  </h3>

                </div>

                <div className="rounded-2xl bg-violet-500/20 p-4">

                  <Rocket
                    size={26}
                    className="text-violet-400"
                  />

                </div>

              </div>

              {/* Description */}

              <p className="mt-8 leading-8 text-slate-300">
                Helping farmers predict crop diseases,
                optimize irrigation and increase
                production using Artificial Intelligence.
              </p>

              {/* Progress */}

              <div className="mt-10">

                <div className="mb-3 flex justify-between">

                  <span className="text-slate-400">
                    Community Rating
                  </span>

                  <span className="font-semibold text-white">
                    98%
                  </span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-800">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "98%" }}
                    transition={{
                      duration: 2,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                  />

                </div>

              </div>

              {/* Bottom Cards */}

              <div className="mt-10 grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <Lightbulb className="mb-4 text-yellow-400" />

                  <h4 className="text-3xl font-bold text-white">
                    5400+
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    Ideas Shared
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <Users className="mb-4 text-cyan-400" />

                  <h4 className="text-3xl font-bold text-white">
                    12000+
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    Active Members
                  </p>

                </div>

              </div>              {/* Live Activity */}

              <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">

                <div className="flex items-center gap-3">

                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
                  </span>

                  <p className="font-medium text-emerald-300">
                    Live Activity
                  </p>

                </div>

                <p className="mt-4 text-slate-300">
                  <span className="font-semibold text-white">
                    John Smith
                  </span>{" "}
                  just published a new AI Healthcare Startup Idea.
                </p>

              </div>

            </motion.div>

            {/* Floating Card 1 */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -left-10 top-12 rounded-3xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-xl"
            >

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-violet-500/20 p-3">

                  <Lightbulb
                    className="text-violet-400"
                  />

                </div>

                <div>

                  <h4 className="font-bold text-white">
                    New Idea
                  </h4>

                  <p className="text-sm text-slate-400">
                    Added 2 min ago
                  </p>

                </div>

              </div>

            </motion.div>

            {/* Floating Card 2 */}

            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute -right-8 bottom-12 rounded-3xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-xl"
            >

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-cyan-500/20 p-3">

                  <Users
                    className="text-cyan-400"
                  />

                </div>

                <div>

                  <h4 className="font-bold text-white">
                    25 Users
                  </h4>

                  <p className="text-sm text-slate-400">
                    Joined Today
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Blur */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#050816] to-transparent" />

    </section>
  );
}