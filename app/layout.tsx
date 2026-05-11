import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GhostGuard – Candidate Ghosting Predictor",
  description: "AI-powered tool that predicts candidate ghosting likelihood and recommends optimal intervention timing for recruiters and HR teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="dc48b0c1-b449-42c8-aa49-9296a39ef9e8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
