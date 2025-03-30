import { AppContext } from "$store/apps/site.ts";

export interface Props {
  video: string;
}

export default function VideoOnly(
  {
    video =
      "https://drive.google.com/file/d/1wrvHfqvXQBM-0T4E1LhN0sFYmP-4fGl0/preview",
  }: ReturnType<typeof loader>,
) {
  return (
    <section class="w-full bg-black dark:bg-b-300">
      <div class="flex flex-col lg:max-w-[1228px] min-[1650px]:max-w-[1440px] text-b-200 py-16 md:py-20 lg:py-[104px] px-6 md:px-8 lg:px-16 mx-auto gap-10 md:gap-16 lg:gap-20 min-[1024px]:scale-90 min-[1650px]:scale-100">
        <div class="flex w-full justify-center">
          <iframe
            class="w-full lg:w-4/5 aspect-video rounded-xl border border-b-200 dark:border-0 p-0.5"
            src={video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          >
          </iframe>
        </div>
      </div>
    </section>
  );
}

export function loader(props: Props, _req: Request, ctx: AppContext) {
  return {
    ...props,
  };
}
