import styles from "./style.module.scss";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "../Hero";
import ServiceBar from "../ServiceBar";

const Page = () => {
  return (
    <section className={styles.page}>
      <Header />
      <Hero />
      <ServiceBar />
      <Footer />
    </section>
  );
};

export default Page;
