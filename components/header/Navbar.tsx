import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import { Logo, Navigation, WorkshopButton } from "$store/components/header/Header.tsx";

function Navbar({
  logo,
  menu,
  workshopButton = {
    active: true,
    textMobile: "PARTICIPE",
    textDesktop: "PARTICIPE DO PRÓXIMO WORKSHOP",
    url: "https://www.miraeducacao.com.br/",
  }
}: {
  logo?: Logo;
  menu?: Navigation[];
  workshopButton?: WorkshopButton;
  themeController?: boolean;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div class="lg:hidden flex justify-between items-center w-full p-6 border-none gap-2">
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
                loading={"lazy"}
              />
              <Image
                class="hidden dark:inline"
                src={logo.srcLight || ""}
                alt={logo.alt || ""}
                width={logo.width || 90}
                height={logo.height || 20}
                loading={"lazy"}
              />
            </>
          )}
        </a>
        <div class="flex gap-2">
          {workshopButton.active &&
            (
              <a
                class="flex flex-nowrap px-3 py-2 items-center rounded-full border-none font-light text-black text-[13px] leading-tight gap-2 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer bg-main dark:bg-sub"
                href={workshopButton.url}
              >
                <p class="text-nowrap">{workshopButton.textMobile}</p>
                <Icon id="ExternalLink" size={14} strokeWidth={0.01} />
              </a>
            )}
          {/* {themeController &&
            <ThemeController />} */}
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden lg:flex border-none w-full py-6 px-16 justify-between items-center">
        <div class="flex xl:w-1/3 justify-start -order-1">
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
                  loading={"lazy"}
                />
                <Image
                  class="hidden dark:inline"
                  src={logo.srcLight || ""}
                  alt={logo.alt || ""}
                  width={logo.width || 100}
                  height={logo.height || 13}
                  loading={"lazy"}
                />
              </>
            )}
          </a>
        </div>
          <ul class="flex gap-6">
            {menu?.map((link) => (
              <li class="flex items-center px-2 py-3 gap-2">
                <a
                  href={link.url}
                  aria-label={link.label}
                  class="link no-underline hover:underline font-medium leading-[140%] font-inter"
                >
                  {link.label}
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M21.768 10.4277L13.9555 18.2402C13.883 18.3128 13.7968 18.3704 13.702 18.4098C13.6071 18.4491 13.5054 18.4693 13.4028 18.4693C13.3001 18.4693 13.1984 18.4491 13.1036 18.4098C13.0088 18.3704 12.9226 18.3128 12.85 18.2402L5.03754 10.4277C4.89095 10.2811 4.80859 10.0823 4.80859 9.87495C4.80859 9.66763 4.89095 9.46881 5.03754 9.32221C5.18414 9.17562 5.38296 9.09326 5.59028 9.09326C5.79759 9.09326 5.99642 9.17562 6.14301 9.32221L13.4028 16.583L20.6625 9.32221C20.7351 9.24963 20.8213 9.19205 20.9161 9.15276C21.011 9.11348 21.1126 9.09326 21.2153 9.09326C21.3179 9.09326 21.4196 9.11348 21.5144 9.15276C21.6093 9.19205 21.6954 9.24963 21.768 9.32221C21.8406 9.3948 21.8982 9.48097 21.9375 9.57581C21.9767 9.67065 21.997 9.77229 21.997 9.87495C21.997 9.9776 21.9767 10.0792 21.9375 10.1741C21.8982 10.2689 21.8406 10.3551 21.768 10.4277Z" fill="white"/>
                </svg>
              </li>
            ))}
          </ul>
          <div class="flex items-center justify-end gap-6 xl:w-1/3">
          <a
            class="flex flex-nowrap px-3 py-2 items-center rounded-full border-none font-light text-black text-[13px] leading-tight gap-2 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer bg-main dark:bg-sub"
            href={workshopButton.url}
          >
            <p class="text-nowrap">{workshopButton.textDesktop}</p>
            <Icon id="ExternalLink" size={14} strokeWidth={0.01} />
          </a>
          {/* {themeController &&
            <ThemeController />} */}
        </div>  
      </div>
    </>
  );
}

export default Navbar;
