import Icon from "$store/components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  logo?: ImageWidget;
  logoDark?: ImageWidget;
  /** @format textarea */
  text?: string;
  name?: string;
  role?: string;
}

export default function Card(props: Props) {
  const {
    logo,
    logoDark,
    text,
    name,
    role,
  } = props;
  return (
    <div class="shadow-xl p-8 text-base-200 rounded-[24px_24px_0_24px]">
      <div class="flex flex-col h-full gap-6 items-start font-merriweather justify-between dark:text-black">
        <div class="flex flex-col gap-12">
          <h4 class="card-title">
            <Image
              width={50}
              class="w-[80px] object-fit dark:hidden"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={logo ?? ""}
              alt={role}
              decoding="async"
              loading="lazy"
            />
            <Image
              width={50}
              class="hidden w-[80px] object-fit dark:visible"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={logoDark ?? ""}
              alt={role}
              decoding="async"
              loading="lazy"
            />
          </h4>
          <p class="text-[18px] leading-[150%]">{text}</p>
        </div>
        <div class="flex flex-col justify-end">
          <p class="text-[16px] leading-[150%] font-bold">
            {name}
          </p>
          <p class="text-[16px] leading-[150%]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
