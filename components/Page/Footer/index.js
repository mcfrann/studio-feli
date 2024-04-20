import styles from "./style.module.scss";
import { navItems } from "../../../utils/navItems";
import Link from "next/link";

const Footer = () => {
  const renderNavItems = () => {
    return navItems.map((item, i) => {
      const { nav, href } = item;
      return (
        <div className={styles.navButton} key={`nav-item-${i}`}>
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
        <p>Let's Create Something Together</p>
        <p>studiofeli@gmail.com</p>
      </div>
      <div className={styles.footerBar}>
        <div className={styles.tidbit}>Enjoying sunshine in Mexico.</div>
        <div className={styles.footerNav}>{renderNavItems()}</div>
        <div className={styles.copyright}>Copyright © studio feli 2024</div>
      </div>
    </section>
  );
};

export default Footer;
