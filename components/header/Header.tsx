import type { ImageWidget } from "apps/admin/widgets.ts";
import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

export interface Logo {
  srcDark?: ImageWidget;
  srcLight?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Navigation {
  label?: string;
  url?: string;
}

export interface WorkshopButton {
  active?: boolean;
  textDesktop?: string;
  textMobile?: string;
  url?: string;
  emailToCopy?: string;
}

export interface Props {
  alerts?: string[];

  menu?: Navigation[];

  workshopButton?: WorkshopButton;

  /** @title Logo */
  logo?: Logo;
  themeController?: boolean;
}

function Header({
  alerts,
  logo,
  menu,
  workshopButton,
  themeController,
}: Props) {
  return (
    <>
      <header class="h-[84px] lg:h-[80.25px] bg-black dark:bg-b-300" // style={{ height: headerHeight }}
      >
        <div class="fixed w-full z-50 bg-black dark:bg-b-300 backdrop-filter backdrop-blur-md bg-opacity-75 dark:bg-opacity-75">
          {alerts && alerts.length > 0 && <Alert alerts={alerts} />}
          <Navbar
            logo={logo}
            menu={menu}
            workshopButton={workshopButton}
            themeController={themeController}
          />
        </div>
        <script type="module" src="/dark.js" />
      </header>
    </>
  );
}

export default Header;
