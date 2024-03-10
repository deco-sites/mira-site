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

  showSlideBanner?: boolean;
  slideBanner?: SlideBannerProps;
}

const DEFAULT_TEXT =
  '<p><span class="text-main dark:text-sub">MIRA E VANTO GROUP:</span></br>POSSIBILITANDO A TRANSFORMAÇÃO ORGANIZACIONAL NO BRASIL</p>';

export default function Features(
  {
    title = DEFAULT_TEXT,
    widget1,
    widget2,
    description1,
    description2,
    showSlideBanner = false,
    slideBanner,
  }: Props,
) {
  return (
    <section class="w-full bg-black dark:bg-b-300 transform">
      <div class="py-10 lg:py-24 min-[1024px]:scale-90 min-[1650px]:scale-100">
        <div class="lg:max-w-[1224px] min-[1650px]:max-w-[1440px] mx-auto px-6 lg:px-16 self-center">
          <div class="grid lg:grid-cols-3 pb-6 lg:pb-20">
            <div
              class="lg:col-span-2 font-black text-2xl leading-[1.65rem] lg:text-[2.125rem] min-[1650px]:text-[2.5rem] lg:leading-[3.5rem] text-b-200 dark:text-black"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div class="flex items-center max-[1024px]:mt-6 gap-1 lg:gap-8">
              <Image
                class="inline dark:hidden w-[3.125rem] h-[3.125rem] md:w-[6.25rem] md:h-[6.25rem]"
                src={widget1?.srcDark || ""}
                alt={widget1?.alt || ""}
                loading="lazy"
                width={widget1?.width || 40}
                height={widget1?.height || 20}
              />
              <Image
                class="hidden dark:inline w-[3.125rem] h-[3.125rem] md:w-[6.25rem] md:h-[6.25rem]"
                src={widget1?.srcLight || ""}
                alt={widget1?.alt || ""}
                loading="lazy"
                width={widget1?.width || 40}
                height={widget1?.height || 20}
              />

              <Image
                class="inline dark:hidden w-[3.889rem] h-[2.604rem] md:w-[7.779rem] md:h-[5.208rem]"
                src={widget2?.srcDark || ""}
                alt={widget2?.alt || ""}
                loading="lazy"
                width={widget2?.width || 40}
                height={widget2?.height || 20}
              />
              <Image
                class="hidden dark:inline w-[3.889rem] h-[2.604rem] md:w-[7.779rem] md:h-[5.208rem]"
                src={widget2?.srcLight || ""}
                loading="lazy"
                alt={widget2?.alt || ""}
                width={widget2?.width || 40}
                height={widget2?.height || 20}
              />
            </div>
          </div>
          <div class="font-normal lg:flex lg:flex-row lg:gap-8">
            <div
              class="text-b-200 font-merriweather dark:text-black text-base lg:text-lg 2xl:text-2xl lg:leading-9"
              dangerouslySetInnerHTML={{ __html: description1 || "" }}
            />

            <div
              class="text-b-200 font-merriweather dark:text-black text-base lg:text-lg 2xl:text-2xl lg:leading-9"
              dangerouslySetInnerHTML={{ __html: description2 || "" }}
            />
          </div>
        </div>
        <div class={`${!showSlideBanner && "hidden"} w-full pt-10 lg:pt-20`}>
          <SlideBanner {...slideBanner} />
        </div>
      </div>
    </section>
  );
}
