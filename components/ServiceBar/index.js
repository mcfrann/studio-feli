import styles from "./style.module.scss";
import Star from "../SVGs/Icons/star";
import Sparkle from "../SVGs/Icons/sparkle";
import Burst from "../SVGs/Icons/burst";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ServiceBar = () => {
  const services = [
    { service: "Visual Design", icon: <Star /> },
    { service: "Web Development", icon: <Sparkle /> },
    { service: "Photography", icon: <Burst /> },
    { service: "Visual Design", icon: <Star /> },
    { service: "Web Development", icon: <Sparkle /> },
    { service: "Photography", icon: <Burst /> },
  ];

  const barRef = useRef();
  const scrollRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(scrollRef.current, {
      scrollTrigger: {
        trigger: barRef.current,
        start: "bottom 95%",
        toggleActions: "play none none reverse",
        scrub: 3,
      },
      x: "-10%",
    });
  }, [barRef, scrollRef]);

  return (
    <section className={styles.serviceBar} ref={barRef}>
      <div className={styles.scrollSection} ref={scrollRef}>
        {services.map((element, i) => {
          const { service, icon } = element;
          return (
            <div className={styles.serviceWrapper} key={i}>
              {service && <h2>{service} </h2>}
              {icon && <div className={styles.icon}>{icon}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceBar;
