import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import {
  Logo,
  Navigation,
  WorkshopButton,
} from "$store/components/header/Header.tsx";

function Navbar({
  logo,
  menu = [
    { label: "Treinamentos", url: "/" },
    { label: "Clientes", url: "/about" },
    { label: "Método", url: "/services" },
    { label: "Contato", url: "/contact" },
  ],
  workshopButton = {
    active: true,
    textMobile: "PARTICIPE",
    textDesktop: "PARTICIPE DO PRÓXIMO WORKSHOP",
    url: "https://www.miraeducacao.com.br/",
  },
}: {
  logo?: Logo;
  menu?: Navigation[];
  workshopButton?: WorkshopButton;
  themeController?: boolean;
}) {
  return (
    <>
      {/* Mobile Version */}
      <nav class="drawer drawer-end lg:hidden">
        <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />
        <div class="flex justify-between items-center w-full p-6 border-none gap-2">
          <div class="flex gap-2 items-center">
            <label
              for="mobile-drawer-nav"
              class="drawer-button text-b-200"
            >
              <Icon id="Bars3" size={36} strokeWidth={0.1} />
            </label>
            <a
              class="flex justify-center items-start"
              href="/"
              aria-label="Store logo"
            >
              {logo && (
                <>
                  <Image
                    class="inline dark:hidden"
                    src={logo.srcDark || ""}
                    alt={logo.alt || ""}
                    width={logo.width || 90}
                    height={logo.height || 20}
                    loading="lazy"
                  />
                  <Image
                    class="hidden dark:inline"
                    src={logo.srcLight || ""}
                    alt={logo.alt || ""}
                    width={logo.width || 90}
                    height={logo.height || 20}
                    loading="lazy"
                  />
                </>
              )}
            </a>
          </div>
          <div class="flex gap-2">
            {workshopButton.active && (
              <a
                class="flex flex-nowrap px-3 py-2 items-center rounded-full border-none text-black text-[13px] leading-tight gap-2 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer bg-main dark:bg-sub"
                href={workshopButton.url}
              >
                <p class="text-nowrap">{workshopButton.textMobile}</p>
                <Icon id="ExternalLink" size={14} strokeWidth={0.01} />
              </a>
            )}
          </div>
        </div>

        <aside class="drawer-side z-50">
          <label
            for="mobile-drawer-nav"
            aria-label="close sidebar"
            class="drawer-overlay"
          />
          <div class="flex flex-col bg-black gap-8 w-80 text-base-content mt-28 mx-auto rounded-3xl p-6">
            <ul class="menu text-b-200 text-lg font-medium p-0">
              {menu?.map((link) => (
                <li class="">
                  <a href={link.url} aria-label={link.label} class="p-4 rounded-full hover:bg-[#FFBC4E33]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {workshopButton.active && (
              <a
                class="flex flex-nowrap w-fit px-3 py-2 items-center rounded-full border-none text-black text-[13px] leading-tight gap-2 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer bg-main"
                href={workshopButton.url}
              >
                <p class="text-nowrap">{workshopButton.textMobile}</p>
                <Icon id="ExternalLink" size={14} strokeWidth={0.01} />
              </a>
            )}
          </div>
        </aside>
      </nav>

      {/* Desktop Version */}
      <div class="hidden lg:flex border-none w-full py-6 px-16 justify-between items-center">
        <div class="flex justify-start -order-1 gap-6">
          <a href="/" aria-label="Mira logo" class="block">
            {logo && (
              <>
                <Image
                  class="inline dark:hidden"
                  src={logo.srcDark || ""}
                  alt={logo.alt || ""}
                  width={logo.width || 100}
                  height={logo.height || 13}
                  loading="lazy"
                />
              </>
            )}
          </a>
          <ul class="flex gap-6">
            {menu?.map((link) => (
              <li class="flex items-center">
                <a
                  href={link.url}
                  aria-label={link.label}
                  class="link no-underline hover:underline font-medium text-lg font-inter text-b-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="flex items-center justify-end gap-6 xl:w-1/3">
          <a
            class="flex flex-nowrap px-3 py-2 items-center rounded-full border-none text-black text-[13px] leading-tight gap-2 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer bg-main dark:bg-sub"
            href={workshopButton.url}
          >
            <p class="text-nowrap">{workshopButton.textDesktop}</p>
            <Icon id="ExternalLink" size={14} strokeWidth={0.01} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
