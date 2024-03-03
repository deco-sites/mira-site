import { ImageWidget } from "apps/admin/widgets.ts";
import SlideBanner, {
  Props as SlideBannerProps,
} from "deco-sites/mira-site/sections/Miscellaneous/Slide.tsx";
import Image from "apps/website/components/Image.tsx";

export interface WidgetData {
  srcDark?: ImageWidget;
  srcLight?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Props {
  /** @format html */
  title?: string;

  widget1?: WidgetData;
  widget2?: WidgetData;

  /** @format html */
  description1?: string;

  /** @format html */
  description2?: string;

  slideBanner?: SlideBannerProps;
}

export default function Features(
  {
    title = "Title",
    widget1,
    widget2,
    description1,
    description2,
    slideBanner,
  }: Props,
) {
  return (
    <section class="relative bg-black dark:bg-[#FFF8E6] text-white dark:text-black max-w-screen">
      <div class="p-2 lg:px-14">
        <div class="grid lg:grid-cols-3 pb-14 gap-3">
          <div
            class="lg:col-span-2 font-medium text-2xl lg:text-5xl text-white dark:text-black"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div class="flex flex-grow items-center space-x-10">
            <Image
              class="dark:hidden  w-20 h-10 md:w-40 md:h-20"
              src={widget1?.srcDark || ""}
              alt={widget1?.alt || ""}
              width={widget1?.width || 40}
              height={widget1?.height || 20}
            />
            <Image
              class="hidden  w-20 h-10 md:w-40 md:h-20"
              src={widget1?.srcLight || ""}
              alt={widget1?.alt || ""}
              width={widget1?.width || 40}
              height={widget1?.height || 20}
            />

            <Image
              class="inline dark:hidden  w-20 h-10 md:w-40 md:h-20"
              src={widget2?.srcDark || ""}
              alt={widget2?.alt || ""}
              width={widget2?.width || 40}
              height={widget2?.height || 20}
            />
            <Image
              class="hidden dark:inline  w-20 h-10 md:w-40 md:h-20"
              src={widget2?.srcLight || ""}
              alt={widget2?.alt || ""}
              width={widget2?.width || 40}
              height={widget2?.height || 20}
            />
          </div>
        </div>
        <div class="lg:flex lg:flex-row lg:gap-8 pb-14">
          <div
            class="text-white dark:text-black text-sm lg:text-xl"
            dangerouslySetInnerHTML={{ __html: description1 || "" }}
          />

          <div
            class="text-white dark:text-black text-sm lg:text-xl"
            dangerouslySetInnerHTML={{ __html: description2 || "" }}
          />
        </div>
      </div>
      <SlideBanner {...slideBanner} />
    </section>
  );
}
