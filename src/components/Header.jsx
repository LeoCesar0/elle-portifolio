import { useGlobalContext } from "../context/GlobalContext";
import { selectT } from "../helpers/selectT";
import { LINKS } from "../static/links";
import { IconButton } from "./IconButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { SocialMediasList } from "./SocialMediasList";

export const Header = () => {
  const { lang, toggleMenu } = useGlobalContext();
  return (
    <header>
      <div className="md:hidden flex justify-between items-center px-[12px] ">
        <Logo />
        <div className="flex items-center gap-5">
          <LanguageSwitcher />
          <IconButton
            onClick={() => {
              toggleMenu();
            }}
          >
            <img src="icons/menu.svg" />
          </IconButton>
        </div>
      </div>
      <div className="hidden md:flex gap-6 justify-between items-center py-4 px-[40px] h-[100px] border-border border-b-[2.5px] ">
        <nav className="flex items-center gap-[35px]">
          {LINKS.map((item) => {
            const label = selectT(lang, item.label);
            return (
              <a
                key={label}
                className="text-2xl text-muted hover:text-onBackground transition-colors duration-300 ease-out"
                href={item.href}
              >
                {label}
              </a>
            );
          })}
        </nav>
        <Logo />
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <div className="flex gap-6 items-center">
            <SocialMediasList main />
          </div>
        </div>
      </div>
    </header>
  );
};
