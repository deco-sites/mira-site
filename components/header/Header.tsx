import type { ImageWidget } from "apps/admin/widgets.ts";
import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight, navbarHeight } from "./constants.ts";
import { AppContext } from "deco-sites/mira-site/apps/site.ts";

export interface Logo {
  srcDark?: ImageWidget;
  srcLight?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
}

export interface WorkshopButton {
  text?: string;
  url?: string;
}

export interface Props {
  alerts?: string[];

  slogan?: string;

  workshopButton?: WorkshopButton;

  /** @title Logo */
  logo?: Logo;
}

// deno-lint-ignore require-await
export const loader = async (
  props: Props,
  req: Request,
  ctx: AppContext,
) => {
  const device = ctx.device;

  return {
    ...props,
    isMobile: device,
  };
};

function Header({
  alerts,
  logo,
  slogan,
  workshopButton,
  isMobile,
}: Omit<Props, "isMobile"> & { isMobile: string }) {
  console.log("isMobile", isMobile);

  return (
    <>
      <header
        style={{ height: headerHeight }}
        class={`${isMobile === "desktop" ? "" : "bg-black dark:bg-[#FFF8E6]"}`}
      >
        <div class="fixed w-full z-50 bg-black dark:bg-[#FFF8E6]">
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
