import { useT } from "../hooks/useT";

export const Card = ({ imagePath, title, description }) => {
  const _title = useT(title);
  const _description = useT(description);

  return (
    <div className="px-[24px] py-[38px] grid grid-cols-1 gap-[42px] card-shadow">
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
