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
    <section class="flex flex-col max-w-screen h-screen lg:mt-[-110px] justify-center items-center dark:bg-[#FFF8E6]">
      <div class="hidden lg:block lg:flex-1">
      </div>
      <div class="max-w-[1440px] mx-auto">
        <div class="flex flex-col lg:flex-row justify-center items-centers lg:pb-28 2xl:pb-40 px-6 lg:px-16">
          <div class="flex flex-col lg:max-w-[722px]">
            <h1 class="font-black text-base-200 text-[2rem] md:text-5xl xl:text-[4.5rem] leading-8 lg:leading-[4.5rem] dark:text-black">
              {title}
            </h1>
            <div class="hidden lg:flex items-end justify-start pt-40 lg:pt-0 lg:pb-32">
            </div>
          </div>
          <div class="pt-6 flex items-center lg:items-end">
            <p class="font-merriweather text-base-200 text-base md:text-lg xl:text-[1.5rem] lg:leading-[2.25rem] dark:text-black">
              {description}
            </p>
          </div>
          <div class="flex lg:hidden items-center pt-40 pb-32">
            <a
              class="flex px-3 py-2 max-w-[278px] h-9 rounded-full border-none font-light text-black text-[13px] bg-primary dark:bg-secondary p-0 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer"
              href={workshopButton.url}
            >
              <h3 class="text-nowrap">
                {workshopButton.text}
              </h3>
              <div class="mb-1 h-5 w-5 flex items-center justify-center">
                <Icon
                  id="ExternalLink"
                  size={12}
                  strokeWidth={0.01}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
