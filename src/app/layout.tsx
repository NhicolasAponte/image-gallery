import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Image Gallery",
  description: "A simple image gallery as a react and nextjs exercise",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black border-b border-slate-400">
      <h1 className="text-2xl font-bold">Image Gallery</h1>
      <button className="px-4 py-2 bg-blue-500 rounded">Login</button>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col gap-6">
        <TopNav />
        {children}
        </body>
    </html>
  );
}
