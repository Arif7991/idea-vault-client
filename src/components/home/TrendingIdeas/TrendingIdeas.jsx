"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getIdeas } from "@/services/ideaApi";
import PublicIdeaCard from "@/components/ideas/PublicIdeaCard";

export default function TrendingIdeas() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIdeas = async () => {
      try {
        const data = await getIdeas();

        const latestIdeas = data
          .sort(
            (a, b) =>
              new Date(b.createdAt) -
              new Date(a.createdAt)
          )
          .slice(0, 6);

        setIdeas(latestIdeas);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadIdeas();
  }, []);

  return (
    <section className="bg-[#050816] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 flex items-center justify-between">

          <div>

            <h2 className="text-4xl font-bold text-white">

              Trending Startup Ideas

            </h2>

            <p className="mt-3 text-slate-400">

              Explore the latest startup ideas from our community.

            </p>

          </div>

          <Link
            href="/ideas"
            className="flex items-center gap-2 font-medium text-violet-400 transition hover:text-violet-300"
          >
            View All

            <ArrowRight size={18} />

          </Link>

        </div>

        {loading ? (

          <h2 className="py-20 text-center text-white">

            Loading...

          </h2>

        ) : (

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {ideas.map((idea) => (

              <PublicIdeaCard
                key={idea._id}
                idea={idea}
              />

            ))}

          </div>

        )}

      </div>

    </section>
  );
}