import MyInteractions from "@/components/interactions/MyInteractions";
export const metadata = {
  title: "My Interactions | IdeaVault",
};
export default function MyInteractionsPage() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,#312e81_0%,#020617_40%,#020617_100%)] px-6 py-16">
      <div className="container">
        <MyInteractions />
      </div>
    </section>
  );
}