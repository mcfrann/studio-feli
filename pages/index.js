import styles from "../styles/Home.module.scss";
import Page from "../components/Page";
import Hero from "../components/Hero";
import ServiceBar from "../components/ServiceBar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import FeaturedNav from "../components/FeaturedNav";
import { servicesBar } from "../utils/barText";
import { home } from "../utils/aboutText";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <section className={styles.homepageContainer}>
      <Page>
        <Hero />
        <ServiceBar text={servicesBar} />
        <ProjectsSection />
        <AboutSection text={home} />
        <FeaturedNav />
      </Page>
    </section>
  );
}
