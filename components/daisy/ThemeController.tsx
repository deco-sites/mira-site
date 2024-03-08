import Icon from "$store/components/ui/Icon.tsx";

export default function ThemeController() {
  return (
    <label class="cursor-pointer grid place-items-center dark:text-b-300 ">
      <input
        type="checkbox"
        // TODO: b-300 não funciona no --tglbg:
        class="toggle theme-controller checked:[--tglbg:#FFF8E6]  row-start-1 col-start-1 col-span-2 text-main dark:text-sub "
        data-toggle-darkmode
      />
    </label>
  );
}
