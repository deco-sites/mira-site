import Accordion from "$store/islands/Accordion.tsx";

export interface AccordionItems {
  title?: string;
  /** @format textarea */
  description?: string;
}

export interface Props {
  /** @format html */
  title?: string;
  /** @format html */
  description?: string;
  video: string;
}

const PromoExample = {
  title: "<p>CONVERSAS DE ALTO DESEMPENHO:</p>",
  description: "<p>Confira nossa última conversa</p>",
};

export default function PromoVideo(
  {
    title = PromoExample.title,
    description = PromoExample.description,
    video =
      "https://drive.google.com/file/d/1wrvHfqvXQBM-0T4E1LhN0sFYmP-4fGl0/preview",
  }: Props,
) {
  return (
    <section class="w-full bg-black dark:bg-b-300">
      <div class="flex flex-col lg:max-w-[1224px] min-[1650px]:max-w-[1440px] text-b-200 px-6 py-16 lg:px-16 lg:py-[104px] mx-auto gap-10 lg:gap-20 min-[1024px]:scale-90 min-[1650px]:scale-100">
        <div class="space-y-6">
          <h2
            class="text-[1.5rem] lg:text-[2.125rem] min-[1650px]:text-[2.5rem] leading-relaxed lg:leading-[2.75rem] font-black dark:text-black"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <h4
            class="font-merriweather text-base lg:text-[1.275rem] min-[1650px]:text-[1.5rem] lg:leading-[2.25rem] font-normal dark:text-black"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div class="flex w-full justify-center">
          {
            /* <video
            width="616"
            height="640"
            playsInline
            loading="lazy"
            controls
            class="w-full lg:w-4/5 aspect-video object-cover rounded-3xl"
          >
            <source src={video} type="video/mp4" />
            <object data="" width="400" height="400">
              <embed width="400" height="400" src={video} />
            </object>
          </video> */
          }
          <iframe
            src={video}
            class="w-full lg:w-4/5 aspect-video"
            allow="autoplay"
          >
          </iframe>
        </div>
      </div>
    </section>
  );
}
