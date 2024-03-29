import styles from "./style.module.scss";
import Header from "./Header";
import Footer from "./Footer";

const Page = () => {
  return (
    <section className={styles.page}>
      <Header />
      <Footer />
    </section>
  );
};

export default Page;
