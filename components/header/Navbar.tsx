import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton } from "$store/islands/Header/Buttons.tsx";
import Button from "$store/components/ui/Button.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import { Buttons, Logo } from "$store/components/header/Header.tsx";
import ToggleDarkMode from "deco-sites/mira-site/components/header/Buttons/ToggleDarkMode.tsx";

function Navbar({ logoPosition = "left" }: {
  items: SiteNavigationElement[];
  searchbar?: SearchbarProps;
  buttons?: Buttons;
  logoPosition?: "left" | "center";
}) {
  const platform = usePlatform();

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
          <NavItem />
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
          <Button class="btn rounded-full bg-[#FF8352] dark:bg-[#F5BF62]">
            <p>PARTICIPE DO PRÓXIMO WORKSHOP</p>
            <Icon id="ExternalLink" size={20} strokeWidth={0.01} />
          </Button>
          <ToggleDarkMode />
        </div>
      </div>
    </>
  );
}

export default Navbar;
