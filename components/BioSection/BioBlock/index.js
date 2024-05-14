import styles from "./style.module.scss";
import ImageRender from "../../ImageRender/ImageRender";
import ServiceBar from "../../ServiceBar";
import { aboutBar } from "../../../utils/barText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const BioBlock = ({ bio, alternate, last }) => {
  const { name, title, copy, image } = bio;

  const blockRef = useRef();
  const borderRef = useRef();
  const imageRef = useRef();
  const textRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (blockRef && imageRef && textRef) {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: blockRef.current,
          start: "top 75%",
        },
      });
      tl.to(
        borderRef.current,
        {
          duration: 1.5,
          width: "100vw",
        },
        0
      ).to(
        [imageRef.current, textRef.current],
        {
          duration: 0.75,
          x: 0,
          opacity: 1,
          stagger: 0.35,
        },
        1
      );
    }
  }, [blockRef, borderRef, imageRef, textRef]);

  return (
    <div className={styles.bioBlockWrapper} ref={blockRef}>
      <div className={styles.borderTop} ref={borderRef}></div>
      <div
        className={`${styles.bioBlock} ${alternate && styles.alternate} ${
          last && styles.last
        }`}
      >
        <div
          className={`${styles.textContainer} section-padding`}
          ref={textRef}
        >
          <p>{title}</p>
          <h2>{name}</h2>
          <p className={`body-small`}>{copy}</p>
        </div>
        <div className={styles.imageContainer} ref={imageRef}>
          <ImageRender image={image} />
        </div>
      </div>
      {!last && <ServiceBar text={aboutBar} alternate={alternate} red={true} />}
    </div>
  );
};

export default BioBlock;
