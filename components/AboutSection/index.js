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
  copyRef.current = [];
  const buttonRef = useRef();
  const iconRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  const addToBlocks = (el) => {
    if (el && !copyRef.current.includes(el)) {
      copyRef.current.push(el);
    }
  };

  useEffect(() => {
    ScrollTrigger.refresh();
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
      },
    });

    if (titleRef && titleRef.current) {
      tl.to(
        titleRef.current,
        {
          opacity: 1,
          duration: 0.5,
          y: 0,
        },
        0
      );
    }
    if (copyRef && copyRef.current) {
      tl.to(
        copyRef.current,
        {
          duration: 0.5,
          opacity: 1,
          x: 0,
          stagger: 0.4,
        },
        ">"
      );
    }
    if (buttonRef && buttonRef.current) {
      tl.to(
        buttonRef.current,
        {
          opacity: 1,
        },
        ">"
      );
    }
    if (iconRef && iconRef.current) {
      tl.to(
        iconRef.current,
        {
          opacity: 1,
          x: 0,
        },
        ">"
      );
    }
  }, [titleRef, sectionRef, copyRef, headerFinished, buttonRef, iconRef]);

  const renderCopy = () => {
    return copy.map((block, i) => {
      return (
        <p
          className={styles.copyBlock}
          key={`copy-block-${i}`}
          ref={addToBlocks}
        >
          {block}
        </p>
      );
    });
  };

  return (
    <section
      className={`${styles.aboutSection} section-padding`}
      ref={sectionRef}
    >
      <div className={styles.headerWrapper}>
        <h1 ref={titleRef}>{title}</h1>
      </div>
      <div className={styles.copyButtonContainer}>
        <div className={styles.copy}>{renderCopy()}</div>
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
