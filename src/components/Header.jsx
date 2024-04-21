import { useGlobalContext } from "../context/GlobalContext";
import { IconButton } from "./IconButton";
import { Logo } from "./Logo";

export const Header = () => {
  const { lang, switchLanguage } = useGlobalContext();
  return (
    <header className="flex justify-between items-center px-[12px]">
      <Logo />
      <div className="flex items-center gap-5">
        <IconButton onClick={switchLanguage}>
          <img src={`lang/${lang}.png`} width={32} height={32} />
        </IconButton>
        <IconButton>
          <img src="icons/menu.svg" />
        </IconButton>
      </div>
    </header>
  );
};
