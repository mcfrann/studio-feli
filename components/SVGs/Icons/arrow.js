import styles from "./arrow.module.scss";

const Arrow = () => {
  return (
    <svg viewBox="0 0 63 64" className={styles.arrow}>
      <path d="M48.9378 9.46244H14.9564V0.935547L63 0.999289V49H54L54.5284 15.0464L5.59009 63.9355L0 58.3511L48.9378 9.46244Z" />
    </svg>
  );
};

export default Arrow;
