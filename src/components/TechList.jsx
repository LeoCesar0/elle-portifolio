import { TECHS } from "../static/techs";

export const TechList = () => {
  return (
    <>
      {TECHS.map((item) => {
        return (
          <img
            key={item.label}
            src={`icons/${item.icon}.svg`}
            alt={item.label}
            className="w-[40px] h-[40px] inline-block"
          />
        );
      })}
    </>
  );
};
