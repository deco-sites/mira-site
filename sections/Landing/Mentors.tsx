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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <a href={post.linkedin} class="overflow-hidden">
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
                <div class="flex flex-wrap gap-2">
                  <div class="text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="fill-main dark:fill-sub"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 3.43994H19C20.1046 3.43994 21 4.33537 21 5.43994V19.4399C21 20.5445 20.1046 21.4399 19 21.4399H5C3.89543 21.4399 3 20.5445 3 19.4399V5.43994C3 4.33537 3.89543 3.43994 5 3.43994ZM8 18.4399C8.27614 18.4399 8.5 18.216 8.5 17.9399V10.9399C8.5 10.6638 8.27614 10.4399 8 10.4399H6.5C6.22386 10.4399 6 10.6638 6 10.9399V17.9399C6 18.216 6.22386 18.4399 6.5 18.4399H8ZM7.25 9.43994C6.42157 9.43994 5.75 8.76837 5.75 7.93994C5.75 7.11151 6.42157 6.43994 7.25 6.43994C8.07843 6.43994 8.75 7.11151 8.75 7.93994C8.75 8.76837 8.07843 9.43994 7.25 9.43994ZM17.5 18.4399C17.7761 18.4399 18 18.216 18 17.9399V13.3399C18.0325 11.7507 16.8576 10.3945 15.28 10.1999C14.177 10.0992 13.1083 10.6143 12.5 11.5399V10.9399C12.5 10.6638 12.2761 10.4399 12 10.4399H10.5C10.2239 10.4399 10 10.6638 10 10.9399V17.9399C10 18.216 10.2239 18.4399 10.5 18.4399H12C12.2761 18.4399 12.5 18.216 12.5 17.9399V14.1899C12.5 13.3615 13.1716 12.6899 14 12.6899C14.8284 12.6899 15.5 13.3615 15.5 14.1899V17.9399C15.5 18.216 15.7239 18.4399 16 18.4399H17.5Z"
                        fill="current"
                      />
                    </svg>
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
