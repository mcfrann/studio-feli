import styles from "./style.module.scss";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "../Hero";
import ServiceBar from "../ServiceBar";
import About from "../About";
import ProjectsSection from "../ProjectsSection";

const Page = () => {
  return (
    <section className={styles.page}>
      <Header />
      <Hero />
      <ServiceBar />
      <ProjectsSection />
      <About />
      <Footer />
    </section>
  );
};

export default Page;
