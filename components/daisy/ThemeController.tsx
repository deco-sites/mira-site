import Icon from "$store/components/ui/Icon.tsx";

export default function ThemeController() {
  return (
    <label class="cursor-pointer grid place-items-center dark:text-base-300 ">
      <input
        type="checkbox"
        // TODO: base-300 não funciona no --tglbg:
        class="toggle theme-controller checked:[--tglbg:#FFF8E6]  row-start-1 col-start-1 col-span-2 text-primary dark:text-secondary "
        data-toggle-darkmode
      />

      <Icon
        id="Sun"
        class="col-start-1 row-start-1 dark:fill-base-300"
        size={14}
      />

      <Icon
        id="Moon"
        class="col-start-2 row-start-1"
        size={14}
      />
    </label>
  );
}
