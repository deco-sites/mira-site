import { ImageWidget } from "apps/admin/widgets.ts";
import SlideBanner, {
  Props as SlideBannerProps,
} from "site/sections/Miscellaneous/Slide.tsx";
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
        <div class="py-16 px-6 md:py-20 lg:py-[104px] md:px-8 lg:px-16 lg:max-w-[1224px] min-[1650px]:max-w-[1440px] mx-auto self-center">
          <div class="grid lg:grid-cols-3">
            <div
              class="md:col-span-2 font-black text-[1.25rem] md:text-[3.375rem] leading-6 md:leading-[110%] text-b-200"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div class="flex items-center justify-end md:justify-center max-[767px]:mt-2 max-[1023px]:mt-6 gap-4 md:gap-10 text-white">
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
                width={77}
                height={80}
                id={widget1?.src || "Vanto"}
                class="flex w-8 h-10 md:w-[3.85rem] lg:w-20 md:h-16 lg:h-20 fill-white dark:fill-black"
              />
              <Icon
                width={112}
                height={80}
                id={widget2?.src || "Forbes"}
                class="flex w-12 h-[2.09rem] md:h-16 lg:h-20 md:w-[5.705rem] lg:w-28 fill-white dark:fill-black"
              />
            </div>
          </div>
          <div class="font-normal md:flex md:justify-between lg:gap-8 mt-10 lg:mt-20">
            <div
              class="text-b-200 md:w-[47%] lg:w-1/2 dark:text-black text-base md:text-xl 2xl:text-2xl md:leading-[135%]"
              dangerouslySetInnerHTML={{ __html: description1 || "" }}
            />

            <div
              class="text-b-200 md:w-[47%] lg:w-1/2 dark:text-black text-base md:text-lg 2xl:text-2xl lg:leading-9"
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
