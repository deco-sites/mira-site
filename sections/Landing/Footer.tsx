import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Subscribe {
  title: string;
  description: string;
  /** @format rich-text */
  instructions: string;
}

export interface Social {
  network: "Facebook" | "Instagram" | "Linkedin" | "X - Twitter" | "Youtube";
  href: string;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  subscribe?: Subscribe;
}

export default function Footer({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  subscribe = {
    title: "Subcribe",
    description:
      "Join our newsletter to stay up to date on features and releases.",
    instructions:
      "By subscribing you agree to with our <a href='/' target='_blank' class='link'>Privacy Policy</a> and provide consent to receive updates from our company.",
  },
}: Props) {
  return (
    <div class="lg:container mx-auto md:max-w-6xl px-4 lg:px-0 p-16 text-sm">
      <div class="flex flex-col gap-20">
        <div class="flex flex-col gap-10 lg:gap-20 justify-between items-center lg:flex-row-reverse">
          <div class="w-1/2">
            <Image
              class="w-full"
              src={logo.src || ""}
              width={100}
              height={50}
              alt={logo.alt}
            />
          </div>
          <div class="lg:w-[50%] flex flex-col gap-6 text-b-200 dark:text-black">
            <h4 class="font-semibold text-4xl">{subscribe?.title}</h4>
            <form class="flex flex-col gap-6">
              <p class="font-normal">{subscribe.description}</p>
              <div class="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter your email"
                  class="w-full text-b-200 dark:text-black placeholder:text-b-200 placeholder:dark:text-black input input-bordered dark:bg-transparent input-primary dark:input-secondary"
                />
                <button
                  type="submit"
                  class="btn btn-primary dark:btn-secondary font-normal"
                  aria-label="Subscribe"
                >
                  Subscribe
                </button>
              </div>
              {/* <p
                class="text-xs"
                dangerouslySetInnerHTML={{ __html: subscribe.instructions }}
              >
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
