import { SOCIAL_MEDIAS } from "../static/links";
import { ReactSVG } from "react-svg";

export const SocialMediasList = ({ main }) => {
  const list = main
    ? SOCIAL_MEDIAS.filter((item) => !!item.main)
    : SOCIAL_MEDIAS;

  return (
    <>
      {list.map((item) => {
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-[40px] h-[40px] text-white rounded-full"
          >
            <span className="sr-only">{item.label}</span>
            <ReactSVG
              src={`icons/${item.icon}.svg`}
              alt={item.label}
              className="w-full h-full items-center flex"
            />
          </a>
        );
      })}
    </>
  );
};
