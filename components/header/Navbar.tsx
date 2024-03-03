import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton } from "$store/islands/Header/Buttons.tsx";
import { navbarHeight } from "./constants.ts";
import Image from "apps/website/components/Image.tsx";
import { Logo, WorkshopButton } from "$store/components/header/Header.tsx";
import ToggleDarkMode from "deco-sites/mira-site/components/header/Buttons/ToggleDarkMode.tsx";

function Navbar({ logo, slogan, workshopButton }: {
  logo?: Logo;
  slogan?: string;
  workshopButton?: WorkshopButton;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div class="lg:hidden flex flex-col items-start w-full px-6 pb-6">
        <div class="flex flex-row w-full items-center justify-between">
          <a
            class="flex flex-col justify-center items-start gap-2"
            href="/"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            {logo && (
              <>
                <Image
                  class="inline dark:hidden"
                  src={logo.srcDark || ""}
                  alt={logo.alt || ""}
                  width={logo.width || 100}
                  height={logo.height || 13}
                />
                <Image
                  class="hidden dark:inline"
                  src={logo.srcLight || ""}
                  alt={logo.alt || ""}
                  width={logo.width || 100}
                  height={logo.height || 13}
                />
              </>
            )}
          </a>
          <div class="">
            <ToggleDarkMode />
          </div>
        </div>
        <h3 class="text-[13px]  leading-[15.6px]  font-extrabold text-white dark:text-black">
          {slogan != undefined ? slogan : "COMUNICAÇÃO DE ALTO DESEMPENHO"}
        </h3>
      </div>

      {/* Desktop Version */}
      <div class="hidden lg:grid lg:grid-cols-3 items-center border-b border-base-200 w-full px-6">
        <ul
          class={"flex gap-6 col-span-1 justify-center"}
        >
          <h3 class="text-[16px] leading-6 font-extrabold text-white dark:text-black py-6">
            {slogan != undefined ? slogan : "COMUNICAÇÃO DE ALTO DESEMPENHO"}
          </h3>
        </ul>
        <div class="flex justify-start -order-1">
          <a
            href="/"
            aria-label="Mira logo"
            class="block"
          >
            {logo && (
              <>
                <Image
                  class="inline dark:hidden"
                  src={logo.srcDark || ""}
                  alt={logo.alt || ""}
                  width={logo.width || 100}
                  height={logo.height || 13}
                />
                <Image
                  class="hidden dark:inline"
                  src={logo.srcLight || ""}
                  alt={logo.alt || ""}
                  width={logo.width || 100}
                  height={logo.height || 13}
                />
              </>
            )}
          </a>
        </div>
        <div class="flex-none flex items-center justify-end gap-6 col-span-1">
          <a
            class="btn h-8 rounded-full text-sm bg-[#F5BF62] dark:bg-[#FF8352]"
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
