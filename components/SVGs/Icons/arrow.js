import styles from "./arrow.module.scss";

const Arrow = () => {
  return (
    <svg viewBox="0 0 100 100" className={styles.arrow}>
      <path d="M34.4482 23.0261L78.7374 21.263L76.9742 65.5521" />
      <path d="M78.4126 21.5874L21.9824 78.0176" />
    </svg>
  );
};

export default Arrow;
