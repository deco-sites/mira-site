import type { HTMLWidget } from "apps/admin/widgets.ts";
import Icon from "deco-sites/mira-site/components/ui/Icon.tsx";

export interface Props {
  BigText: HTMLWidget;
  /** @format textarea */
  smallText: string;
}

const DEFAULT_TEXT =
  '<p style="color: #FFFBF0; font-size: 40px; font-style: normal; font-weight: 900; line-height: 110%; text-transform: uppercase;">As empresas não performam como poderiam e muitas vezes não acessam o real problema:<span style="color: #F5BF62;">Como as pessoas estão se comunicando no dia-a-dia.</span></p>';
[];

const DEFAULT_SMALL_TEXT =
  "Nós transformamos a comunicação e a performance de indivíduos e grupos. Para isso, possibilitamos a compreensão da importância da qualidade das conversas e distinção de como elas moldam a realidade, limitando ou expandindo a performance.";

export default function RichText(
  { BigText = DEFAULT_TEXT, smallText }: Props,
) {
  return (
    <div class="container flex flex-col lg:flex-row justify-center lg:justify-between items-start px-6 lg:px-16 py-10 lg:py-24">
      <div
        dangerouslySetInnerHTML={{ __html: BigText }}
      >
      </div>
      <div>
        {smallText}
      </div>
    </div>
  );
}
