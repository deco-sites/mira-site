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
    <section class="relative bg-white text-black max-w-screen">
      <div class="p-2 lg:px-14">
        <div class="grid lg:grid-cols-3 mb-5 gap-3">
          <h2
            class="lg:col-span-2 font-medium text-4xl lg:text-5xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div class="space-x-10">
            <Image
              class="inline dark:hidden"
              src={widget1?.srcDark || ""}
              alt={widget1?.alt || ""}
              width={widget1?.width || 40}
              height={widget1?.height || 20}
            />
            <Image
              class="hidden dark:inline"
              src={widget1?.srcLight || ""}
              alt={widget1?.alt || ""}
              width={widget1?.width || 40}
              height={widget1?.height || 20}
            />

            <Image
              class="inline dark:hidden"
              src={widget2?.srcDark || ""}
              alt={widget2?.alt || ""}
              width={widget2?.width || 40}
              height={widget2?.height || 20}
            />
            <Image
              class="hidden dark:inline"
              src={widget2?.srcLight || ""}
              alt={widget2?.alt || ""}
              width={widget2?.width || 40}
              height={widget2?.height || 20}
            />
          </div>
        </div>
        <div class="grid lg:grid-cols-2 lg:gap-8">
          <p
            class="text-base lg:text-2xl"
            dangerouslySetInnerHTML={{ __html: description1 || "" }}
          />

          <p
            class="text-base lg:text-2xl"
            dangerouslySetInnerHTML={{ __html: description2 || "" }}
          />
        </div>
      </div>
      <SlideBanner {...slideBanner} />
    </section>
  );
}
