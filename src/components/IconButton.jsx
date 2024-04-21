export const IconButton = ({ children, className, ...rest }) => {
  return (
    <>
      <button className={`bg-transparent ${className}`} {...rest}>
        {children}
      </button>
    </>
  );
};
