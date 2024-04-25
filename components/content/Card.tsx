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
    <div class="p-6 lg:p-8 text-b-200 rounded-[24px_24px_0_24px]">
      <div class="flex flex-col h-full gap-6 items-start font-merriweather justify-between dark:text-black">
        <p class="text-[0.8125rem] lg:text-[15px] min-[1650px]:text-[16px] leading-[150%]">
          {text}
        </p>
        <div class="flex justify-between w-full items-center">
          <div class="flex flex-col leading-[150%]">
            <p class="text-[0.88rem] font-bold">
              {name}
            </p>
            <p class="text-xs">
              {role}
            </p>
          </div>
          <div class="max-w-[104px] max-h-[52px] p-2 flex justify-center items-center text-white dark:text-black">
            <Icon
              id={logo || "miraLC"}
              class="flex fill-white dark:fill-black max-h-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
