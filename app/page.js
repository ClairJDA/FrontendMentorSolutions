import Image from "next/image";

import Header from "@/components/header";
import Intro from "@/components/Intro";
import Testimonials from "@/components/testimonials";
import Outro from "@/components/outro";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Intro />
      <Testimonials />
      <Outro />
      <Footer />
    </div>
  );
}
