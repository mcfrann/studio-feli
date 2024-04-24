import styles from "../styles/Home.module.scss";
import Page from "../components/Page";
import Hero from "../components/Hero";
import ServiceBar from "../components/ServiceBar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import FeaturedNav from "../components/FeaturedNav";
import { servicesBar } from "../utils/barText";
import { home } from "../utils/aboutText";

export default function Home() {
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
