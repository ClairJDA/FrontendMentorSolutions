import { Commissioner } from "next/font/google";
import "./globals.css";

const commissioner = Commissioner({ 
  weight: ["400", "500", "700"], 
  style: ["normal"],
  subsets: ["latin"] 
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${commissioner.className} antialiased`} >
        {children}
      </body>
    </html>
  );
}
