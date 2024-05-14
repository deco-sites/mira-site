import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Post {
  /** @format html */
  title: string;
  /** @format html */
  excerpt: string;
  image: ImageWidget;
  date: string;
  readingTime?: string;
  tags: string[];
}

export interface Props {
  /** @format html */
  title?: string;
  posts?: Post[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function BlogPosts({
  title = "Agenda",
  posts = [
    {
      title: "Title of blogpost #1",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Title of blogpost #2",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
    {
      title: "Title of blogpost #3",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3"],
    },
  ],
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div class="space-y-16">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
          <div class="flex flex-col items-center space-y-4 w-full">
            <h2
              class="text-b-200 dark:text-black text-4xl leading-snug"
              dangerouslySetInnerHTML={{
                __html: title ?? "",
              }}
            />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <div class="overflow-hidden">
              <Image
                width={640}
                class="w-full object-fit z-10"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={post.image}
                alt={post.image}
                decoding="async"
                loading="lazy"
              />
              <div class="p-6 text-b-200 dark:text-black gap-4 flex flex-col items-center text-center">
                <div class="space-y-6 flex flex-col">
                  <h3 class="text-2xl"dangerouslySetInnerHTML={{
                __html: post.title ?? "",
              }}
            />
                  <p class="text-base" dangerouslySetInnerHTML={{
                __html: post.excerpt ?? "",
              }}
            />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
