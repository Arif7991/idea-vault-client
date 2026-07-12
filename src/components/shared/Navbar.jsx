"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { Menu, X, LogOut } from "lucide-react";
import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();

    toast.success("Logged out successfully");

    router.push("/");
  };

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Browse Ideas",
      href: "/ideas",
    },
    {
      name: "About",
      href: "/about",
    },
  ];  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight"
        >
          <span className="text-white">
            Idea
          </span>

          <span className="text-violet-500">
            Vault
          </span>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-8 lg:flex">

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-all duration-300 hover:text-violet-400 ${
                pathname === item.href
                  ? "font-semibold text-violet-500"
                  : "text-slate-300"
              }`}
            >
              {item.name}
            </Link>
          ))}

        </div>

        {/* Right Side */}

        <div className="hidden items-center gap-3 lg:flex">

          {isPending ? (
            <div className="h-10 w-24 animate-pulse rounded-md bg-slate-700" />
          ) : session ? (
            <DropdownMenu>

              <DropdownMenuTrigger asChild>

                <button className="overflow-hidden rounded-full border-2 border-violet-500 transition hover:scale-105">

                  <Image
                    src={session.user.image || "https://i.pravatar.cc/150"}
                      alt={session.user.name}
                      width={44}
                      height={44}
                      className="h-11 w-11 object-cover"
                  />

                </button>

              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-56 bg-slate-900 text-white"
              >

                <div className="border-b border-slate-700 p-3">

                  <p className="font-semibold">
                    {session.user.name}
                  </p>

                  <p className="text-xs text-slate-400">
                    {session.user.email}
                  </p>

                </div>

                <DropdownMenuItem asChild>
                  <Link href="/dashboard">
                    Dashboard
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={handleLogout}
                  className="cursor-pointer text-red-400"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>

              </DropdownMenuContent>

            </DropdownMenu>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button className="bg-violet-600 hover:bg-violet-700">
                  Register
                </Button>
              </Link>
            </>
          )}

        </div>        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t border-white/10 bg-slate-950 lg:hidden">
          <div className="space-y-2 p-5">

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2 transition ${
                  pathname === item.href
                    ? "bg-violet-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-4 border-t border-slate-800 pt-4">

              {session ? (
                <>
                  <div className="mb-4 flex items-center gap-3">
                    <Image src={session.user.image || "https://i.pravatar.cc/150"}
                    alt={session.user.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 object-cover"
                    />

                    <div>
                      <p className="font-semibold text-white">
                        {session.user.name}
                      </p>

                      <p className="text-sm text-slate-400">
                        {session.user.email}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/dashboard"
                    onClick={() => setOpen(false)}
                    className="mb-2 block rounded-lg bg-slate-800 px-3 py-2 text-white"
                  >
                    Dashboard
                  </Link>

                  <Button
                    onClick={handleLogout}
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link href="/login" onClick={() => setOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>

                  <Link href="/register" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-violet-600 hover:bg-violet-700">
                      Register
                    </Button>
                  </Link>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </header>
  );
}