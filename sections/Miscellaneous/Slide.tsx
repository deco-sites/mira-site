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
  const slideContentDark = content?.map(
    ({ srcDark, width, height, alt, repeat = 1 }) => {
      return (
        <div class="flex justify-center items-center gap-x-10 mx-4 text-base-content">
          {Array(repeat).fill(0).map(() => (
            <>
              <div class="flex justify-center items-center gap-1 min-w-[142.86px] lg:min-w-[200px] min-h-[40px] lg:min-h-[58px] overflow-hidden">
                <Image
                  class="w-[96px] lg:w-[134px] h-auto block"
                  src={srcDark || ""}
                  alt={alt || ""}
                  width={width || 40}
                  height={height || 20}
                />
              </div>
            </>
          ))}
        </div>
      );
    },
  );

  const slideContentLight = content?.map(
    ({ srcLight, width, height, alt, repeat = 1 }) => {
      return (
        <div class="flex justify-center items-center gap-x-10 mx-4 text-base-content">
          {Array(repeat).fill(0).map(() => (
            <>
              <div class="flex justify-center items-center gap-1 min-w-[142.86px] lg:min-w-[200px] min-h-[40px] lg:min-h-[58px] overflow-hidden">
                <Image
                  class="w-[96px] lg:w-[134px] h-auto block"
                  src={srcLight || ""}
                  alt={alt || ""}
                  width={width || 40}
                  height={height || 20}
                />
              </div>
            </>
          ))}
        </div>
      );
    },
  );

  return (
    <div class="relative w-full overflow-hidden h-11">
      <div class="animate-[sliding_60s_linear_infinite] absolute top-0 left-0 flex dark:hidden flex-nowrap h-11">
        {Array(30).fill(0).map(() => slideContentDark)}
      </div>
      <div class="animate-[sliding_60s_linear_infinite] absolute top-0 left-0 hidden dark:flex flex-nowrap h-11">
        {Array(30).fill(0).map(() => slideContentLight)}
      </div>
    </div>
  );
}
