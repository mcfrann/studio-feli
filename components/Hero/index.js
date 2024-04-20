import styles from "./style.module.scss";
import Logo from "../SVGs/Logo/logo";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
    </section>
  );
};

export default Hero;
