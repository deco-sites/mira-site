import Accordion from "$store/islands/Accordion.tsx";
import SectionHeading from "deco-sites/mira-site/components/ui/SectionHeading.tsx";
import { HeadingProps } from "deco-sites/mira-site/components/ui/SectionHeading.tsx";

export interface AccordionItems {
  title?: string;
  /** @format textarea */
  description?: string;
}

export interface Props {
  heading?: HeadingProps;
  accordionItems?: AccordionItems[];
}

const defaultHeading: HeadingProps = {
  title: "NOSSOS PILARES",
  subtitle:
    "Leia nossos 8 pilares e descubra o que é preciso para viver em alto desempenho.",
};

const accordionExample = {
  title: "RECLAMAR AGIR",
  description:
    "Qual é a ação prática que eu posso tomar para abrir mão da reclamação persistente que tenho tido?",
};

export default function Pillars(
  {
    heading = defaultHeading,
    accordionItems = Array(8).fill(0).map(() => accordionExample),
  }: Props,
) {
  return (
    <section class="w-full bg-black dark:bg-b-300">
      <div class="flex flex-col lg:max-w-[1228px] min-[1650px]:max-w-[1440px] text-b-200 px-6 py-16 lg:px-16 lg:py-[104px] mx-auto gap-10 lg:gap-20 min-[1024px]:scale-90 min-[1650px]:scale-100">
        <div class="lg:max-w-[760px] space-y-6">
          <SectionHeading {...heading} />
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
