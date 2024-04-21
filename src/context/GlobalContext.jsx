import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const initialState = {
  lang: "en",
};

const Context = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const switchLanguage = () => {
    setState((prev) => ({
      ...prev,
      lang: prev.lang === "pt" ? "en" : "pt",
    }));
  };

  return (
    <Context.Provider
      value={{
        ...state,
        switchLanguage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }

  return context;
};
