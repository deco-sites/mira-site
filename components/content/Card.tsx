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
    <div class="p-6 lg:p-8 text-b-200 rounded-[24px_24px_0_24px]">
      <div class="flex flex-col h-full gap-6 items-start font-merriweather justify-between dark:text-black">
        <p class="text-[0.8125rem] lg:text-[15px] min-[1650px]:text-[16px] leading-[150%]">
          {text}
        </p>
        <div class="flex justify-between w-full items-center">
          <div class="flex flex-col">
            <p class="text-xs font-bold">
              {name}
            </p>
            <p class="text-xs">
              {role}
            </p>
          </div>
          <div class="max-w-[104px] max-h-[52px] p-2 flex justify-center items-center">
            <Image
              width={50}
              class="w-[80px] object-scale-down dark:hidden"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={logo ?? ""}
              alt={role}
              decoding="async"
              loading="lazy"
            />
            <Image
              width={50}
              class="hidden w-[80px] object-scale-down dark:flex"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={logoDark ?? ""}
              alt={role}
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
