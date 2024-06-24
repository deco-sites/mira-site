import { useSignal } from "@preact/signals";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  label?: string;
  photo?: ImageWidget;
  youtubeUrl?: string;
}

export default function Card(props: Props) {
  const {
    label,
    photo,
    youtubeUrl,
  } = props;

  const isExpanded = useSignal(false);

  const handleMouseEnter = () => {
    if (globalThis.innerWidth >= 1024) { // Check if it's desktop
      isExpanded.value = true;
    }
  };

  const handleMouseLeave = () => {
    if (globalThis.innerWidth >= 1024) { // Check if it's desktop
      isExpanded.value = false;
    }
  };

  const handleClick = () => {
    if (globalThis.innerWidth < 1024) { // Check if it's mobile
      isExpanded.value = !isExpanded.value;
    }
  };

  return (
    <div
      class={`relative hover:bg-white overflow-hidden transition-all duration-300 ${
        isExpanded.value ? "w-[800px]" : "w-[328px]"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {label && (
        <div className="text-[2.25rem] leading-[110%] tracking-[-1.08px] text-main font-merriweather">
          {label}
        </div>
      )}
      <div className="relative mt-2.5 overflow-hidden">
        {photo && (
          <Image
            src={photo}
            width={328}
            height={450}
            className="object-cover aspect-[328/450] w-full h-full"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            preload
          />
        )}
        {youtubeUrl && isExpanded.value && (
          <iframe
            className="absolute bottom-0 left-0 w-full h-40"
            src={`${youtubeUrl}?autoplay=1`}
            title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe>
        )}
      </div>
    </div>
  );
}
