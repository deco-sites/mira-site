import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  logo?: AvailableIcons;
  /** @format textarea */
  text?: string;
  name?: string;
  role?: string;
  photo?: ImageWidget;
}

const IMAGE_WIDTH = 80;

export default function Card(props: Props) {
  const {
    logo,
    text,
    name,
    role,
    photo = "C:/Users/Marcos/Documents/Mira//card-photo.png",
  } = props;
  return (
    <div class="p-6 lg:p-8 text-b-200 rounded-[24px_24px_0_24px]">
      <div class="flex flex-col h-full gap-6 items-start justify-between dark:text-black">
        <div class="space-y-6">
          <div class="max-w-[104px] max-h-[52px] p-2 flex justify-center items-center text-white dark:text-black">
            <Icon
              id={logo || "miraLC"}
              class="flex fill-white dark:fill-black max-h-[50px]"
            />
          </div>
          <p class="text-white text-[0.8125rem] lg:text-[15px] min-[1650px]:text-[16px] leading-[150%]">
            {text}
          </p>
        </div>
        <div class="flex justify-start w-full items-center gap-4">
          <Image
            src={photo ?? ""}
            class="aspect-[1/1] object-contain"
            width={IMAGE_WIDTH}
            height={IMAGE_WIDTH}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            preload
          />
          <div class="flex flex-col text-[1rem] lg:text-[1.115rem] min-w-[1500px]:text-[1.25rem] leading-[150%]">
            <p class="leading-[135%] lg:leading-[150%] font-bold">
              {name}
            </p>
            <p class="text-main f-roman leading-[135%] lg:leading-[120%] tracking-[-0.6px]">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
