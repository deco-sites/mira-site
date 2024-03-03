import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface LogoProps {
  srcDark?: ImageWidget;
  srcLight?: ImageWidget;
  alt?: string;
}

export interface Props {
  logo?: LogoProps;
  copyrightText?: string;
}

export default function Logo({ logo, copyrightText }: Props) {
  return (
    <>
      <div class="flex flex-col lg:flex-row w-full gap-4 lg:gap-0 items-start lg:items-center justify-between">
        {logo && (
          <a
            href="/"
            aria-label="Mira logo"
            class="flex py-1 items-start"
          >
            <Image
              class="inline dark:hidden"
              src={logo.srcDark || ""}
              alt={logo.alt || ""}
              width={63}
              height={17.15}
            />
            <Image
              class="hidden dark:inline"
              src={logo.srcLight || ""}
              alt={logo.alt || ""}
              width={63}
              height={17.15}
            />
          </a>
        )}
        <div class="text-sm font-normal text-[#FFFBF0] dark:text-black">
          {copyrightText}
        </div>
      </div>
    </>
  );
}
