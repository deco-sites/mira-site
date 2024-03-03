import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface SlideProps {
  repeat?: number;
  srcDark?: ImageWidget;
  srcLight?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Props {
  content?: SlideProps[];
}

export default function Slide({ content }: Props) {
  const slideContent = content?.map(
    ({ srcDark, srcLight, width, height, alt, repeat = 1 }) => {
      return (
        <div class="flex items-center gap-x-10 mx-4">
          {Array(repeat).fill(0).map(() => (
            <>
              <Image
                class="inline dark:hidden"
                src={srcDark || ""}
                alt={alt || ""}
                width={width || 40}
                height={height || 20}
              />
              <Image
                class="hidden dark:inline"
                src={srcLight || ""}
                alt={alt || ""}
                width={width || 40}
                height={height || 20}
              />
            </>
          ))}
        </div>
      );
    },
  );
  return (
    <div class="relative w-full overflow-hidden h-11">
      <div class="animate-sliding absolute top-0 left-0 flex flex-nowrap h-11">
        {slideContent}
      </div>
    </div>
  );
}
