import { useMemo } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Image {
  image: ImageWidget;
  altText: string;
}

export interface Props {
  title?: string;

  rowImages?: ColumnImages[];
}

export interface ColumnImages {
  colImages: Image[];
}

const IMAGES = [
  {
    altText: "deco",
    image:
      "https://decoims.com/mira-site/98a1eab7-86eb-4301-903f-a18ab562f654/fe7cd8ba-c954-45d6-9282-ee7d8ca8e3c7.jpg",
  },
  {
    altText: "deco",
    image:
      "https://decoims.com/mira-site/60b57103-c6ab-47ae-86d5-69d4f1ce4634/637e8601-6b86-4979-aa97-68013a2a60fd.jpg",
  },
];

function Partners(props: Props) {
  const {
    title,
    rowImages,
  } = props;
  const list = useMemo(
    () =>
      rowImages && rowImages.length > 0
        ? rowImages
        : [{ colImages: Array(20).fill(null).map((_, i) => IMAGES[i % 2]) }],
    [],
  );

  return (
    <div class="w-full pb-16">
      <div class="flex flex-col gap-10 lg:gap-16">
        {title && <p class="text-[18px] font-bold text-center">{title}</p>}

        <div class="w-full text-center items-center relative">
          <div class="overflow-hidden pt-2 px-1">
            {list.map(({ colImages }, index) => (
              <div
                class={`flex flex-row flex-nowrap w-full animate-walk text-white ${
                  index > 0 && index < list.length - 1 ? "py-6" : "py-2"
                } items-center gap-24`}
                style={`animation-delay: ${300 * index}ms`}
              >
                {colImages.map((item: Image) => (
                  <img
                    key={index}
                    src={item.image}
                    alt={item.altText || ""}
                  />
                ))}
              </div>
            ))}
          </div>
          <div class="gradient-right" />
          <div class="gradient-left" />
        </div>
      </div>
    </div>
  );
}

export default Partners;
