import type { Props } from "$store/components/footer/Footer.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useSignal } from "@preact/signals";

export default function CopyButton(
  { contactButton = "CONTATO@MIRACOMPANY.CO" }: Props,
) {
  const clicked = useSignal(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      clicked.value = true;
    } catch (err) {
      console.log("Falha ao copiar o texto", err);
    }
  };

  return (
    <>
      <button
        onClick={() => copyToClipboard(contactButton as string)}
        class="text-black h-auto border-0 flex tracking-[-0.13px] lg:tracking-[-0.16px] gap-2 rounded-[36px] px-3 lg:px-6 py-2 lg:py-4 items-center font-normal text-[13px] leading-[150%] lg:text-base bg-primary dark:bg-secondary uppercase"
      >
        {!clicked.value ? contactButton : "Email copiado!"}{" "}
        <Icon id="ExternalLink" size={20} strokeWidth={0.01} />
      </button>
    </>
  );
}
