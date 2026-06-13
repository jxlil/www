import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Work from "@/components/site/Work";
import Projects from "@/components/site/Projects";
import Footer from "@/components/site/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="homepage-content" id="top">
        <Hero />
        <Projects />
        <Work />
        <Footer />
      </main>
    </>
  );
}
