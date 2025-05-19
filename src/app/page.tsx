
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Body from "@/components/Body";
import Projects from "@/components/Projects";
import Background from "@/components/Background";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Intakeform from "@/components/Intakeform";
import Footer from "@/components/Footer";
import HourlyApp from "@/components/HourlyApp";
import { BrowserRouter } from "react-router-dom";
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
