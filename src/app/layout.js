import "./globals.css";

export const metadata = {
  title: "Framer Motion Showcase",
  description: "Framer Motion animation intergration in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
