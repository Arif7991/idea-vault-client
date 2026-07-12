import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050816] px-6 text-center">

      <h1 className="text-8xl font-extrabold text-violet-500">
        404
      </h1>

      <h2 className="mt-6 text-4xl font-bold text-white">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-lg text-slate-400">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white transition hover:bg-violet-700"
      >
        Back To Home
      </Link>

    </div>
  );
}