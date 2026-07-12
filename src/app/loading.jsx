export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050816]">

      <div className="text-center">

        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-violet-500 border-t-transparent"></div>

        <h2 className="mt-6 text-2xl font-bold text-white">
          Loading...
        </h2>

        <p className="mt-2 text-slate-400">
          Please wait a moment
        </p>

      </div>

    </div>
  );
}