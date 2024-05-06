import { useGlobalContext } from "../context/GlobalContext";
import { IconButton } from "./IconButton";

export const LanguageSwitcher = () => {
  const { lang, switchLanguage } = useGlobalContext();
  return (
    <>
      <IconButton onClick={switchLanguage}>
        <img
          src={`lang/${lang === "en" ? "pt" : "en"}.png`}
          width={32}
          height={32}
        />
      </IconButton>
    </>
  );
};
