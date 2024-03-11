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
    <section id="AgendaSection" class="w-full bg-black dark:bg-b-300">
      <div class="w-full lg:max-w-[1224px] min-[1650px]:max-w-[1440px] px-6 gap-10 lg:gap-20 py-10 lg:px-16 lg:py-24 flex flex-col lg:flex-row relative lg:justify-between mx-auto min-[1024px]:scale-90 min-[1650px]:scale-100">
        <h2 class="w-full font-black leading-[110%] uppercase text-base-200 text-[24px] lg:text-[34px] min-[1650px]:text-[40px] text-left dark:text-black">
          {title}
        </h2>
        <div class="w-full overflow-hidden">
          <Slider
            class="flex pr-[17px] gap-6 w-full overflow-hidden lg:snap-y lg:snap-mandatory overflow-x-scroll scroll-smooth"
            // deno-lint-ignore ban-ts-comment
            // @ts-ignore
            onWheel={`(function(event) {
                event.preventDefault();
                const slider = event.currentTarget;
                const scrollAmount = event.deltaY > 0 ? 400 : -400;
                slider.scrollLeft += scrollAmount;
              })(event)`}
          >
            {cards?.map(
              (card, index) => {
                return (
                  <Slider.Item
                    index={index}
                    class="border-[0.5px] h-auto border-b-200 dark:border-black rounded-[24px]"
                  >
                    <AgendaCard {...card} />
                  </Slider.Item>
                );
              },
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default AgendaSection;
