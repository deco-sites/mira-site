import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "deco-sites/mira-site/components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  variant: "Normal" | "Reverse";
}

export interface Props {
  /**
   * @format html
   */
  title: string;
  description: string;
  image?: ImageWidget;
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "",
  description = "",
  image,
}: Props) {
  return (
    <section class="flex flex-col h-screen mt-[-110px] dark:bg-[#FFF8E6]">
      <div class="flex-1">
      </div>
      <div class="min-h-[414px] px-6 pb-10">
        <h1 class="font-black text-[2rem] lg:text-[4.5rem] leading-8 lg:leading[4.5rem] dark:text-black">
          Transforme suas conversas, transforme seus resultados.
        </h1>
        <div class="mt-6 lg:mt-0 mr-[142px]">
          <p class="font-merriweather text-base lg:text-[1.5rem] lg:leading[2.25rem] dark:text-black">
            A MIRA escala o alto desempenho através da comunicação.
          </p>
        </div>
        <div class="flex items-center justify-start pt-40 lg:pt-0">
          <a
            class="btn h-9 lg:h-14 rounded-full border-none font-light text-black text-[1rem] gap-2 bg-primary dark:bg-secondary"
            href={"https://www.miraeducacao.com.br/"}
          >
            PARTICIPE DO PRÓXIMO WORKSHOP
            <Icon id="ExternalLink" class="mb-1" size={20} strokeWidth={0.01} />
          </a>
        </div>
      </div>
    </section>
  );
}
