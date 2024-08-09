import type { Metadata } from "next";

import "./globals.css";
import { Navigation } from "@/UI/Navigation";
import Topology from "../../public/images/Topology-1.png";
export const metadata: Metadata = {
  title: "Robinson March",
  description: "We have the capacity to handle your enterprise software needs",
  icons: {
    icon: "https://firebasestorage.googleapis.com/v0/b/tbd-project-c8623.appspot.com/o/Instagram%20post%20-%202.png?alt=media&token=c6bfd4c8-1184-41c4-b194-b69782d7c294",
  },
  openGraph: {
    title: "Robinson March",
    description:
      "We have the capacity to handle your enterprise software needs",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/tbd-project-c8623.appspot.com/o/Instagram%20post%20-%202.png?alt=media&token=c6bfd4c8-1184-41c4-b194-b69782d7c294",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto py-5">
        <Navigation />
        <div>{children}</div>
      </body>
    </html>
  );
}
