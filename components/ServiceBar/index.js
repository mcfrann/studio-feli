import styles from "./style.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ServiceBar = ({ text, alternate, red }) => {
  const barRef = useRef();
  const scrollRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.refresh();

    gsap.to(scrollRef.current, {
      scrollTrigger: {
        trigger: barRef.current,
        start: "bottom 95%",
        end: "bottom top",
        toggleActions: "play none none reverse",
        scrub: 3,
      },
      x: !alternate ? "-10%" : "10%",
    });
  }, [barRef, scrollRef]);

  return (
    <section
      className={`${styles.serviceBar} ${red && styles.red}`}
      ref={barRef}
    >
      <div
        className={`${styles.scrollSection} ${alternate && styles.alternate}`}
        ref={scrollRef}
      >
        {text.map((element, i) => {
          const { copy, icon } = element;
          return (
            <div className={styles.serviceWrapper} key={i}>
              {copy && <h2>{copy} </h2>}
              {icon && <div className={styles.icon}>{icon}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceBar;
