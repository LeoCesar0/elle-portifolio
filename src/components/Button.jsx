import clsx from "clsx";

export const Button = ({
  children,
  as = "button",
  variant = "primary",
  className,
  ...rest
}) => {
  const Component = as;

  return (
    <>
      <Component
        className={clsx([
          "flex items-center justify-center",
          "min-w-[170px] lg:min-w-[250px] gap-2 rounded-[10px]",
          "py-[10px] px-[14px] md:px-[16px] lg:py-[16px] lg:px-[20px]",
          "text-base lg:text-xl",
          "font-semibold",
          "transition-all",
          {
            "bg-primary text-onPrimary hover:bg-primaryHover":
              variant === "primary",
            "bg-secondary text-onSecondary hover:bg-secondaryHover":
              variant === "secondary",
          },
          className,
        ])}
        {...rest}
      >
        {children}
      </Component>
    </>
  );
};
