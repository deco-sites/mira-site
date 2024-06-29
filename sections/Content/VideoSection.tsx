import { VideoWidget } from "apps/admin/widgets.ts";

interface Index {
  /** @format rich-text */
  label?: string;
  /**
   * @format textarea
   */
  description?: string;
}

export interface Props {
  videoDark?: VideoWidget;
  videoLight?: VideoWidget;
  textIndex?: Index[];
  placement: "left" | "right";
}

const PLACEMENT = {
  left: "flex-col lg:flex-row-reverse",
  right: "flex-col lg:flex-row",
};

const DEFAULT_IMAGE =
  "https://videos.ctfassets.net/v44fuld738we/61vOMvs1aJJ01U02Td4p7U/774df3a30fe4584a5ec8309f9fc1312d/self_directed-en-CA.mp4";

export default function ImageSection({
  videoDark = DEFAULT_IMAGE,
  videoLight = DEFAULT_IMAGE,
  textIndex,
  placement,
}: Props) {
  return (
    <section class="w-full bg-black">
      <div
        class={`flex flex-col lg:flex-row gap-10 lg:max-w-[1224px] min-[1650px]:max-w-[1440px] px-6 lg:px-16 py-16 lg:py-[104px] lg:mx-auto ${PLACEMENT[placement]
          } text-left justify-between min-[1024px]:scale-90 min-[1650px]:scale-100`}
      >
        <video
          width="616"
          height="640"
          autoPlay
          playsInline
          muted
          loading="lazy"
          loop
          class="w-full lg:w-[46.95%] object-fit rounded-3xl dark:hidden"
        >
          <source src={videoDark} type="video/mp4" />
          <object data="" width="320" height="240">
            <embed width="320" height="240" src={videoDark} />
          </object>
        </video>
        <video
          width="616"
          height="640"
          autoPlay
          playsInline
          muted
          loading="lazy"
          loop
          class="w-full lg:w-[46.95%] object-fit rounded-3xl hidden dark:block"
        >
          <source src={videoLight} type="video/mp4" />
          <object data="" width="320" height="240">
            <embed width="320" height="240" src={videoLight} />
          </object>
        </video>
        <div class="w-full flex flex-col lg:w-[46.95%] space-y-2 lg:space-y-4 lg:max-w-xl gap-10 text-b-200 justify-center">
          {textIndex?.map((text, index) => (
            <div
              class={`w-full items-start justify-center border-l-2 pl-8 border-main`}
            >
              <p
                class="lg:col-span-2 font-black text-[1.25rem] lg:text-[3.375rem] uppercase leading-6 lg:leading-[110%] text-b-200"
                dangerouslySetInnerHTML={{ __html: text.label ?? '' }}
              />
              <p class="text-zinc-400 text-[16px] lg:text-[0.875rem] min-[1650px]:text-[16px] leading-[150%] mt-6">
                {text.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
