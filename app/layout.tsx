import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fat Analysis in Chips - Chemistry Project Cover",
  description:
    "A modern A4 cover design for a Class 12 Chemistry project on Fat Analysis in Chips."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
