import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

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
    <div class="relative overflow-hidden group-has-[:checked]:transition-transform ease-in-out duration-500 card group/item h-full flex-auto group-has-[:checked]:flex-1 w-full group-has-[:checked]:w-[800px] motion-reduce:transition-none">
      {label && (
        <div class="text-[2.25rem] leading-[110%] tracking-[-1.08px] text-main font-merriweather italic">
          {label}
        </div>
      )}
      <div class="relative mt-2.5 overflow-hidden h-full rounded-3xl">
        {photo && (
          <Image
            src={photo}
            width={328}
            height={450}
            class={`group/img object-cover aspect-[328/450] w-full h-full group-has-[:checked]:opacity-0 transition-all ease-in-out duration-100`}
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