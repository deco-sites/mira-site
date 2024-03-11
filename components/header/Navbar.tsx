import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import { Logo, WorkshopButton } from "$store/components/header/Header.tsx";
import ThemeController from "$store/components/daisy/ThemeController.tsx";

function Navbar({
  logo,
  slogan,
  workshopButton = {
    text: "PARTICIPE DO PRÓXIMO WORKSHOP",
    url: "https://www.miraeducacao.com.br/",
  },
}: {
  logo?: Logo;
  slogan?: string;
  workshopButton?: WorkshopButton;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div class="lg:hidden flex flex-col items-start w-full p-6 border-none gap-2">
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
          <ThemeController />
        </div>
        <h3 class="text-[0.813rem]  leading-[0.975rem]  font-black text-white dark:text-black">
          {slogan != undefined ? slogan : "COMUNICAÇÃO DE ALTO DESEMPENHO"}
        </h3>
      </div>

      {/* Desktop Version */}
      <div class="hidden lg:flex border-none w-full py-6 px-16 justify-between items-center">
        <h3 class="flex items-center justify-center text-[0.875rem] min-[1440px]:text-[1rem] leading-6 font-black text-white dark:text-black">
          {slogan != undefined ? slogan : "COMUNICAÇÃO DE ALTO DESEMPENHO"}
        </h3>
        <div class="flex xl:w-1/3 justify-start -order-1">
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
        <div class="flex xl:w-1/3 items-center justify-end gap-6">
          <a
            class="flex flex-nowrap px-3 py-2 items-center rounded-full border-none font-light text-black text-[13px] leading-tight gap-2 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer bg-main dark:bg-sub"
            href={workshopButton.url}
            target="_blank"
          >
            <p class="text-nowrap">{workshopButton.text}</p>
            <Icon id="ExternalLink" size={14} strokeWidth={0.01} />
          </a>
          <ThemeController />
        </div>
      </div>
    </>
  );
}

export default Navbar;
