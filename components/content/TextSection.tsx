import type { HTMLWidget } from "apps/admin/widgets.ts";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  BigText?: HTMLWidget;
  /** @format textarea */
  smallText?: string;
}

const DEFAULT_TEXT =
  '<p>As empresas não performam como poderiam e muitas vezes não acessam o real problema:</br><span class="text-main dark:text-sub">Como as pessoas estão se comunicando no dia-a-dia.</span></p>';
[];

const DEFAULT_SMALL_TEXT =
  "Nós transformamos a comunicação e a performance de indivíduos e grupos. Para isso, possibilitamos a compreensão da importância da qualidade das conversas e distinção de como elas moldam a realidade, limitando ou expandindo a performance.";

export default function RichText(
  { BigText = DEFAULT_TEXT, smallText = DEFAULT_SMALL_TEXT }: Props,
) {
  return (
    <section class="bg-black dark:bg-b-300">
      <div class="w-full lg:max-w-[1228px] min-[1650px]:max-w-[1440px] flex flex-col lg:flex-row justify-center gap-10 md:gap-16 lg:justify-between items-start px-6 md:px-8 lg:px-16 py-16 md:py-20 lg:py-[104px] mx-auto min-[1024px]:scale-90 min-[1650px]:scale-100">
        <div class="flex flex-col w-full lg:w-[55.031%] md:gap-6">
          <div
            class="text-b-200 text-[1.25rem] md:text-[2.5rem] lg:text-[3.375rem] leading-[120%] md:leading-[110%] font-extrabold uppercase"
            dangerouslySetInnerHTML={{ __html: BigText }}
          >
          </div>
          <Icon
            id="LongBar"
            stroke-width={1}
            class="hidden md:block left-[-1px] h-1.5 lg:w-[121%] fill-main dark:fill-sub"
          />
        </div>
        <div class="lg:w-[28.583%] text-b-200 text-base md:text-[1.275rem] min-[1650px]:text-2xl leading-[150%] overflow-auto dark:text-black">
          {smallText}
        </div>
      </div>
    </section>
  );
}
