import "@/styles/globals.css";

export const metadata = {
  title: "Lumina: A Platform for Creative Exploration",
  description:
    "Lumina is a platform for sharing and exploring AI prompts, encouraging creativity and collaboration among users. Discover the power of AI-generated content and unlock your creative potential with Lumina.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
