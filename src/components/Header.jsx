import { IconButton } from "./IconButton";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-[12px]">
      <Logo />
      <IconButton>
        <img src="icons/menu.svg" />
      </IconButton>
    </header>
  );
};
