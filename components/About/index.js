import styles from "./style.module.scss";
import Link from "next/link";
import Sparkle from "../SVGs/Icons/sparkle";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.headerWrapper}>
        <h1>Let us bring your creative vision to life.</h1>
      </div>
      <div className={styles.copyButtonContainer}>
        <p className={styles.copy}>
          At the heart of our creative process we embark on a journey of
          exploration and collaboration, leveraging the diverse perspectives
          within our team to forge unique solutions.
        </p>
        <div className={`${styles.button} button`}>
          <Link href={"/contact"}>
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
      <div className={styles.iconContainer}>
        <Sparkle />
      </div>
    </section>
  );
};

export default About;
