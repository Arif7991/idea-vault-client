import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white">
      <div className="container py-24">

        <div className="max-w-3xl">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            🚀 Trusted by Startup Enthusiasts
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight">
            Turn Your Startup Idea
            <span className="text-indigo-600">
              {" "}Into Reality
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-600">
            Discover innovative ideas, collaborate with
            creators, and transform great concepts into
            successful startups.
          </p>

          <div className="mt-8 flex gap-4">

            <Button asChild size="lg">
              <Link href="/ideas">
                Explore Ideas
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
            >
              <Link href="/dashboard/add-idea">
                Submit Idea
              </Link>
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}