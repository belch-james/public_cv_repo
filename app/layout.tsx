import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeRegistry } from "./ThemeRegistry";
import { LayoutClient } from "./LayoutClient";

export const metadata: Metadata = {
  title: "James Belch - Software Engineer",
  description:
    "Full stack engineer specializing in React, Next.js, FastAPI, and ASP.NET Core.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <LayoutClient>{children}</LayoutClient>
        </ThemeRegistry>
      </body>
    </html>
  );
}
