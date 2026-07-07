import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-gray-50">
      <div className="container py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Logo */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
                I
              </div>

              <h2 className="text-xl font-bold">
                IdeaVault
              </h2>
            </div>

            <p className="text-sm text-gray-600">
              Discover innovative startup ideas,
              share your vision and collaborate
              with creative entrepreneurs.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-600">

              <Link href="/">Home</Link>

              <Link href="/ideas">
                Ideas
              </Link>

              <Link href="/login">
                Login
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">
              Contact
            </h3>

            <p className="text-gray-600">
              support@ideavault.com
            </p>

            <div className="mt-5 flex gap-4 text-xl">

              <FaFacebookF className="cursor-pointer transition hover:text-indigo-600" />

              <FaGithub className="cursor-pointer transition hover:text-indigo-600" />

              <FaLinkedinIn className="cursor-pointer transition hover:text-indigo-600" />

            </div>

          </div>

        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} IdeaVault.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}