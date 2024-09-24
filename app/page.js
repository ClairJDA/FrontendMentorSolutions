import Header from "@/components/header";
import MainContent from "@/components/main-content";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="h-dvh max-w-screen-xl md:mx-auto">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
