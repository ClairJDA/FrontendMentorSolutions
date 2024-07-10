import Image from "next/image";

import MainHeader from "@/components/main-header/main-header";
import DesktopFeature from "@/components/feature/feature-desktop";
import KeyFeature from "@/components/feature/key-feature";
import FeatureLaptop from "@/components/feature/feature-laptop";
import Footer from "@/components/footer/footer";


export default function Home() {
  return (
    <main>
      <MainHeader />
      <DesktopFeature />
      <KeyFeature />
      <FeatureLaptop />
      <Footer />
    </main>
  );
}
