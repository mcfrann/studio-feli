import styles from "./style.module.scss";
import Star from "../SVGs/Icons/star";
import Sparkle from "../SVGs/Icons/sparkle";
import Burst from "../SVGs/Icons/burst";

const ServiceBar = () => {
  const services = [
    { service: "Visual Design", icon: <Star /> },
    { service: "Web Development", icon: <Sparkle /> },
    { service: "Photography", icon: <Burst /> },
  ];

  return (
    <section className={styles.serviceBar}>
      {services.map((element, i) => {
        const { service, icon } = element;
        return (
          <div className={styles.serviceWrapper} key={i}>
            {service && <h2>{service} </h2>}
            {icon && <div className={styles.icon}>{icon}</div>}
          </div>
        );
      })}
    </section>
  );
};

export default ServiceBar;
