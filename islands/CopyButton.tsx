import type { Props } from "$store/components/footer/Footer.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useSignal } from "@preact/signals";

export interface CopyButtonProps extends Partial<Props> {
  contactButton?: string;
  customClass?: string;
  iconSize?: number;
  emailToCopy?: string;
}

export default function CopyButton({
  contactButton = "contato@miracompany.co",
  customClass,
  iconSize = 20,
  emailToCopy,
}: CopyButtonProps) {
  const clicked = useSignal(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      clicked.value = true;
      setTimeout(() => {
        clicked.value = false;
      }, 2000);
    } catch (err) {
      console.log("Falha ao copiar o texto", err);
    }
  };

  const defaultClass =
    "text-black h-auto border-0 flex tracking-[-0.13px] lg:tracking-[-0.16px] gap-2 rounded-[36px] px-3 lg:px-6 py-2 lg:py-4 items-center font-normal text-[13px] leading-[150%] lg:text-base bg-main dark:bg-sub uppercase";

  // If emailToCopy is provided, use it. Otherwise, use contactButton (for backward compatibility)
  const textToCopy = emailToCopy || contactButton;

  return (
    <>
      <button
        type="button"
        onClick={() => copyToClipboard(textToCopy)}
        class={customClass || defaultClass}
      >
        {!clicked.value ? contactButton : "Email copiado!"}{" "}
        <Icon id="ExternalLink" size={iconSize} strokeWidth={0.01} />
      </button>
    </>
  );
}
