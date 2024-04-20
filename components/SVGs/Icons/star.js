import styles from "./star.module.scss";

const Star = () => {
  return (
    <svg viewBox="0 0 58 58" className={styles.star}>
      <path d="M29 0L34.5385 19.407L54.1147 14.5L40.077 29L54.1147 43.5L34.5385 38.593L29 58L23.4615 38.593L3.88526 43.5L17.923 29L3.88526 14.5L23.4615 19.407L29 0Z" />
    </svg>
  );
};

export default Star;
