import styles from "./sparkle.module.scss";

const Sparkle = () => {
  return (
    <svg viewBox="0 0 58 58" className={styles.sparkle}>
      <path d="M29 0L36.8326 21.1674L58 29L36.8326 36.8326L29 58L21.1674 36.8326L0 29L21.1674 21.1674L29 0Z" />
    </svg>
  );
};

export default Sparkle;
