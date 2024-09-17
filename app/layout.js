import {Barlow, Fraunces} from 'next/font/google';
import "./globals.css";

const barlow = Barlow({
  subsets: ['latin'],
  weight: '600',
});
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700', '900'],
});


export const metadata = {
  title: "SunnySides Landing Page",
  description: "SunnySide Agency Demo Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}
