import CopyButton from "$store/islands/CopyButton.tsx";

export interface Subscribe {
  title: string;
  description: string;
}

export interface Props {
  subscribe?: Subscribe;
  contactButton?: string;
}

export default function Footer({
  subscribe = {
    title: "Subcribe",
    description:
      "Join our newsletter to stay up to date on features and releases.",
  },
  contactButton,
}: Props) {
  return (
    <div
      id="subscribe"
      class="lg:container mx-auto md:max-w-6xl px-4 lg:px-0 p-16 text-sm"
    >
      <div class="flex flex-col gap-20 items-center">
        <div class="flex flex-col gap-10 lg:gap-20 justify-between items-center lg:flex-row-reverse">
          <div class="flex flex-col items-center lg:flex-row gap-6 text-b-200 dark:text-black">
            <div class="flex flex-col gap-6">
              <h4 class="font-semibold text-4xl">{subscribe?.title}</h4>
              <p class="font-normal">{subscribe.description}</p>
            </div>
            <CopyButton contactButton={contactButton} />
          </div>
        </div>
      </div>
    </div>
  );
}
