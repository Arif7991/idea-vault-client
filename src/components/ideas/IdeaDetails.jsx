"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

import {
  CalendarDays,
  Tag,
  Heart,
  Share2,
  Eye,
  User,
} from "lucide-react";

import { getIdeaById } from "@/services/ideaApi";

export default function IdeaDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [idea, setIdea] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIdea = async () => {
      try {
        const data = await getIdeaById(id);
        setIdea(data);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadIdea();
    }
  }, [id]);

  if (loading) {
    return (
      <h1 className="text-2xl text-white">
        Loading...
      </h1>
    );
  }

  if (!idea) {
    return (
      <h1 className="text-2xl text-red-400">
        Idea not found
      </h1>
    );
  }
return (
  <div className="mx-auto max-w-6xl">

    {/* Hero Image */}

<div className="group relative overflow-hidden rounded-3xl border border-white/10">

  <div className="relative aspect-[16/7] w-full">

    <Image
      src={idea.image}
      alt={idea.title}
      fill
      priority
      className="object-cover transition duration-700 group-hover:scale-105"
    />

    {/* Dark Overlay */}

    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

    {/* Category */}

    <div className="absolute left-8 top-8 z-10">

      <span className="rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-lg">

        {idea.category}

      </span>

    </div>

    {/* Featured Badge */}

    <div className="absolute right-8 top-8 z-10">

      <span className="rounded-full bg-black/50 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">

        ⭐ Featured Startup

      </span>

    </div>

  </div>

</div>

    {/* Content */}

    <div className="-mt-16 relative z-10 mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-900/95 p-10 backdrop-blur-xl shadow-2xl">{/* Title */}

<h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">

  {idea.title}

</h1>

{/* Meta Info */}

<div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

  {/* Author */}

  <div className="flex items-center gap-4">

    <Image
      src={idea.authorImage}
      alt={idea.authorName}
      width={70}
      height={70}
      className="rounded-full border-4 border-violet-500 object-cover shadow-lg"
    />

    <div>

      <h3 className="text-xl font-semibold text-white">

        {idea.authorName}

      </h3>

      <p className="text-slate-400">

        Startup Creator

      </p>

      <p className="text-sm text-slate-500">

        {idea.authorEmail}

      </p>

    </div>

  </div>

  {/* Right Side */}

  <div className="flex flex-wrap gap-4">

    <div className="rounded-xl border border-white/10 bg-slate-800 px-5 py-3">

      <p className="text-xs uppercase tracking-widest text-slate-500">

        Published

      </p>

      <p className="mt-1 font-semibold text-white">

        {new Date(
          idea.createdAt
        ).toLocaleDateString()}

      </p>

    </div>

    <div className="rounded-xl border border-white/10 bg-slate-800 px-5 py-3">

      <p className="text-xs uppercase tracking-widest text-slate-500">

        Category

      </p>

      <p className="mt-1 font-semibold text-violet-400">

        {idea.category}

      </p>

    </div>

  </div>

</div>
{/* About */}

<div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 md:p-10">

  <div className="mb-8 flex items-center gap-4">

    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-2xl shadow-lg">

      💡

    </div>

    <div>

      <h2 className="text-3xl font-bold text-white">

        About this Startup

      </h2>

      <p className="mt-1 text-slate-400">

        Learn more about this startup idea.

      </p>

    </div>

  </div>

  <div className="h-px bg-gradient-to-r from-violet-500 via-slate-700 to-transparent" />

  <p className="mt-8 whitespace-pre-line text-lg leading-9 text-slate-300">

    {idea.description}

  </p>

</div>
{/* Stats */}

<div className="mt-10 grid gap-6 md:grid-cols-3">

  <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-6">

    <Eye className="mb-3 text-cyan-400" />

    <h3 className="text-3xl font-bold text-white">
      1.2K
    </h3>

    <p className="text-slate-400">
      Total Views
    </p>

  </div>

  <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-6">

    <Heart className="mb-3 text-pink-500" />

    <h3 className="text-3xl font-bold text-white">
      125
    </h3>

    <p className="text-slate-400">
      Likes
    </p>

  </div>

  <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-6">

    <User className="mb-3 text-violet-400" />

    <h3 className="text-3xl font-bold text-white">
      Creator
    </h3>

    <p className="text-slate-400">
      Verified Member
    </p>

  </div>

</div>
{/* Actions */}

<div className="mt-12 flex flex-wrap gap-4">

  <button
    onClick={() => router.back()}
    className="rounded-xl bg-slate-800 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
  >
    ← Back
  </button>

  <button
    className="rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
  >
    <Heart className="mr-2 inline" size={18} />
    Like
  </button>

  <button
    onClick={async () => {
      if (navigator.share) {
        await navigator.share({
          title: idea.title,
          text: idea.description,
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(
          window.location.href
        );
        alert("Link copied");
      }
    }}
    className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
  >
    <Share2 className="mr-2 inline" size={18} />
    Share
  </button>

</div> 
  </div>

  </div>
);
}