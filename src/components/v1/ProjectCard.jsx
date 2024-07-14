import { useT } from "../../hooks/useT";
import { Button } from "../Button";

export const ProjectCard = ({ project, index }) => {
  const name = project.name || "";
  const key = name + "-" + index;
  const imagePath = "projects/" + project.image;
  const titleImagePath = "projects/" + project.titleImage;
  const description =
    typeof project.description === "string"
      ? project.description
      : useT(project.description);
  return (
    <article key={key} className="grid grid-cols-1 gap-4  md:grid-cols-2">
      <img
        className="rounded-[10px] project-card-shadow bg-cover "
        src={imagePath}
        alt={`Project Image ${project.name}`}
      />
      <div className="p-[22px] rounded-[10px] border border-[rgba(255, 242, 236, 1)] md:border-0">
        <div className="md:px-2 mb-[40px] md:mb-[24px]">
          <img
            className="mb-[24px] md:mb-[10px]"
            src={titleImagePath}
            alt={project.name}
          />
          <p>{description}</p>
          <Tags tags={project.tags} className="hidden md:flex mt-2" />
        </div>
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
          <Tags tags={project.tags} className="md:hidden" />
        </div>
      </div>
    </article>
  );
};

export const Tags = ({ tags, className = "" }) => {
  return (
    <ul className={`flex items-center gap-4 flex-wrap ${className}`}>
      {tags.map((tag, i) => {
        return (
          <li key={`tag-${i}`}>
            <img src={`icons/${tag}.svg`} alt={tag} />
          </li>
        );
      })}
    </ul>
  );
};
