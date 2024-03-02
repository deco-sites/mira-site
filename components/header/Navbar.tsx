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
      <div
        style={{ height: navbarHeight }}
        class="lg:hidden flex flex-row justify-between items-center border-b border-base-200 w-full pt-2 px-6 pb-6"
      >
        <div>
          <a
            class="flex-grow inline-flex items-center justify-center"
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
          <h3 class="text-xs font-extrabold text-white dark:text-black">
            {slogan != undefined ? slogan : "COMUNICAÇÃO DE ALTO DESEMPENHO"}
          </h3>
        </div>

        <div class="">
          <ToggleDarkMode />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden lg:grid lg:grid-cols-3 items-center border-b border-base-200 w-full px-6">
        <ul
          class={"flex gap-6 col-span-1 justify-center"}
        >
          <h3 class="text-sm font-extrabold text-white dark:text-black py-6">
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
