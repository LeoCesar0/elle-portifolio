export const Tag = ({ children, className, ...rest }) => {
  return (
    <>
      <span
        className={`inline-block bg-background text-onBackground border-border border py-[10px] px-[25px] rounded-[30px] font-normal text-base ${className}`}
        {...rest}
      >
        {children}asdasd
      </span>
    </>
  );
};
