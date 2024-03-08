export default function ThemeController() {
  return (
    <label class="cursor-pointer grid place-items-center">
      <input
        type="checkbox"
        class="toggle theme-controller [--tglbg:black] checked:[--tglbg:#FFF8E6]  row-start-1 col-start-1 col-span-2 text-main dark:text-sub "
        data-toggle-darkmode
      />
    </label>
  );
}
