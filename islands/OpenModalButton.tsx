import { useSignal } from "@preact/signals";
import Icon from "deco-sites/mira-site/components/ui/Icon.tsx";

interface OpenModalButtonProps {
    label: string;
    onOpen: () => void;
}

function OpenModalButton({ label, onOpen }: OpenModalButtonProps) {
    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        onOpen();
    };

    return (
        <button
            className="flex flex-nowrap px-8 py-2 items-center rounded-3xl border border-main text-main text-base gap-2 hover:opacity-75 transition-opacity duration-300 hover:cursor-pointer"
            onClick={handleClick}
        >
            <p className="text-nowrap">{label}</p>
            <Icon id="ExternalLink" class="text-main" size={20} strokeWidth={0.01} />
        </button>
    );
}

export default OpenModalButton;
