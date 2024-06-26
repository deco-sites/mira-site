import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  style?: "Outline" | "Painted";
}

export interface Props {
  /** @format rich-text */
  title?: string;
  /** @format rich-text */
  description?: string;
  tagline?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
}

const PLACEMENT = {
  left: "flex-col md:flex-row-reverse",
  right: "flex-col md:flex-row",
};

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function ImageWithParagraph({
  title = "Here's an intermediate size heading you can edit",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm">
      <div class="flex flex-col items-center gap-4 justify-center h-[calc(95vh-95px)] lg:h-auto lg:my-48">
        <div class="flex flex-col items-center gap-6 lg:gap-12 z-10">
          <div
            class="mx-2 lg:mx-0 inline-block text-[36px] lg:text-[104px] text-center leading-[110%] lg:leading-[100%] lg:tracking-[-3.12px] font-medium text-white max-w-lg lg:max-w-none"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          >
          </div>
          {description && (
            <div
              class="mx-11 inline-block text-[14px] lg:text-[26px] text-center leading-[150%] text-gray-400 max-w-none"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            >
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
