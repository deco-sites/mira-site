import { ImageWidget } from "apps/admin/widgets.ts";
import SlideBanner, {
  Props as SlideBannerProps,
} from "deco-sites/mira-site/sections/Miscellaneous/Slide.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface WidgetData {
  src?: AvailableIcons;
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
      <div class="min-[1024px]:scale-90 min-[1650px]:scale-100">
        <div class="py-16 px-6 lg:py-[104px] lg:px-16 lg:max-w-[1224px] min-[1650px]:max-w-[1440px] mx-auto self-center">
          <div class="grid lg:grid-cols-3 pb-6 lg:pb-20">
            <div
              class="lg:col-span-2 font-black text-2xl leading-[1.65rem] lg:text-[2.125rem] min-[1650px]:text-[2.5rem] lg:leading-[3.5rem] text-b-200 dark:text-black"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div class="flex items-center max-[1024px]:mt-6 gap-4 lg:gap-9 text-white dark:text-black">
              {
                /* <Image
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
              /> */
              }
              <Icon
                width={72}
                height={74}
                id={widget1?.src || "Vanto"}
                class="flex w-[31px] h-[32px] lg:w-[72px] lg:h-[74px] fill-white dark:fill-black"
              />
              <Icon
                width={139.3}
                height={95.6}
                id={widget2?.src || "Forbes"}
                class="flex w-[3.748rem] h-[2.625rem] lg:h-[5.984rem] lg:w-[8.70666rem] fill-white dark:fill-black"
              />
            </div>
          </div>
          <div class="font-normal lg:flex lg:gap-8">
            <div
              class="text-b-200 lg:w-1/2 font-merriweather dark:text-black text-base lg:text-lg 2xl:text-2xl lg:leading-9"
              dangerouslySetInnerHTML={{ __html: description1 || "" }}
            />

            <div
              class="text-b-200 lg:w-1/2 font-merriweather dark:text-black text-base lg:text-lg 2xl:text-2xl lg:leading-9"
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
