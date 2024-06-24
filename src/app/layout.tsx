import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "./_components/TopNav";

export const metadata = {
  title: "Image Gallery",
  description: "A simple image gallery as a react and nextjs exercise",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col gap-6">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
