import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

/** @titleBy url */
export interface CardInfo {
  title?: string;
  /** @format textarea */
  description?: string;
  date?: string;
  hours?: string;
  idiom?: string;
  image1?: {
    srcDark?: ImageWidget;
    srcLight?: ImageWidget;
    width?: number;
    height?: number;
  };
  image2?: {
    srcDark?: ImageWidget;
    srcLight?: ImageWidget;
    width?: number;
    height?: number;
  };
  callTitle?: string;
  eventName?: string;
  href?: string;
}

const DEFAULT_TITLE =
  "FORTALECENDO PARCERIAS ESTRATÉGICAS: UM WORKSHOP PARA COLABORAÇÃO EFICAZ";

const DEFAULT_DESCRIPTION =
  "Um Workshop virtual de um dia desenhado para parceiros estratégicos que buscam transformar seus esforços colaborativos, remover obstáculos e implementar ações imediatas. Junte-se a nós neste workshop, onde você obterá insights práticos que o ajudarão a posicionar sua parceria para o crescimento contínuo e sucesso no competitivo cenário de negócios atual.";

export default function AgendaCard(
  {
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    date = "12 de abril",
    hours = "De 9h às 17h BRT",
    idiom = "Português",
    image1,
    image2,
    callTitle,
    href,
    eventName,
  }: CardInfo,
) {
  return (
    <a
      href={href}
      target="_blank"
      class="group flex flex-col items-center text-b-200 dark:text-black"
    >
      <div class="space-y-6 lg:space-y-8 py-6 px-[23px] lg:p-8">
        <h2 class="font-bold text-[20px] leading-[24px] lg:text-[28px] lg:leading-[33.6px] text-main dark:text-sub uppercase">
          {title}
        </h2>

        <p class="font-merriweather font-normal text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px]">
          {description}
        </p>

        <div class="h-[0.5px] opacity-60 bg-b-200"></div>

        <div class="flex justify-between">
          <div class="space-y-[6.56px]">
            <p class="font-merriweather text-[14px] leading-[16.8px] lg:text-[14.76px] lg:leading-[17.71px]">
              <span class="font-bold">Data:</span> {date}
            </p>
            <p class="font-merriweather text-[14px] leading-[16.8px] lg:text-[14.76px] lg:leading-[17.71px]">
              <span class="font-bold">Horários:</span> {hours}
            </p>
            <p class="font-merriweather text-[14px] leading-[16.8px] lg:text-[14.76px] lg:leading-[17.71px]">
              <span class="font-bold">Idioma:</span> {idiom}
            </p>
          </div>

          <div class="flex flex-col lg:flex-row items-center justify-center gap-[4.92px] lg:gap-[8.4px]">
            <Image
              class="inline dark:hidden lg:w-full lg:h-full object-scale-down"
              src={image1?.srcDark || ""}
              width={image1?.width || 31}
              height={image1?.height || 31}
              loading={"lazy"}
            />
            <Image
              class="hidden dark:inline lg:w-full lg:h-full object-scale-down"
              src={image1?.srcLight || ""}
              width={image1?.width || 31}
              height={image1?.height || 31}
              loading={"lazy"}
            />

            <Image
              class="inline dark:hidden lg:w-full lg:h-full object-scale-down"
              src={image2?.srcDark || ""}
              width={image2?.width || 36}
              height={image2?.height || 23}
              loading={"lazy"}
            />
            <Image
              class="hidden dark:inline lg:w-full lg:h-full object-scale-down"
              src={image2?.srcLight || ""}
              width={image2?.width || 36}
              height={image2?.height || 23}
              loading={"lazy"}
            />
          </div>
        </div>
      </div>

      <div class="w-full flex items-center justify-between py-2 px-[18px] lg:px-8 lg:py-4 rounded-b-[24px] bg-main dark:bg-sub border-t-[0.5px] border-b-200 dark:border-black">
        {callTitle && (
          <div class="flex items-center gap-2 text-[14px] lg:text-[16px] leading-[150%] tracking-[-0.16px] uppercase text-black">
            {callTitle}
            <Icon
              width={10}
              height={10}
              id="ArrowUpRight"
              class="flex h-5 w-5 lg:h-6 lg:w-6 fill-black"
            />
          </div>
        )}
        {eventName && (
          <div class="hidden lg:block lg:text-[16px] leading-[150%] tracking-[-0.16px] text-black">
            {eventName}
          </div>
        )}
      </div>
    </a>
  );
}
