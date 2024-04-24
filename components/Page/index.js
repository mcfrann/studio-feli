import styles from "./style.module.scss";
import Header from "./Header";
import Footer from "./Footer";

const Page = ({ children }) => {
  return (
    <section className={styles.page}>
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Page;
