import styles from "./style.module.scss";
import { projects } from "../../utils/projects";
import ImageRender from "../ImageRender/ImageRender";

const ProjectsSection = () => {
  const renderProjects = () => {
    return projects.map((project, i) => {
      const { name, image, description } = project;
      return (
        <div className={styles.projectCard}>
          <ImageRender image={image} />
        </div>
      );
    });
  };

  return (
    <section className={`${styles.projectsSection} section-padding top-only`}>
      <div className={styles.headerWrapper}>
        <h1>Our Work</h1>
      </div>
      <div className={styles.projectsContainer}>{renderProjects()}</div>
    </section>
  );
};

export default ProjectsSection;
