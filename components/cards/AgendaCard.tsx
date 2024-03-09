import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

/** @titleBy url */
export interface CardInfo {
  image?: ImageWidget;
  alt?: string;
  url?: string;
  description?: string;
  alignment?: "center" | "left";
}

export default function AgendaCard(
  { url, description, alignment, image, alt }: CardInfo,
) {
  return (
    <a
      href={url}
      class={`group flex flex-col w-[calc(100vw/1.2-48px)] lg:w-[calc((100vw/2.5)-128px)] lg:max-w-[500px] items-center text-b-200 dark:text-black ${
        alignment === "center" ? "text-center" : "text-left"
      }`}
    >
      <Image
        width={616}
        class="w-full p-4 object-fit z-10 rounded-[8px]"
        sizes="(max-width: 640px) 100vw, 30vw"
        src={image ?? ""}
        alt={alt}
        decoding="async"
        loading="lazy"
      />
      <div class="w-full flex items-center justify-between py-2 px-[18px] lg:px-8 lg:py-4 rounded-b-[24px] group-hover:bg-main dark:group-hover:bg-sub border-t-[0.5px] border-b-200 dark:border-black">
        {description && (
          <div class="flex items-center gap-1 lg:gap-2 text-[10px] lg:text-[16px] leading-[150%] tracking-[-0.16px] uppercase group-hover:text-black">
            {description}
            <Icon
              width={24}
              height={24}
              id="ArrowUpRight"
              class="hidden lg:flex fill-b-200 group-hover:fill-black dark:fill-black"
            />
            <Icon
              width={12}
              height={12}
              id="ArrowUpRight"
              class="flex lg:hidden fill-b-200 group-hover:fill-black dark:fill-black"
            />
          </div>
        )}
        {url && (
          <div class="text-[10px] lg:text-[16px] leading-[150%] tracking-[-0.16px] group-hover:text-black">
            {url}
          </div>
        )}
      </div>
    </a>
  );
}
