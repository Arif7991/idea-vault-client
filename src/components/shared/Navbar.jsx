import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          IdeaVault
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>

          <Link href="/ideas">Ideas</Link>

          <Link href="/dashboard/add-idea">Add Idea</Link>

          <Link href="/dashboard/my-ideas">My Ideas</Link>

          <Link href="/dashboard/my-interactions">
            My Interactions
          </Link>
        </div>

        {/* Right Side */}
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}