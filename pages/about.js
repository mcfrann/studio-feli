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
    headline: "Who We Are",
    copy: "As a dynamic woman duo with a shared passion for design and collaboration, we thrive in the intersection of creativity and technology.",
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
