import type { Metadata } from "next";

import "./globals.css";
import { Navigation } from "@/UI/Navigation";
import Topology from "../../public/images/Topology-1.png";
export const metadata: Metadata = {
  title: "Robinson March",
  description: "We have the capacity to handle your enterprise software needs",
  icons: {
    icon: "../../public/images/Topology-1.png",
  },
  openGraph: {
    title: "Robinson March",
    description:
      "We have the capacity to handle your enterprise software needs",
    images: ["../../public/images/Topology-1.png"],
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
