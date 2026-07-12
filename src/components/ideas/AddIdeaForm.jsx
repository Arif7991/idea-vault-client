"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { addIdea } from "@/services/ideaApi";
import {
  Lightbulb,
  ImageIcon,
  FileText,
  Tag,
  Send,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AddIdeaForm() {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");
    const router = useRouter();

const { data: session } = authClient.useSession();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const image = watch("image");

  if (image !== preview) {
    setTimeout(() => {
      setPreview(image);
    }, 0);
  }

  const onSubmit = async (data) => {
  try {
    setLoading(true);

    const ideaData = {
      ...data,

      authorName: session?.user?.name,

      authorEmail: session?.user?.email,

      authorImage: session?.user?.image,

      createdAt: new Date(),
    };

    const result = await addIdea(ideaData);

    if (result.insertedId) {
      toast.success("Idea published successfully 🚀");

      reset();

      setPreview("");

      router.push("/dashboard/my-ideas");
    }
  } catch (error) {
    toast.error("Something went wrong!");
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-white/10 bg-slate-900/70 backdrop-blur-xl p-8">

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-7"
        >

          {/* Title */}

          <div className="space-y-2">

            <Label className="text-slate-300">
              Idea Title
            </Label>

           <div className="relative">
  <Lightbulb
    className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-400"
    size={20}
  />

  <Input
    {...register("title", {
  required: "Title is required",
  minLength: {
    value: 5,
    message: "Title must be at least 5 characters",
  },
  maxLength: {
    value: 80,
    message: "Title can't exceed 80 characters",
  },
})}
    placeholder="AI Healthcare Platform"
    className="h-12 pl-10 bg-slate-800 border-white/10 text-white"
  />
</div>

{errors.title && (
  <p className="text-sm text-red-400 mt-1">
    {errors.title.message}
  </p>
)}

          </div>

          {/* Category */}

          <div className="space-y-2">

            <Label className="text-slate-300">
              Category
            </Label>

            <div className="relative">

              <Tag
                className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400"
                size={20}
              />

              <select
                {...register("category", {
                required: "Select a category",
                })}
                className="h-12 w-full rounded-md border border-white/10 bg-slate-800 pl-10 pr-4 text-white outline-none"
              >
                
                <option value="">
                  Select Category
                </option>

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
  <p className="mt-1 text-sm text-red-400">
    {errors.category.message}
  </p>
)}
            </div>
                
          </div>

          {/* Image URL */}

          <div className="space-y-2">

            <Label className="text-slate-300">
              Cover Image
            </Label>

            <div className="relative">

              <ImageIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-400"
                size={20}
              />

              <Input
                {...register("image", {
                required: "Image URL is required",
                pattern: {
                    value: /^https?:\/\/.+/i,
                    message: "Enter a valid image URL",
                },
                })}
                placeholder="https://..."
                className="h-12 pl-10 bg-slate-800 border-white/10 text-white"
              />

            </div>
                {errors.image && (
                <p className="mt-1 text-sm text-red-400">
                    {errors.image.message}
                </p>
                )}
          </div>          {/* Description */}

          <div className="space-y-2">

            <Label className="text-slate-300">
              Description
            </Label>

            <div className="relative">

              <FileText
                className="absolute left-3 top-4 text-emerald-400"
                size={20}
              />

              <textarea
                {...register("description", {
  required: "Description is required",
  minLength: {
    value: 20,
    message: "Description must be at least 20 characters",
  },
  maxLength: {
    value: 500,
    message: "Description can't exceed 500 characters",
  },
})}
                rows={6}
                placeholder="Describe your startup idea..."
                className="w-full rounded-md border border-white/10 bg-slate-800 py-3 pl-10 pr-4 text-white outline-none focus:border-violet-500"
              />

            </div>
                        {errors.description && (
                <p className="mt-1 text-sm text-red-400">
                    {errors.description.message}
                </p>
                )}
          </div>

          {/* Image Preview */}

          {preview && (
            <div>

              <Label className="mb-3 block text-slate-300">
                Image Preview
              </Label>

              <img
                src={preview}
                alt="Preview"
                className="h-64 w-full rounded-xl border border-white/10 object-cover"
                onError={() => setPreview("")}
              />

            </div>
          )}

          {/* Submit Button */}

          <Button
            type="submit"
            disabled={loading}
            className="h-12 w-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 text-white transition-all duration-300 hover:scale-[1.02]"
          >
            {loading ? (
              "Publishing..."
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Publish Idea
              </>
            )}
          </Button>

        </form>

      </Card>

    </motion.div>
  );
}