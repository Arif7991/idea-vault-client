"use client";

import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2, CalendarDays, Tag } from "lucide-react";
import { deleteIdea } from "@/services/ideaApi";
import { toast } from "sonner";
export default function IdeaCard({
  idea,
  onDelete,
}) {

    const handleDelete = async () => {
  const ok = window.confirm(
    "Delete this idea?"
  );

  if (!ok) return;

  try {
    const result = await deleteIdea(idea._id);

    if (result.deletedCount > 0) {
      toast.success("Idea deleted");

      onDelete(idea._id);
    }
  } catch {
    toast.error("Delete failed");
  }
};
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10">

      {/* Cover Image */}

      <div className="relative h-56 w-full">

        <Image
          src={idea.image}
          alt={idea.title}
          fill
          className="object-cover"
        />

      </div>

      {/* Body */}

      <div className="space-y-4 p-6">

        <div className="flex items-center justify-between">

          <span className="flex items-center gap-2 rounded-full bg-violet-500/15 px-3 py-1 text-sm text-violet-300">

            <Tag size={15} />

            {idea.category}

          </span>

          <span className="flex items-center gap-2 text-sm text-slate-400">

            <CalendarDays size={15} />

            {new Date(idea.createdAt).toLocaleDateString()}

          </span>

        </div>

        <h2 className="line-clamp-1 text-2xl font-bold text-white">
          {idea.title}
        </h2>

        <p className="line-clamp-3 leading-7 text-slate-400">
          {idea.description}
        </p>

        <div className="flex gap-3 pt-3">

          <Link
  href={`/dashboard/edit-idea/${idea._id}`}
  className="flex-1"
>
  <button className="w-full rounded-lg border border-violet-500 py-2 text-violet-300 transition hover:bg-violet-600 hover:text-white">
    <Pencil className="mr-2 inline" size={18} />
    Edit
  </button>
</Link>

          <button
  onClick={handleDelete}
  className="flex-1 rounded-lg border border-red-500 py-2 text-red-400 transition hover:bg-red-600 hover:text-white"
>
            <Trash2 className="mr-2 inline" size={18} />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}