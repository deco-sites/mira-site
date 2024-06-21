import SectionHeading from "deco-sites/mira-site/components/ui/SectionHeading.tsx";
import { HeadingProps } from "deco-sites/mira-site/components/ui/SectionHeading.tsx";

export interface AccordionItems {
  title?: string;
  /** @format textarea */
  description?: string;
}

export interface Props {
  heading?: HeadingProps;
  video: string;
}

const defaultHeading: HeadingProps = {
  title: "CONVERSAS DE ALTO DESEMPENHO:",
  subtitle:
    "Confira nossa última conversa com Geraldo Thomaz (Co-CEO VTEX), Guilherme Rodrigues (CEO deco.cx) e Olga Loffredi (CEO Vanto Group) e descubra o impacto que comunicação de alto desempenho gerou nas suas empresas.",
};

export default function PromoVideo(
  {
    heading = defaultHeading,
    video =
      "https://drive.google.com/file/d/1wrvHfqvXQBM-0T4E1LhN0sFYmP-4fGl0/preview",
  }: Props,
) {
  return (
    <section class="w-full bg-black dark:bg-b-300">
      <div class="flex flex-col lg:max-w-[1228px] min-[1650px]:max-w-[1440px] text-b-200 px-6 py-16 lg:px-16 lg:py-[104px] mx-auto gap-10 lg:gap-20 min-[1024px]:scale-90 min-[1650px]:scale-100">
        <div class="space-y-6 lg:text-center">
          <SectionHeading {...heading} />
        </div>
        <div class="flex w-full justify-center">
          <iframe
            class="w-full lg:w-4/5 aspect-video rounded-xl border border-b-200 dark:border-0 p-0.5"
            src={`https://www.youtube.com/embed/${video}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          >
          </iframe>
        </div>
      </div>
    </section>
  );
}
