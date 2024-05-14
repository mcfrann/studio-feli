import Page from "../components/Page";
import Hero from "../components/Hero";
import BioSection from "../components/BioSection";
import AboutSection from "../components/AboutSection";
import { about } from "../utils/aboutText";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function About() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  const text = {
    headline: "Happy People Make Happy Work",
    copy: "As a freelance pair with a passion for creativity, we created Feli to nurture our own inventive spark and assist brands in their growth journey, one project at a time.",
  };

  return (
    <Page heroLoaded={heroLoaded}>
      <Hero text={text} setHeroLoaded={setHeroLoaded} />
      {heroLoaded && (
        <>
          <BioSection />
          <AboutSection text={about} />
        </>
      )}
    </Page>
  );
}
