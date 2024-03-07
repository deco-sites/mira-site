import Icon from "deco-sites/mira-site/components/ui/Icon.tsx";

export interface WorkshopButton {
  text?: string;
  url?: string;
}

export interface Props {
  title: string;
  description: string;
  workshopButton?: WorkshopButton;
}

export default function HeroFlats({
  title = "Transforme suas conversas, transforme seus resultados.",
  description = "A MIRA escala o alto desempenho através da comunicação.",
  workshopButton = {
    text: "PARTICIPE DO PRÓXIMO WORKSHOP",
    url: "https://www.miraeducacao.com.br/",
  },
}: Props) {
  return (
    <section class="flex h-[calc(100vh-106px)] lg:h-[calc(100vh-82px)] justify-center items-center dark:bg-[#FFF8E6]">
      <div class="flex flex-col h-full w-full lg:max-w-[1224px] min-[1440px]:max-w-[1440px] lg:gap-10 px-6 pb-10 lg:px-16 lg:pb-0 lg:justify-center mx-auto">
        <div class="flex flex-col lg:w-full gap-6 lg:gap-10 h-4/5 lg:h-full justify-center lg:justify-center">
          <h1 class="font-black text-base-200 text-[2rem] max-w-[722px] lg:text-[4.5rem] lg:w-full leading-8 lg:leading-[4.5rem] dark:text-black">
            {title}
          </h1>
          <div class="w-full flex items-start lg:items-end lg:justify-end">
            <p class="max-w-[375px] font-merriweather text-base-200 text-base lg:text-[1.5rem] lg:leading-[2.25rem] dark:text-black">
              {description}
            </p>
          </div>
        </div>
        <div class="flex items-center justify-start h-1/5 lg:hidden">
          <a
            class="inline-flex items-center justify-center px-3 py-2 rounded-full border-none font-light text-black text-[13px] leading-[150%] tracking-[-0.13px] gap-2 bg-primary dark:bg-secondary"
            href={workshopButton.url}
          >
            <p class="text-nowrap">{workshopButton.text}</p>
            <Icon id="ExternalLink" class="mb-1" size={20} strokeWidth={0.01} />
          </a>
        </div>
      </div>
    </section>
  );
}
