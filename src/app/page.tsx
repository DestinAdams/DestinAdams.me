
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Background from "@/components/Background";
import Skills from "@/components/Skills";


import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}
