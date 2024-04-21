import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const initialState = {
  lang: "pt",
};

const Context = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const setLanguage = (lang) => {
    setState((prev) => ({
      ...prev,
      lang: lang,
    }));
  };

  return (
    <Context.Provider
      value={{
        ...state,
        setLanguage,
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
