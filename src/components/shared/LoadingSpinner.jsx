export default function LoadingSpinner() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">

      <div className="flex flex-col items-center">

        <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-700 border-t-violet-500" />

        <h2 className="mt-6 text-xl font-semibold text-white">
          Loading...
        </h2>

        <p className="mt-2 text-slate-400">
          Please wait a moment
        </p>

      </div>

    </div>
  );
}