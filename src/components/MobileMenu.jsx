import clsx from "clsx";
import { useGlobalContext } from "../context/GlobalContext";
import { Logo } from "./Logo";
import { LINKS } from "../static/links";
import { selectT } from "../helpers/selectT";
import { SocialMediasList } from "./SocialMediasList";
import { TechList } from "./TechList";

export const MobileMenu = () => {
  const { menuIsOpen, toggleMenu, lang } = useGlobalContext();

  const close = () => {
    toggleMenu(false);
  };

  return (
    <>
      <div
        className={clsx([
          "fixed inset-0 bg-black/40 block z-20 ",
          {
            ["!hidden"]: !menuIsOpen,
            ["!pointer-events-none"]: !menuIsOpen,
          },
        ])}
        onClick={() => {
          close();
        }}
      ></div>
      <div
        className={clsx([
          "fixed border-l border-border/50 right-0 top-0 h-screen w-[80%] max-w-[340px] bg-background z-50 shadow-lg",
          "transition-transform duration-300 ease-in-out transform translate-x-full",
          "px-[10px]",
          {
            ["!translate-x-0"]: menuIsOpen,
          },
        ])}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            close();
          }
        }}
        tabIndex="-1"
      >
        <div
          className={clsx([
            "flex flex-col mx-auto text-center items-center ",
            "pt-[50px] pb-[64px] h-full",
          ])}
        >
          <Logo />
          <nav className="mt-[37px] grid grid-cols-1 gap-6  place-items-center text-center">
            {LINKS.map((item) => {
              const label = selectT(lang, item.label);
              return (
                <a
                  key={label}
                  href={item.href}
                  onClick={() => {
                    close();
                  }}
                  className="pb-[10px] text-[24px] leading-[36px] border-b border-border"
                >
                  {label}
                </a>
              );
            })}
          </nav>
          <div className="mt-auto flex flex-col gap-8 items-center justify-center">
            <div className="flex gap-6 flex-wrap items-center justify-center">
              <SocialMediasList />
            </div>
            <div className="flex flex-col items-center justify-center text-center w-full gap-4">
              <h4 className="text-[24px] leading-[36px] font-normal">Tech</h4>
              <div className="flex gap-2 flex-wrap items-center justify-center">
                <TechList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
