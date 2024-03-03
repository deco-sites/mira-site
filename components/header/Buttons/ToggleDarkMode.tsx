import Icon from "$store/components/ui/Icon.tsx";

export default function ToggleDarkMode() {
  return (
    <label class="swap swap-rotate text-black font-light bg-primary dark:bg-secondary border-none rounded-full w-9 h-9 md:w-11 md:h-11 lg:w-14 lg:h-14">
      <input type="checkbox" data-toggle-darkmode />
      <Icon
        id="Sun"
        class="swap-off fill-current w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
        strokeWidth={0.01}
      />
      <Icon
        id="Moon"
        class="swap-on fill-current w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
        strokeWidth={0.01}
      />
    </label>
  );
}
