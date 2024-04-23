import styles from "./style.module.scss";
import Link from "next/link";

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
        <div className={styles.featuredNavButton} key={`feat-nav-item-${i}`}>
          <Link href={href}>
            <h1>{name}</h1>
          </Link>
        </div>
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
