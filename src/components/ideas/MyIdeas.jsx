"use client";

import { useEffect, useState } from "react";
import IdeaCard from "./IdeaCard";
import { authClient } from "@/lib/auth-client";
import { getMyIdeas } from "@/services/ideaApi";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function MyIdeas() {

  const { data: session } = authClient.useSession();

  const [ideas, setIdeas] = useState([]);

  const [loading, setLoading] = useState(true);
const handleDelete = (id) => {
    setIdeas((prev) =>
      prev.filter((idea) => idea._id !== id)
    );
  };
  useEffect(() => {

    const loadIdeas = async () => {

      if (!session?.user?.email) return;

      try {

        const data = await getMyIdeas(
          session.user.email
        );

        setIdeas(data);

      } finally {

        setLoading(false);

      }

    };

    loadIdeas();

  }, [session]);

  if (loading) {
  return <LoadingSpinner />;
}

  return (
    <div>

      <h1 className="mb-8 text-4xl font-bold text-white">
        My Ideas
      </h1>

      {ideas.length === 0 ? (

        <div className="rounded-xl border border-dashed border-white/20 p-10 text-center">

          <h2 className="text-2xl font-semibold text-white">
            No ideas yet
          </h2>

          <p className="mt-2 text-slate-400">
            Publish your first startup idea.
          </p>

        </div>

      ) : (

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {ideas.map((idea) => (

            <IdeaCard
          key={idea._id}
          idea={idea}
          onDelete={handleDelete}
        />

          ))}

        </div>

      )}

    </div>
  );
}