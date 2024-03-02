import Icon from "$store/components/ui/Icon.tsx";

export default function ToggleDarkMode() {
  return (
    <label class="swap swap-rotate bg-[#FF8352] dark:bg-[#F5BF62] dark:border p-2 rounded-full">
      <input type="checkbox" data-toggle-darkmode />
      <Icon
        id="Moon"
        class="swap-off fill-current w-8 h-8"
        strokeWidth={0.01}
      />
      <Icon id="Sun" class="swap-on fill-current w-8 h-8" strokeWidth={0.01} />
    </label>
  );
}
