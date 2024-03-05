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
    <section class="flex flex-col h-screen mt-[-110px] justify-center items-center dark:bg-[#FFF8E6]">
      <div class="flex-1">
      </div>
      <div class="min-h-[414px] max-w-[1312px]  xl:grid xl:grid-cols-2 xl:grid-rows-2 px-6 pb-10 lg:px-16 lg:pb-0">
        <h1 class="font-black text-base-200 text-[2rem] lg:text-[4.5rem] leading-8 lg:leading-[4.5rem] dark:text-black uppercase">
          {title}
        </h1>
        <div class="row-span-2 max-w-[375px] flex items-end mt-6 xl:mt-0 mr-[142px] lg:mr-0 xl:pl-16 lg:pb-40">
          <p class="font-merriweather text-base-200 text-base lg:text-[1.5rem] lg:leading-[2.25rem] dark:text-black">
            {description}
          </p>
        </div>
        <div class="flex items-end justify-start pt-40 lg:pt-0 lg:pb-40">
          <a
            class="btn h-9 lg:h-14 rounded-full border-none font-light text-black text-[1rem] gap-2 bg-primary dark:bg-secondary"
            href={workshopButton.url}
          >
            {workshopButton.text}
            <Icon id="ExternalLink" class="mb-1" size={20} strokeWidth={0.01} />
          </a>
        </div>
      </div>
    </section>
  );
}
