import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  label?: string;
  photo?: ImageWidget;
  youtubeUrl?: string;
}

export default function Card(
  { label, photo, youtubeUrl, index }: Omit<Props, "index"> & {
    label?: string;
    photo?: ImageWidget;
    youtubeUrl?: string;
    index: number;
  },
) {
  return (
    <div class="relative overflow-hidden group-has-[:checked]:transition-transform ease-in-out duration-500 card group/item h-full flex-auto group-has-[:checked]:flex-1 w-[calc(100vw-48px)] md:w-full md:group-has-[:checked]:w-[55vw] lg:group-has-[:checked]:max-w-[1002px] motion-reduce:transition-none">
      {label && (
        <div class="text-2xl md:text-[2.25rem] leading-[135%] md:leading-[110%] md:tracking-[-1.08px] text-main f-roman italic">
          {label}
        </div>
      )}
      <div class="relative mt-2.5 overflow-hidden h-full rounded-3xl">
        {photo && (
          <Image
            src={photo}
            width={328}
            height={450}
            class={`group/img object-cover bg-center aspect-[327/180] md:aspect-[328/450] w-[100vw] lg::w-full h-full group-has-[:checked]:opacity-0 transition-all ease-in-out duration-100`}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            preload
          />
        )}
        {youtubeUrl && (
          <iframe
            class="absolute bottom-0 left-0 w-full h-full opacity-0 group-has-[:checked]:opacity-100 transition-all ease-in-out duration-700"
            src={youtubeUrl}
            title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe>
        )}
        <div class="absolute flex items-center justify-center p-4 bg-main rounded-full lg:top-8 lg:left-8 bottom-8 right-8 lg:max-w-[57.6px] lg:max-h-[57.6px] lg:p-[14.4px] group-has-[:checked]:hidden">
          <Icon id="ExternalLink" class="text-black" size={24} />
        </div>
      </div>
      <style jsx>
        {`
        .group .group/item  {
          transition: all;
        }
        .peer-checked .group/item iframe {
          opacity: 1;
        }
      `}
      </style>
    </div>
  );
}
