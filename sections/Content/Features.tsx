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
    <section class="max-w-screen py-10 lg:py-40 bg-black dark:bg-[#FFF8E6] text-white dark:text-black ">
      <div class="px-6 lg:px-16 ">
        <div class="grid lg:grid-cols-3 pb-6 lg:pb-20">
          <div
            class="lg:col-span-2 font-black text-2xl leading-[1.65rem] lg:text-[2.5rem] lg:leading-[3.5rem] text-white dark:text-black"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div class="flex items-center space-x-5 max-[1024px]:mt-6">
            <Image
              class="inline dark:hidden  w-[3.125rem] h-[3.125rem] md:w-[6.25rem] md:h-[6.25rem]"
              src={widget1?.srcDark || ""}
              alt={widget1?.alt || ""}
              width={widget1?.width || 40}
              height={widget1?.height || 20}
            />
            <Image
              class="hidden dark:inline  w-[3.125rem] h-[3.125rem] md:w-[6.25rem] md:h-[6.25rem]"
              src={widget1?.srcLight || ""}
              alt={widget1?.alt || ""}
              width={widget1?.width || 40}
              height={widget1?.height || 20}
            />

            <Image
              class="inline dark:hidden  w-[3.889rem] h-[2.604rem] md:w-[7.779rem] md:h-[5.208rem]"
              src={widget2?.srcDark || ""}
              alt={widget2?.alt || ""}
              width={widget2?.width || 40}
              height={widget2?.height || 20}
            />
            <Image
              class="hidden dark:inline  w-[3.889rem] h-[2.604rem] md:w-[7.779rem] md:h-[5.208rem]"
              src={widget2?.srcLight || ""}
              alt={widget2?.alt || ""}
              width={widget2?.width || 40}
              height={widget2?.height || 20}
            />
          </div>
        </div>
        <div class="font-normal lg:flex lg:flex-row lg:gap-8">
          <div
            class="text-white dark:text-black text-base lg:text-2xl lg:leading-9"
            dangerouslySetInnerHTML={{ __html: description1 || "" }}
          />

          <div
            class="font-normal text-white dark:text-black text-base lg:text-2xl lg:leading-9"
            dangerouslySetInnerHTML={{ __html: description2 || "" }}
          />
        </div>
      </div>
      <div class="pt-10 lg:pt-20">
        <SlideBanner {...slideBanner} />
      </div>
    </section>
  );
}
