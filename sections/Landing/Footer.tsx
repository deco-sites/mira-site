export interface Subscribe {
  title: string;
  description: string;
  buttonLabel?: string;
}

export interface Props {
  subscribe?: Subscribe;
}

export default function Footer({
  subscribe = {
    title: "Subcribe",
    description:
      "Join our newsletter to stay up to date on features and releases.",
  },
}: Props) {
  return (
    <div class="lg:container mx-auto md:max-w-6xl px-4 lg:px-0 p-16 text-sm">
      <div class="flex flex-col gap-20 items-center">
        <div class="flex flex-col gap-10 lg:gap-20 justify-between items-center lg:flex-row-reverse">
          <div class="flex flex-col gap-6 text-b-200 dark:text-black">
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
                  {subscribe?.buttonLabel ?? "Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
