import { PROJECTS } from "../static/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-[48px] px-[4px]"
      id="projects"
    >
      {PROJECTS.map((project, index) => {
        const key = project.name + "-" + index;
        return <ProjectCard project={project} key={key} />;
      })}
    </section>
  );
};
