import "@/styles/globals.css";

import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Lumina: A Platform for Creative Exploration",
  description:
    "Lumina is a platform for sharing and exploring AI prompts, encouraging creativity and collaboration among users. Discover the power of AI-generated content and unlock your creative potential with Lumina.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
