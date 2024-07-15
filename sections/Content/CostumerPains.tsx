import Image from "apps/website/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { HTMLWidget } from "apps/admin/widgets.ts";
import { ImageWidget } from "apps/admin/widgets.ts";

interface Pinup {
  iconBefore: ImageWidget;
  labelBefore: string;
  labelAfter: string;
}

const pinupsData: Pinup[] = [
  {
    iconBefore: "/path/to/icon1.png",
    labelBefore: "Ruídos de comunicação",
    labelAfter: "Comunicação interna eficiente",
  },
  {
    iconBefore: "/path/to/icon2.png",
    labelBefore: "Alto índice de retrabalho",
    labelAfter: "Processos eficientes para reduzir retrabalho",
  },
  {
    iconBefore: "/path/to/icon3.png",
    labelBefore: "Times desorganizados",
    labelAfter: "Colaboração aprimorada nos times",
  },
  {
    iconBefore: "/path/to/icon4.png",
    labelBefore: "Metas não atingidas",
    labelAfter: "Definição e alcance de metas claras",
  },
  {
    iconBefore: "/path/to/icon5.png",
    labelBefore: "Baixa performance geral",
    labelAfter: "Otimização da performance",
  },
];

export interface Props {
  title?: HTMLWidget;
  pinups?: Pinup[];
}

const DEFAULT_TITLE =
  'DORES FREQUENTES DOS NOSSOS CLIENTES <span class="text-main">E COMO SOLUCIONAMOS</span>';

export default function CostumerPains(
  { title = DEFAULT_TITLE, pinups = pinupsData }: Props,
) {
  return (
    <section class="bg-black dark:bg-b-300">
      <div class="w-full lg:max-w-[1228px] min-[1650px]:max-w-[1440px] flex flex-col justify-center items-start px-6 lg:px-16 py-16 lg:py-[104px] mx-auto min-[1024px]:scale-90 min-[1650px]:scale-100">
        <div
          class="text-b-200 text-[1.25rem] lg:text-[3.375rem] leading-[120%] lg:leading-[110%] lg:text-center font-extrabold uppercase"
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </div>
        <div class="space-y-6 lg:space-y-8 mt-10 lg:mt-20 w-full max-w-[1026px] mx-auto">
          <div class="flex justify-between max-w-[572px] mx-auto text-xs leading-[135%] font-extrabold lg:font-bold">
            <span class="text-b-200 text-base">ANTES</span>
            <span class="text-main text-base">DEPOIS</span>
          </div>
          {pinups?.map((pinup, index) => (
            <div
              key={index}
              class="flex flex-row items-center justify-between gap-6 lg:gap-8 p-2 border border-b-200 rounded-3xl lg:rounded-full"
            >
              <div class="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-2 lg:gap-4 px-4 py-2 lg:p-6 text-b-200">
                <Image
                  src={pinup.iconBefore}
                  alt={pinup.labelBefore}
                  width={40}
                  height={40}
                  class="w-6 lg:w-10 h-6 lg:h-10 "
                />
                <span class="f-roman text-[1rem] lg:text-[1.5rem]">
                  {pinup.labelBefore}
                </span>
              </div>
              <div class="flex self-stretch items-center justify-center w-1/2 bg-main text-black px-4 py-2 lg:p-6 rounded-3xl lg:rounded-full">
                <span class="text-sm lg:text-[1.25rem] leading-[130%] lg:leading-[150%] text-center font-bold">
                  {pinup.labelAfter}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
