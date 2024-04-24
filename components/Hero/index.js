import styles from "./style.module.scss";
import Logo from "../SVGs/Logo/logo";

const Hero = ({ text }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContentsContainer}>
        {text ? (
          <div className={styles.copyContainer}>
            <h1>{text.headline}</h1>
            <p>{text.copy}</p>
          </div>
        ) : (
          <Logo />
        )}
      </div>
    </section>
  );
};

export default Hero;
