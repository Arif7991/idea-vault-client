export default function Loading() {
  return (
    <div className="space-y-6">

      <div className="h-12 w-72 animate-pulse rounded bg-slate-800"></div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-40 animate-pulse rounded-2xl bg-slate-800"
          />
        ))}

      </div>

    </div>
  );
}