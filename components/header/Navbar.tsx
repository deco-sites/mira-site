import Icon from "$store/components/ui/Icon.tsx";
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
      <div class="min-[1386px]:hidden flex flex-col items-start w-full p-6">
        <div class="flex flex-row w-full items-center justify-between">
          <a
            class="flex flex-col justify-center items-start"
            href="/"
            aria-label="Store logo"
          >
            {logo && (
              <>
                <Image
                  class="inline dark:hidden w-[3.938rem] h-[1.073rem]"
                  src={logo.srcDark || ""}
                  alt={logo.alt || ""}
                  width={logo.width || 100}
                  height={logo.height || 13}
                />
                <Image
                  class="hidden dark:inline w-[3.938rem] h-[1.073rem]"
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
        <h3 class="max-[1386px]:mt-2 text-[0.813rem]  leading-[0.975rem]  font-black text-white dark:text-black">
          {slogan != undefined ? slogan : "COMUNICAÇÃO DE ALTO DESEMPENHO"}
        </h3>
      </div>

      {/* Desktop Version */}
      <div class="hidden min-[1386px]:grid min-[1386px]:grid-cols-3 items-center border-b border-base-200 w-full py-6 px-16">
        <ul
          class={"flex gap-6 col-span-1 justify-center"}
        >
          <h3 class="text-[1rem] leading-6 font-black text-white dark:text-black py-6">
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
                  class="inline dark:hidden w-[3.938rem] h-[1.573rem]"
                  src={logo.srcDark || ""}
                  alt={logo.alt || ""}
                  width={logo.width || 100}
                  height={logo.height || 13}
                />
                <Image
                  class="hidden dark:inline w-[3.938rem] h-[1.573rem]"
                  src={logo.srcLight || ""}
                  alt={logo.alt || ""}
                  width={logo.width || 100}
                  height={logo.height || 13}
                />
              </>
            )}
          </a>
        </div>
        <div class="flex items-center justify-end gap-6 col-span-1">
          <a
            class="btn h-9 lg:h-14 rounded-full border-none text-[1rem] gap-2 bg-[#F5BF62] dark:bg-[#FF8352]"
            href={workshopButton?.url ?? "https://www.miraeducacao.com.br/"}
          >
            <span>
              {workshopButton?.text ?? "PARTICIPE DO PRÓXIMO WORKSHOP"}
            </span>
            <Icon id="ExternalLink" class="mb-1" size={20} strokeWidth={0.01} />
          </a>
          <ToggleDarkMode />
        </div>
      </div>
    </>
  );
}

export default Navbar;
