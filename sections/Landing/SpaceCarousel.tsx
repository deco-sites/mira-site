import {
  SendEventOnClick,
  SendEventOnView,
} from "$store/components/Analytics.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description desktop otimized image */
  desktop: ImageWidget;
  /** @description mobile otimized image */
  mobile: ImageWidget;
  /** @description Image's alt text */
  alt: string;
  /** @description when user clicks on the image, go to this link */
  href: string;
  /** @description Button label */
  label: string;
}

export interface Props {
  /** @format html */
  title?: string;
  description?: string;
  images?: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const DEFAULT_PROPS = {
  images: [
    {
      alt: "/feminino",
      href: "https://www.deco.cx/",
      label: "deco.cx",
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/24278f9e-412d-4a8a-b2d3-57353bb1b368",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/afa2c07c-74f4-496d-8647-5cc58f48117b",
    },
  ],
  preload: true,
};

function BannerItem(
  { image, lcp, id }: { image: Banner; lcp?: boolean; id: string },
) {
  const {
    alt,
    mobile,
    desktop,
    href,
    label,
  } = image;

  return (
    <a
      id={id}
      href={href ?? "#"}
      aria-label={label}
      class="relative max-h-[700px] overflow-y-hidden w-full"
    >
      <Picture preload={lcp}>
        <Source
          media="(max-width: 767px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={mobile}
          width={343}
          height={202}
        />
        <Source
          media="(min-width: 768px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={desktop}
          width={1184}
          height={720}
        />
        <img
          class="object-contain w-full h-full rounded-lg"
          loading={lcp ? "eager" : "lazy"}
          src={desktop}
          alt={alt}
        />
      </Picture>
    </a>
  );
}

function Dots({ images, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul className="carousel justify-center col-span-full gap-4 z-10">
        {images?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="w-2 h-2 rounded-full group-disabled:bg-main bg-[#71717A] dark:group-disabled:bg-sub border-[1px]" />
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <>
      <div class="absolute top-1/2 bottom-1/2 left-[5%] items-center justify-center z-10 col-start-1 lg:flex hidden">
        <Slider.PrevButton class="btn btn-circle bg-[#fcf7f7]">
          <Icon
            class="text-black"
            size={24}
            id="ArrowPointingLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="absolute top-1/2 bottom-1/2 right-[4%] lg:flex items-center justify-center z-10 col-start-3 hidden">
        <Slider.NextButton class="btn btn-circle bg-[#fcf7f7]">
          <Icon
            class="text-black"
            size={24}
            id="ArrowPointingRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

function SpaceCarousel(props: Props) {
  const id = useId();
  const { title, description, images, preload, interval } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div
      id={id}
      class="relative container mx-auto max-w-6xl flex flex-col items-center w-full m-auto py-10 gap-4 zoom"
    >
      <div class="flex flex-col items-center space-y-6 w-full">
        <h2
          class="text-b-200 dark:text-black text-4xl leading-snug"
          dangerouslySetInnerHTML={{
            __html: title ?? "",
          }}
        />
        <p class="text-b-200 dark:text-black text-lg">
          {description}
        </p>
      </div>
      <div class="relative h-fit w-4/5">
        <Slider class="carousel carousel-center w-full col-span-full row-span-full gap-6">
          {images?.map((image, index) => {
            const params = { promotion_name: image.alt };

            return (
              <Slider.Item
                index={index}
                class="carousel-item w-11/12"
              >
                <BannerItem
                  image={image}
                  lcp={index === 0 && preload}
                  id={`${id}::${index}`}
                />
                <SendEventOnClick
                  id={`${id}::${index}`}
                  event={{ name: "select_promotion", params }}
                />
                <SendEventOnView
                  id={`${id}::${index}`}
                  event={{ name: "view_promotion", params }}
                />
              </Slider.Item>
            );
          })}
        </Slider>
        <Buttons />
      </div>

      <Dots images={images} interval={interval} />

      <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
    </div>
  );
}

export default SpaceCarousel;
