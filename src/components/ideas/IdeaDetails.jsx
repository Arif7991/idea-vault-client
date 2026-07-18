"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Heart,
  Share2,
  Eye,
  User,
} from "lucide-react";

import { getIdeaById } from "@/services/ideaApi";

import {
  getComments,
  addComment,
  updateComment,
  deleteComment,
} from "@/services/commentApi";

import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export default function IdeaDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [idea, setIdea] = useState(null);
  const [loading, setLoading] = useState(true);

  const [session, setSession] = useState(null);

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // -----------------------------
  // Load Session
  // -----------------------------
  useEffect(() => {
    const loadSession = async () => {
      try {
        const result = await authClient.getSession();
        setSession(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadSession();
  }, []);

  // -----------------------------
  // Load Idea
  // -----------------------------
  useEffect(() => {
    const loadIdea = async () => {
      try {
        const data = await getIdeaById(id);
        setIdea(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadIdea();
    }
  }, [id]);

  // -----------------------------
  // Load Comments
  // -----------------------------
  const loadComments = async () => {
    try {
      const data = await getComments(id);
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      loadComments();
    }
  }, [id]);

  // -----------------------------
  // Add Comment
  // -----------------------------
  const handleComment = async () => {
    if (!comment.trim()) {
      return toast.error("Comment cannot be empty");
    }

    try {
      const result = await authClient.getSession();

      const user = result.data.user;

      await addComment({
        ideaId: idea._id,
        comment,
        userName: user.name,
        userEmail: user.email,
        userImage: user.image,
      });

      setComment("");

      await loadComments();

      toast.success("Comment added successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add comment");
    }
  };

  // -----------------------------
  // Update Comment
  // -----------------------------
  const handleUpdateComment = async () => {
    try {
      await updateComment(editingId, editingText);

      setEditingId(null);
      setEditingText("");

      await loadComments();

      toast.success("Comment updated");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update comment");
    }
  };

  // -----------------------------
  // Delete Comment
  // -----------------------------
  const handleDeleteComment = async (commentId) => {
  try {
    await deleteComment(commentId);

    await loadComments();

    toast.success("Comment deleted");
  } catch (error) {
    console.log(error);
    toast.error("Failed to delete comment");
  }
};

  if (loading) {
    return (
      <h1 className="text-center text-2xl text-white">
        Loading...
      </h1>
    );
  }

  if (!idea) {
    return (
      <h1 className="text-center text-2xl text-red-500">
        Idea not found
      </h1>
    );
  }return (
  <div className="mx-auto max-w-6xl">

    {/* Hero */}

    <div className="group relative overflow-hidden rounded-3xl border border-white/10">

      <div className="relative aspect-[16/7] w-full">

        <Image
          src={idea.image}
          alt={idea.title}
          fill
          priority
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

        <div className="absolute left-8 top-8">
          <span className="rounded-full bg-violet-600 px-5 py-2 text-white">
            {idea.category}
          </span>
        </div>

      </div>

    </div>

    {/* Content */}

    <div className="-mt-16 relative z-10 mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-900/95 p-10">

      <h1 className="text-5xl font-bold text-white">
        {idea.title}
      </h1>

      <div className="mt-8 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <Image
            src={idea.authorImage}
            alt={idea.authorName}
            width={70}
            height={70}
            className="rounded-full"
          />

          <div>

            <h2 className="text-xl font-semibold text-white">
              {idea.authorName}
            </h2>

            <p className="text-slate-400">
              {idea.authorEmail}
            </p>

          </div>

        </div>

        <div className="text-right">

          <p className="text-slate-400">
            Published
          </p>

          <p className="text-white">
            {new Date(
              idea.createdAt
            ).toLocaleDateString()}
          </p>

        </div>

      </div>

      {/* Description */}

      <div className="mt-10 rounded-2xl border border-white/10 bg-slate-800 p-8">

        <h2 className="mb-4 text-3xl font-bold text-white">
          About this Startup
        </h2>

        <p className="whitespace-pre-line leading-8 text-slate-300">
          {idea.description}
        </p>

      </div>

      {/* Stats */}

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <div className="rounded-xl bg-slate-800 p-6">

          <Eye className="mb-3 text-cyan-400" />

          <h3 className="text-3xl font-bold text-white">
            1.2K
          </h3>

          <p className="text-slate-400">
            Views
          </p>

        </div>

        <div className="rounded-xl bg-slate-800 p-6">

          <Heart className="mb-3 text-pink-500" />

          <h3 className="text-3xl font-bold text-white">
            125
          </h3>

          <p className="text-slate-400">
            Likes
          </p>

        </div>

        <div className="rounded-xl bg-slate-800 p-6">

          <User className="mb-3 text-violet-400" />

          <h3 className="text-3xl font-bold text-white">
            Creator
          </h3>

          <p className="text-slate-400">
            Verified
          </p>

        </div>

      </div>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">

        <button
          onClick={() => router.back()}
          className="rounded-xl bg-slate-700 px-6 py-3 text-white"
        >
          ← Back
        </button>

        <button
          className="rounded-xl bg-pink-600 px-6 py-3 text-white"
        >
          <Heart
            className="mr-2 inline"
            size={18}
          />
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

              toast.success("Link Copied");

            }

          }}
          className="rounded-xl bg-cyan-600 px-6 py-3 text-white"
        >
          <Share2
            className="mr-2 inline"
            size={18}
          />
          Share
        </button>

      </div>

      {/* Comment Box */}

      <div className="mt-14">

        <textarea
          value={comment}
          onChange={(e) =>
            setComment(e.target.value)
          }
          placeholder="Write your comment..."
          className="h-32 w-full rounded-xl border border-white/10 bg-slate-800 p-4 text-white"
        />

        <button
          onClick={handleComment}
          className="mt-4 rounded-xl bg-violet-600 px-6 py-3 text-white"
        >
          Post Comment
        </button>

      </div>

      {/* Comments */}

      <div className="mt-12">

        <h2 className="mb-6 text-3xl font-bold text-white">
          Comments ({comments.length})
        </h2>

        {comments.length === 0 ? (

          <p className="text-slate-400">
            No comments yet.
          </p>

        ) : (

          <div className="space-y-5">

            {comments.map((item) => (

              <div
                key={item._id}
                className="rounded-2xl border border-white/10 bg-slate-800 p-5"
              >

                <div className="flex items-center gap-3">

                  <Image
                    src={item.userImage}
                    alt={item.userName}
                    width={45}
                    height={45}
                    className="rounded-full"
                  />

                  <div>

                    <h4 className="font-semibold text-white">
                      {item.userName}
                    </h4>

                    <p className="text-xs text-slate-500">
                      {new Date(
                        item.createdAt
                      ).toLocaleString()}
                    </p>

                  </div>

                </div>

                {editingId === item._id ? (

                  <>

                    <textarea
                      value={editingText}
                      onChange={(e) =>
                        setEditingText(
                          e.target.value
                        )
                      }
                      className="mt-4 w-full rounded-xl bg-slate-900 p-3 text-white"
                    />

                    <div className="mt-3 flex gap-3">

                      <button
                        onClick={handleUpdateComment}
                        className="rounded bg-green-600 px-4 py-2 text-white"
                      >
                        Save
                      </button>

                      <button
                        onClick={() =>
                          setEditingId(null)
                        }
                        className="rounded bg-gray-600 px-4 py-2 text-white"
                      >
                        Cancel
                      </button>

                    </div>

                  </>

                ) : (

                  <>

                    <p className="mt-4 text-slate-300">
                      {item.comment}
                    </p>

                    {session?.user?.email ===
                      item.userEmail && (

                      <div className="mt-4 flex gap-3">

                        <button
                          onClick={() => {

                            setEditingId(
                              item._id
                            );

                            setEditingText(
                              item.comment
                            );

                          }}
                          className="rounded bg-blue-600 px-4 py-2 text-white"
                        >
                          Edit
                        </button>

                        <AlertDialog>
  <AlertDialogTrigger asChild>
    <button className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700">
      Delete
    </button>
  </AlertDialogTrigger>

  <AlertDialogContent
    className="border border-slate-700 bg-slate-900 text-white shadow-2xl"
  >
    <AlertDialogHeader>
      <AlertDialogTitle className="text-2xl font-bold text-white">
        Delete Comment?
      </AlertDialogTitle>

      <AlertDialogDescription className="text-base text-slate-300">
        This action cannot be undone. Your comment will be permanently deleted.
      </AlertDialogDescription>
    </AlertDialogHeader>

    <AlertDialogFooter>
      <AlertDialogCancel className="border-slate-700 bg-slate-800 text-white hover:bg-slate-700 hover:text-white">
        Cancel
      </AlertDialogCancel>

      <AlertDialogAction
        onClick={() => handleDeleteComment(item._id)}
        className="bg-red-600 text-white hover:bg-red-700"
      >
        Delete
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

                      </div>

                    )}

                  </>

                )}

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  </div>
);
}