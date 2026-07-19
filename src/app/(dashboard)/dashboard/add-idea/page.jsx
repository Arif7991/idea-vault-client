import AddIdeaForm from "@/components/ideas/AddIdeaForm";
export const metadata = {
  title: "Add Idea | IdeaVault",
};
export default function AddIdeaPage() {
  return (
    <div className="mx-auto max-w-5xl">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Share Your Startup Idea
        </h1>

        <p className="mt-2 text-slate-400">
          Inspire the community by sharing your innovative idea.
        </p>

      </div>

      <AddIdeaForm />

    </div>
  );
}