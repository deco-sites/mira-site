import Image from "apps/website/components/Image.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Props {
  logo?: AvailableIcons;
  /** @format textarea */
  text?: string;
  name?: string;
  role?: string;
}

export default function Card(props: Props) {
  const {
    logo,
    text,
    name,
    role,
  } = props;
  return (
    <div class="card card-side bg-base-100 shadow-xl p-8 text-base-200">
      <div class="card-body flex-col items-start font-merriweather justify-between">
        <div class="gap-12">
          <h4 class="card-title">{logo}</h4>
          <p class="text-[18px] leading-[150%]">{text}</p>
        </div>
        <div class="card-actions justify-end">
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
