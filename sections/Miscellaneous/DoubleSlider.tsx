import { ImageWidget } from "apps/admin/widgets.ts";

export interface SlideProps {
  repeat?: number;
  srcDark?: ImageWidget;
  srcLight?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Props {
  title?: string;
  content?: SlideProps[];
}

export default function Slide({ title = "Organização", content }: Props) {
  const renderSlideContent = (
    { srcDark, srcLight, width, height, alt, repeat = 1 }: SlideProps,
    isDark: boolean,
  ) => (
    <div className="flex flex-col justify-center items-center gap-x-10 mx-4 text-base-content">
      {Array(repeat).fill(0).map((_, index) => (
        <div
          key={index}
          className="flex justify-center items-center gap-1 min-w-[142.86px] lg:min-w-[200px] min-h-[40px] lg:min-h-[58px] overflow-hidden"
        >
          <img
            className="w-[96px] lg:w-[134px] h-auto block"
            src={isDark ? srcDark || "" : srcLight || ""}
            loading="lazy"
            alt={alt || ""}
            width={width || 40}
            height={height || 20}
          />
        </div>
      ))}
      {Array(repeat).fill(0).map((_, index) => (
        <div
          key={index}
          className="flex justify-center items-center gap-1 min-w-[142.86px] lg:min-w-[200px] min-h-[40px] lg:min-h-[58px] overflow-hidden"
        >
          <img
            className="w-[96px] lg:w-[134px] h-auto block"
            src={isDark ? srcDark || "" : srcLight || ""}
            loading="lazy"
            alt={alt || ""}
            width={width || 40}
            height={height || 20}
          />
        </div>
      ))}
    </div>
  );

  const slideContentDark = content?.map((slideContent) =>
    renderSlideContent(slideContent, true)
  );

  const slideContentLight = content?.map((slideContent) =>
    renderSlideContent(slideContent, false)
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h4 class="text-b-200 dark:text-black mb-8">{title}</h4>
      <div class="relative w-full overflow-hidden h-11">
        <div class="animate-[sliding_60s_linear_infinite] absolute top-0 left-0 flex dark:hidden flex-nowrap h-11">
          {Array(30).fill(0).map(() => slideContentDark)}
        </div>
        <div class="animate-[sliding_60s_linear_infinite] absolute top-0 left-0 hidden dark:flex flex-nowrap h-11">
          {Array(30).fill(0).map(() => slideContentLight)}
        </div>
      </div>
    </div>
  );
}
