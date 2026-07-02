import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
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
      <body className={`${jakarta.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}