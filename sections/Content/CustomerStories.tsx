import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import type { HTMLWidget } from "apps/admin/widgets.ts";
import Card from "$store/components/cards/CustomerCards.tsx";
import type { Props as CardProps } from "$store/components/cards/CustomerCards.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { ComponentChildren, toChildArray } from "preact";
import { AppContext } from "$store/apps/site.ts";
import { useId } from "$store/sdk/useId.ts";
import SectionHeading from "deco-sites/mira-site/components/ui/SectionHeading.tsx";
import { HeadingProps } from "deco-sites/mira-site/components/ui/SectionHeading.tsx";

export interface Props {
  title?: HeadingProps;
  clientCard?: CardProps[];
}

const DEFAULT_TEXT =
  '<p>Trabalhamos com líderes</br><span class="text-main dark:text-sub">comprometidos com o futuro:</span></p>';
[];

// deno-lint-ignore require-await
export const loader = async (
  props: Props,
  req: Request,
  ctx: AppContext,
) => {
  const device = ctx.device;

  if (device === "desktop") {
    return {
      ...props,
      isDesktop: true,
    };
  } else {
    return {
      ...props,
      isDesktop: false,
    };
  }
};

function CustomerStories(
  { title, clientCard, isDesktop }: Omit<Props, "isDesktop"> & {
    title?: HeadingProps;
    clientCard?: CardProps[];
    isDesktop: boolean;
  },
) {
  const id = useId();
  const items = toChildArray(clientCard);

  if (!clientCard || clientCard.length === 0) {
    return null;
  }

  return (
    <section class="w-full bg-black dark:bg-b-300">
      <div class="w-full lg:max-w-[1228px] min-[1650px]:max-w-[1440px] py-16 flex flex-col gap-10 lg:gap-20 px-6 lg:px-16 mx-auto lg:py-[104px] min-[1024px]:scale-90 min-[1650px]:scale-100">
        <SectionHeading {...title} />
        <div
          id={id}
          class="w-full flex flex-col gap-8"
        >
          <Slider class="pr-[2px] w-full carousel carousel-center gap-2 col-span-full row-start-2 row-end-5 overflow-y-hidden">
            {clientCard?.map((card, index) => (
              <Slider.Item
                index={index}
                class="carousel-item w-[calc(100%-5px)] lg:w-[calc((100%-46px)/3)] bg-transparent rounded-3xl"
              >
                <Card {...card} />
              </Slider.Item>
            ))}
          </Slider>
          {items.length > 3 &&
            (
              <div class={`w-full flex justify-between items-center`}>
                <ul class="carousel items-end justify-center col-span-full gap-4 z-10 row-start-4">
                  {items?.map((_, index) => (
                    <li
                      class={`carousel-item ${
                        isDesktop && index % 3 !== 0 ? "hidden" : ""
                      }`}
                    >
                      <Slider.Dot index={index}>
                        <div class="w-2 h-2 rounded-full group-disabled:bg-b-200 bg-[#71717A] dark:group-disabled:bg-black border-[1px]" />
                      </Slider.Dot>
                    </li>
                  ))}
                </ul>
                <div class="flex gap-[15px]">
                  <Slider.PrevButton class="btn btn-circle !bg-[transparent] border border-b-200 dark:border-black ">
                    <Icon
                      size={24}
                      id="ArrowPointingLeft"
                      strokeWidth={3}
                      class="fill-b-200 group-hover:fill-black dark:fill-black"
                    />
                  </Slider.PrevButton>
                  <Slider.NextButton class="btn btn-circle !bg-[transparent] border border-b-200 dark:border-black">
                    <Icon
                      size={24}
                      id="ArrowPointingRight"
                      strokeWidth={3}
                      class="fill-b-200 group-hover:fill-black dark:fill-black"
                    />
                  </Slider.NextButton>
                </div>
              </div>
            )}

          <SliderJS rootId={id} infinite />
        </div>
      </div>
    </section>
  );
}

export default CustomerStories;
