import type { Props } from "$store/components/footer/Footer.tsx";
import { useSignal } from "@preact/signals";

export default function CopyButton({contactButton = "CONTATO@MIRACOMPANY.CO"}: Props) {

  const clicked = useSignal(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      clicked.value = true
    } catch (err) {
      console.log('Falha ao copiar o texto', err);
    }
  };

  return (
    <>
    <button
      onClick={() => copyToClipboard(contactButton as string)}
      class="btn text-black h-auto border-0 flex rounded-[36px] px-3 lg:px-6 py-2 lg:py-4 items-center font-normal text-[13px] leading-[150%] lg:text-base bg-primary dark:bg-secondary uppercase"
    >
      {!clicked.value ? contactButton : 'Email copiado!'}
    </button>
    </>
  );
}
