import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import MusicHighlight from "@/components/MusicHighlight";
import Platforms from "@/components/Platforms";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-black">
      <Hero />
      <Bio />
      <MusicHighlight />
      <Platforms />
      <Footer />
    </main>
  );
}
