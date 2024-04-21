import { useGlobalContext } from "../context/GlobalContext";

export const useT = (obj) => {
  const { lang } = useGlobalContext();

  const text = obj[lang] || "";

  return text;
};
