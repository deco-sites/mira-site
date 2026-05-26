import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @titleBy alt
 */
export interface Banner {
  srcMobile: ImageWidget;
  srcDesktop?: ImageWidget;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
}

export type BorderRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

export interface Props {
  title?: string;
  /**
   * @description Default is 2 for mobile and all for desktop
   */
  itemsPerLine: {
    /** @default 2 */
    mobile?: 1 | 2;
    /** @default 4 */
    desktop?: 1 | 2 | 4 | 6 | 8;
  };
  /**
   * @description Item's border radius in px
   */
  borderRadius: {
    /** @default none */
    mobile?: BorderRadius;
    /** @default none */
    desktop?: BorderRadius;
  };
  banners: Banner[];
}

const MOBILE_COLUMNS = {
  1: "grid-cols-1",
  2: "grid-cols-2",
};

const DESKTOP_COLUMNS = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  4: "sm:grid-cols-4",
  6: "sm:grid-cols-6",
  8: "sm:grid-cols-8",
};

const RADIUS_MOBILE = {
  "none": "rounded-none",
  "sm": "rounded-sm",
  "md": "rounded-md",
  "lg": "rounded-lg",
  "xl": "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "full": "rounded-full",
};

const RADIUS_DESKTOP = {
  "none": "sm:rounded-none",
  "sm": "sm:rounded-sm",
  "md": "sm:rounded-md",
  "lg": "sm:rounded-lg",
  "xl": "sm:rounded-xl",
  "2xl": "sm:rounded-2xl",
  "3xl": "sm:rounded-3xl",
  "full": "sm:rounded-full",
};

const DEFAULT_PROPS: Props = {
  title: "Summer bags",
  banners: [
    {
      alt: "a",
      href: "a",
      srcMobile:
        "https://decoims.com/mira-site/f6c1e9c4-0a3e-43cd-9867-6d95ad4db564/f2033f011d1e64c6.jpg",
      srcDesktop:
        "https://decoims.com/mira-site/2c4bb901-1e88-49a2-9dbf-084f4521dac4/1c059717e8f34f42.jpg",
    },
    {
      alt: "a",
      href: "a",
      srcMobile:
        "https://decoims.com/mira-site/3fb34c6a-5f6b-4fb7-9ca8-d0b45171e4d9/eff3c3bfc5ada040.jpg",
      srcDesktop:
        "https://decoims.com/mira-site/492f35e9-a30d-4a2b-b0ff-0b6e8eb78a12/6a52ba3304762f4a.jpg",
    },
  ],
  borderRadius: {
    mobile: "3xl",
    desktop: "3xl",
  },
  itemsPerLine: {
    mobile: 2,
    desktop: 2,
  },
};

export default function BannnerGrid(props: Props) {
  const {
    title,
    itemsPerLine,
    borderRadius,
    banners = [],
  } = { ...DEFAULT_PROPS, ...props };

  return (
    <section class="container w-full px-4 md:px-0 mx-auto">
      {title &&
        (
          <div class="py-6 md:py-0 md:pb-[40px] flex items-center mt-6">
            <h2 class="text-lg leading-5 font-semibold uppercase">
              {title}
            </h2>

            <div class="bg-[#e5e5ea] h-[1px] w-full ml-4"></div>
          </div>
        )}
      <div
        class={`grid gap-4 md:gap-6 ${
          MOBILE_COLUMNS[itemsPerLine?.mobile ?? 2]
        } ${DESKTOP_COLUMNS[itemsPerLine?.desktop ?? 4]}`}
      >
        {banners.map(({ href, srcMobile, srcDesktop, alt }) => (
          <a
            href={href}
            class={`overflow-hidden ${
              RADIUS_MOBILE[borderRadius.mobile ?? "none"]
            } ${RADIUS_DESKTOP[borderRadius.desktop ?? "none"]} `}
          >
            <Picture>
              <Source
                media="(max-width: 767px)"
                src={srcMobile}
                width={100}
                height={100}
              />
              <Source
                media="(min-width: 768px)"
                src={srcDesktop ? srcDesktop : srcMobile}
                width={250}
                height={250}
              />
              <img
                class="w-full"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={srcMobile}
                alt={alt}
                decoding="async"
                loading="lazy"
              />
            </Picture>
          </a>
        ))}
      </div>
    </section>
  );
}
