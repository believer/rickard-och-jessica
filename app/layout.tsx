import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Rickard & Jessica",
  description: "Bröllop 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
