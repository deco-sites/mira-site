import Icon from "deco-sites/mira-site/components/ui/Icon.tsx";
import { VideoWidget } from "apps/admin/widgets.ts";
import type { App as A, AppContext } from "deco/mod.ts";

export interface WorkshopButton {
  text?: string;
  url?: string;
}

export interface Props {
  /** @format html */
  title: string;
  description: string;
  heroVideo?: {
    dark?: VideoWidget;
    light?: VideoWidget;
  };
  workshopButton?: WorkshopButton;
}

const DEFAULT_TEXT =
  '<p class="gap-4"><span class="font-merryweather text-main">Empresas nos contratam para</span><br>Criar equipes de <br> alto desempenho.</p>';
[];

export default function HeroProgram({
  title = DEFAULT_TEXT,
  description = "CONHEÇA NOSSOS TREINAMENTOS",
  workshopButton = {
    text: "PARTICIPE DO PRÓXIMO TREINAMENTO",
    url: "https://www.miraeducacao.com.br/",
  },
}: Props) {
  return (
    <section class="flex flex-col justify-center items-center bg-black">
      <div class="flex flex-col lg:flex-row items-center max-lg:pt-16 lg:justify-center mx-auto h-full w-full lg:max-w-[1228px] min-[1650px]:max-w-[1440px] gap-6 lg:gap-12 px-6 pb-16 lg:px-16 lg:pb-0">
        <div class="flex flex-col items-start lg:max-w- w-full gap-12 lg:h-full lg:justify-center">
          <h1
            class="text-center font-black text-b-200 text-[2.25rem] lg:text-[5.0625rem] lg:w-full leading-[120%] lg:leading-[110%] uppercase"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div class="text-left text-b-200 text-base lg:text-[1.25rem] min-[1650px]:text-[1.5rem] lg:leading-[2.25rem] dark:text-black">
            <p>{description}</p>
            <div class="border border-b-200 rounded-full ">
              {description}
            </div>
          </div>
          <a
            class="flex flex-nowrap px-3 py-2 items-center rounded-full border-none font-light text-black text-[13px] leading-tight gap-2 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer bg-main dark:bg-sub"
            href={workshopButton.url}
          >
            <p class="text-nowrap">{workshopButton.text}</p>
            <Icon id="ExternalLink" size={14} strokeWidth={0.01} />
          </a>
        </div>
      </div>
    </section>
  );
}
