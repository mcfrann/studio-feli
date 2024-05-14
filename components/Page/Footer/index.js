import styles from "./style.module.scss";
import { navItems } from "../../../utils/navItems";
import Link from "next/link";
import Sparkle from "../../SVGs/Icons/sparkle";

const Footer = () => {
  const renderNavItems = () => {
    return navItems.map((item, i) => {
      const { nav, href } = item;
      return (
        <div
          className={`primary-link inverse ${styles.navButton}`}
          key={`nav-item-${i}`}
        >
          <Link href={href}>
            <span>{nav}</span>
          </Link>
        </div>
      );
    });
  };

  return (
    <section className={styles.footer}>
      <div className={styles.emailContainer}>
        <p className={styles.copy}>Let's create something together.</p>
        <div className={`primary-link inverse`}>
          <a
            href={`mailto:studiofeli@gmail.com`}
            className={`big ${styles.email}`}
          >
            studiofeli@gmail.com
          </a>
        </div>
      </div>
      <div className={styles.footerBar}>
        <div className={styles.tidbit}>
          <div className={styles.iconContainer}>
            <Sparkle />
          </div>
          Enjoying sunshine in Mexico.
        </div>
        <div className={styles.footerNav}>{renderNavItems()}</div>
        <div className={styles.copyright}>Copyright © studio feli 2024</div>
      </div>
    </section>
  );
};

export default Footer;
