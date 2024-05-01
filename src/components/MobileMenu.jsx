import clsx from "clsx";
import { useGlobalContext } from "../context/GlobalContext";
import { Logo } from "./Logo";
import { LINKS } from "../static/links";
import { selectT } from "../helpers/selectT";

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
            ["hidden"]: !menuIsOpen,
            ["pointer-events-none"]: !menuIsOpen,
          },
        ])}
        onClick={() => {
          close();
        }}
      ></div>
      <div
        className={clsx([
          "fixed border-l border-border right-0 top-0 h-screen w-[80%] max-w-[340px] bg-background transition-transform duration-300 ease-in-out transform translate-x-full z-50 shadow-lg",
          {
            ["translate-x-0"]: menuIsOpen,
          },
        ])}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            close();
          }
        }}
        tabIndex="-1"
      >
        <div>
          <Logo />
          <nav>
            {LINKS.map((item) => {
              const label = selectT(lang, item.label);
              return (
                <a
                  href={item.href}
                  onClick={() => {
                    close();
                  }}
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};
