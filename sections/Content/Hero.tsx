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
  slogan?: string;
  description: string;
  heroVideo?: {
    dark?: VideoWidget;
    light?: VideoWidget;
  };
  workshopButton?: WorkshopButton;
}

const DEFAULT_TEXT =
  '<p>TRANSFORME SUAS <span class="text-main dark:text-sub">CONVERSAS</span>, TRANSFORME SEUS <span class="text-main dark:text-sub">RESULTADOS.</span></p>';
[];

export default function HeroFlats({
  title = DEFAULT_TEXT,
  slogan = "COMUNICAÇÃO DE ALTO DESEMPENHO",
  description = "A MIRA escala o alto desempenho através da comunicação.",
  workshopButton = {
    text: "PARTICIPE DO PRÓXIMO TREINAMENTO",
    url: "https://www.miraeducacao.com.br/",
  },
  heroVideo,
}: Props) {
  return (
    <section class="flex flex-col lg:h-[calc(100vh-80.25px)] justify-center items-center bg-black dark:bg-b-300">
      {
        /* <h3 class="block lg:hidden text-center lg:text-left text-[12px] leading-[16px] lg:text-[18px] lg:leading-[27px] font-black text-white dark:text-black">
        {slogan}
      </h3> */
      }
      <div class="flex flex-col lg:flex-row items-center max-lg:pt-16 lg:justify-center mx-auto h-full w-full lg:max-w-[1228px] min-[1650px]:max-w-[1440px] gap-6 lg:gap-12 px-6 pb-16 lg:px-16 lg:pb-0">
        <div class="flex flex-col items-start max-lg:item w-full gap-6 lg:h-full lg:justify-center">
          <h1
            class="text-left font-black text-b-200 text-[2rem] max-w-[324px] lg:max-w-[613px] min-[1650px]:max-w-[722px] lg:text-[3.375rem] lg:w-full leading-[120%] lg:leading-[110%] dark:text-black uppercase"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p class="text-left text-b-200 text-base lg:text-[1.25rem] min-[1650px]:text-[1.5rem] lg:leading-[2.25rem] dark:text-black">
            {description}
          </p>
          <a
            class="flex flex-nowrap px-3 py-2 items-center rounded-full border-none font-light text-black text-[13px] leading-tight gap-2 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer bg-main dark:bg-sub"
            href={workshopButton.url}
          >
            <p class="text-nowrap">{workshopButton.text}</p>
            <Icon id="ExternalLink" size={14} strokeWidth={0.01} />
          </a>
        </div>
        <video
          width="616"
          height="640"
          autoPlay
          muted
          playsInline
          loading="lazy"
          loop
          class="hidden lg:block w-4/5 max-w-[500px] lg:max-w-[100%] lg:w-[40%] min-[1650px]:w-[46.95%] aspect-square lg:aspect-auto object-cover rounded-3xl"
        >
          <source src={heroVideo?.dark} type="video/mp4" />
          <object data="" width="400" height="400">
            <embed width="400" height="400" src={heroVideo?.dark} />
          </object>
        </video>
        {
          /* <video
          width="616"
          height="640"
          autoPlay
          muted
          playsInline
          loading="lazy"
          loop
          class="w-4/5 max-w-[500px] lg:max-w-[100%] lg:w-[40%] min-[1650px]:w-[46.95%] aspect-square lg:aspect-auto object-cover rounded-3xl hidden dark:block"
        >
          <source src={heroVideo?.light} type="video/mp4" />
          <object data="" width="400" height="400">
            <embed width="400" height="400" src={heroVideo?.light} />
          </object>
        </video> */
        }
      </div>
    </section>
  );
}
