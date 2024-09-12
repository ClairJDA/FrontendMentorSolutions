import { Inter, Overpass, Ubuntu } from "next/font/google";
import "./globals.css";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata = {
  title: "Blogr Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={overpass.className}>
        {children}
      </body>
    </html>
  );
}