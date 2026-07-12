import "./globals.css";
import { Toaster } from "sonner";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "IdeaVault",
    template: "%s | IdeaVault",
  },
  description: "Startup Idea Sharing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${manrope.className} min-h-screen flex flex-col`}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}