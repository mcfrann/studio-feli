import styles from "./style.module.scss";
import { projects } from "../../utils/projects";

const ProjectsSection = () => {
  console.log(projects, "projects");
  return (
    <section className={`${styles.projectsSection} section-padding`}>
      <h1>Our Work</h1>
      <div className={styles.projectsContainer}></div>
    </section>
  );
};

export default ProjectsSection;
