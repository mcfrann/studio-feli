import styles from "./style.module.scss";
import Logo from "../SVGs/Logo/logo";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = ({ text, setHeroLoaded }) => {
  const headlineRef = useRef();
  headlineRef.current = [];
  const copyRef = useRef();

  const addToHeadline = (el) => {
    if (el && !headlineRef.current.includes(el)) {
      headlineRef.current.push(el);
    }
  };

  const renderHeadline = () => {
    const headlineArray = text.headline.split("");
    return headlineArray.map((letter, i) => {
      return (
        <h1
          ref={addToHeadline}
          key={`headline-letter-${i}`}
          className={`${styles.letter} ${letter === " " && styles.space}`}
        >
          {letter}
        </h1>
      );
    });
  };

  useEffect(() => {
    if (text && text.copy && text.headline) {
      var tl = gsap.timeline();
      tl.to(
        headlineRef.current,
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
        },
        0
      ).to(
        copyRef.current,
        {
          opacity: 1,
          onComplete: () => setHeroLoaded(true),
        },
        ">"
      );
    }
  }, [headlineRef, copyRef, text]);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContentsContainer}>
        {text ? (
          <div className={styles.copyContainer}>
            <div className={styles.headlineContainer}>{renderHeadline()}</div>
            <p className={styles.copy} ref={copyRef}>
              {text.copy}
            </p>
          </div>
        ) : (
          <Logo />
        )}
      </div>
    </section>
  );
};

export default Hero;
