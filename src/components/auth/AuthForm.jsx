"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

import {
  Mail,
  Lock,
  User,
  Image,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function AuthForm({ mode }) {
  const isRegister = mode === "register";

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
const handleGoogleLogin = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "http://localhost:3000",
  });
};
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      if (isRegister) {
        const result = await authClient.signUp.email({
          name: data.name,
          email: data.email,
          password: data.password,
          image: data.image,
        });

        if (result.error) {
          toast.error(result.error.message);
          return;
        }

        toast.success("Account created successfully 🎉");
        reset();
        router.push("/");
      } else {
        const result = await authClient.signIn.email({
          email: data.email,
          password: data.password,
        });

        if (result.error) {
          toast.error(result.error.message);
          return;
        }

        toast.success("Login successful 🎉");
        reset();
        router.push("/");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-5 py-10">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7c3aed40,transparent_35%),radial-gradient(circle_at_bottom_right,#2563eb30,transparent_35%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="relative w-full max-w-6xl"
      >
        <Card className="overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl lg:grid lg:grid-cols-2">

          {/* Left Side */}

          <div className="hidden bg-gradient-to-br from-violet-700 via-indigo-700 to-slate-900 p-14 lg:flex lg:flex-col lg:justify-center">

            <h1 className="text-5xl font-extrabold leading-tight text-white">
              Idea
              <span className="text-cyan-300">
                Vault
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-200">
              Discover innovative startup ideas,
              collaborate with creators,
              validate concepts and build
              the next big thing.
            </p>

            <div className="mt-12 space-y-4">

              <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                💡 Share startup ideas
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                🚀 Connect with innovators
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                ⭐ Get community feedback
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="p-8 md:p-12">

            <h2 className="text-4xl font-bold text-white">

              {isRegister
                ? "Create Account"
                : "Welcome Back"}

            </h2>

            <p className="mt-2 text-slate-400">

              {isRegister
                ? "Start sharing your startup ideas."
                : "Login to continue."}

            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-5"
            >              {isRegister && (
                <>
                  {/* Name */}

                  <div className="space-y-2">
                    <Label className="text-slate-300">
                      Full Name
                    </Label>

                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <Input
                        type="text"
                        placeholder="John Doe"
                        className="h-12 border-white/10 bg-white/10 pl-10 text-white placeholder:text-slate-500 focus:border-violet-500"
                        {...register("name", {
                          required: "Name is required",
                        })}
                      />
                    </div>

                    {errors.name && (
                      <p className="text-sm text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Photo URL */}

                  <div className="space-y-2">
                    <Label className="text-slate-300">
                      Photo URL
                    </Label>

                    <div className="relative">
                      <Image className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                      <Input
                        type="text"
                        placeholder="https://example.com/photo.jpg"
                        className="h-12 border-white/10 bg-white/10 pl-10 text-white placeholder:text-slate-500 focus:border-violet-500"
                        {...register("image", {
                          required: "Photo URL is required",
                        })}
                      />
                    </div>

                    {errors.image && (
                      <p className="text-sm text-red-400">
                        {errors.image.message}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Email */}

              <div className="space-y-2">
                <Label className="text-slate-300">
                  Email
                </Label>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 border-white/10 bg-white/10 pl-10 text-white placeholder:text-slate-500 focus:border-violet-500"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>

                {errors.email && (
                  <p className="text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}

              <div className="space-y-2">
                <Label className="text-slate-300">
                  Password
                </Label>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="h-12 border-white/10 bg-white/10 pl-10 pr-12 text-white placeholder:text-slate-500 focus:border-violet-500"
                    {...register("password", {
                      required: "Password is required",

                      minLength: {
                        value: 6,
                        message:
                          "Password must be at least 6 characters",
                      },

                      validate: {
                        uppercase: (value) =>
                          /[A-Z]/.test(value) ||
                          "Must contain one uppercase letter",

                        lowercase: (value) =>
                          /[a-z]/.test(value) ||
                          "Must contain one lowercase letter",
                      },
                    })}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-sm text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>              <Button
                type="submit"
                disabled={loading}
                className="h-12 w-full bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  "Please wait..."
                ) : (
                  <>
                    {isRegister ? "Create Account" : "Login"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              {/* Divider */}

              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-sm text-slate-400">OR</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Google */}

                <Button
  type="button"
  onClick={handleGoogleLogin}
  variant="outline"
  className="h-12 w-full border-white/10 bg-transparent text-white hover:bg-white/10"
>
  Continue with Google
</Button>

              <p className="text-center text-sm text-slate-400">
                {isRegister
                  ? "Already have an account?"
                  : "Don't have an account?"}

                <Link
                  href={isRegister ? "/login" : "/register"}
                  className="ml-2 font-semibold text-violet-400 transition hover:text-violet-300"
                >
                  {isRegister ? "Login" : "Register"}
                </Link>
              </p>
            </form>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}