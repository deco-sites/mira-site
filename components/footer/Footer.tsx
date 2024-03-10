import Divider from "$store/components/footer/Divider.tsx";
import Logo from "$store/components/footer/Logo.tsx";
import type { Props as LogoProps } from "$store/components/footer/Logo.tsx";
import CopyButton from "$store/islands/CopyButton.tsx";

export interface Props {
  logo?: LogoProps;
  contactButton?: string;
}

function Footer({
  logo,
  contactButton = "CONTATO@MIRA.LC",
}: Props) {
  return (
    <footer class="w-full flex flex-col bg-black dark:bg-b-300">
      <div class="flex flex-col w-full px-6 py-10 lg:px-16 lg:py-24 lg:mx-auto gap-6 lg:gap-[80px]">
        <div class="flex flex-col lg:flex-row lg:justify-between self-stretch items-start lg:items-end gap-6 lg:gap-0">
          <div class="text-b-200 dark:text-black font-extrabold leading-[90%] lg:leading-[100px] uppercase text-[48px] lg:text-[100px]">
            Linguagem cria <br />
            <span class="text-main dark:text-sub">realidade</span>.
          </div>
          <CopyButton contactButton={contactButton} />
        </div>
        <div class="flex flex-col gap-8">
          <Divider />
          <Logo {...logo} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
