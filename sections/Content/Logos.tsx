import Image from "apps/website/components/Image.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import { useMemo } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Image {
  image: ImageWidget;
  altText: string;
}

export interface Props {
  title?: string;
  description?: string;
  images?: Image[];
  layout?: {
    headerAlignment?: "center" | "left";
  };
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

function Logos(props: Props) {
  const {
    title,
    description,
    images,
    layout,
  } = props;
  const list = useMemo(
    () =>
      images && images.length > 0
        ? images
        : Array(20).fill(null).map((_, i) => IMAGES[i % 2]),
    [],
  );

  return (
    <div class="w-full container px-4 py-8 flex flex-col gap-8 lg:gap-12 lg:py-10 lg:px-0">
      <Header
        title={title}
        description={description}
        alignment={layout?.headerAlignment || "center"}
      />
      <div class="w-full text-center items-center">
        {list.map((element) => (
          <div class="w-36 lg:w-40 h-17 lg:h-20 px-4 lg:px-6 py-6 lg:py-4 inline-block align-middle">
            <div class="flex w-full h-full items-center justify-center">
              <Image
                width={300}
                height={300}
                src={element.image}
                alt={element.altText || ""}
                class="max-w-full max-h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logos;
