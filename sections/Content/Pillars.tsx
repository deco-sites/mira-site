import Accordion from "$store/components/daisy/Accordion.tsx";

export interface AccordionItems {
  title: string;
  description: string;
}

export interface Props {
  title?: string;
  description?: string;
  accordionItems: AccordionItems[];
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
    accordionItems = Array(7).fill(0).map(() => accordionExample),
  }: Props,
) {
  return (
    <section class="px-6 py-10 lg:px-16 lg:py-40">
      <div class="max-w-[640px] space-y-6 mb-10 lg:mb-20">
        <h2 class="text-[1.5rem] lg:text-[2.5rem] leading-relaxed lg:leading-[2.75rem] font-black dark:bg-[#FFF8E6]">
          {title}
        </h2>

        <p class="text-base lg:text-[1.5rem] lg:leading-[2.25rem] font-normal dark:bg-[#FFF8E6]">
          {description}
        </p>
      </div>
      <Accordion
        children={accordionItems}
      />
    </section>
  );
}
