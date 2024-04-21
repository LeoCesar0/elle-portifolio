export const Button = ({ children, className, ...rest }) => {
  return (
    <>
      <button
        className={`bg-primary text-onPrimary py-[10px] px-[25px] rounded-[10px] font-semibold text-xl ${className}`}
        {...rest}
      >
        {children}asdasd
      </button>
    </>
  );
};
