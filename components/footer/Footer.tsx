import Divider from "$store/components/footer/Divider.tsx";
import Logo from "$store/components/footer/Logo.tsx";
import type { Props as LogoProps } from "$store/components/footer/Logo.tsx";

export interface Props {
  logo?: LogoProps;
  contactButton?: string;
}

function Footer({
  logo,
  contactButton,
}: Props) {
  return (
    <footer class="w-full flex flex-col bg-black dark:bg-[#FFF8E6]">
      <div class="flex flex-col lg:container px-6 py-10 lg:px-16 lg:py-24 lg:mx-auto gap-6 lg:gap-[80px]">
        <div class="flex flex-col lg:flex-row lg:justify-between self-stretch items-start lg:items-end gap-6 lg:gap-0">
          <div class="text-base-200 dark:text-black font-extrabold leading-[90%] lg:leading-[100px] uppercase text-[48px] lg:text-[100px]">
              Linguagem cria <span class="text-primary dark:text-secondary"> realidade</span>.
          </div>
          <button class="btn h-auto border-0 flex rounded-[36px] px-3 lg:px-6 py-2 lg:py-4 items-center font-normal text-[13px] leading-[150%] lg:text-base bg-primary dark:bg-secondary uppercase">
            {contactButton ?? "CONTATO@MIRACOMPANY.CO"}
          </button>
        </div>
        <div class="flex flex-col gap-8">
          <Divider />
          <Logo {...logo}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
