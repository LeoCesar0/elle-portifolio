export const Card = ({ imagePath, title, description }) => {
  return (
    <div className="px-[24px] py-[38px] grid grid-cols-1 gap-[42px] card-shadow">
      <img className="mx-auto" src={imagePath} alt={title} />
      <div className="text-center">
        <h2 className="mb-[12px] text-center text-[27px] leading-[42px] font-semibold">
          {title}
        </h2>
        <p className="text-center text-[17px] leading-[27px]">{description}</p>
      </div>
    </div>
  );
};
