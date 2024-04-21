export const Button = ({ children, as = "button", className, ...rest }) => {
  const Component = as;
  return (
    <>
      <Component
        className={`cursor-pointer flex items-center justify-center gap-2 w-min bg-primary text-onPrimary py-[10px] px-[25px] rounded-[10px] font-semibold text-xl ${className}`}
        {...rest}
      >
        {children}
      </Component>
    </>
  );
};
