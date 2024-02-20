import Header from "./header";
import Background from "./background";
import Skills from "./skills";
import Experience from "./experience";
import Footer from "./footer";
import Switch from "./switch";

export default function Home() {
  return (
    <>
      <Switch />
      <Header />
      <Background />
      <Skills />
      <Experience />
      <Footer />
    </>
  );
}
