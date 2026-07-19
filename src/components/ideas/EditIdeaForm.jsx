"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { getIdeaById, updateIdea } from "@/services/ideaApi";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function EditIdeaForm() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const loadIdea = async () => {
      try {
        const data = await getIdeaById(id);

        reset(data);
      } catch {
        toast.error("Failed to load idea");
      } finally {
        setLoading(false);
      }
    };

    loadIdea();
  }, [id, reset]);
   const onSubmit = async (data) => {

  try {
    const result = await updateIdea(id, data);


    if (result.modifiedCount > 0) {
      toast.success("Idea updated successfully");
      router.push("/dashboard/my-ideas");
    } else {
      toast.info("No changes made");
    }
  } catch (err) {
    toast.error("Update failed");
  }
};

 if (loading) {
  return <LoadingSpinner />;
}return (
  <div className="mx-auto max-w-3xl py-10">
    <h1 className="mb-8 text-4xl font-bold text-white">
      Edit Idea
    </h1>

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Title */}

      <div className="space-y-2">
        <Label>Title</Label>

        <Input
          {...register("title", {
            required: "Title is required",
          })}
        />

        {errors.title && (
          <p className="text-sm text-red-400">
            {errors.title.message}
          </p>
        )}
      </div>

      {/* Category */}

      <div className="space-y-2">
        <Label>Category</Label>

        <select
          {...register("category", {
            required: "Category is required",
          })}
          className="h-12 w-full rounded-md border border-white/10 bg-slate-900 px-4 text-white"
        >
          <option value="">Select Category</option>
          <option>AI</option>
          <option>FinTech</option>
          <option>Health</option>
          <option>Education</option>
          <option>E-commerce</option>
          <option>Agriculture</option>
          <option>Travel</option>
          <option>Productivity</option>
        </select>

        {errors.category && (
          <p className="text-sm text-red-400">
            {errors.category.message}
          </p>
        )}
      </div>

      {/* Image */}

      <div className="space-y-2">
        <Label>Image URL</Label>

        <Input
          {...register("image", {
            required: "Image is required",
          })}
        />

        {errors.image && (
          <p className="text-sm text-red-400">
            {errors.image.message}
          </p>
        )}
      </div>

      {/* Description */}

      <div className="space-y-2">
        <Label>Description</Label>

        <textarea
          {...register("description", {
            required: "Description is required",
          })}
          rows={6}
          className="w-full rounded-md border border-white/10 bg-slate-900 p-4 text-white outline-none"
        />

        {errors.description && (
          <p className="text-sm text-red-400">
            {errors.description.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full h-12"
      >
        Update Idea
      </Button>
    </form>
  </div>
);
}