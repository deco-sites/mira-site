import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Post {
  title: string;
  author: string;
  excerpt: string;
  image: ImageWidget;
  // date: string;
  position?: string;
  linkedin?: string;
  // tags: string[];
}

export interface Props {
  /** @format html */
  title?: string;
  description?: string;
  posts?: Post[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function BlogPosts({
  title = "Here's a component for you to showcase your blogposts",
  description = "This subheading is fully editable, remember?",
  posts = [
    {
      title: "Title of blogpost #1",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      position: "Ceo at Company LTDA",
      linkedin: "",
    },
    {
      title: "Title of blogpost #2",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      position: "Ceo at Company LTDA",
      linkedin: "",
    },
    {
      title: "Title of blogpost #3",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      position: "Ceo at Company LTDA",
      linkedin: "",
    },
  ],
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div class="space-y-16">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
          <div class="flex flex-col items-center space-y-6 w-full">
            <h2
              class="text-b-200 dark:text-black text-4xl leading-snug"
              dangerouslySetInnerHTML={{
                __html: title ?? "",
              }}
            />
            <p class="text-b-200 dark:text-black text-lg">
              {description}
            </p>
          </div>
        </div>
        <div class="flex justify-center gap-8">
          {posts?.map((post) => (
            <a href={post.linkedin} class="overflow-hidden max-w-[204.8px]">
              <Image
                width={640}
                class="w-full object-fit z-10 aspect-square"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={post.image}
                alt={post.image}
                decoding="async"
                loading="lazy"
              />
              <div class="p-6 text-b-200 dark:text-black gap-4 flex flex-col items-center text-center">
                <div class="space-y-2 flex flex-col">
                  <h3 class="text-2xl">{post.title}</h3>
                  <div class="font-semibold">{post.position}</div>
                  <p class="text-base">{post.excerpt}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
