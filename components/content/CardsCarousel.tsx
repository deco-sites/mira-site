import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import type { HTMLWidget } from "apps/admin/widgets.ts";
import Card from "$store/components/content/Card.tsx";
import type { Props as CardProps } from "$store/components/content/Card.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { ComponentChildren, toChildArray } from "preact";
import { useId } from "$store/sdk/useId.ts";

export interface Props {
  title?: HTMLWidget;
  clientCard?: CardProps[];
}

const DEFAULT_TEXT =
  '<p>Trabalhamos com líderes</br><span class="text-primary dark:text-secondary">comprometidos com o futuro:</span></p>';
[];

function CardsCarousel(
  { title = DEFAULT_TEXT, clientCard }: Props,
) {
  const id = useId();
  const items = toChildArray(clientCard);

  if (!clientCard || clientCard.length === 0) {
    return null;
  }

  return (
    <div class="w-full dark:bg-base-300">
      <div class="w-full max-w-[1440px] py-10 flex flex-col gap-10 lg:gap-20 px-6 lg:px-16 mx-auto lg:py-24">
        <h3
          class="text-base-200 dark:text-black text-2xl lg:text-[32px] xl:text-[40px] font-black leading-[110%] uppercase"
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h3>

        <div
          id={id}
          class="w-full flex flex-col gap-8"
        >
          <Slider class="w-full carousel carousel-start gap-2 lg:gap-[15px] col-span-full row-start-2 row-end-5 overflow">
            {clientCard?.map((card, index) => (
              <Slider.Item
                index={index}
                class="carousel-item w-full lg:w-[calc((100%-46px)/3)] sm:first:pl-0 sm:last:pr-0 bg-transparent border-base-200 rounded-[24px_24px_0_24px] border-[0.5px] dark:border-black"
              >
                <Card {...card} />
              </Slider.Item>
            ))}
          </Slider>
          <div class="w-full flex justify-between items-center">
            <ul class="carousel items-end justify-center col-span-full gap-4 z-10 row-start-4">
              {items?.map((_, index) => (
                <li class="carousel-item">
                  <Slider.Dot index={index}>
                    <div class="w-2 h-2 rounded-full group-disabled:bg-base-200 bg-[#71717A] dark:group-disabled:bg-black border-[1px]" />
                  </Slider.Dot>
                </li>
              ))}
            </ul>
            <div class="flex">
              <Slider.PrevButton class="btn btn-circle !bg-[transparent] border border-base-200 dark:border-black ">
                <Icon
                  size={24}
                  id="ArrowPointingLeft"
                  strokeWidth={3}
                  class="fill-base-200 group-hover:fill-black dark:fill-black"
                />
              </Slider.PrevButton>
              <Slider.NextButton class="btn btn-circle !bg-[transparent] border border-base-200 dark:border-black">
                <Icon
                  size={24}
                  id="ArrowPointingRight"
                  strokeWidth={3}
                  class="fill-base-200 group-hover:fill-black dark:fill-black"
                />
              </Slider.NextButton>
            </div>
          </div>
          <SliderJS rootId={id} infinite />
        </div>
      </div>
    </div>
  );
}

export default CardsCarousel;
