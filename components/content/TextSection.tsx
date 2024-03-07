import type { HTMLWidget } from "apps/admin/widgets.ts";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  BigText?: HTMLWidget;
  /** @format textarea */
  smallText?: string;
}

const DEFAULT_TEXT =
  '<p>As empresas não performam como poderiam e muitas vezes não acessam o real problema:</br><span class="text-primary dark:text-secondary">Como as pessoas estão se comunicando no dia-a-dia.</span></p>';
[];

const DEFAULT_SMALL_TEXT =
  "Nós transformamos a comunicação e a performance de indivíduos e grupos. Para isso, possibilitamos a compreensão da importância da qualidade das conversas e distinção de como elas moldam a realidade, limitando ou expandindo a performance.";

export default function RichText(
  { BigText = DEFAULT_TEXT, smallText = DEFAULT_SMALL_TEXT }: Props,
) {
  return (
    <div class="dark:bg-base-300">
      <div class="w-full lg:max-w-[1224px] min-[1440px]:max-w-[1440px] flex flex-col lg:flex-row justify-center gap-6 lg:gap-0 lg:justify-between items-start px-6 lg:px-16 py-10 lg:py-24 mx-auto">
        <div class="flex flex-col w-full lg:w-[55.031%] gap-3">
          <div
            class="text-base-200 dark:text-black text-2xl lg:text-[32px] min-[1440px]:text-[40px] font-black leading-[110%] uppercase"
            dangerouslySetInnerHTML={{ __html: BigText }}
          >
          </div>
          <Icon
            id="LongBar"
            stroke-width={1}
            class="hidden lg:block left-[-1px] w-[121%] fill-primary dark:fill-secondary"
          />
        </div>
        <div class="lg:w-[28.583%] font-merryweather text-base-200 font-merriweather text-base lg:text-xl min-[1440px]:text-2xl leading-[150%] overflow-auto dark:text-black">
          {smallText}
        </div>
      </div>
    </div>
  );
}
