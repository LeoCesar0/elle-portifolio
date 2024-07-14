import clsx from "clsx";
import { useT } from "../hooks/useT";
import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

export const Card = ({ imagePath, title, description, index }) => {
  const _title = useT(title);
  const _description = useT(description);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const delay = 200 * index;
  return (
    <div
      ref={ref}
      className={clsx([
        "px-[24px] py-[38px] grid grid-cols-1 gap-[42px] card-shadow",
        "animate-ease-in-out",
        // `animate-delay-[${200 * index}ms]`,
        {
          "animate-fade-up": isVisible,
        },
      ])}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <img className="mx-auto" src={imagePath} alt={title} />
      <div className="text-center">
        <h2 className="mb-[12px] text-center text-[27px] leading-[42px] font-semibold">
          {_title}
        </h2>
        <p className="text-center text-[17px] leading-[27px]">{_description}</p>
      </div>
    </div>
  );
};
