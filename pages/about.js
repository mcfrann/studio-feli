import Page from "../components/Page";
import Hero from "../components/Hero";
import BioSection from "../components/BioSection";
import AboutSection from "../components/AboutSection";
import { about } from "../utils/aboutText";

export default function About() {
  const text = {
    headline: "Who We Are",
    copy: "As a dynamic woman duo with a shared passion for design and collaboration, we thrive in the intersection of creativity and technology.",
  };

  return (
    <Page>
      <Hero text={text} />
      <BioSection />
      <AboutSection text={about} />
    </Page>
  );
}
