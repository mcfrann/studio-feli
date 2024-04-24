import styles from "./style.module.scss";
import { bios } from "../../utils/bios";
import BioBlock from "./BioBlock";

const BioSection = () => {
  const renderBios = () => {
    return bios.map((bio, i) => {
      let alternate = i % 2 === 0 || i === 0;
      return (
        <BioBlock
          bio={bio}
          alternate={alternate}
          last={i === bios.length - 1}
          key={`bio-block-${i}`}
        />
      );
    });
  };

  return <section className={styles.bioSection}>{renderBios()}</section>;
};

export default BioSection;
