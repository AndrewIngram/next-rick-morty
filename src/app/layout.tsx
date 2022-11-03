import * as React from "react";
import { AnalyticsWrapper } from "~/components/Analytics";

import Link from "next/link";

import "~/styles/global.css";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="antialiased bg-neutral-100">
      <head>
        <title>Hacker News Clone</title>
      </head>
      <body className="text-neutral-900">
        <header className="bg-neutral-800 text-white text-md sticky top-0 shadow-sm ">
          <nav className="py-4 max-w-4xl w-full flex gap-6 mx-auto">
            <h1 className="font-extrabold">
              <Link href="/" prefetch={false}>
                RSC Data Loading
              </Link>
            </h1>
          </nav>
          <span className="block bg-gradient-to-r from-[#42B4CA] to-[#BFDE42] h-1 w-full"></span>
        </header>
        <section className="px-9 py-6">
          <div className="max-w-4xl mx-auto w-full">{children}</div>
        </section>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
