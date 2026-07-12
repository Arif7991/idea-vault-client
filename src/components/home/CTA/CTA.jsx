"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#050816] py-24">

      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[32px] border border-violet-500/20 bg-gradient-to-r from-violet-700 via-indigo-700 to-slate-900 p-12 text-center shadow-2xl"
        >

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
            <Lightbulb size={40} className="text-yellow-300" />
          </div>

          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            Ready to Share Your Startup Idea?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Join thousands of innovators, publish your ideas,
            receive community feedback, and build the next big startup.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/dashboard/add-idea"
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 font-semibold text-slate-900 transition hover:scale-105"
            >
              Share Your Idea
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/ideas"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              Explore Ideas
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}