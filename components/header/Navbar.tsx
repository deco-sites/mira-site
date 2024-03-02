import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton } from "$store/islands/Header/Buttons.tsx";
import { navbarHeight } from "./constants.ts";
import { Buttons, WorkshopButton } from "$store/components/header/Header.tsx";
import ToggleDarkMode from "deco-sites/mira-site/components/header/Buttons/ToggleDarkMode.tsx";

function Navbar({ slogan, workshopButton, logoPosition = "left" }: {
  searchbar?: SearchbarProps;
  slogan?: string;
  workshopButton?: WorkshopButton;
  buttons?: Buttons;
  logoPosition?: "left" | "center";
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="lg:hidden grid grid-cols-3 justify-between items-center border-b border-base-200 w-full px-6 pb-6 gap-2"
      >
        <MenuButton />

        <a
          href="/"
          class="flex-grow inline-flex items-center justify-center"
          style={{ minHeight: navbarHeight }}
          aria-label="Store logo"
        >
          <img
            src="../miralogo-light.png"
            class="w-[63px] h-[17.16px] max-w-[63px] h-[17.16px] lg:max-w-[234px] lg:h-[17.16px] 2xl:max-w-[342px] 2xl:h-[17.16px] inline dark:hidden"
          />

          <img
            src="../miralogo-dark.png"
            class="w-[63px] h-[17.16px] max-w-[63px] h-[17.16px] lg:max-w-[234px] lg:h-[17.16px] 2xl:max-w-[342px] 2xl:h-[17.16px] hidden dark:inline"
          />
        </a>

        <div class="flex justify-end gap-1">
          {/* <ToggleDarkMode/> */}
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden lg:grid lg:grid-cols-3 items-center border-b border-base-200 w-full px-6">
        <ul
          class={`flex gap-6 col-span-1 ${
            logoPosition === "left" ? "justify-center" : "justify-start"
          }`}
        >
          <h3 class="text-sm font-extrabold dark:text-white py-6">
            {slogan != undefined ? slogan : "COMUNICAÇÃO DE ALTO DESEMPENHO"}
          </h3>
        </ul>
        <div
          class={`flex ${
            logoPosition === "left"
              ? "justify-start -order-1"
              : "justify-center"
          }`}
        >
          <a
            href="/"
            aria-label="Mira logo"
            class="block"
          >
            <img
              src="../miralogo-light.png"
              class="w-[63px] h-[17.16px] max-w-[63px] h-[17.16px] lg:max-w-[234px] lg:h-[17.16px] 2xl:max-w-[342px] 2xl:h-[17.16px] inline dark:hidden"
            />

            <img
              src="../miralogo-dark.png"
              class="w-[63px] h-[17.16px] max-w-[63px] h-[17.16px] lg:max-w-[234px] lg:h-[17.16px] 2xl:max-w-[342px] 2xl:h-[17.16px] hidden dark:inline"
            />
          </a>
        </div>
        <div class="flex-none flex items-center justify-end gap-6 col-span-1">
          <a
            class="btn h-8 rounded-full text-sm bg-[#FF8352] dark:bg-[#F5BF62]"
            href={workshopButton?.url ?? "https://www.miraeducacao.com.br/"}
          >
            {workshopButton?.text ?? "PARTICIPE DO PRÓXIMO WORKSHOP"}
            <Icon id="ExternalLink" size={20} strokeWidth={0.01} />
          </a>
          <ToggleDarkMode />
        </div>
      </div>
    </>
  );
}

export default Navbar;
