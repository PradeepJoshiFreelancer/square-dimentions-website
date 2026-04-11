import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Square Dimensions",
  description: "Vijay Pal Singh - Civil Engineer & Structural Consultant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="h-full w-full overflow-auto bg-[#F5F0EB]">
        <Navbar />
        <main id="app" className="h-full w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
// lang="en" className="h-full font-body scroll-smooth">
