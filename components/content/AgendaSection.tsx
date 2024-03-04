import AgendaCard from "$store/components/cards/AgendaCard.tsx";
import type { CardInfo } from "$store/components/cards/AgendaCard.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";

interface Props {
  title?: string;
  /** @titleBy url */
  cards?: CardInfo[];
}

function AgendaSection(props: Props) {
  const {
    title = "PRÓXIMOS PROGRAMAS:",
    cards,
  } = props;

  const id = useId();

  return (
    <div class="w-full dark:bg-base-300">
      <div class="w-full max-w-[1440px] px-6 gap-10 py-10 lg:px-16 lg:py-28 flex flex-col lg:flex-row relative lg:justify-between mx-auto">
        <h2 class="w-full lg:w-[44%] font-black leading-[110%] uppercase text-base-200 text-[24px] lg:text-[40px] text-left dark:text-black">
          {title}
        </h2>
        <div id={id} class="w-full h-full lg:w-[51.677%]">
          <Slider class="flex flex-col pr-[17px] lg:h-[85vh] gap-6 w-full overflow-hidden lg:snap-y lg:snap-mandatory overflow-y-auto scroll-smooth">
            {cards?.map(
              (card, index) => {
                return (
                  <Slider.Item
                    index={index}
                    class="border-[0.5px] h-full border-base-200 dark:border-black rounded-[24px]"
                  >
                    <AgendaCard {...card} />
                  </Slider.Item>
                );
              },
            )}
          </Slider>
        </div>
        {/* Progress*/}
        {
          /* <Slider.Progress />
          <SliderJS rootId={id} /> */
        }
      </div>
    </div>
  );
}

export default AgendaSection;
