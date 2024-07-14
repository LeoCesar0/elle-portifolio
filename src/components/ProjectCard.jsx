import { useT } from "../hooks/useT";
import { Button } from "./Button";

export const ProjectCard = ({ project }) => {
  const imagePath = "projects/" + project.image;
  const description =
    typeof project.description === "string"
      ? project.description
      : useT(project.description);
  const title = project.name;

  return (
    <article className="block">
      <h2 className="font-bold text-2xl mb-4">{title}</h2>
      <p className="font-medium text-xl text-muted mb-6">{description}</p>
      <img
        src={imagePath}
        alt={title}
        className="project-image-shadow block mx-auto"
      />
      <div className="mt-6 md:mt-8 lg:mt-10 flex gap-2 lg:gap-3 flex-wrap sm:flex-nowrap items-center justify-between">
        {project.buttons.map((button, i) => {
          const text = useT(button.text);
          return (
            <Button
              key={`button-${project.name}-${i}`}
              href={button.link}
              variant={button.type || "primary"}
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              className={"flex-1 max-w-[280px]"}
            >
              {text}
            </Button>
          );
        })}
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
