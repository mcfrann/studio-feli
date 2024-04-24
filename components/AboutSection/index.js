import styles from "./style.module.scss";
import Link from "next/link";
import Sparkle from "../SVGs/Icons/sparkle";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutSection = ({ text }) => {
  const [headerFinished, setHeaderFinished] = useState(false);
  const { title, copy, button } = text;

  const sectionRef = useRef();
  const titleRef = useRef();
  const copyRef = useRef();
  const buttonRef = useRef();
  const iconRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(titleRef.current, {
      opacity: 1,
      duration: 0.5,
      y: 0,
      onComplete: () => setHeaderFinished(true),
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
      },
    });
    if (headerFinished) {
      gsap.to(copyRef.current, {
        opacity: 1,
        x: 0,
      });
      gsap.to(buttonRef.current, {
        delay: 1,
        opacity: 1,
      });
      gsap.to(iconRef.current, {
        delay: 1.25,
        opacity: 1,
        x: 0,
      });
    }
  }, [titleRef, sectionRef, copyRef, headerFinished, buttonRef, iconRef]);

  return (
    <section
      className={`${styles.aboutSection} section-padding`}
      ref={sectionRef}
    >
      <div className={styles.headerWrapper}>
        <h1 ref={titleRef}>{title}</h1>
      </div>
      <div className={styles.copyButtonContainer}>
        <p className={styles.copy} ref={copyRef}>
          {copy}
        </p>
        {button && (
          <div className={`${styles.button} button`} ref={buttonRef}>
            <Link href={button.href}>
              <span>{button.buttonTitle}</span>
            </Link>
          </div>
        )}
      </div>
      <div className={styles.iconContainer} ref={iconRef}>
        <Sparkle />
      </div>
    </section>
  );
};

export default AboutSection;
