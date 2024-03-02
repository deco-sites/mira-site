import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Drawers from "$store/islands/Header/Drawers.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

export interface Logo {
  srcDark: ImageWidget;
  srcLight: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}
export interface Buttons {
  hideSearchButton?: boolean;
  hideAccountButton?: boolean;
  hideWishlistButton?: boolean;
  hideCartButton?: boolean;
}

export interface WorkshopButton {
  text?: string;
  url?: string;
}

export interface Props {
  alerts?: string[];

  /** @title Search Bar */
  searchbar?: Omit<SearchbarProps, "platform">;

  slogan?: string;

  workshopButton?: WorkshopButton;

  /** @title Logo */
  logo?: Logo;

  logoPosition?: "left" | "center";

  buttons?: Buttons;
}

function Header({
  alerts,
  searchbar,
  logo,
  slogan,
  workshopButton,
  logoPosition = "center",
  buttons,
}: Props) {
  const platform = usePlatform();

  return (
    <>
      <header style={{ height: headerHeight }}>
        <Drawers
          searchbar={searchbar}
          platform={platform}
        >
          <div class="fixed w-full z-50 dark:bg-black">
            {alerts && alerts.length > 0 && <Alert alerts={alerts} />}
            <Navbar
              logo={logo}
              slogan={slogan}
              workshopButton={workshopButton}
              logoPosition={logoPosition}
              buttons={buttons}
            />
          </div>
        </Drawers>
        <script type="module" src="/dark.js" />
      </header>
    </>
  );
}

export default Header;
