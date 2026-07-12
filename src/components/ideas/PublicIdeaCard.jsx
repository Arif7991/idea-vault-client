"use client";

import Image from "next/image";
import Link from "next/link";

import {
  CalendarDays,
  Tag,
  ArrowRight,
} from "lucide-react";

export default function PublicIdeaCard({ idea }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/20">

      {/* Cover */}

      <div className="relative h-60 overflow-hidden">

        <Image
          src={idea.image}
          alt={idea.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

      </div>

      <div className="space-y-5 p-6">        <div className="flex items-center justify-between">

          <span className="flex items-center gap-2 rounded-full bg-violet-500/15 px-3 py-1 text-sm text-violet-300">

            <Tag size={15} />

            {idea.category}

          </span>

          <span className="flex items-center gap-2 text-sm text-slate-400">

            <CalendarDays size={15} />

            {new Date(
              idea.createdAt
            ).toLocaleDateString()}

          </span>

        </div>

        <h2 className="line-clamp-2 text-2xl font-bold text-white">

          {idea.title}

        </h2>

        <p className="line-clamp-3 leading-7 text-slate-400">

          {idea.description}

        </p>        <div className="flex items-center justify-between border-t border-white/10 pt-5">

          <div className="flex items-center gap-3">

            <Image
              src={idea.authorImage}
              alt={idea.authorName}
              width={40}
              height={40}
              className="rounded-full border border-white/10"
            />

            <div>

              <h4 className="text-sm font-semibold text-white">

                {idea.authorName}

              </h4>

              <p className="text-xs text-slate-400">

                Startup Creator

              </p>

            </div>

          </div>

          <Link
            href={`/ideas/${idea._id}`}
            className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700"
          >
            View

            <ArrowRight size={16} />
          </Link>

        </div>

      </div>

    </div>
  );
}