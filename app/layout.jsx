import "@/styles/globals.css";

import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Lumina: A Platform for Creative Exploration",
  description:
    "Lumina is a platform for sharing and exploring AI prompts, encouraging creativity and collaboration among users. Discover the power of AI-generated content and unlock your creative potential with Lumina.",
  manifest: "/favicon/site.webmanifest",
  icons: {
    // Favicon
    icon: [
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    // Safari and iOS
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    // Android Chrome
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#ffffff", // Adjust this color to match your brand
      },
      {
        rel: "shortcut icon",
        url: "/favicon/favicon.ico",
      },
    ],
  },
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
