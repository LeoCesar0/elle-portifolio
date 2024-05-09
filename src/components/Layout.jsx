import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="">
      <div className="main-container">
        {children}
      </div>
      <Footer />
    </div>
  );
};
