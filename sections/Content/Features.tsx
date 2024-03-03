import { ImageWidget } from "apps/admin/widgets.ts";
import SlideBanner, {
  Props as SlideBannerProps,
} from "deco-sites/mira-site/sections/Miscellaneous/Slide.tsx";


export interface Props {
  /** @format html */
  title?: string;
  
  widget1?: ImageWidget
  widget2?: ImageWidget

  /** @format html */
  description?: string;

  slideBanner: SlideBannerProps
}
 
export default function Features(
  { title,widget1, widget2, description, slideBanner }: Props,
) {
  return (
    <section class="relative bg-white text-black max-w-screen">
      <div class="mx-6 lg:container lg:mx-auto flex justify-center items-center flex-col py-20 gap-20">
        {title && (
          <h2 class="font-medium text-[36px] lg:text-[72px] leading-[100%] text-center max-w-4xl z-10">
            {title}˜
          </h2>
        )}
    
      </div>
      <SlideBanner {...slideBanner} />
    </section>
  );
}
