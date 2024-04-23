import styles from "./style.module.scss";
import Link from "next/link";
import Arrow from "../SVGs/Icons/arrow";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const FeaturedNav = () => {
  const nav = {
    title: "Find out more",
    navItems: [
      { name: "About Us", href: "/about" },
      { name: "All Projects", href: "/projects" },
      { name: "Price Packages", href: "/pricing" },
    ],
  };

  const sectionRef = useRef();
  const titleRef = useRef();
  const navItemsRef = useRef();
  navItemsRef.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.to(titleRef.current, {
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
      },
    });
    gsap.to(navItemsRef.current, {
      delay: 0.5,
      opacity: 1,
      duration: 0.5,
      x: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
      },
    });
  }, [titleRef, navItemsRef, sectionRef]);

  const renderNavItems = () => {
    return nav.navItems.map((item, i) => {
      const { name, href } = item;
      return (
        <Link href={href} key={`feat-nav-item-${i}`}>
          <div className={styles.featuredNavButton} ref={addToRefs}>
            <h1>{name}</h1>
            <div className={styles.iconContainer}>
              <Arrow />
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <section
      className={`${styles.featuredNavSection} section-padding`}
      ref={sectionRef}
    >
      <span className={`${styles.navTitle} subtitle`} ref={titleRef}>
        Find out more
      </span>
      <div className={styles.navContainer}>{renderNavItems()}</div>
    </section>
  );
};

export default FeaturedNav;
