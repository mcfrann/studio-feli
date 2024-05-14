import styles from "./style.module.scss";
import Header from "./Header";
import Footer from "./Footer";

const Page = ({ children, heroLoaded }) => {
  return (
    <section className={styles.page}>
      <Header />
      {children}
      {heroLoaded && <Footer />}
    </section>
  );
};

export default Page;
