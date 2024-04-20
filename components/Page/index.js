import styles from "./style.module.scss";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "../Hero";

const Page = () => {
  return (
    <section className={styles.page}>
      <Header />
      <Hero />
      <Footer />
    </section>
  );
};

export default Page;
