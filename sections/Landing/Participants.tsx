import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Post {
  title: string;
  author: string;
  excerpt: string;
  image: ImageWidget;
  date: string;
  readingTime?: string;
  linkedin?: string;
}

export interface Props {
  /** @format rich-text */
  title?: string;
  description?: string;
  posts?: Post[];
}

const DEFAULT_IMAGE =
  "https://decoims.com/mira-site/b780f010-3221-43fc-9b2f-0c83eb16da1a/cb5f7d2d6113adbe.png";

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
      date: "01 Apr 2024",
      readingTime: "10 min",
      linkedin: "",
    },
    {
      title: "Title of blogpost #2",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      linkedin: "",
    },
    {
      title: "Title of blogpost #3",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      linkedin: "",
    },
    {
      title: "Title of blogpost #3",
      author: "Name of the author",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      linkedin: "",
    },
  ],
}: Props) {
  return (
    <div class="container max-w-6xl mx-auto text-sm py-14 lg:py-28 px-4">
      <div class="space-y-16">
        <div class="flex flex-row gap-4 justify-between">
          <div class="flex flex-col items-center space-y-6 w-full">
            <h2
              class="text-b-200 dark:text-black text-center text-[28px] lg:text-5xl leading-snug"
              dangerouslySetInnerHTML={{
                __html: title ?? "",
              }}
            />
            <p class="text-b-200 dark:text-black text-[16px] lg:text-lg">
              {description}
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          {posts?.map((post) => (
            <a
              href={post.linkedin}
              class="overflow-hidden flex flex-col items-center"
            >
              <Image
                width={240}
                class="w-1/2 lg:w-2/5 aspect-square object-fit z-10 rounded-full"
                sizes="(max-width: 240px) 100vw, 30vw"
                src={post.image}
                alt={post.image}
                decoding="async"
                loading="lazy"
              />
              <div class="p-4 lg:p-6 text-b-200 dark:text-black gap-4 flex flex-col items-center text-center">
                <div class="space-y-2 flex flex-col">
                  <h3 class="text-[14px] lg:text-2xl">{post.title}</h3>
                  <div class="text-[10px] lg:text-[14px] font-semibold">
                    {post.readingTime}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
