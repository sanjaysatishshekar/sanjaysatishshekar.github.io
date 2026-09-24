import Header from "./header";
import Background from "./background";
import Skills from "./skills";
import Experience from "./experience";
import Footer from "./footer";
import CursorGlow from "./cursor-glow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Header />
      <Background />
      <Experience />
      <Skills />
      <Footer />
    </>
  );
}
