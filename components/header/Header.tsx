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

export interface WorkshopButton {
  textDesktop?: string;
  textMobile?: string;
  url?: string;
}

export interface Props {
  alerts?: string[];

  slogan?: string;

  workshopButton?: WorkshopButton;

  /** @title Logo */
  logo?: Logo;
}

function Header({
  alerts,
  logo,
  slogan,
  workshopButton,
}: Props) {
  return (
    <>
      <header class="h-[95.59px] lg:h-[80.25px] bg-black dark:bg-b-300" // style={{ height: headerHeight }}
      >
        <div class="fixed w-full z-50 bg-black dark:bg-b-300 backdrop-filter backdrop-blur-md bg-opacity-75 dark:bg-opacity-75">
          {alerts && alerts.length > 0 && <Alert alerts={alerts} />}
          <Navbar
            logo={logo}
            slogan={slogan}
            workshopButton={workshopButton}
          />
        </div>
        <script type="module" src="/dark.js" />
      </header>
    </>
  );
}

export default Header;
