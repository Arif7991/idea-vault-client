"use client";

import { useEffect, useState } from "react";

import { getIdeas } from "@/services/ideaApi";
import PublicIdeaCard from "./PublicIdeaCard";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function AllIdeas() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");

  useEffect(() => {
    const loadIdeas = async () => {
      try {
        const data = await getIdeas();
        setIdeas(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadIdeas();
  }, []);

  const filteredIdeas = ideas
    .filter((idea) => {
      const matchesSearch = idea.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All"
          ? true
          : idea.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "newest") {
        return (
          new Date(b.createdAt) -
          new Date(a.createdAt)
        );
      }

      return (
        new Date(a.createdAt) -
        new Date(b.createdAt)
      );
    });

  if (loading) {
  return <LoadingSpinner />;
}

  return (
    <>
      {/* Heading */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold text-white">
          Explore Startup Ideas
        </h1>

        <p className="mt-3 text-slate-400">
          Discover innovative ideas shared by creators.
        </p>

      </div>

      {/* Search + Filter */}

      <div className="mb-10 grid gap-4 md:grid-cols-3">

        <input
          type="text"
          placeholder="Search ideas..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="h-12 rounded-xl border border-white/10 bg-slate-900 px-4 text-white outline-none focus:border-violet-500"
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="h-12 rounded-xl border border-white/10 bg-slate-900 px-4 text-white outline-none focus:border-violet-500"
        >
          <option value="All">
            All Categories
          </option>

          <option value="AI">AI</option>

          <option value="FinTech">
            FinTech
          </option>

          <option value="Health">
            Health
          </option>

          <option value="Education">
            Education
          </option>

          <option value="E-commerce">
            E-commerce
          </option>

          <option value="Agriculture">
            Agriculture
          </option>

          <option value="Travel">
            Travel
          </option>

          <option value="Productivity">
            Productivity
          </option>
        </select>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
          className="h-12 rounded-xl border border-white/10 bg-slate-900 px-4 text-white outline-none focus:border-violet-500"
        >
          <option value="newest">
            Newest First
          </option>

          <option value="oldest">
            Oldest First
          </option>
        </select>

      </div>

      {/* Cards */}

      {filteredIdeas.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/20 py-20 text-center">

          <h2 className="text-2xl font-bold text-white">
            No ideas found
          </h2>

          <p className="mt-3 text-slate-400">
            Try another search or category.
          </p>

        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredIdeas.map((idea) => (
            <PublicIdeaCard
              key={idea._id}
              idea={idea}
            />
          ))}

        </div>
      )}
    </>
  );
}