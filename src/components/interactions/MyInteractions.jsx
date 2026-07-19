"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { getMyInteractions } from "@/services/commentApi";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, CalendarDays, ArrowRight } from "lucide-react";



export default function MyInteractions() {
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInteractions = async () => {
      try {
        const session = await authClient.getSession();

        if (!session.data?.user?.email) return;

        const data = await getMyInteractions(
          session.data.user.email
        );

        setInteractions(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadInteractions();
  }, []);

  if (loading) {
    return (
      <h1 className="text-center text-2xl text-white">
        Loading...
      </h1>
    );
  }
  if (interactions.length === 0) {
  return (
    <div className="py-20 text-center">

      <MessageCircle
        size={70}
        className="mx-auto text-slate-500"
      />

      <h2 className="mt-6 text-3xl font-bold text-white">
        No Interactions Yet
      </h2>

      <p className="mt-3 text-slate-400">
        Start commenting on ideas to see them here.
      </p>

      <Link
        href="/ideas"
        className="mt-8 inline-flex rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
      >
        Explore Ideas
      </Link>

    </div>
  );
}

  return (
  <div>

    {/* Heading */}

    <div className="mb-12">

      <h1 className="text-5xl font-bold text-white">
        My Interactions
      </h1>

      <p className="mt-3 text-slate-400">
        Total Comments: {interactions.length}
      </p>

    </div>

    {/* Cards */}

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {interactions.map((item) => (

        <div
          key={item._id}
          className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition hover:-translate-y-2 hover:border-violet-500"
        >

          <Image
            src={item.ideaImage}
            alt={item.ideaTitle}
            width={500}
            height={280}
            className="h-52 w-full object-cover"
          />

          <div className="p-6">

            <span className="rounded-full bg-violet-600 px-3 py-1 text-sm text-white">
              {item.category}
            </span>

            <h2 className="mt-5 text-2xl font-bold text-white">
              {item.ideaTitle}
            </h2>

            <div className="mt-6">

              <h4 className="mb-2 font-semibold text-violet-400">
                💬 Your Comment
              </h4>

              <p className="line-clamp-3 text-slate-300">
                {item.comment}
              </p>

            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">

              <CalendarDays size={16} />

              {new Date(
                item.createdAt
              ).toLocaleDateString()}

            </div>

            <Link
              href={`/ideas/${item.ideaId}`}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700"
            >
              View Details

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      ))}

    </div>

  </div>
);
}