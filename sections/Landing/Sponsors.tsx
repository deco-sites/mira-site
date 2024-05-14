import Image from "apps/website/components/Image.tsx";
import { useMemo } from "preact/hooks";
import { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface Image {
  mobile?: ImageWidget;
  desktop?: ImageWidget;
  altText?: string;
  href: string;
}

export interface Props {
  /** @format html */
  title?: string;
  brands?: {
    title?: string;
    logos?: Image[];
  };
}

const IMAGES = [
  {
    altText: "deco",
    desktop:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
    active: false,
    href: "",
  },
  {
    altText: "deco",
    desktop:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
    active: false,
    href: "",
  },
];

function Sponsors(props: Props) {
  const {
    title,
    brands,
  } = props;
  const listBrands = useMemo(
    () =>
      brands?.logos && brands?.logos.length > 0
        ? brands?.logos
        : Array(20).fill(null).map((_, i) => IMAGES[i % 2]) as Image[],
    [],
  );

  function Logo(element: Image) {
    return (
      <div
        class="flex items-center justify-center w-[109px] sm:w-[138px] sl:w-[124px] rounded-[20px] md:w-auto 2xl:w-[16%] backdrop-filter backdrop-blur-22 relative"
        style={{ "borderRadius": "16px" }}
      >
        <div class="w-full h-full z-60 relative flex items-center justify-center px-[18px] py-2.5 lg:px-[35px] lg:py-[10px] gap-6">
          <h4 class="text-b-200 dark:text-black">{title}</h4>
          {element.mobile && (
            <Picture>
              <Source
                media="(max-width: 767px)"
                src={element.mobile}
                width={60}
                class=""
              />
              <Source
                media="(min-width: 768px)"
                src={element.desktop ? element.desktop : element.mobile}
                width={110}
              />
              <img
                class="object-contain md:w-[90px] lg:w-[110px]"
                src={element.mobile}
              />
            </Picture>
          )}
        </div>
      </div>
    );
  }

  return (
    <div class="bg-black">
      <div class="container py-8 flex flex-col gap-8 lg:gap-12 lg:py-[52px] lg:pb-20 lg:px-16">
        <div class="flex flex-col gap-12 items-center">
          <div
            class="text-white font-medium text-[16px] lg:text-[24px] leading-[100%] tracking-[-0.48px]"
            dangerouslySetInnerHTML={{
              __html: brands?.title ?? "",
            }}
          />
          <div class="flex flex-wrap justify-center gap-2 md:gap-4">
            {listBrands.map((element) => (
              <Logo key={element.href} {...element} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
