import styles from "./style.module.scss";
import ImageRender from "../../ImageRender/ImageRender";

const BioBlock = ({ bio, alternate }) => {
  const { name, title, copy, image } = bio;
  return (
    <div className={`${styles.bioBlock} ${alternate && styles.alternate}`}>
      <div className={`${styles.textContainer} section-padding`}>
        <p>{title}</p>
        <h2>{name}</h2>
        <p className={`body-small`}>{copy}</p>
      </div>
      <div className={styles.imageContainer}>
        <ImageRender image={image} />
      </div>
    </div>
  );
};

export default BioBlock;
