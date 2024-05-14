import styles from "./style.module.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "../../SVGs/Logo/logo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { navItems } from "../../../utils/navItems";

const Header = ({ homepage, firstLoad, setFirstLoad }) => {
  const [showSmallNav, setShowSmallNav] = useState(false);

  const contactRef = useRef();
  const headerRef = useRef();
  const navItemRef = useRef();
  navItemRef.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !navItemRef.current.includes(el)) {
      navItemRef.current.push(el);
    }
  };

  // useEffect(() => {
  //   if (firstLoad) {
  //     gsap.to(contactRef.current, {
  //       delay: 1,
  //       opacity: 1,
  //       y: 0,
  //       duration: 0.5,
  //     });
  //     gsap.to(navItemRef.current, {
  //       opacity: 1,
  //       y: 0,
  //       delay: 1.25,
  //       duration: 0.5,
  //       stagger: 0.2,
  //       onComplete: () => setFirstLoad(false),
  //     });
  //   }
  // }, [contactRef, navItemRef, borderRef, firstLoad]);

  const renderNavItems = (small) => {
    return navItems.map((item, i) => {
      const { nav, href } = item;
      return (
        <div
          className={`primary-link ${styles.navButton}`}
          key={`nav-item-${i}`}
          ref={addToRefs}
        >
          <Link href={href}>{small ? <span>{nav}</span> : <h2>{nav}</h2>}</Link>
        </div>
      );
    });
  };

  return (
    <div
      className={`${styles.header} ${homepage && styles.homepage} ${
        firstLoad && styles.firstLoad
      }`}
      ref={headerRef}
    >
      <div className={styles.headerWrapper}>
        <div className={styles.logoContainer}>
          <Logo link={true} />
        </div>
        <div className={styles.navContainer}>
          {renderNavItems(true)}
          <div
            className={`${styles.hamburger} ${showSmallNav && styles.close}`}
            onClick={() => setShowSmallNav(!showSmallNav)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.contactContainer} ref={contactRef}>
          <div className={`${styles.contactButton} button`} ref={addToRefs}>
            <Link href={"/contact"}>
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${styles.smallNav} ${
          showSmallNav ? styles.show : styles.hide
        }`}
      >
        {renderNavItems()}
      </div>
    </div>
  );
};

export default Header;
