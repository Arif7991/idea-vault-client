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
    <>
      <h1 className="mb-10 text-5xl font-bold text-white">
        My Interactions
      </h1>

      <p className="text-slate-400">
        Total Comments: {interactions.length}
      </p>
    </>
  );
}