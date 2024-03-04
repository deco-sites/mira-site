import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import { VideoWidget } from "apps/admin/widgets.ts";

interface Index {
  label?: string;
  /**
   * @format textarea
   */
  description?: string;
}

export interface Props {
  image?: VideoWidget;
  textIndex?: Index[];
  placement: "left" | "right";
}

const PLACEMENT = {
  left: "flex-col lg:flex-row-reverse",
  right: "flex-col lg:flex-row",
};

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2753/b2278d2d-2270-482b-98d4-f09d5f05ba97";

export default function ImageSection({
  image = DEFAULT_IMAGE,
  textIndex,
  placement,
}: Props) {
  return (
    <div class="w-full dark:bg-base-300">
      <div
        class={`flex flex-col lg:flex-row w-full gap-10 max-w-[1440px] px-6 lg:px-16 py-10 lg:py-24 lg:mx-auto ${
          PLACEMENT[placement]
        } text-left justify-between`}
      >
        {
          /* <div class="VideoPlayer">
          <video
            class="w-full lg:w-1/2 object-fit rounded-3xl"
            style="object-position:50% 50%"
            aria-hidden="false"
            autoplay
            muted
            loop
            loading="lazy"
            preload="auto"
            aria-label="video"
            aria-describedby="desc-774df3a30fe4584a5ec8309f9fc1312dself_directed-en-CAmp4"
          >
            <source
              type="video/mp4;"
              data-src="//videos.ctfassets.net/v44fuld738we/61vOMvs1aJJ01U02Td4p7U/774df3a30fe4584a5ec8309f9fc1312d/self_directed-en-CA.mp4"
              src="//videos.ctfassets.net/v44fuld738we/61vOMvs1aJJ01U02Td4p7U/774df3a30fe4584a5ec8309f9fc1312d/self_directed-en-CA.mp4"
            />
          </video>
          <div
            class="absolute left-0 top-0"
            style="transform:translate(0, 0)"
          >
            <div
              data-testid="media-controls"
              style="bottom:22px"
              class="MediaControls-module--container_--b2aa4 MediaControls-module--containerRight_--bf59e MediaControls-module--defaultStyles_--b2069"
            >
              <div class="MediaControls-module--buttonWrapper_--4d1d7">
                <button
                  aria-label="Pause video"
                  class="MediaControls-module--button_--91f91"
                  type="button"
                >
                  <svg
                    class="MediaControls-module--icon_--a86e2"
                    height="35"
                    role="img"
                    version="1.1"
                    viewBox="0 0 512 512"
                    width="35"
                    x="0"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                    aria-hidden="true"
                  >
                    <path d="M304.199,137.723c-8.284,0-15,6.716-15,15V359.28c0,8.284,6.716,15,15,15s15-6.716,15-15V152.723    C319.199,144.439,312.483,137.723,304.199,137.723z">
                    </path>
                    <path d="M207.799,137.723c-8.284,0-15,6.716-15,15V359.28c0,8.284,6.716,15,15,15s15-6.716,15-15V152.723    C222.799,144.439,216.083,137.723,207.799,137.723z">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div> */
        }
        {
          /* <video width="616" height="640" controls autoplay loading="lazy" loop class="w-full lg:w-1/2 object-fit rounded-3xl">
        <source src="Yes Bank Advertisment.mp4" type="video/mp4" />
          <object data="" width="320" height="240">
          <embed width="320" height="240" src="Yes Bank Advertisment.mp4" />
          </object>
      </video>   */
        }
        <Image
          width={616}
          class="w-full lg:w-[46.95%] object-fit z-10 rounded-3xl"
          sizes="(max-width: 640px) 100vw, 30vw"
          src={image}
          alt={image}
          decoding="async"
          loading="lazy"
        />
        <div class="w-full flex flex-col lg:w-[46.95%] space-y-2 lg:space-y-4 lg:max-w-xl gap-10 text-base-200 justify-center">
          {textIndex?.map((text, index) => (
            <div
              class={`w-full items-start justify-center border-l-2 pl-8 ${
                index === 0
                  ? "border-primary dark:border-secondary"
                  : "border-transparent"
              }`}
            >
              <p
                class={`text-[32px] leading-[130%] font-black pb-4 uppercase dark:text-black ${
                  index === 0
                    ? "text-primary dark:text-secondary"
                    : "border-transparent"
                }`}
              >
                {text.label}
              </p>
              <p class="text-zinc-400 text-[16px] md:text-[16px] leading-[150%] font-merriweather dark:text-black">
                {text.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
