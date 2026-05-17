import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apple IDC — 服务器解决方案",
  description:
    "企业级服务器解决方案，为性能、可靠性和扩展性而生。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
