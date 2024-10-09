import Divider from "$store/components/footer/Divider.tsx";
import Logo from "$store/components/footer/Logo.tsx";
import type { Props as LogoProps } from "$store/components/footer/Logo.tsx";
import CopyButton from "$store/islands/CopyButton.tsx";
import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  title?: HTMLWidget;
  logo?: LogoProps;
  contactButton?: string;
}

const DEFAULT_TEXT =
  'Linguagem cria <br /><span class="text-main dark:text-sub">realidade</span>.';

function Footer({
  title = DEFAULT_TEXT,
  logo,
  contactButton
}: Props) {
  return (
    <footer id="contato" class="w-full flex flex-col bg-black dark:bg-b-300">
      <div class="flex flex-col w-full px-6 py-16 md:px-8 lg:px-16 md:py-20 lg:py-[104px] lg:mx-auto gap-6 lg:gap-[80px]">
        <div class="flex flex-col lg:flex-row lg:justify-between self-stretch items-start lg:items-end gap-6 lg:gap-0">
          {title.length == 0 && (
          <div class="text-b-200 dark:text-black font-extrabold leading-[90%] lg:leading-[100px] uppercase max-[320px]:text-[36px] text-[48px] lg:text-[100px]"
          dangerouslySetInnerHTML={{ __html: title }}
          />
          )}
          {contactButton && (
          <CopyButton contactButton={contactButton} />
          )}
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
