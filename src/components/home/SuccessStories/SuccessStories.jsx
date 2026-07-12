"use client";

import { motion } from "framer-motion";
import { TrendingUp, Rocket, Trophy } from "lucide-react";

const stories = [
  {
    title: "AI Healthcare Platform",
    founder: "Sarah Johnson",
    growth: "320%",
    description:
      "Started as an idea on IdeaVault and later secured seed funding to build an AI-powered healthcare platform.",
    icon: Rocket,
    color: "text-violet-400",
  },
  {
    title: "Smart Farming",
    founder: "David Miller",
    growth: "210%",
    description:
      "Connected with developers through the community and launched an agriculture startup used by thousands of farmers.",
    icon: TrendingUp,
    color: "text-cyan-400",
  },
  {
    title: "EduTech Pro",
    founder: "Emily Wilson",
    growth: "180%",
    description:
      "Validated the idea with community feedback before launching a successful online learning platform.",
    icon: Trophy,
    color: "text-yellow-400",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-[#050816] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold text-white">
            Success Stories
          </h2>

          <p className="mt-4 text-slate-400">
            Inspiring startups that began with a simple idea.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {stories.map((story, index) => {

            const Icon = story.icon;

            return (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-violet-500/40"
              >

                <div
                  className={`mb-6 inline-flex rounded-2xl bg-white/5 p-4 ${story.color}`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {story.title}
                </h3>

                <p className="mt-2 text-violet-400">
                  Founder: {story.founder}
                </p>

                <p className="mt-5 leading-7 text-slate-400">
                  {story.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

                  <span className="text-slate-400">
                    Growth
                  </span>

                  <span className="text-2xl font-bold text-emerald-400">
                    {story.growth}
                  </span>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}