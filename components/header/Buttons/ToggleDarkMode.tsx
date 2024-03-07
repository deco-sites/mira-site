import Icon from "$store/components/ui/Icon.tsx";

export default function ToggleDarkMode() {
  return (
    <label class="swap swap-rotate text-black font-light bg-primary dark:bg-secondary border-none rounded-full w-[34px] h-[34px]">
      <input type="checkbox" data-toggle-darkmode />
      <Icon
        id="Sun"
        class="swap-off fill-current w-5 h-5 md:w-6 md:h-6"
        strokeWidth={0.01}
      />
      <Icon
        id="Moon"
        class="swap-on fill-current w-5 h-5 md:w-6 md:h-6"
        strokeWidth={0.01}
      />
    </label>
  );
}
