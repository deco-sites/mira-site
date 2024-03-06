import Icon from "$store/components/ui/Icon.tsx";

export default function ToggleDarkMode() {
  return (
    <label class="swap swap-rotate text-black font-light bg-primary dark:bg-secondary border-none rounded-full w-8 h-8 lg:w-13 lg:h-13 hover:opacity-75 transition-opacity duration-300">
      <input type="checkbox" data-toggle-darkmode />
      <Icon
        id="Sun"
        class="swap-off fill-current w-4 h-4 lg:w-5 lg:h-5"
      />
      <Icon
        id="Moon"
        class="swap-on fill-current w-4 h-4 lg:w-5 lg:h-5"
      />
    </label>
  );
}
