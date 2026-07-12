"use client";

import { motion } from "framer-motion";
import {
  Brain,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Plane,
  Wheat,
  Landmark,
  Briefcase,
} from "lucide-react";

const categories = [
  {
    title: "AI",
    icon: Brain,
    color: "text-cyan-400",
  },
  {
    title: "Health",
    icon: HeartPulse,
    color: "text-red-400",
  },
  {
    title: "Education",
    icon: GraduationCap,
    color: "text-yellow-400",
  },
  {
    title: "E-commerce",
    icon: ShoppingCart,
    color: "text-green-400",
  },
  {
    title: "Travel",
    icon: Plane,
    color: "text-blue-400",
  },
  {
    title: "Agriculture",
    icon: Wheat,
    color: "text-lime-400",
  },
  {
    title: "FinTech",
    icon: Landmark,
    color: "text-violet-400",
  },
  {
    title: "Productivity",
    icon: Briefcase,
    color: "text-pink-400",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#050816] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold text-white">
            Explore Categories
          </h2>

          <p className="mt-4 text-slate-400">
            Browse startup ideas by category.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-violet-500/40"
              >

                <div
                  className={`mb-6 inline-flex rounded-2xl bg-white/5 p-4 ${item.color}`}
                >
                  <Icon size={34} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  Discover innovative startup ideas in this category.
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}