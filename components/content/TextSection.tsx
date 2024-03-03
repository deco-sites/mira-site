import type { HTMLWidget } from "apps/admin/widgets.ts";
import Icon from "deco-sites/mira-site/components/ui/Icon.tsx";

export interface Props {
  BigText?: HTMLWidget;
  /** @format textarea */
  smallText?: string;
}

const DEFAULT_TEXT =
  '<p style="color: #FFFBF0; font-size: 40px; font-style: normal; font-weight: 900; line-height: 110%; text-transform: uppercase;">As empresas não performam como poderiam e muitas vezes não acessam o real problema:</br><span style="color: #F5BF62;">Como as pessoas estão se comunicando no dia-a-dia.</span></p>';
[];

const DEFAULT_SMALL_TEXT =
  "Nós transformamos a comunicação e a performance de indivíduos e grupos. Para isso, possibilitamos a compreensão da importância da qualidade das conversas e distinção de como elas moldam a realidade, limitando ou expandindo a performance.";

export default function RichText(
  { BigText = DEFAULT_TEXT, smallText = DEFAULT_SMALL_TEXT }: Props,
) {
  return (
    <div class="w-full max-w-[1440px] flex flex-col lg:flex-row justify-center lg:justify-between items-start px-6 lg:px-16 py-10 lg:py-24 mx-auto">
      <div class="flex flex-col w-[55.031%] gap-3">
        <div
          class="text-base-200 text-2xl lg:text-[40px] font-black leading-[110%] uppercase"
          dangerouslySetInnerHTML={{ __html: BigText }}
        >
        </div>
        <Icon
          id="LongBar"
          stroke-width={1}
          class="hidden lg:block left-[-1px] w-[123.8%]"
        />
      </div>
      <div class="w-[28.583%] text-base-200 font-merriweather text-base lg:text-2xl leading-[150%] overflow-auto">
        {smallText}
      </div>
    </div>
  );
}
