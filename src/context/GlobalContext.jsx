import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const initialState = {
  menuIsOpen: false,
};

const Context = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("@elle-lang", "pt");
  const [state, setState] = useState(initialState);

  const switchLanguage = () => {
    setLang(lang === "pt" ? "en" : "pt");
    setState((prev) => ({
      ...prev,
    }));
  };
  const toggleMenu = (value) => {
    setState((prev) => ({
      ...prev,
      menuIsOpen: value === undefined ? !prev.menuIsOpen : value,
    }));
  };

  return (
    <Context.Provider
      value={{
        ...state,
        toggleMenu,
        switchLanguage,
        lang,
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
