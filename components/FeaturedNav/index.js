import styles from "./style.module.scss";
import Link from "next/link";
import Arrow from "../SVGs/Icons/arrow";

const FeaturedNav = () => {
  const nav = {
    title: "Find out more",
    navItems: [
      { name: "About Us", href: "/about" },
      { name: "All Projects", href: "/projects" },
      { name: "Price Packages", href: "/pricing" },
    ],
  };

  const renderNavItems = () => {
    return nav.navItems.map((item, i) => {
      const { name, href } = item;
      return (
        <Link href={href} key={`feat-nav-item-${i}`}>
          <div className={styles.featuredNavButton}>
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
    <section className={`${styles.featuredNavSection} section-padding`}>
      <span className={`${styles.navTitle} subtitle`}>Find out more</span>
      <div className={styles.navContainer}>{renderNavItems()}</div>
    </section>
  );
};

export default FeaturedNav;
