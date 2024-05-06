import styles from "./style.module.scss";
import { projects } from "../../utils/projects";
import ImageRender from "../ImageRender/ImageRender";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

const ProjectsSection = () => {
  const [headerFinished, setHeaderFinished] = useState(false);

  const sectionRef = useRef();
  const titleRef = useRef();
  const projectCardsRef = useRef();
  projectCardsRef.current = [];
  const buttonRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !projectCardsRef.current.includes(el)) {
      projectCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    ScrollTrigger.refresh();

    gsap.to(titleRef.current, {
      opacity: 1,
      duration: 0.5,
      y: 0,
      onComplete: () => setHeaderFinished(true),
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
      },
    });
    if (headerFinished) {
      gsap.to(projectCardsRef.current, {
        opacity: 1,
        duration: 0.5,
        x: 0,
        stagger: 0.3,
      });
    }
    if (buttonRef) {
      gsap.to(buttonRef.current, {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "bottom 90%",
        },
      });
    }
  }, [titleRef, projectCardsRef, sectionRef, buttonRef, headerFinished]);

  const renderProjects = () => {
    return projects.map((project, i) => {
      const { name, image, description } = project;
      return (
        <div className={styles.projectCard} ref={addToRefs}>
          <ImageRender image={image} />
        </div>
      );
    });
  };

  return (
    <section
      className={`${styles.projectsSection} section-padding top-only`}
      ref={sectionRef}
    >
      <div className={styles.headerWrapper}>
        <h1 ref={titleRef}>Our Work</h1>
      </div>
      <div className={styles.projectsContainer}>{renderProjects()}</div>
      {projects.length > 2 && (
        <div className={`${styles.button} button`} ref={buttonRef}>
          <Link href={"/projects"}>
            <span>All Projects</span>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
