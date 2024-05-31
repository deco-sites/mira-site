import CopyButton from "$store/islands/CopyButton.tsx";

export interface Subscribe {
  title: string;
  description: string;
}

export interface Props {
  subscribe?: Subscribe;
  contactButton?: string;
  _true: boolean;
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
      class="container mx-auto max-w-6xl px-0 p-16 text-sm zoom"
    >
      <div class="flex flex-col gap-20 items-center">
        <div class="flex gap-20 justify-between items-center flex-row-reverse">
          <div class="flex flex-col items-center gap-6 text-b-200 dark:text-black">
            <div class="flex flex-row items-center gap-6">
              <h4 class="font-semibold text-4xl">{subscribe?.title}</h4>
              <CopyButton contactButton={contactButton} />
            </div>
            <p class="font-normal">{subscribe.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
