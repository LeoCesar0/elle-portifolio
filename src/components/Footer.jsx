import { useT } from "../hooks/useT";
import { IconSend } from "./IconSend";
import { SocialMediasList } from "./SocialMediasList";
import { TechList } from "./TechList";

export const Footer = () => {
  const letsTalkText = useT({
    en: "Let's Talk!",
    pt: "Entre em contato!",
  });

  const emailText = useT({
    en: "send me an email",
    pt: "me mande um email",
  });

  const email = "izaelleavrillavigne@gmail.com";

  return (
    <footer className="mb-[96px] md:mb-[0px] md:bg-softPink md:mt-[32px]">
      <div className="main-container">
        <div className="text-center md:mb-[60px]">
          <p className="text-[32px] leading-[48px] mb-6">{letsTalkText}</p>
          <button
            className="text-[32px] leading-[48px] bg-primary text-onPrimary shadow-sm
            px-[20px] py-[15px] flex items-center gap-[10px] rounded-[50px] mx-auto
          "
            onClick={() => {
              window.location.href = "mailto:" + email;
            }}
          >
            {emailText}
            <IconSend />
            {/* <img src="icons/send.svg" /> */}
          </button>
        </div>
        <div className="items-end justify-between hidden md:flex">
          <div>
            <p className="text-2xl mb-4">Social Media</p>
            <div className="flex items-center gap-5">
              <SocialMediasList />
            </div>
          </div>
          <div>
            <p className="text-2xl mb-4">Tech</p>
            <div className="flex items-center gap-2">
              <TechList />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
