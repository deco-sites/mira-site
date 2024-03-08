import Accordion from "$store/islands/Accordion.tsx";

export interface AccordionItems {
  title?: string;
  /** @format textarea */
  description?: string;
}

export interface Props {
  title?: string;
  /** @format textarea */
  description?: string;
  accordionItems?: AccordionItems[];
}

const accordionExample = {
  title: "RECLAMAR AGIR",
  description:
    "Qual é a ação prática que eu posso tomar para abrir mão da reclamação persistente que tenho tido?",
};

export default function Pillars(
  {
    title = "OS PILARES DO MÉTODO MIRA",
    description =
      "Leia nossos 8 pilares e descubra o que é preciso para viver em alto desempenho.",
    accordionItems = Array(8).fill(0).map(() => accordionExample),
  }: Props,
) {
  return (
    <section class="w-full bg-black dark:bg-b-300">
      <div class="flex flex-col max-[1440px]:max-w-[1224px] max-w-[1440px] text-b-200 px-6 py-10 lg:px-16 lg:py-24 mx-auto gap-10 lg:gap-20">
        <div class="max-w-[640px] space-y-6">
          <h2 class="text-[1.5rem] lg:text-[2.5rem] leading-relaxed lg:leading-[2.75rem] font-black dark:text-black">
            {title}
          </h2>

          <p class="font-merriweather text-base lg:text-[1.5rem] lg:leading-[2.25rem] font-normal dark:text-black">
            {description}
          </p>
        </div>
        <div class="flex flex-col min-[1264px]:flex-row w-full">
          <Accordion
            children2={accordionItems}
          />
        </div>
      </div>
    </section>
  );
}
