import { useT } from "../hooks/useT";
import { PROJECTS } from "../static/projects";
import { Button } from "./Button";

export const ProjectsSection = () => {
  return (
    <section className="grid grid-cols-1 gap-[56px]">
      {PROJECTS.map((project, index) => {
        const name = project.name || "";
        const key = name + "-" + index;
        const imagePath = "projects/" + project.image;
        const titleImagePath = "projects/" + project.titleImage;
        const description =
          typeof project.description === "string"
            ? project.description
            : useT(project.description);
        return (
          <article key={key} className="grid grid-cols-1 gap-4">
            <img
              className="rounded-[10px] card-shadow bg-cover "
              src={imagePath}
              alt={`Project Image ${project.name}`}
            />
            <div className="p-[22px] rounded-[10px] border border-[rgba(255, 242, 236, 1)]">
              <img
                className="mb-[24px]"
                src={titleImagePath}
                alt={project.name}
              />
              <p className="mb-[40px]">{description}</p>
              <div className="flex items-center gap-4">
                <div className="buttons">
                  {project.buttons.map((button, i) => {
                    return (
                      <Button
                        key={`button-${key}-${i}`}
                        href={button.link}
                        style={{
                          backgroundColor: button.buttonColor,
                          color: button.buttonTextColor,
                        }}
                        as="a"
                        target="_blank"
                      >
                        {button.text.en}
                      </Button>
                    );
                  })}
                </div>
                <ul>
                  {project.tags.map((tag, i) => {
                    return (
                      <li key={`tag-${i}`}>
                        <img src={`icons/${tag}.svg`} alt={tag} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
